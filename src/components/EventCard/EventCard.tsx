"use client"
import style from "./style.module.css"
import {JSX} from "react";
import Event from "@/type/Event/Event"
import EventLocation from "@/components/EventLocation/EventLocation";
import Location from "@/type/Event/Location";
import EventDates from "@/components/EventDates/EventDates";

type EventFormProps = {
    id: number
    event: Event
}

export default function EventCard({id, event}: EventFormProps): JSX.Element {

    return (
        <div className={style.card}>
            <h3>{event.name}</h3>

            <div className={style.row}>
                <EventLocation location={event.location as Location}/>
                <EventDates start_date={new Date(event.start_date)} end_date={new Date(event.end_date)} />
            </div>
        </div>
    )
}