import prisma from "@/utils/db";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {

    try {
        const userRole = await prisma.role.findFirst({
            where: {
                name: 'player',
            }
        });
        if (!userRole) {
            return NextResponse.json({error: "role is missing"}, {status: 500});
        } else {

            const players = await prisma.user.findMany({ where: { role: userRole } });

            if (players.length > 0) {
                return NextResponse.json({data: players}, {status: 200});
            }
            else {
                return NextResponse.json({ error: "Role or users not found" }, { status: 404 });
            }
            }
    } catch(e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }

}