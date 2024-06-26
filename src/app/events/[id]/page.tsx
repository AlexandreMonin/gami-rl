import {JSX} from "react";
import EventDetails from "@/components/EventDetails/EventDetails";
import type {Metadata} from "next";

type EventDetailsProps = {
    params: {
        id: string
    }
}

export const metadata: Metadata = {
    title: "Gami-RL - Evènements",
    description: "Gami-RL eventDetails",
};

export default async function EventDetailsPage({params}: EventDetailsProps): Promise<JSX.Element> {
    return (
        <EventDetails id={parseInt(params.id)} />
    );
}
