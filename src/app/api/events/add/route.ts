import prisma from "@/utils/database";
import {NextResponse} from "next/server";
import Register from "@/type/User/User";

export async function POST(req: Request) {
    const {name, adress, city, status, biography, role}: Register = await req.json();

    try {
        const event = await prisma.event.create({
            data: {

            }
        })

        return NextResponse.json({types: types}, {status: 200});
    } catch (e: any) {
        console.error(e);

        return NextResponse.json({data: e}, {status: 500});
    }
}