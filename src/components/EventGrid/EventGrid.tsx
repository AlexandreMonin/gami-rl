"use client"
import style from "./style.module.css"
import {JSX, useEffect, useState} from "react";
import Event from "@/type/Event/Event"
import EventCard from "@/components/EventCard/EventCard";

export default function EventGrid(): JSX.Element {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
            const getEvents = async (): Promise<void> => {
                try {
                    const response = await fetch(`/api/events`, {
                        method: "GET",
                        cache: "no-cache"
                    });
                    const data = await response.json();
                    if (!response.ok) {
                        console.error(data);
                        throw new Error("Une erreur est survenue");
                    }
                    console.log(data);
                    setEvents(data.events as Event[]);
                } catch (e: any) {
                    console.error(e);
                    throw new Error(e);
                }
            }
            getEvents();
        }
        ,
        []
    )
    ;

    return (
        <div className={style.cardGrid}>
            {
                events.map((event: Event) => (
                        <EventCard key={event.id} id={event.id} event={event}/>
                    )
                )
            }
        </div>
    )
}