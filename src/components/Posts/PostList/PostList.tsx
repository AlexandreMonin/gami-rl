'use client';

import {JSX, useState} from 'react';
import Post from '@/type/Post/Post';
import PostCard from '@/components/Posts/PostCard/PostCard';
import style from './style.module.css';
import PostForm from '../PostForm/PostForm';
import {User} from 'next-auth';

type PostListProps = {
    user?: User;
    posts: Post[]
}

export default function PostList({user, posts}: PostListProps): JSX.Element{
    const [showForm, setShowForm] = useState(false);

    console.log(user);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <main className={style.background}>
            <div className={style.container}>
                {
                    user && (
                        <div>
                            <button onClick={toggleForm} className={style.toggleButton}>
                                {showForm ? 'Cacher le formulaire' : 'Ajouter un post'}
                            </button>
                            {showForm && <PostForm authorId={user.id}/>}
                        </div>
                    )
                }
                <div className={style.postCard}>
                    {posts.map((post: Post) => (
                        <PostCard key={post.id} user={user} post={post}/>
                    ))}
                </div>
            </div>
        </main>
    );
};

