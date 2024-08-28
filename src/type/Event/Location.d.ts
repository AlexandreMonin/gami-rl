import Event from "@/type/Event/Event"

type Location = {
    id: number;
    address: string;
    city: string;
    zip_code: number;
    country: string;
    latitude?: string;
    longitude?: string;
    events?: Event[];
};

export default Location;