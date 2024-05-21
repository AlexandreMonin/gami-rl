import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

/**
 * Fonction de récupération du détail d'une recette avec ses étapes et ses ingrédients
 * @param param0 { id }
 * @returns post
 */
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    console.log(params);
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
            },
        });
        return NextResponse.json({ data: post }, { status: 200 });

    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
    
}