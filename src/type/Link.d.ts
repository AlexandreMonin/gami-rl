import LinkType from "@/type/Event/LinkType";

type Link = {
    id: number;
    text: string;
    type: LinkType;
    event: Event
};

export default Link;