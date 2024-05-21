import React from 'react';
import Post from '@/type/Post/Post';
import styles from './style.module.css';

interface PostProps {
  post: Post;
}

const PostCard: React.FC<PostProps> = ({ post }) => {
  const {
    id,
    title,
    content,
    author,
    games,
    platforms
  } : {
    id: number,
    title: string,
    content: string,
    author: string,
    games: string[],
    platforms: string[]
  } = post;

  return (
    <a href={`/post/${id}`}>
      <li className={styles.card}>
        <h2>{title} - {author}</h2>
        <p>{content}</p>
      </li>
    </a>
  );
};

export default PostCard;
