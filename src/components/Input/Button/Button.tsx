import style from "./style.module.css";
import {TailSpin} from "react-loader-spinner";

type ButtonProps = {
    type: "button" | "submit" | "reset";
    text: string;
    className: "outline" | "primary";
    loading?: boolean;
}

export default function Button({type = "button", text, className, loading = false}: ButtonProps) {
    return (
        <button type={type} className={style[className]} disabled={loading}>
            {text}
            {
                loading && <TailSpin
                    visible={true}
                    height="20"
                    width="20"
                    color="#ffffff"
                    ariaLabel="tail-spin-loading"
                />
            }
        </button>
    )
}