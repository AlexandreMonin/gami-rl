import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
      const posts = await prisma.platform_Tag.findMany(
      )
      return NextResponse.json({ data: posts }, { status: 200 });
    } catch (e) {
      return NextResponse.json({ error: e }, { status: 500 });  
    }
}