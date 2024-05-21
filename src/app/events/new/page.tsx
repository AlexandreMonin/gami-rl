import {JSX} from "react";
import style from "./style.module.css";
import EventForm from "@/components/EventForm/EventForm";

export default function Signup(): JSX.Element {
    return (
        <main className={style.main}>
            <div className="card">
                <h1 className={style.title}>Planifier un évènement</h1>
                <p className={style.required}>* : Champs obligatoires</p>
                <EventForm />
            </div>
        </main>
    );
}
