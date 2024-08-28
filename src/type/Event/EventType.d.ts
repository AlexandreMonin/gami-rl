import LinkType from "@/type/Event/LinkType";

type EventType = {
    id: number;
    name: string;
    phoneNumber: string;
    details: string;
    links: EventLink[];
    isPrivate: boolean;
};

export default EventType;