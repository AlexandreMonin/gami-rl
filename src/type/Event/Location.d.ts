import Event from "@/type/Event/Event"

type Location = {
    id: number;
    address: string;
    city: string;
    zipCode: number;
    country: string;
    latitude?: string;
    longitude?: string;
    events?: Event[];
};

export default Location;