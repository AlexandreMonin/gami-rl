import {JSX} from "react";
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
