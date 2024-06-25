import prisma from "@/utils/db";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
    try {
        const user = await prisma.user.findUnique({
            where: { id: Number(id) },
            // include: {
            //     role: true,
            // }
        });
        console.log('user:' + user);
        if (user) {
            return NextResponse.json({data: user}, {status: 200});
        }
        else {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
    } catch(e) {
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}