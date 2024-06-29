"use client"
import React, {JSX, useState} from "react";
import Image from "next/image";
import style from "../style.module.css";

export default function UpVote(): JSX.Element {
    const [clicked, setClicked] = useState<boolean>(true);

    const update = async () => {

    }

    return (
        <div onClick={() => setClicked(!clicked)}>
            {
                clicked ? (
                    <Image src="/assets/votes/upvote-true.svg" alt="Avatar de compte déconnecté" width={40}
                           height={100} className={style.votes}/>
                ) : (
                    <Image src="/assets/votes/upvote.svg" alt="Avatar de compte déconnecté" width={40}
                           height={100} className={style.votes}/>
                )
            }
        </div>
    )
}