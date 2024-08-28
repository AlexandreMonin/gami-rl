import {JSX} from "react";
import style from "./style.module.css";
import EventForm from "@/components/Event/EventForm/EventForm";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Gami-RL - Nouvel événement",
    description: "Gami-RL new event",
};

export default async function Signup(): Promise<JSX.Element> {

    const session: Session | null = await getServerSession(authOptions);

    return (
        <main className={style.main}>
            <div className="card">
                <h1 className={style.title}>Planifier un événement</h1>
                <p className={style.required}>* : Champs obligatoires</p>
                {
                    session && <EventForm userMail={session.user.email}/>
                }
            </div>
        </main>
    );
}
