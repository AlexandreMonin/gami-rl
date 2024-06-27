"use client"
import {signIn} from "next-auth/react";
import {JSX, useState} from "react";
import style from "./style.module.css";
import Link from "next/link";
import Button from "@/components/Input/Button/Button";
import LinkTo from "@/components/Input/LinkTo/LinkTo";
import TextInput from "@/components/Input/TextInput/TextInput";

export default function LoginForm(): JSX.Element {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const signin = async () => {
        setIsLoading(true);
        await signIn("credentials", {
            username: email,
            password: password,
            callbackUrl: '/players'
        });
    }

    return (
        <form action={signin} method="POST" className={style.form}>

            <div className={style.inputTextGroup}>
                <TextInput name="email" id="email" type="email" placeholder="Email" value={email} setValue={setEmail}
                           required={true}/>
                <TextInput name="password" id="password" type="password" placeholder="Mot de passe" value={password}
                           setValue={setPassword} required={true}/>
            </div>
            <div className={style.inputGroup}>
                <Button type="submit" text="Connexion" loading={isLoading} className="primary"/>
                <LinkTo href="/user/signup" text="Inscription" className="textPrimary"/>
            </div>
        </form>
    )
}