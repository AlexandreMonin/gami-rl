import prisma from "@/utils/db";
import {NextResponse} from "next/server";
import Event from "@/type/Event/Event";

export async function POST(req: Request) {
    const event: Event = await req.json();
    console.log(event);
    try {
        const event_creation = await prisma.event.create({
            data: {
                name: event.name,
                start_date: event.startDate,
                end_date: event.endDate,
                location: {
                    create: {
                        city: event.location.city,
                        address: event.location.address,
                        country: event.location.country,
                        zip_code: event.location.zipCode,
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