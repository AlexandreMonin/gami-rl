import style from "./style.module.css";

type ButtonProps = {
    type: "button" | "submit" | "reset";
    text: string;
    outline?: boolean;
}

export default function Button({type = "button", text, outline = false}: ButtonProps) {
    return (
        <button type={type} className={outline ? style.outline : style.primary}>
            {text}
        </button>
    )
}