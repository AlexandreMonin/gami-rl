import React from 'react';
import Post from '@/type/Post/Post';
import styles from './style.module.css';
import Game from '@/type/Game/Game';
import Platform from '@/type/Platform/Platform';
import TagGame from '@/components/Tag/TagGame';
import TagPlatform from '@/components/Tag/TagPlatform';

interface PostProps {
  post: Post;
}

const PostCard: React.FC<PostProps> = ({ post }) => {
  console.log(post);
  return (
    <a href={`/post/${post.id}`}>
      <li className={styles.card}>
        <h2>{post.title} - {post.author.username}</h2>
        <p>{post.content}</p>
        <div>
          {post.games.map((game: Game) => (
            <TagGame key={game.id} game={game} />
          ))}
          {post.platforms.map((platform: Platform) => (
            <TagPlatform key={platform.id} platform={platform} />
          ))}
        </div>
      </li>
    </a>
  );
};

export default PostCard;
