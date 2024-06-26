import {NextRequest, NextResponse} from "next/server";
import prisma from "@/utils/db";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
    try {
        const user = await prisma.user.findUnique({
            where: { id: Number(id) },
            include: {
                game_user: true,
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
        const { status, biography, favoriteGames, platformIds } = await req.json();


        const user = await prisma.user.findUnique({
            where: { id: Number(id) },
            include: {
                game_user: {
                    include: {
                        game: true
                    }
                },
                platform_user: true,
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
                game_user: {
                    createMany: {
                        data: favoriteGames.map((gameId: number) => ({
                            gameId,
                        })),
                    },
                },
                platform_user: {
                    createMany: {
                        data: platformIds.map((platformId: number) => ({
                            platformId,
                        })),
                    },
                },
            },
            include: { game_user: true, platform_user: true },
        });


        return NextResponse.json({ data: updatedUser }, { status: 200 });
    } catch (e) {
        console.error("Error updating user:", e);
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}


