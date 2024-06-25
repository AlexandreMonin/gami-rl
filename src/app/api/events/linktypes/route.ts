import prisma from "@/utils/database";
import {NextResponse} from "next/server";

export async function GET() {

    try {
        const types = await prisma.link_Type.findMany({
            orderBy: {
                name: 'asc',
            }
        });

        return NextResponse.json({types: types}, {status: 200});
    } catch (e: any) {
        console.error(e);

        return NextResponse.json({data: e}, {status: 500});
    }
}