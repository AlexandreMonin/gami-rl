import {NextResponse} from "next/server";
import prisma from "@/utils/db";

export async function POST(req: Request) {
    const { username, eventId }: {username: string, eventId: number} = await req.json();

    try {
        const events = await prisma.event.update({
            where: {
                id: eventId
            },
            data: {
                users_interested: {
                    disconnect: {
                        username: username,
                    }
                }
            }
        });

        return NextResponse.json(events, {status: 201});
    } catch (e: any) {
        console.error(e);
        return NextResponse.json({error: e}, {status: 500});
    }
}