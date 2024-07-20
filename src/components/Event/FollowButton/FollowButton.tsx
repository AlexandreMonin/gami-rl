"use client"
import { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import style from "./style.module.css";

type FollowButtonProps = {
    username: string | undefined;
    eventId: number;
}

export default function FollowButton({username, eventId}: FollowButtonProps): JSX.Element {
    const [isHovered, setIsHovered] = useState(false);

    const onClick = async () => {
        try {
            const response = await fetch("/api/events/interested", {
                method: "POST",
                headers: {
                    contentType: "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    eventId: eventId
                })
            });

            const data = await response.json();

            if (!response.ok) {
                console.error(data);
            } else {
                console.log(data);
            }

        } catch (e: any) {
            console.error(e);
        }
    }

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={style.button}
            onClick={onClick}
        >
            {isHovered ? (
                <IoMdHeart size={30} />
            ) : (
                <IoMdHeartEmpty size={30} />
            )}
        </div>
    );
}
