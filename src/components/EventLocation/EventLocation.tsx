"use client"
import style from "./style.module.css"
import {JSX} from "react";
import Location from "@/type/Event/Location";
import { FiMapPin } from "react-icons/fi";

type EventLocationProps = {
    location: Location
}

export default function EventLocation({location}: EventLocationProps): JSX.Element {
    console.log(location);
    return (
        <div className={style.row}>
            <FiMapPin />
            <p>{location.address}, {location.zip_code} {location.city}</p>
        </div>
    )
}