import {DateTime} from "next-auth/providers/kakao";
import User from "@/type/User/User";
import Link from "@/type/Link";

type Event = {
    id: number;
    name: string;
    startDate: DateTime;
    endDate: DateTime;
    links: Link[];
    location: Location;
    userInterested: User[];
    author: User;
    phoneNumber: string;
    details: string;
    isPrivate: boolean;
};

export default Event;