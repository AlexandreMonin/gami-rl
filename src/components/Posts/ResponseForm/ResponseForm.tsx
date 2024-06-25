'use client';

import { useState } from "react";
import styles from './style.module.css';

const ResponseForm = ({ postId, authorId }: {postId: number, authorId: number}) => {
    const [responseContent, setResponseContent] = useState('');
    const [title, setTitle] = useState('');

    const handleInputChange = (e: any) => {
        setResponseContent(e.target.value);
    };

    const handleTitleChange = (e: any) => {
        setTitle(e.target.value);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts/${postId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    postId: postId,
                    authorId: authorId,
                    title: title,
                    content: responseContent,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit response');
            }

            const result = await response.json();
            console.log('Response submitted:', result);
            // Reset the input fields after submission
            setResponseContent('');
            setTitle('');
        } catch (error) {
            console.error('Error submitting response:', error);
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
                        placeholder="Titre de la réponse"
                        required
                        className={styles.input}
                    />
                    <textarea
                        value={responseContent}
                        onChange={handleInputChange}
                        placeholder="Écrire une réponse..."
                        required
                        className={styles.textarea}
                    />
                    <button type="submit" className={styles.button}>Envoyer</button>
                </form>
            </div>
        </main>
    );
}

export default ResponseForm;
