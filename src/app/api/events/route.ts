import {NextResponse} from "next/server";
import prisma from "@/utils/db";
import Event from "@/type/Event/Event";

export async function GET() {
    try {
        const events = await prisma.event.findMany({
            include: {
                location: true,
            }
        });

        return NextResponse.json({events: events}, {status: 200});
    } catch (e: any) {
        console.error(e);
        return NextResponse.json({error: e}, {status: 500});
    }
}