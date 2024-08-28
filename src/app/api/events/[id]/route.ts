import {NextRequest, NextResponse} from "next/server";
import prisma from "@/utils/db";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const {id} : {id: string} = params;

    try {
        const event = await prisma.event.findUnique({
            where: {
                id: parseInt(id),
            },
            include: {
                author: true,
                location: true
            },
        });
        return NextResponse.json({ event: event }, { status: 200 });
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}