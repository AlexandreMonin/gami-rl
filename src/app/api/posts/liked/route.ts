import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const {userId, postId, votedType}: {userId: number, postId: number, votedType : "up" | "down"} = await req.json();

  try {

    if(votedType === "down") {
      const post_connect = await prisma.post.update({
        where: {
          id: postId
        },
        data: {
          downVoteBy: {
            connect: {
              id: userId
            }
          },
          votes: {
            decrement: 1
          }
        }
      });
      return NextResponse.json(post_connect,{ status: 201 });
    } else if (votedType === "up") {
      const post_connect = await prisma.post.update({
        where: {
          id: postId
        },
        data: {
          upVoteBy: {
            connect: {
              id: userId
            }
          },
          votes: {
            increment: 1
          }
        }
      });
      return NextResponse.json(post_connect, { status: 201 });
    }
  } catch (e: any) {
    return NextResponse.json({data: e}, {status: 500 });
  }

}