import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
    try {
        const post = await prisma.game_Tag.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        return NextResponse.json({ data: post }, { status: 200 });

    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}
