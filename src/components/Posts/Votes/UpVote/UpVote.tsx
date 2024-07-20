"use client"
import React, {JSX, useEffect, useState} from "react";
import Image from "next/image";
import style from "../style.module.css";

type UpVoteProps = {
    userId: number;
    postId: number;
}

export default function UpVote({userId, postId}: UpVoteProps): JSX.Element {
    const [clicked, setClicked] = useState<boolean>(true);

    useEffect(() => {
        const update = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts/liked`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId,
                        postId,
                        votedType: "up",
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to submit response');
                }
                console.log("upvoted")
            } catch (e: any) {
                console.error(e);
            }
        };

        update();
    }, [clicked]);

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