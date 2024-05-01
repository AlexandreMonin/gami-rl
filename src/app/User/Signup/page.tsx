import {JSX} from "react";
import style from "./style.module.css";
import RegisterForm from "@/components/RegisterForm/RegisterForm";

export default function Signup(): JSX.Element {
    return (
        <main className={style.main}>
            <div className="card">
                <h1 className={style.title}>Rejoignez-nous !</h1>
                <RegisterForm />
            </div>
        </main>
    );
}
