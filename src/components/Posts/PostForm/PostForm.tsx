'use client';

import { useState, useEffect } from "react";
import styles from './style.module.css';

const PostForm = ({ authorId }: { authorId: number }) => {
    const [postContent, setPostContent] = useState('');
    const [title, setTitle] = useState('');
    const [gameTags, setGameTags] = useState([]);
    const [platformTags, setPlatformTags] = useState([]);
    const [selectedGameTag, setSelectedGameTag] = useState('');
    const [selectedPlatformTag, setSelectedPlatformTag] = useState('');

    useEffect(() => {
        // Fetch game tags
        fetch(`${process.env.NEXT_PUBLIC_URL}/api/gametags`)
            .then((res) => res.json())
            .then((data) => setGameTags(data.tags))
            .catch((error) => console.error('Error fetching game tags:', error));

        // Fetch platform tags
        fetch(`${process.env.NEXT_PUBLIC_URL}/api/platformtags`)
            .then((res) => res.json())
            .then((data) => setPlatformTags(data.tags))
            .catch((error) => console.error('Error fetching platform tags:', error));
    }, []);

    const handleInputChange = (e: any) => {
        setPostContent(e.target.value);
    };

    const handleTitleChange = (e: any) => {
        setTitle(e.target.value);
    };

    const handleGameTagChange = (e: any) => {
        setSelectedGameTag(e.target.value);
    };

    const handlePlatformTagChange = (e: any) => {
        setSelectedPlatformTag(e.target.value);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    authorId,
                    title,
                    content: postContent,
                    gameTag: selectedGameTag,
                    platformTag: selectedPlatformTag,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit response');
            }

            const result = await response.json();
            // Reset the input fields after submission
            setPostContent('');
            setTitle('');
            setSelectedGameTag('');
            setSelectedPlatformTag('');
        } catch (error) {
            console.error('Error submitting post:', error);
        }
    };

    return (
        <main className={styles.background}>
            <div className={styles.card}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="Titre du post"
                        required
                        className={styles.input}
                    />
                    <textarea
                        value={postContent}
                        onChange={handleInputChange}
                        placeholder="Écrire un post..."
                        required
                        className={styles.textarea}
                    />
                    <select value={selectedGameTag} onChange={handleGameTagChange} className={styles.select}>
                        <option value="">Sélectionner un tag de jeu</option>
                        {gameTags.map((tag: any) => (
                            <option key={tag.id} value={tag.id}>
                                {tag.name}
                            </option>
                        ))}
                    </select>
                    <select value={selectedPlatformTag} onChange={handlePlatformTagChange} className={styles.select}>
                        <option value="">Sélectionner un tag de plateforme</option>
                        {platformTags.map((tag: any) => (
                            <option key={tag.id} value={tag.id}>
                                {tag.name}
                            </option>
                        ))}
                    </select>
                    <button type="submit" className={styles.button}>Envoyer</button>
                </form>
            </div>
        </main>
    );
};

export default PostForm;
