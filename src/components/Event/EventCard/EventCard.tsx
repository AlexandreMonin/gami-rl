"use client"
import style from "./style.module.css"
import {JSX, useEffect, useState} from "react";
import Event from "@/type/Event/Event"
import EventLocation from "@/components/Event/EventLocation/EventLocation";
import Location from "@/type/Event/Location";
import EventDates from "@/components/Event/EventDates/EventDates";
import {FiChevronRight} from "react-icons/fi";
import FollowButton from "@/components/Event/FollowButton/FollowButton";


type EventFormProps = {
    event: Event
    username: string | undefined;
}

export default function EventCard({event, username}: EventFormProps): JSX.Element {
    const [isInterested, setInterested] = useState<boolean>(false);
    let detail = event.details;

    useEffect(() => {
        event.users_interested?.length > 0 && setInterested(event.users_interested.some(user => user.username === username))
    }, []);

    if (event.details.length > 250) {
        detail = event.details.substring(0, 250) + "..."
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
                <a className={style.moreButton} href={`/events/${event.id}`}>En savoir plus <FiChevronRight size={25}/></a>
                <FollowButton username={username} eventId={event.id} isInterested={isInterested}/>
            </div>
        </div>
    )
}