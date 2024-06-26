import {JSX} from "react";
import style from "./style.module.css";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Gami-RL - Inscription",
    description: "Gami-RL signup",
};

export default function Signup(): JSX.Element {
    return (
        <main className={style.main}>
            <div className="card">
                <h1 className={style.title}>Rejoignez-nous !</h1>
                <p className={style.required}>* : Champs obligatoires</p>
                <RegisterForm />
            </div>
        </main>
    );
}
