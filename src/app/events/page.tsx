import {JSX} from "react";
import style from "./style.module.css";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import EventGrid from "@/components/EventGrid/EventGrid";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Gami-RL - Evènemets",
    description: "Gami-RL events",
};

export default async function Events(): Promise<JSX.Element> {
    const session: Session | null = await getServerSession(authOptions);

    return (
        <div className={style.page}>
            <h1 className={style.title}>Envie de découvrir ?</h1>

            {
                session &&
                <Link href={`/events/new`} className={style.addEvent}>
                    Planifier un évènement
                </Link>
            }
            <EventGrid/>
        </div>
    );
}
