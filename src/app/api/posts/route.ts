// pages/api/posts.ts
import prisma from "@/utils/db";
import { NextResponse } from "next/server";

/**
 * Fonction de récupération de l'ensemble des posts, de leurs réponses et de leur author
 * @returns posts
 */
export async function GET() {
    try {
      const posts = await prisma.post.findMany({
        where: {
          isPost: true,
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
      })
      return NextResponse.json(posts, { status: 200 });
    } catch (e) {
      return NextResponse.json({ error: e }, { status: 500 });  
    }
}

export async function POST(req: Request) {
  const post: {
    authorId: number,
    title: string,
    content: string,
    gameTag: string,
    platformTag: string
  } = await req.json();

  try {
    const create_post = await prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        author: {
          connect: {
            id: post.authorId,
          }
        },
        games: {
          connect: {
            id: parseInt(post.gameTag)
          }
        },
        platforms: {
          connect: {
            id: parseInt(post.platformTag)
          }
        },
        isPost: true
      }
    });

    return NextResponse.json({data: create_post, status: 201 });
  } catch (e: any) {
    return NextResponse.json({data: e, status: 500 });
  }

}