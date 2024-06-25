import {JSX} from "react";
import style from "./style.module.css";
import EventForm from "@/components/EventForm/EventForm";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default async function Signup(): Promise<JSX.Element> {

    const session: Session | null = await getServerSession(authOptions);

    return (
        <main className={style.main}>
            <div className="card">
                <h1 className={style.title}>Planifier un évènement</h1>
                <p className={style.required}>* : Champs obligatoires</p>
                {
                    session && <EventForm userMail={session.user.email}/>
                }
            </div>
        </main>
    );
}
