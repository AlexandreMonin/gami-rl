import prisma from "@/utils/database";
import bcrypt from "bcrypt";
import Register from "@/type/User/User";
import {NextResponse} from "next/server";
import {Prisma} from "@prisma/client";

export async function POST(req: Request) {
    const {username, email, password, status, biography, role}: Register = await req.json();
    const hashPassword = await bcrypt.hash(password, 10);

    try {

        const userRole = await prisma.role.findFirst({
            where: {
                name: role,
            }
        });

        if (!userRole) {
            return NextResponse.json({error: "role is missing"}, {status: 500});
        } else {
            const newUser = await prisma.user.create({
                data: {
                    email,
                    username,
                    password: hashPassword,
                    status,
                    biography,
                    role: {
                        connect: {
                            id: userRole.id,
                        }
                    }
                },
            });
            return NextResponse.json({data: newUser}, {status: 201});
        }

    } catch (e: any) {
        console.error(e);

        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2002') {
                const target = e.meta?.target;
                if (target && target.includes('email')) {
                    return NextResponse.json({data: "L'adresse email existe déjà"}, {status: 400});
                } else if (target && target.includes('username')) {
                    return NextResponse.json({data: "Le nom d'utilisateur existe déjà"}, {status: 400});
                }
            }
        }
        return NextResponse.json({data: e.message}, {status: 500});
    }
}