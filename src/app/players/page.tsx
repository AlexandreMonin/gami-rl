import {JSX} from "react";
import style from "./style.module.css";
import PlayerPage from "@/components/PlayerPage/PlayerPage";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Gami-RL - Joueurs",
    description: "Gami-RL players",
};

export default function Players(): JSX.Element {
    return (
        <div>
            <div className={style.page_title}>
            <h2>Trouvez vos meilleurs coéquipiers</h2>
            </div>
            <PlayerPage/>
        </div>
    );
}
