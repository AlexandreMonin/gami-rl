"use client"
import {useState} from "react";
import style from "./style.module.css"

export default function EventForm() {
    const [name, setName] = useState("");
    const [adress, setAdress] = useState("");
    const [city, setCity] = useState("");
    const [zip_code, setZip_Code] = useState("");
    const [country, setCountry] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [isPrivate, setIsPrivate] = useState(false);

    return (
        <form className={style.form}>

            <div className={style.checkboxGroup}>
                <input type="checkbox" id="isPrivate" name="isPrivate"
                       onChange={(event) => setIsPrivate(event.target.checked)}/>
                <label htmlFor="isPrivate">Evènement privé</label>
            </div>
            <fieldset className={style.form}>
                <legend className={style.legend}>Informations de l&apos;évènement</legend>
                <div className={style.inputGroup}>
                    <label htmlFor="name" className={style.labelInput}>Nom de l&apos;évènement <span
                        className={style.required}>*</span></label>
                    <input name="email" id="email" type="email" placeholder="Mon évènement"
                           className={style.userInput}
                           value={name}
                           onChange={event => setName(event.target.value)} required/>
                </div>

                <div className={style.dateGroup}>
                    <div className={style.dateInput}>
                        <label htmlFor="start_date">Début de l&apos;évènement</label>
                        <input
                            type="datetime-local"
                            id="start_date"
                            name="start_date"
                            required/>
                    </div>
                    <div className={style.dateInput}>
                        <label htmlFor="end_date">Fin de l&apos;évènement</label>
                        <input
                            type="datetime-local"
                            id="end_date"
                            name="end_date"
                            required/>
                    </div>
                </div>

                <div className={style.inputGroup}>
                    <label htmlFor="name" className={style.labelInput}>Adresse<span
                        className={style.required}>*</span></label>
                    <input name="adress" id="adress" type="text" placeholder="n°, rue" className={style.userInput}
                           value={adress}
                           onChange={event => setAdress(event.target.value)} required/>
                </div>

                <div className={style.adress}>
                    <div className={style.inputGroup}>
                        <label htmlFor="city" className={style.labelInput}>Ville<span
                            className={style.required}>*</span></label>
                        <input name="city" id="city" type="text" placeholder="Paris"
                               className={style.userInput}
                               value={city}
                               onChange={event => setCity(event.target.value)} required/>
                    </div>

                    <div className={style.inputGroup}>
                        <label htmlFor="zip_code" className={style.labelInput}>Code Postal<span
                            className={style.required}>*</span></label>
                        <input name="zip_code" id="zip_code" type="text" placeholder="75000"
                               className={style.userInput}
                               value={zip_code}
                               onChange={event => setZip_Code(event.target.value)} required/>
                    </div>

                    <div className={style.inputGroup}>
                        <label htmlFor="country" className={style.labelInput}>Pays<span
                            className={style.required}>*</span></label>
                        <input name="country" id="country" type="text" placeholder="France"
                               className={style.userInput}
                               value={country}
                               onChange={event => setCountry(event.target.value)} required/>
                    </div>
                </div>

                <div className={style.adress}>
                    <div className={style.inputGroup}>
                        <label htmlFor="latitude" className={style.labelInput}>Lattitude<span
                            className={style.required}>*</span></label>
                        <input name="latitude" id="latitude" type="text" placeholder=""
                               className={style.userInput}
                               value={latitude}
                               onChange={event => setLatitude(event.target.value)} required/>
                    </div>

                    <div className={style.inputGroup}>
                        <label htmlFor="longitude" className={style.labelInput}>Longitude<span
                            className={style.required}>*</span></label>
                        <input name="longityde" id="longitude" type="text" placeholder=""
                               className={style.userInput}
                               value={longitude}
                               onChange={event => setLongitude(event.target.value)} required/>
                    </div>

                </div>
            </fieldset>

            <fieldset className={style.form}>
                <legend className={style.legend}>Contact</legend>
            </fieldset>

        </form>
    )
}