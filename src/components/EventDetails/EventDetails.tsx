"use client"
import style from "./style.module.css"
import {JSX, useEffect, useState} from "react";
import Event from "@/type/Event/Event";
import Loader from "@/components/Loader/Loader";
import dynamic from "next/dynamic";

const Map = dynamic(() => import('@/components/Map/Map'), { ssr: false })

type EventFormProps = {
    id: number
}

export default function EventDetails({id}: EventFormProps): JSX.Element {
    const [event, setEvent] = useState<Event>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
            const getEvent = async (): Promise<void> => {
                try {
                    const response = await fetch(`/api/events/${id}`, {
                        method: "GET",
                        cache: "no-cache"
                    });
                    const data = await response.json();
                    if (!response.ok) {
                        console.error(data);
                        throw new Error("Une erreur est survenue");
                    }
                    console.log(data);
                    setEvent(data.event as Event);
                } catch (e: any) {
                    console.error(e);
                    throw new Error(e);
                } finally {
                    setLoading(false);
                }
            }
            getEvent();
        }
        , [id]
    );

    return (
        <main className={style.main}>
            <div className={style.card}>
                {
                    loading ? (
                        <Loader/>
                    ) : (
                        <div>
                            <div className={style.banner}>
                                <h1 className={style.title}>{event?.name}</h1>
                            </div>

                            <div className={style.details}>
                                <p className={style.detailsText}>{event?.details}</p>

                                <div>
                                    <div className={style.location}>
                                        <p className={style.locationText}>{event?.location.address}, {event?.location.zip_code} {event?.location.city}, {event?.location.country}</p>
                                    </div>
                                    {
                                        (event?.location.latitude && event?.location.longitude) && <Map latitude={parseFloat(event.location.latitude)} longitude={parseFloat(event.location.longitude)}/>

                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </main>

    )
}