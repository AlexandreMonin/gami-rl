import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
      const tags = await prisma.game_Tag.findMany(
      )
      return NextResponse.json({ data: tags }, { status: 200 });
    } catch (e) {
      return NextResponse.json({ error: e }, { status: 500 });  
    }
}