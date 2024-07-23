import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import 'leaflet/dist/leaflet.css';
import {Providers} from "@/app/providers";
import React from "react";
import NavigationBar from "@/components/Navbar/Navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Gami-RL",
    description: "Gami-RL homepage",
    manifest: "/manifest.json",
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    const session: Session | null = await getServerSession(authOptions);
    return (
        <html lang="fr">
        <body className={inter.className}>
        <Providers>
            <NavigationBar user={session?.user}/>
            {children}
            {/*<Footer/>*/}
        </Providers>
        </body>
        </html>
    );
}
