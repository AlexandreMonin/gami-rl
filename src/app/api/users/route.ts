import prisma from "@/utils/database";
import bcrypt from "bcrypt";
import Register from "@/type/Register/Register";

export async function POST(req: Request) {
    const {username, email, password, status, biography, roleId}: Register = await req.json();
    const hashPassword = await bcrypt.hash(password, 10);
}