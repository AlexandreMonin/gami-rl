'use client';

import { useState, useEffect } from 'react';
import Post from '@/type/Post/Post';
import PostCard from '@/components/Posts/PostCard/PostCard';
import styles from './style.module.css';
import PostForm from '../PostForm/PostForm';
import { User } from 'next-auth';

const retrievePosts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts`, { cache: 'no-cache' });
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

const PostList = ({user}: {user?: User}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const filteredPosts = posts.filter((post: Post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.isPost &&
      (post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.games.some(game => game.name.toLowerCase().includes(query)) ||
        post.platforms.some(platform => platform.name.toLowerCase().includes(query)))
    );
  });

  return (
    <main className={styles.background}>
      <div className={styles.container}>
      {user && (
        <div>
          <button onClick={toggleForm} className={styles.toggleButton}>
            {showForm ? 'Cacher le formulaire' : 'Ajouter un post'}
          </button>
          {showForm && <PostForm authorId={user.id} />}
        </div>
      )}
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchQuery}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
        <ul>
          {filteredPosts.map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default PostList;
