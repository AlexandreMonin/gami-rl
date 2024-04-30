import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                return null;
            },
        }),
    ],
}

const handler = NextAuth(options);

export { handler as GET, handler as POST };