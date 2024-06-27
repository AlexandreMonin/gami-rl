"use client"
import {JSX, useState} from "react";
import style from "./style.module.css";
import {TailSpin} from "react-loader-spinner";
import InformationToast from "@/components/InformationToast/InformationToats";
import Button from "@/components/Input/Button/Button";

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

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        setPasswordsMatch(event.target.value === confirmPassword);

    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
        setPasswordsMatch(event.target.value === password);

    };

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

            <div className={style.inputGroup}>
                <label htmlFor="email" className={style.labelInput}>Email <span
                    className={style.required}>*</span></label>
                <input name="email" id="email" type="email" placeholder="mon@email.com" className={style.userInput}
                       value={email}
                       onChange={event => setEmail(event.target.value)} required/>
            </div>

            <div className={style.inputGroup}>
                <label htmlFor="username" className={style.labelInput}>Pseudonyme <span
                    className={style.required}>*</span></label>
                <input name="username" id="username" type="text" placeholder="Pseudonyme" className={style.userInput}
                       value={username} onChange={event => setUsername(event.target.value)} required/>
            </div>

            <div className={style.passwordContainer}>
                <div className={style.passwordField}>
                    <div className={style.inputGroup}>
                        <label htmlFor="password" className={style.labelInput}>Mot de passe <span
                            className={style.required}>*</span></label>
                        <input name="password" id="password" type="password" placeholder="********"
                               className={style.userInput} value={password}
                               onChange={handlePasswordChange} required/>
                    </div>
                    <div className={style.inputGroup}>
                        <label htmlFor="confirmPassword" className={style.labelInput}>Confirmer votre mot de
                            passe <span className={style.required}>*</span></label>
                        <input name="confirmPassword" id="confirmPassword" type="password"
                               placeholder="********" className={style.userInput}
                               value={confirmPassword}
                               onChange={handleConfirmPasswordChange} required/>
                    </div>
                </div>
                {!passwordsMatch &&
                    <p className={style.passwordMatchError}>Les mots de passe ne correspondent pas.</p>}
            </div>

            <div className={style.inputGroup}>
                <label htmlFor="status" className={style.labelInput}>Status</label>
                <input name="status" id="status" type="text" placeholder="Décrivez-vous en une phrase..."
                       className={style.userInput} value={status} onChange={event => setStatus(event.target.value)}/>
            </div>

            <div className={style.inputGroup}>
                <label htmlFor="biography" className={style.labelInput}>Biographie</label>
                <textarea name="biography" id="biography" rows={10} className={style.userInput}
                          placeholder="Dites en d'avantage..."
                          value={biography} onChange={event => setBiography(event.target.value)}/>
            </div>

            {
                isLoading ? (
                    <button type="submit" className="button-primary-disabled" disabled>M&apos;enregistrer <TailSpin
                        visible={true}
                        height="30"
                        width="30"
                        color="#5F0099"
                        ariaLabel="tail-spin-loading"
                    /></button>
                ) : (
                    <Button type="submit" text="M'enregistrer" className="primary" />
                )
            }
            <InformationToast information={modalMessage} isOpen={isOpen} success={success}/>
        </form>
    );
}
