import React from 'react';
import Post from '@/type/Post/Post';
import style from './style.module.css';
import Game from '@/type/Game/Game';
import Platform from '@/type/Platform/Platform';
import TagGame from '@/components/Tag/TagGame';
import TagPlatform from '@/components/Tag/TagPlatform';
import Image from "next/image";
import { PiCaretRightBold } from "react-icons/pi";

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
                        <Image src="/assets/votes/upvote.svg" alt="Avatar de compte déconnecté" width={30}
                               height={100}/>
                        <p>{post.votes}</p>
                        <Image src="/assets/votes/downvote.svg" alt="Avatar de compte déconnecté" width={30}
                               height={100}/>
                    </div>
                    <p className={style.answerLength}>{post.replies.length} Réponses</p>
                </div>
                <p className={style.details}>Détails <PiCaretRightBold /></p>
            </div>

        </a>
);
};

export default PostCard;
