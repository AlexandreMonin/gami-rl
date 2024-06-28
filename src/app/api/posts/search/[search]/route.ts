import {NextRequest, NextResponse} from "next/server";
import prisma from "@/utils/db";

export async function GET(req: NextRequest, {params}: { params: { search: string } }) {
    const {search}: {search: string} = params;
    try {
        const post = await prisma.post.findMany({
            where: {
                OR: [
                    {
                        title: {
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
                        games: {
                            some: {
                                name: {
                                    contains: search,
                                    mode: 'insensitive'
                                }
                            }
                        }
                    },
                    {
                        platforms: {
                            some: {
                                name: {
                                    contains: search,
                                    mode: 'insensitive'
                                }
                            }
                        }
                    }
                ]
            },
            include: {
                author: true,
                games: true,
                platforms: true,
                replies: {
                    include: {
                        author: true
                    }
                }
            },

        });
        return NextResponse.json(post, {status: 200});
    } catch (e) {
        console.log(e);
        return NextResponse.json({error: e}, {status: 500});
    }

}