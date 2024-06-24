"use client"
import {useEffect, useState} from "react";
import style from "./style.module.css"
import {JSX} from "react";
import InformationToast from "@/components/InformationToast/InformationToats";
import EventLink from "@/components/EventLinks/EventLinks";
import Event from "@/type/Event/Event";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default function EventForm(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [name, setName] = useState("");
    const [adress, setAdress] = useState("");
    const [city, setCity] = useState("");
    const [zip_code, setZip_Code] = useState("");
    const [country, setCountry] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [details, setDetails] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [linkTypes, setLinkTypes] = useState([]);
    const [isPrivate, setIsPrivate] = useState(false);
    const [eventLinks, setEventLinks] = useState<{ id: number, component: JSX.Element }[]>([]);

    useEffect(() => {
        const getLinkTypes = async () => {
            try {
                const response = await fetch("/api/events/linktypes", {
                    method: "GET",
                });

                const data = await response.json();

                if (!response.ok) {
                    setSuccess(false);
                    setModalMessage(data.data);
                    setIsOpen(true);
                    setTimeout(() => {
                        setIsOpen(false);
                    }, 8000);
                } else {
                    setLinkTypes(data.types);
                    setEventLinks([{
                        id: 0,
                        component: <EventLink types={data.types} id={0} deleteLink={deleteLink} key={0}/>
                    }])
                }
            } catch (e: any) {
                console.log(e)
            }
        }

        getLinkTypes();
    }, []);

    const addLink = () => {
        const newId = eventLinks.length ? eventLinks[eventLinks.length - 1].id + 1 : 0;
        setEventLinks([...eventLinks, {
            id: newId,
            component: <EventLink types={linkTypes} id={newId} deleteLink={deleteLink} key={newId}/>
        }]);

    };

    const deleteLink = (id: number) => {
        setEventLinks(eventLinks.filter(link => link.id !== id));
    };

    const addEvent = async () => {
        const session: Session | null = await getServerSession(authOptions);

        const event: Event = {
            id: 0,
            name: name,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            location: {
                id: 0,
                address: adress,
                city: city,
                zipCode: parseInt(zip_code),
                country: country,
                longitude: longitude,
                latitude: latitude,
            },
            authorId: session?.user.id,
            phoneNumber: phoneNumber,
            details: details,
            isPrivate: isPrivate,
        }

        try {
            const response = await fetch("/api/events/add", {
                method: "POST",
                headers: {
                    contentType: "application/json",
                },
                body: JSON.stringify(event)
            });

            const data = await response.json();

            if (!response.ok) {
                setSuccess(false);
                setModalMessage(data.data);
            } else {
                setSuccess(true);
                setModalMessage("Enregistrement réussi");
            }

        } catch (e: any) {
            setSuccess(false);
            setModalMessage("Une erreur est survenue, veuillez réessayer plus tard");
        }

    }

    return (
        <form className={style.form} action={addEvent} method="POST">

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
                            value={startDate}
                            onChange={event => setStartDate(event.target.value)}
                            required/>
                    </div>
                    <div className={style.dateInput}>
                        <label htmlFor="end_date">Fin de l&apos;évènement</label>
                        <input
                            type="datetime-local"
                            id="end_date"
                            name="end_date"
                            value={endDate}
                            onChange={event => setEndDate(event.target.value)}
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
                        <input name="longitude" id="longitude" type="text" placeholder=""
                               className={style.userInput}
                               value={longitude}
                               onChange={event => setLongitude(event.target.value)} required/>
                    </div>

                </div>
            </fieldset>

            <fieldset className={style.form}>
                <legend className={style.legend}>Contact</legend>

                <div className={style.inputGroup}>
                    <label htmlFor="phone-number" className={style.labelInput}>Numéro de téléphone<span
                        className={style.required}>*</span></label>
                    <input name="phone-number" id="phone-number" type="text" placeholder="0123456789"
                           className={style.userInput}
                           value={phoneNumber}
                           onChange={event => setPhoneNumber(event.target.value)} required/>
                </div>

                <button type="button" onClick={addLink}>Ajouter un lien</button>
                {
                    eventLinks.map((eventLink) => eventLink.component)
                }
            </fieldset>

            <fieldset className={style.form}>
                <legend className={style.legend}>Détails</legend>

                <textarea name="details" id="details" rows={10} className={style.userInput}
                          placeholder="Parler de votre évènement !"
                          value={details} onChange={event => setDetails(event.target.value)}/>
            </fieldset>


            <InformationToast information={modalMessage} isOpen={isOpen} success={success}/>

        </form>
    )
}