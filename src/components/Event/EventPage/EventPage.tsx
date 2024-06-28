"use client"
import {JSX, useEffect, useState} from "react";
import SearchBar from "@/components/Input/SearchBar/SearchBar";
import EventGrid from "@/components/Event/EventGrid/EventGrid";
import style from "./style.module.css";
import Event from "@/type/Event/Event";
import Loader from "@/components/Loader/Loader";

export default function EventPage(): JSX.Element {
    const [search, setSearch] = useState<string>("");
    const [events, setEvents] = useState<Event[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return (
        <div>
            <div className={style.searchDiv}>
                <div className={style.searchElement}>
                    <SearchBar value={search} setValue={setSearch} apiRoute="/api/events/search" apiRouteEmpty="/api/events" setResponseData={setEvents} setLoading={setIsLoading}/>
                </div>
            </div>

            {
                isLoading ? (
                    <Loader/>
                ) : (
                    <EventGrid events={events}/>
                )
            }
        </div>
    )
}