import React from 'react';
import Post from '@/type/Post/Post';
import style from './style.module.css';
import Game from '@/type/Game/Game';
import Platform from '@/type/Platform/Platform';
import TagGame from '@/components/Tag/TagGame';
import TagPlatform from '@/components/Tag/TagPlatform';
import Image from "next/image";
import { PiCaretRightBold } from "react-icons/pi";
import UpVote from "@/components/Posts/Votes/UpVote/UpVote";
import DownVote from "@/components/Posts/Votes/DownVote/DownVote";

interface PostProps {
    post: Post;
}

const PostCard: React.FC<PostProps> = ({post}) => {
    return (
        <a href={`/post/${post.id}`} className={style.card}>
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
                    <div className={style.votes}>
                        <UpVote />
                        <p>{post.votes}</p>
                        <DownVote />
                    </div>
                    <p className={style.answerLength}>{post.replies.length} Réponses</p>
                </div>
                <p className={style.details}>Détails <PiCaretRightBold /></p>
            </div>

        </a>
);
};

export default PostCard;
