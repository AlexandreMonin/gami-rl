import User from "@/type/User/User";
import Link from "@/type/Link";
import Location from "@/type/Event/Location";

type Event = {
    id: number;
    name: string;
    start_date: Date;
    end_date: Date;
    links?: Link[];
    location: Location;
    userInterested?: User[];
    author?: User;
    authorId: number;
    phoneNumber: string;
    details: string;
    isPrivate: boolean;
};

export default Event;