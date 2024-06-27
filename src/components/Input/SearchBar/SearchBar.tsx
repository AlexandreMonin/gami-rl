"use client"
import style from "./style.module.css";
import React, {useEffect, useState} from "react";

type TextInputProps = {
    value: string;
    setValue: any;
    apiRoute: string;
    apiRouteEmpty: string;
    setResponseData: any;
    setLoading: any;
}

export default function SearchBar({
                                      setValue,
                                      value,
                                      apiRoute,
                                      apiRouteEmpty,
                                      setResponseData,
                                      setLoading
                                  }: TextInputProps) {
    const [debouncedTerm, setDebouncedTerm] = useState(value);

    // Effect to update debounced term after 2 seconds of no input change
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedTerm(value);
        }, 2000);

        // Cleanup the timeout if the effect is re-run (if the user types within 2 seconds)
        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    // Effect to perform fetch with the debounced term
    useEffect(() => {
        setLoading(true);
        if (debouncedTerm) {
            const fetchData = async () => {
                const response = await fetch(`${apiRoute}/${value}`);
                const data = await response.json();
                setResponseData(data);
                setLoading(false)
            };

            fetchData();
        } else {
            const fetchData = async () => {
                const response = await fetch(`${apiRouteEmpty}`);
                const data = await response.json();
                setResponseData(data);
                setLoading(false)
            };

            fetchData();
        }
    }, [debouncedTerm]);

    const handleInputChange = (e: any) => {
        setValue(e.target.value);
    };

    return (
        <div className={style.inputGroup}>
            <input name="search" id="search" type="search" placeholder="Rechercher..." className={style.input}
                   value={value}
                   onChange={event => setValue(event.target.value)} required/>
        </div>
    )
}