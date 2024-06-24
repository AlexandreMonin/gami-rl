import {DateTime} from "next-auth/providers/kakao";
import User from "@/type/User/User";
import Link from "@/type/Link";
import Location from "@/type/Event/Location";

type Event = {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    links?: Link[];
    location: Location;
    userInterested?: User[];
    author?: User;
    authorId?: number;
    phoneNumber: string;
    details: string;
    isPrivate: boolean;
};

export default Event;