import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Gami-RL",
    description: "Gami-RL homepage",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
        </html>
    );
}
