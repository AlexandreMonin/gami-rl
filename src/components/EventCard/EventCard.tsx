"use client"
import style from "./style.module.css"
import {JSX} from "react";
import Event from "@/type/Event/Event"

type EventFormProps = {
    id: number
    event: Event
}

export default function EventCard({id, event}: EventFormProps): JSX.Element {

    return (
        <div className={style.card}>
            <p>{event.name}</p>
        </div>
    )
}