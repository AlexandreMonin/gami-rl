import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Gami-RL",
    description: "Gami-RL homepage",
};

export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const session: Session | null = await getServerSession(authOptions);
    console.log(session);
    return (
        <html lang="fr">
        <body className={inter.className}>
        <Navbar user={session?.user}/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
