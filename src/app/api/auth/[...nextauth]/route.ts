import prisma from "@/utils/db";
import bcrypt from "bcryptjs";
import NextAuth, {Session} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {JWT} from "next-auth/jwt";

export const authOptions = {
    pages: {
        signIn: "/user/signin"
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.password || !credentials?.username) {
                    return null;
                }

                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials?.username,
                    },
                });

                if (
                    user &&
                    (await bcrypt.compare(credentials.password, user.password))
                ) {
                    return user;
                }

                return null;
            },
        }),
    ],
    callbacks: {
        async session({ session, token } : {session: Session, token: JWT}) {
            console.log(token);

            const user = await prisma.user.findFirst({
                where: {
                    email: token?.email?.toString(),
                },
            });

            if (user) {
            session.user = {
                ...session.user,
                username: user.username,
                status: user.status,
                id: user.id
            };}
            return session
        },
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };