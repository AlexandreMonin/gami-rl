import {NextRequest, NextResponse} from "next/server";
import prisma from "@/utils/db";

export async function GET(req: NextRequest, {params}: { params: { search: string } }) {
    const {search}: {search: string} = params;
    try {
        const events = await prisma.event.findMany({
            where: {
                isPrivate: false,
                OR: [
                    {
                        name: {
                            contains: search,
                            mode: 'insensitive'
                        },
                    },
                    {
                        author: {
                            username: {
                                contains: search,
                                mode: 'insensitive'
                            }
                        }
                    },
                    {
                        location: {
                            address: {
                                contains: search,
                                mode: 'insensitive'
                            },
                            country: {
                                contains: search,
                                mode: 'insensitive'
                            },
                            city: {
                                contains: search,
                                mode: 'insensitive'
                            },
                        }
                    }
                ]
            },
            include: {
                author: true,
                location: true
            },

        });

        return NextResponse.json(events, {status: 200});
    } catch (e) {
        console.log(e);
        return NextResponse.json({error: e}, {status: 500});
    }

}