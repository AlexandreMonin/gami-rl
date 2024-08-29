import prisma from "@/utils/db";
import {NextResponse, NextRequest} from "next/server";
import Event from "@/type/Event/Event";
import {getToken} from "next-auth/jwt";

export async function POST(req: NextRequest) {
    const event: Event = await req.json();
    const token = await getToken({req});

    if (!token) {
        console.log("Session not found");
        return NextResponse.json({ error: "Unauthorized" }, {status: 401});
    }

    console.log(event);
    try {
        const event_creation = await prisma.event.create({
            data: {
                name: event.name,
                start_date: event.start_date,
                end_date: event.end_date,
                location: {
                    create: {
                        city: event.location.city,
                        address: event.location.address,
                        country: event.location.country,
                        zip_code: event.location.zip_code,
                        latitude: event.location.latitude,
                        longitude: event.location.longitude,
                    }
                },
                author: {
                    connect: {
                        email: event.author?.email,
                    }
                },
                phoneNumber: event.phoneNumber,
                details: event.details,
                isPrivate: event.isPrivate,
            }
        })

        return NextResponse.json({event: event}, {status: 200});
    } catch (e: any) {
        console.error(e);

        return NextResponse.json({data: e}, {status: 500});
    }
}