import {JSX} from "react";
import style from "./style.module.css";

type InformationToastProps = {
    isOpen: boolean;
    information: string;
    success: boolean;
}

export default function InformationToast({isOpen, information, success}: InformationToastProps): JSX.Element | null {
    if (!isOpen) {
        return null;
    }
    return (
      <div className={success ? style.cardSuccess: style.cardFail}>
        <p className={style.text}>{information}</p>
      </div>
    );
}