"use client"
import {useState} from "react";
import style from "./style.module.css"

export default function EventForm() {
    const [name, setName] = useState("");
    const [isPrivate, setIsPrivate] = useState(false);

    return (
        <form className={style.form}>
            <div className={style.checkboxGroup}>
                <input type="checkbox" id="isPrivate" name="isPrivate"/>
                <label htmlFor="isPrivate" onChange={}>Evènement privé</label>
            </div>

            <div className={style.inputGroup}>
                <label htmlFor="name" className={style.labelInput}>Email <span
                    className={style.required}>*</span></label>
                <input name="email" id="email" type="email" placeholder="Mon évènement" className={style.userInput}
                       value={name}
                       onChange={event => setName(event.target.value)} required/>
            </div>
        </form>
    )
}