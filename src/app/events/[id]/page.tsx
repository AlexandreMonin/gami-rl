import {JSX} from "react";
import style from "./style.module.css";
import Event from "@/type/Event/Event";
import EventDetails from "@/components/EventDetails/EventDetails";

type EventDetailsProps = {
    params: {
        id: string
    }
}

export default async function EventDetailsPage({params}: EventDetailsProps): Promise<JSX.Element> {
    return (
        <EventDetails id={parseInt(params.id)} />
    );
}
