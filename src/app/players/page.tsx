import {JSX} from "react";
// import style from "./style.module.css";
import PlayerPage from "@/components/PlayerPage/PlayerPage";

export default function Players(): JSX.Element {
    return (
        // <main className={style.main}>
            <div className="card">
                <h1>Joueurs</h1>
                <PlayerPage/>
            </div>
        // </main>
    );
}
