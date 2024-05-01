import {JSX} from "react";
import style from "./style.module.css";

export default function Signup(): JSX.Element {
    return (
        <main className={style.main}>
            <div className={style.card}>
                <form>
                    <input name="email" id="email" type="email" placeholder="Email"/>
                </form>
            </div>
        </main>
    );
}
