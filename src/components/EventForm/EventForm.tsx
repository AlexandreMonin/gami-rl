"use client"
import {useState} from "react";
import style from "./style.module.css"

export default function EventForm() {
    const [name, setName] = useState("");
    const [isPrivate, setIsPrivate] = useState(false);

    return (
        <form className={style.form}>
            <div className={style.checkboxGroup}>
                <input type="checkbox" id="isPrivate" name="isPrivate"
                       onChange={(event) => setIsPrivate(event.target.checked)}/>
                <label htmlFor="isPrivate">Evènement privé</label>
            </div>

            <div className={style.inputGroup}>
                <label htmlFor="name" className={style.labelInput}>Nom de l&apos;évènement <span
                    className={style.required}>*</span></label>
                <input name="email" id="email" type="email" placeholder="Mon évènement" className={style.userInput}
                       value={name}
                       onChange={event => setName(event.target.value)} required/>
            </div>

            <div className={style.dateGroup}>
                <div className={style.dateInput}>
                    <label htmlFor="start_date">Début de l&apos;évènement</label>
                    <input
                        type="datetime-local"
                        id="start_date"
                        name="start_date"/>
                </div>
                <div className={style.dateInput}>
                    <label htmlFor="end_date">Fin de l&apos;évènement</label>
                    <input
                        type="datetime-local"
                        id="end_date"
                        name="end_date"/>
                </div>
            </div>

        </form>
    )
}