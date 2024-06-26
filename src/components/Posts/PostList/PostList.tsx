'use client';

import { useState, useEffect } from 'react';
import Post from '@/type/Post/Post';
import PostCard from '@/components/Posts/PostCard/PostCard';
import styles from './style.module.css';
import PostForm from '../PostForm/PostForm';

const retrievePosts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts`, {cache: 'no-cache'});
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const response = await res.json();
    return response.data;
    
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const retrievedPosts = await retrievePosts();
      setPosts(retrievedPosts);
    };

    fetchPosts();
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <main className={styles.background}>
      <div className={styles.container}>
        <button onClick={toggleForm} className={styles.toggleButton}>
          {showForm ? 'Cacher le formulaire' : 'Ajouter un post'}
        </button>
        {showForm && <PostForm authorId={1} />}
        <ul>
          {posts.filter((post: Post) => post.isPost).map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default PostList;
