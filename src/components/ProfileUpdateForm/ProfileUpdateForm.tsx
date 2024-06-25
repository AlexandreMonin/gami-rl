"use client";
import { FormEvent, useEffect, useState } from "react";
import style from "./style.module.css";
import User from "@/type/User/User";

export default function ProfileUpdateForm({ player }: { player: User }) {
    const [status, setStatus] = useState<string>('');
    const [biography, setBiography] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [initialLoad, setInitialLoad] = useState<boolean>(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await fetch(`/api/users/${player.id}`);
                if (res.ok) {
                    const { data } = await res.json();
                    setStatus(data.status);
                    setBiography(data.biography);
                } else {
                    alert('Error fetching user data');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
                setInitialLoad(false); // Set initialLoad to false after data is fetched
            }
        };

        fetchUserData();
    }, [player.id]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch(`/api/users/${player.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status, biography }),
        });

        if (res.ok) {
            const data = await res.json();
            alert('User updated successfully!');
            console.log(data);
            location.reload();
        } else {
            const errorData = await res.json();
            alert('Error updating user: ' + errorData.error);
        }
    };

    if (initialLoad) {
        return <p className={style["loading-message"]}>Loading...</p>;
    }

    return (
        <div className={style.page}>
            <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.field}>
                    <label htmlFor="status"
                           className={style.labelInput}
                    >
                        Statut :</label>
                    <input
                        id="status"
                        type="text"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        disabled={loading}
                        className={style.userInput}
                    />
                </div>
                <div className={style.field}>
                    <label htmlFor="biography"
                           className={style.labelInput}>Biographie :</label>
                    <textarea
                        id="biography"
                        value={biography}
                        className={style.userInput}
                        onChange={(e) => setBiography(e.target.value)}
                        disabled={loading} // Optionally disable input while loading
                    />
                </div>
                <button type="submit" disabled={loading} className={style.button}>Modifier</button>
            </form>
        </div>
    );
}
