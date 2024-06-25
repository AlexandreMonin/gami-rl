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
      return NextResponse.json({ data: posts }, { status: 200 });
    } catch (e) {
      return NextResponse.json({ error: e }, { status: 500 });  
    }
}