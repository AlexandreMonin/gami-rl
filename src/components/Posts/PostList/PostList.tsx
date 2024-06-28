'use client';

import {useState, useEffect} from 'react';
import Post from '@/type/Post/Post';
import PostCard from '@/components/Posts/PostCard/PostCard';
import styles from './style.module.css';
import PostForm from '../PostForm/PostForm';
import {User} from 'next-auth';

type PostListProps = {
    user?: User;
    posts: Post[]
}

const PostList = ({user, posts}: PostListProps) => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <main className={styles.background}>
            <div className={styles.container}>
                {
                    user && (
                        <div>
                            <button onClick={toggleForm} className={styles.toggleButton}>
                                {showForm ? 'Cacher le formulaire' : 'Ajouter un post'}
                            </button>
                            {showForm && <PostForm authorId={user.id}/>}
                        </div>
                    )
                }
                <ul>
                    {posts.map((post: Post) => (
                        <PostCard key={post.id} post={post}/>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default PostList;
