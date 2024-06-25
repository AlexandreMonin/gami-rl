"use client"
import style from "./style.module.css"
import {JSX} from "react";
import Location from "@/type/Event/Location";
import { FiCalendar } from "react-icons/fi";

type EventDatesProps = {
    start_date: Date;
    end_date: Date;
}

export default function EventDates({start_date, end_date}: EventDatesProps): JSX.Element {
    const start_day = ('0' + start_date.getDate()).slice(-2);
    const start_month = ('0' + (start_date.getMonth() + 1)).slice(-2);
    const start_year = start_date.getFullYear();
    const end_day = ('0' + end_date.getDate()).slice(-2);
    const end_month = ('0' + (end_date.getMonth() + 1)).slice(-2);
    const end_year = end_date.getFullYear();

    const start: string = `${start_day}/${start_month}/${start_year}`;
    const end: string = `${end_day}/${end_month}/${end_year}`;

    return (
        <div className={style.row}>
            <FiCalendar />
            <p>{start} - {end}</p>
        </div>
    )
}