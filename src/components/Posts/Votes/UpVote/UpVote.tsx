"use client"
import React, { JSX } from "react";
import Image from "next/image";

export default function UpVote(): JSX.Element {
    return (
        <Image src="/assets/votes/upvote.svg" alt="Avatar de compte déconnecté" width={40}
               height={100}/>
    )
}