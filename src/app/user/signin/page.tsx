import {JSX} from "react";
import style from "./style.module.css";
import LoginForm from "@/components/LoginForm/LoginForm";

export default function Signup(): JSX.Element {
    return (
        <main className={style.main}>
            <div className="card">
                <h1 className={style.title}>Connexion</h1>
                <LoginForm />
            </div>
        </main>
    );
}
