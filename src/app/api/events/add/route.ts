import prisma from "@/utils/database";
import {NextResponse} from "next/server";
import Event from "@/type/Event/Event";

export async function POST(req: Request) {
    const event: Event = await req.json();
    console.log(event);
    try {
        // const event = await prisma.event.create({
        //     data: {
        //
        //     }
        // })

        return NextResponse.json({event: event}, {status: 200});
    } catch (e: any) {
        console.error(e);

        return NextResponse.json({data: e}, {status: 500});
    }
}