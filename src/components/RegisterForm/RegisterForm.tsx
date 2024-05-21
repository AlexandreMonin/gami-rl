"use client"
import {JSX, useState} from "react";
import style from "./style.module.css";
import axios from "axios";

export default function RegisterForm(): JSX.Element {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [status, setStatus] = useState("");
    const [biography, setBiography] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [role, setRole] = useState("");

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        setPasswordsMatch(event.target.value === confirmPassword);
        console.log(passwordsMatch);

    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
        setPasswordsMatch(event.target.value === password);
        console.log(passwordsMatch);

    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        axios.post("/api/users", {email, username, password, status, biography, role}).then((response) => {console.log(response.status)})

    }

    return (
        <form className={style.registerForm} onSubmit={handleSubmit}>

            <fieldset className={style.fieldset}>
                <legend className={style.legend}>
                    Je m&apos;inscris en tant que
                </legend>

                <div>
                    <input type="radio" id="player" name="userType" value="player" onChange={event => setRole(event.target.value)}/>
                    <label htmlFor="player">Joueur</label>
                </div>
                <div>
                    <input type="radio" id="association" name="userType" value="association" onChange={event => setRole(event.target.value)}/>
                    <label htmlFor="association">Association</label>
                </div>
            </fieldset>

            <input name="email" id="email" type="email" placeholder="Email" className={style.userInput} value={email}
                   onChange={event => setEmail(event.target.value)} />
            <input name="username" id="username" type="text" placeholder="Pseudonyme" className={style.userInput} value={username} onChange={event => setUsername(event.target.value)} />

            <div className={style.passwordContainer}>
                <div className={style.passwordField}>
                    <input name="password" id="password" type="password" placeholder="Mot de passe"
                           className={style.userInput} value={password}
                           onChange={handlePasswordChange}/>
                    <input name="confirmPassword" id="confirmPassword" type="password"
                           placeholder="Confirmer le mot de passe" className={style.userInput} value={confirmPassword}
                           onChange={handleConfirmPasswordChange}/>
                </div>
                {!passwordsMatch && <p className={style.passwordMatchError}>Les mots de passe ne correspondent pas.</p>}
            </div>

            <input name="status" id="status" type="text" placeholder="Décrivez-vous en une phrase"
                   className={style.userInput} value={status} onChange={event => setStatus(event.target.value)} />
            <textarea name="biography" id="biography" rows={10} className={style.userInput} placeholder="Biographie" value={biography} onChange={event => setBiography(event.target.value)} />

            <button type="submit" className="button-primary">M&apos;enregistrer</button>
        </form>
    );
}
