import React, {JSX} from 'react';
import Post from '@/type/Post/Post';
import style from './style.module.css';
import Game from '@/type/Game/Game';
import Platform from '@/type/Platform/Platform';
import TagGame from '@/components/Tag/TagGame';
import TagPlatform from '@/components/Tag/TagPlatform';
import {PiCaretRightBold} from "react-icons/pi";
import PostVotes from "@/components/Posts/PostVotes/PostVotes";
import {User} from "next-auth";

interface PostProps {
    post: Post;
    user: User | undefined
}

export default async function PostCard({post, user}: PostProps): Promise<JSX.Element>  {

    return (
        // <a href={`/post/${post.id}`} className={style.card}>
        <div className={style.card}>
            <div className={style.title}>
                <h2>{post.title} - {post.author.username}</h2>
                <div className={style.tags}>
                    {post.games.map((game: Game) => (
                        <TagGame key={game.id} game={game}/>
                    ))}
                    {post.platforms.map((platform: Platform) => (
                        <TagPlatform key={platform.id} platform={platform}/>
                    ))}
                </div>
            </div>
            <p className={style.content}>{post.content}</p>
            <div className={style.footer}>
                <div className={style.footerLeft}>
                    <PostVotes user={user} votes={post.votes} postId={post.id} />
                    <p className={style.answerLength}>{post.replies.length} Réponses</p>
                </div>
                <a className={style.details}  href={`/post/${post.id}`}>Détails <PiCaretRightBold/></a>
            </div>
        </div>

        // </a>
    );
};
