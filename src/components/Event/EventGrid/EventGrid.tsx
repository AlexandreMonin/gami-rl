"use client"
import style from "./style.module.css"
import {JSX} from "react";
import Event from "@/type/Event/Event"
import EventCard from "@/components/Event/EventCard/EventCard";

type EventGridProps = {
    events: Event[]
    username: string | undefined;
}

export default function EventGrid({events, username}: EventGridProps): JSX.Element {

    return (
        <div className={style.cardGrid}>
            {
                events.map((event: Event) => (
                        <EventCard key={event.id} event={event} username={username} />
                    )
                )
            }
        </div>
    )
}