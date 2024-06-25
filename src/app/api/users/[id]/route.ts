import prisma from "@/utils/database";
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
        // console.log('user:' + user);
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

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
    const { status, biography } = await req.json();

    try {
        const user = await prisma.user.findUnique({
            where: { id: Number(id) },
        });
        if (user) {
            const updatedUser = await prisma.user.update({
            where: { id: Number(id) },
            data: {
                status,
                biography,
            },
            });
            return NextResponse.json({ data: updatedUser }, { status: 200 });
        }
        else {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
    } catch(e) {
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}