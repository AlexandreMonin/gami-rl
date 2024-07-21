"use client"
import {useState} from "react";
import {IoMdHeartEmpty, IoMdHeart} from "react-icons/io";
import style from "./style.module.css";

type FollowButtonProps = {
    username: string | undefined;
    eventId: number;
    isInterested: boolean;
    setIsInterested: any;
}

export default function FollowButton({username, eventId, isInterested, setIsInterested}: FollowButtonProps): JSX.Element {
    const [isHovered, setIsHovered] = useState(false);

    const interested = async () => {
        setIsInterested(true);
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
                setIsInterested(false);
            } else {
                console.log(data);
            }

        } catch (e: any) {
            console.error(e);
            setIsInterested(false);
        }
    }

    const uninterested = async () => {
        setIsInterested(false);
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
                setIsInterested(true);
            } else {
                console.log(data);
            }

        } catch (e: any) {
            console.error(e);
            setIsInterested(true);
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
