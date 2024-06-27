import {JSX} from "react";
import style from "./loading.module.css";
import Loader from "@/components/Loader/Loader";

export default function RegisterForm(): JSX.Element {
    return (
        <main className={style.main}>
            <div className={style.card}>
                <Loader/>
            </div>
        </main>
    )
}
