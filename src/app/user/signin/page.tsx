import {JSX} from "react";
import style from "./style.module.css";
import LoginForm from "@/components/LoginForm/LoginForm";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Gami-RL - Connexion",
    description: "Gami-RL signin",
};

export default function Signup(): JSX.Element {
    return (
        <main className={style.main}>
            <div className={style.card}>
                <h1 className={style.title}>Connexion</h1>
                <LoginForm />
            </div>
        </main>
    );
}
