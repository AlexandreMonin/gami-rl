import {NextRequest, NextResponse} from "next/server";
import prisma from "@/utils/db";
import {getToken} from "next-auth/jwt";

export async function POST(req: NextRequest) {
    const token = await getToken({req});

    if (!token) {
        console.log("Session not found");
        return NextResponse.json({ error: "Unauthorized" }, {status: 401});
    }
    const { username, eventId }: {username: string, eventId: number} = await req.json();

    try {
        const events = await prisma.event.update({
            where: {
                id: eventId
            },
            data: {
                users_interested: {
                    connect: {
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