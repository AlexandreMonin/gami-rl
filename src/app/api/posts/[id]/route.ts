import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

/**
 * Fonction de récupération du détail d'un post avec ses réponses
 * @param param0 { id }
 * @returns post
 */
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: parseInt(id),
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
        return NextResponse.json({ data: post }, { status: 200 });

    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
    
}

/**
 * Fonction pour enregistrer une réponse à un post
 * @param req { NextRequest }
 * @returns response
 */
export async function POST(req: NextRequest) {
    try {
        const { postId, authorId, content, title } = await req.json();

        if (!postId || !authorId || !content || !title) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newResponse = await prisma.post.create({
            data: {
                title: title,
                content: content,
                author: {
                    connect: {
                        id: authorId
                    }
                },
                reply_of_post: {
                    connect: {
                        id: postId,
                    }
                },
                isPost: false
            }
        });

        return NextResponse.json({ data: newResponse }, { status: 201 });

    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}