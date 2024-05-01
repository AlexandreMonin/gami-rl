import prisma from "@/utils/database";
import bcrypt from "bcrypt";
import Register from "@/type/Register/Register";
import {NextResponse} from "next/server";

export async function POST(req: Request) {
    const {username, email, password, status, biography, roleId}: Register = await req.json();
    const hashPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = await prisma.user.create({
            data: {
                email,
                username,
                password: hashPassword,
                status,
                biography,
                role_id: 1
            },
        });
        return NextResponse.json({ data: newUser }, { status: 201 });
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}