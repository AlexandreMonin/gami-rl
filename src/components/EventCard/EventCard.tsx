"use client"
import style from "./style.module.css"
import {JSX} from "react";
import Event from "@/type/Event/Event"
import EventLocation from "@/components/EventLocation/EventLocation";
import Location from "@/type/Event/Location";
import EventDates from "@/components/EventDates/EventDates";
import {FiChevronRight} from "react-icons/fi";

type EventFormProps = {
    id: number
    event: Event
}

export default function EventCard({id, event}: EventFormProps): JSX.Element {
    let detail = "aaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaaaaaaa aaa a aaaaaaaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaaaaaaa aa aa aaaaaa aaaaaaaaaaaaa aaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaaaaaaa aaa a aaaaaaaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaaaaaaa aa aa aaaaaa aaaaaaaaaaaaa aaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaaaaaaa aaa a aaaaaaaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaaaaaaa aa aa aaaaaa aaaaaaaaaaaaa aaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaaaaaaa aaa a aaaaaaaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaaaaaaa aa aa aaaaaa aaaaaaaaaaaaa aaaa aaaaaaaaaaaaaa";

    if (detail.length > 250) {
        detail = detail.substring(0, 250) + "..."
    }
    return (
        <div className={style.card}>
            <h1>{event.name}</h1>

            <div className={style.row}>
                <EventLocation location={event.location as Location}/>
                <EventDates start_date={new Date(event.start_date)} end_date={new Date(event.end_date)}/>
            </div>

            <p className={style.details}>{detail}</p>

            <div className={style.buttons}>
                <a className={style.moreButton}>En savoir plus <FiChevronRight size={25}/></a>
            </div>
        </div>
    )
}