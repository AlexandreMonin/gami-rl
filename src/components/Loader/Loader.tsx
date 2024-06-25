"use client"
import style from "./style.module.css"
import {JSX} from "react";
import {TailSpin} from "react-loader-spinner";

export default function Loader(): JSX.Element {
    return (
        <h3 className={style.loader}><TailSpin
            visible={true}
            height="30"
            width="30"
            color="#5F0099"
            ariaLabel="tail-spin-loading"
        /> Chargement...</h3>
    )
}