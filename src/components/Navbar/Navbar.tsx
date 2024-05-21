import {JSX} from "react";
import style from "./style.module.css";
import Image from "next/image";
import NavbarTab from "@/components/NavbarTabs/NavbarTab";
import NotLoggedAvatar from "@/components/NotLoggedAvatar/NotLoggedAvatar";
import {User} from "next-auth";
import LoggedAvatar from "@/components/LoggedAvatar/LoggedAvatar";

type NavbarProps = {
    user?: User
}

export default function Navbar({user}: NavbarProps): JSX.Element {
    return (
        <div className={style.navbar}>
            <Image src="/logo.svg" alt="Logo du site Gami-RL" width={180} height={250} priority className={style.logo}/>

            <div className={style.tabs}>
                <NavbarTab name="Accueil" href="/"/>
                <NavbarTab name="Forum" href="/Questions"/>
                <NavbarTab name="Joueurs" href="/players"/>
                <NavbarTab name="Évènements" href="/Events"/>
            </div>
            {
                user ? (
                    <LoggedAvatar username={user.username} status={user.status}/>
                ) : (
                    <NotLoggedAvatar/>
                )
            }

        </div>
    );
}