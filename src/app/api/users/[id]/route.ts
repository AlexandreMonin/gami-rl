import {NextRequest, NextResponse} from "next/server";
import prisma from "@/utils/db";
import game from "@/type/Game/Game";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
    try {
        const user = await prisma.user.findUnique({
            where: { id: Number(id) },
            include: {
                game_user: {
                    include: {
                        game: true,
                    },
                },
                UserPlatform: true
            }
        });
        if (user) {
            return NextResponse.json({data: user}, {status: 200});
        }
        else {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
    } catch(e) {
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}


export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;

    try {
        const { status, biography, favoriteGames, platformIds, isPublicProfile } = await req.json();

        // let profilePictureUrl = '';
        // const profilePictureFile = req.files?.profilePicture;

        // if (profilePictureFile) {
        //     const fileName = `${id}_profile_picture.${profilePictureFile.name.split('.').pop()}`;
        //     const path = join(process.cwd(), 'pictures', 'profile', `${id}`, fileName);
        //
        //     // Save the file to the specified path
        //     await new Promise((resolve, reject) => {
        //         const writeStream = createWriteStream(path);
        //         profilePictureFile.stream.pipe(writeStream);
        //         writeStream.on('finish', resolve);
        //         writeStream.on('error', reject);
        //     });
        //
        //     profilePictureUrl = `/pictures/profile/${id}/${fileName}`;
        // }


        const user = await prisma.user.findUnique({
            where: { id: Number(id) },
            include: {
                game_user: {
                    include: {
                        game: true
                    }
                },
                UserPlatform: true,
            },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }


        await prisma.game_User.deleteMany({
            where: { userId: Number(id) },
        });

        await prisma.user_Platform.deleteMany({
            where: { userId: Number(id) },
        });
        
        const updatedUser = await prisma.user.update({
            where: { id: Number(id) },
            data: {
                status,
                biography,
                isPublicProfile,
                // profilePictureUrl,
                game_user: {
                    createMany: {
                        data: favoriteGames.map((gameId: number, index: number) => ({
                            gameId,
                            // userId: user.id,
                            order: index + 1
                        }))
                    }
                },
                UserPlatform: {
                    createMany: {
                        data: platformIds.map((platformId: number) => ({
                            platformId,
                        })),
                    },
                },
            },
            include: { game_user: true, UserPlatform: true },
        });


        return NextResponse.json({ data: updatedUser }, { status: 200 });
    } catch (e) {
        console.error("Error updating user:", e);
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}


