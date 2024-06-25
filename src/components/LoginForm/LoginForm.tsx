"use client"
import {signIn} from "next-auth/react";
import {JSX, useState} from "react";
import style from "@/components/RegisterForm/style.module.css";
import Link from "next/link";

export default function LoginForm() : JSX.Element {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signin = async () => {
        await signIn("credentials", {
            username: email,
            password: password,
            callbackUrl: '/'
        });
    }

    return(
        <form action={signin} method="POST">
            <input name="email" id="email" type="email" placeholder="Email" className={style.userInput} value={email}
                   onChange={event => setEmail(event.target.value)}/>
            <input name="password" id="password" type="password" placeholder="Mot de passe"
                   className={style.userInput} value={password}
                   onChange={event => setPassword(event.target.value)}/>

            <button type="submit">
                Connexion
            </button>
            <Link href={"/user/signup"} >
                Inscription
            </Link>
        </form>
    )
}