"use client"
import {JSX, useEffect, useState} from "react";
import style from "./style.module.css";
import InformationToast from "@/components/InformationToast/InformationToats";
import Button from "@/components/Input/Button/Button";
import TextInput from "@/components/Input/TextInput/TextInput";
import TextArea from "@/components/Input/TextArea/TextArea";
import LinkTo from "@/components/Input/LinkTo/LinkTo";

export default function RegisterForm(): JSX.Element {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [status, setStatus] = useState("");
    const [biography, setBiography] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [role, setRole] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setPasswordsMatch(password === confirmPassword);
    }, [password, confirmPassword]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        if (passwordsMatch) {
            try {
                const response = await fetch("/api/users", {
                    method: "POST",
                    headers: {
                        contentType: "application/json",
                    },
                    body: JSON.stringify({email, username, password, status, biography, role})
                });

                const data = await response.json();

                if (!response.ok) {
                    setSuccess(false);
                    setModalMessage(data.data);
                } else {
                    setSuccess(true);
                    setEmail("");
                    setUsername("");
                    setPassword("");
                    setConfirmPassword("");
                    setStatus("");
                    setBiography("");
                    setRole("");
                    setModalMessage("Enregistrement réussi");
                }

            } catch (e: any) {
                setSuccess(false);
                setModalMessage("Une erreur est survenue, veuillez réessayer plus tard");
            }

        }
        setIsLoading(false);
        setIsOpen(true);
        setTimeout(() => {
            setIsOpen(false);
        }, 8000);
    }

    return (
        <form className={style.registerForm} onSubmit={handleSubmit}>

            <fieldset className={style.fieldset}>
                <legend className={style.legend}>
                    Je m&apos;inscris en tant que <span className={style.required}>*</span>
                </legend>

                <div className={style.radioButton}>
                    <input type="radio" id="player" name="userType" value="player"
                           onChange={event => setRole(event.target.value)} required/>
                    <label htmlFor="player">Joueur</label>
                </div>
                <div className={style.radioButton}>
                    <input type="radio" id="association" name="userType" value="association"
                           onChange={event => setRole(event.target.value)} required/>
                    <label htmlFor="association">Association</label>
                </div>
            </fieldset>

            <TextInput name="email" label="Email" id="email" type="email" value={email} setValue={setEmail}
                       placeholder="mon@mail.com" required={true}/>
            <TextInput name="username" label="Pseudonyme" id="username" type="text" value={username}
                       setValue={setUsername} placeholder="Pseudo123" required={true}/>

            <div className={style.passwordContainer}>
                <div className={style.passwordField}>
                    <TextInput name="password" id="password" type="password" label="Mot de passe" value={password}
                               setValue={setPassword}
                               placeholder="********" required={true}/>
                    <TextInput name="confirmPassword" id="confirmPassword" type="password"
                               label="Confirmer le mot de passe" value={confirmPassword}
                               setValue={setConfirmPassword}
                               placeholder="********" required={true}/>
                </div>
                {!passwordsMatch &&
                    <p className={style.passwordMatchError}>Les mots de passe ne correspondent pas.</p>}
            </div>

            <TextInput name="status" id="status" type="text" value={status} setValue={setStatus}
                       placeholder="Décrivez-vous en une phrase" required={true} label="Status"/>

            <TextArea name="biography" id="biography" value={biography} setValue={setBiography} rows={10}
                      label="Biographie" placeholder="Dites en d'avantage..." required={true}/>

            <Button type="submit" text="M'enregistrer" className="primary" loading={isLoading}/>
            <LinkTo href="/user/signin" text="Connexion" className="textPrimary"/>

            <InformationToast information={modalMessage} isOpen={isOpen} success={success}/>
        </form>
    );
}
