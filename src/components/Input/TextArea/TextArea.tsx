import style from "./style.module.css";
import React from "react";

type TextAreaProps = {
    name: string;
    id: string;
    placeholder?: string;
    value: string;
    setValue: any;
    required?: boolean;
    label?: string;
    rows: number;
}

export default function TextArea({label, setValue, value, placeholder, required, id, name, rows}: TextAreaProps) {
    return (
        <div className={style.inputGroup}>
            {label && <label htmlFor={id} className={style.labelInput}>{label}</label>}
            <textarea name={name} id={id} rows={rows} className={style.userInput}
                      placeholder={placeholder}
                      value={value} onChange={event => setValue(event.target.value)} required={required}/>
        </div>
    )
}