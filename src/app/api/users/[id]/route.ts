import prisma from "@/utils/db";
import {NextRequest, NextResponse} from "next/server";
import { User, Game_Tag } from ".prisma/client";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
    try {
        const user = await prisma.user.findUnique({
            where: { id: Number(id) },
            include: {
                game_user: true,
                platforms: true
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
        const { status, biography, gameIds } = await req.json();

        const user = await prisma.user.findUnique({
            where: { id: Number(id) },
            include: {
                game_user: {
                    include: {
                        game: true
                    }
                }
            }
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        console.log('user:' + user.id);
        const updatedUser = await prisma.user.update({
            where: { id: Number(id) },
            data: {
                status,
                biography,
                game_user: {
                    createMany: {
                        data: gameIds.map((gameId: number, index: number) => ({
                            gameId,
                            // userId: user.id,
                            order: index + 1
                        }))
                    }
                },
            },
            include: { game_user: true }
        });

        return NextResponse.json({ data: updatedUser }, { status: 200 });
    } catch (e) {
        console.error("Error updating user:", e);
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}


