import {JSX} from "react";
import style from "./style.module.css";

export default function RegisterForm(): JSX.Element {
    return (
        <form className={style.registerForm}>
            <input name="email" id="email" type="email" placeholder="Email" className={style.userInput}/>
            <input name="username" id="username" type="text" placeholder="Pseudonyme" className={style.userInput}/>

            <div className={style.passwordContainer}>
                <input name="password" id="password" type="password" placeholder="Mot de passe"
                       className={style.userInput}/>
                <input name="confirmPassword" id="confirmPassword" type="password"
                       placeholder="Confirmer le mot de passe" className={style.userInput}/>
            </div>

            <input name="status" id="status" type="text" placeholder="Décrivez-vous en une phrase"
                   className={style.userInput}/>
            <textarea name="biography" id="biography" rows={5} className={style.userInput} placeholder="Biographie"/>

            <button type="submit" className="button-primary">M'enregistrer</button>
        </form>
    );
}
