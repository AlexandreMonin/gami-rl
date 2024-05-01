"use client"
import {JSX} from "react";
import style from "./style.module.css";
import Image from "next/image";
import {signOut} from "next-auth/react";

const SignOut = async () => {
    await signOut({ redirect: true, callbackUrl: '/' });
}

export default function SignOutButton() : JSX.Element {
    return (
        <a className={style.logout} onClick={SignOut}>
            <Image src="/assets/profile_dropdown/logout.svg" alt="Logo de déconnexion" width={25} height={100}/>
            <p>Se déconnecter</p>
        </a>
    );
}