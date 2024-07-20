"use client"
import {JSX, useState} from "react";
import SearchBar from "@/components/Input/SearchBar/SearchBar";
import EventGrid from "@/components/Event/EventGrid/EventGrid";
import style from "./style.module.css";
import Event from "@/type/Event/Event";
import Loader from "@/components/Loader/Loader";
import {User} from "next-auth";

type EventPageProps = {
    username: string | undefined;
}

export default function EventPage({username}: EventPageProps): JSX.Element {
    const [search, setSearch] = useState<string>("");
    const [events, setEvents] = useState<Event[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return (
        <div>
            <div className={style.searchDiv}>
                <div className={style.searchElement}>
                    <SearchBar value={search} setValue={setSearch} apiRoute="/api/events/search/public" apiRouteEmpty="/api/events/public" setResponseData={setEvents} setLoading={setIsLoading}/>
                </div>
            </div>

            {
                isLoading ? (
                    <Loader/>
                ) : (
                    <EventGrid events={events} username={username}/>
                )
            }
        </div>
    )
}