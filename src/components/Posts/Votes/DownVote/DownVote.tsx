"use client"
import React, { JSX } from "react";
import Image from "next/image";

export default function DownVote(): JSX.Element {
    return (
        <Image src="/assets/votes/downvote.svg" alt="Avatar de compte déconnecté" width={40}
               height={100}/>
    )
}