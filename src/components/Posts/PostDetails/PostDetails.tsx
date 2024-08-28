import TagGame from '@/components/Tag/TagGame';
import styles from './style.module.css';
import Post from "@/type/Post/Post";
import Game from '@/type/Game/Game';
import TagPlatform from '@/components/Tag/TagPlatform';
import Platform from '@/type/Platform/Platform';
import ResponseCard from '../ResponseCard/ResponseCard';
import ResponseForm from '../ResponseForm/ResponseForm';
import { User } from 'next-auth';

const PostDetails = ({ params, user } : {params: Post, user?: User }) => {
    return (
        <main className={styles.background}>
            <a className={styles.spanContainer} href={`/post`}><span>Toutes les questions</span></a>
            <div className={styles.card}>
                <div className={styles.div}>
                    <h2>{params.title} - {params.author.username}</h2>
                    <p>{params.content}</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    {params.games && params.games.map((game: Game) => (
                        <TagGame key={game.id} game={game} />
                    ))}
                    {params.platforms && params.platforms.map((platform: Platform) => (
                        <TagPlatform key={platform.id} platform={platform} />
                    ))}
                </div>
                {params.replies && params.replies.map((response: Post) => (
                    <ResponseCard params={response}/>
                ))}
                {user && (
                    <ResponseForm postId={params.id} authorId={user.id}/>
                )}
            </div>
        </main>
    );
} 

export default PostDetails;