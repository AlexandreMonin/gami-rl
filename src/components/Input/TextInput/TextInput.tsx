import style from "./style.module.css";
import React from "react";

type TextInputProps = {
    name: string;
    id: string;
    type: React.HTMLInputTypeAttribute;
    placeholder: string;
    value: string;
    setValue: any;
    required?: boolean;
}

export default function TextInput({name, setValue, value, placeholder, required = false, id, type}: TextInputProps) {
    return (
        <input name={name} id={id} type={type} placeholder={placeholder} className={style.input} value={value}
               onChange={event => setValue(event.target.value)} required={required}/>
    )
}