import React, {JSX} from "react";
import style from "./style.module.css";
import UpVote from "@/components/Posts/Votes/UpVote/UpVote";
import DownVote from "@/components/Posts/Votes/DownVote/DownVote";
import {User} from "next-auth";

type PostVotesProps = {
    votes: number;
    user: User | undefined;
    postId: number
}

export default function PostVotes({votes, user, postId}: PostVotesProps): JSX.Element {
    return (
        <div className={style.votes}>
            {
                user && <UpVote userId={user.id} postId={postId}/>
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