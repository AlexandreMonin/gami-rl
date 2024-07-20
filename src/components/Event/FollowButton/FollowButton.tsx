"use client"
import {useState} from "react";
import {IoMdHeartEmpty, IoMdHeart} from "react-icons/io";
import style from "./style.module.css";

type FollowButtonProps = {
    username: string | undefined;
    eventId: number;
    isInterested: boolean;
}

export default function FollowButton({username, eventId, isInterested}: FollowButtonProps): JSX.Element {
    const [isHovered, setIsHovered] = useState(false);

    const interested = async () => {
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

    const uninterested = async () => {
        try {
            const response = await fetch("/api/events/uninterested", {
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
        isInterested ? (
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={style.button}
                onClick={uninterested}
            >
                {isHovered ? (
                    <IoMdHeartEmpty size={30}/>
                ) : (
                    <IoMdHeart size={30}/>
                )}
            </div>
        ) : (
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={style.button}
                onClick={interested}
            >
                {isHovered ? (
                    <IoMdHeart size={30}/>
                ) : (
                    <IoMdHeartEmpty size={30}/>
                )}
            </div>
        )
    )
        ;
}
