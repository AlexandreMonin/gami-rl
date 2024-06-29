import React, {JSX} from "react";
import style from "./style.module.css";
import UpVote from "@/components/Posts/Votes/UpVote/UpVote";
import DownVote from "@/components/Posts/Votes/DownVote/DownVote";
import {User} from "next-auth";

type PostVotesProps = {
    votes: number;
    user: User | undefined
}

export default function PostVotes({votes, user}: PostVotesProps): JSX.Element {
    return (
        <div className={style.votes}>
            {
                user && <UpVote/>
            }
            <p>{votes} {
                !user && "votes"
            }</p>
            {
                user && <DownVote/>
            }
        </div>
    )
}