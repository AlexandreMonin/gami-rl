import {JSX} from "react";
import style from "./style.module.css";
import Image from "next/image";
import NavbarTab from "@/components/NavbarTabs/NavbarTab";
import NotLoggedAvatar from "@/components/NotLoggedAvatar/NotLoggedAvatar";

export default function Navbar(): JSX.Element {
    return (
        <div className={style.navbar}>
            <Image src="/logo.svg" alt="Logo du site Gami-RL" width={180} height={250} />

            <div className={style.tabs}>
                <NavbarTab name="Accueil" href="/"/>
                <NavbarTab name="Forum" href="/Questions" />
                <NavbarTab name="Joueurs" href="/Players" />
                <NavbarTab name="Évènements" href="/Events" />
            </div>

            <NotLoggedAvatar />

        </div>
    );
}