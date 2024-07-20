"use client"
import { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import style from "./style.module.css";

export default function FollowButton(): JSX.Element {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={style.button}
        >
            {isHovered ? (
                <IoMdHeart size={30} />
            ) : (
                <IoMdHeartEmpty size={30} />
            )}
        </div>
    );
}
