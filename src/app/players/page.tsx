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
            <PlayerPage/>
        </div>
    );
}
