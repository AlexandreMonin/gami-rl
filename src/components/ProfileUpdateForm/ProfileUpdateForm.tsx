"use client";
import { FormEvent, useEffect, useState } from "react";
import style from "./style.module.css";
import User from "@/type/User/User";
import {Game_Tag, Platform_Tag} from ".prisma/client";

export default function ProfileUpdateForm({ player }: { player: User }) {
    const [status, setStatus] = useState<string>('');
    const [biography, setBiography] = useState<string>('');
    const [games, setGames] = useState<Game_Tag[]>([]);
    const [platforms, setPlatforms] = useState<Platform_Tag[]>([]);
    const [selectedGameIds, setSelectedGameIds] = useState<number[]>([]);
    const [selectedPlatformIds, setSelectedPlatformIds] = useState<number[]>([]);
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
                    setSelectedGameIds(data.games.map((game: Game_Tag) => game.id));
                    setSelectedPlatformIds(data.platforms.map((platform: Platform_Tag) => platform.id));
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

        const fetchGames = async () => {
            try {
                const res = await fetch(`/api/games`);
                if (res.ok) {
                    const { data } = await res.json();
                    setGames(data);
                } else {
                    alert('Error fetching games');
                }
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        const fetchPlatforms = async () => {
            try {
                const res = await fetch(`/api/platforms`);
                if (res.ok) {
                    const { data } = await res.json();
                    setPlatforms(data);
                } else {
                    alert('Error fetching games');
                }
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };
        fetchGames();
        fetchUserData();
        fetchPlatforms();
    }, [player.id]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch(`/api/users/${player.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status, biography, gameIds: selectedGameIds, platformIds: selectedPlatformIds }),
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

    const handleGameChange = (gameId: number) => {
        setSelectedGameIds((prev) =>
            prev.includes(gameId)
                ? prev.filter((id) => id !== gameId)
                : [...prev, gameId]
        );
    };

    const handlePlatformChange = (platformId: number) => {
        setSelectedPlatformIds((prev) =>
            prev.includes(platformId)
                ? prev.filter((id) => id !== platformId)
                : [...prev, platformId]
        );
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
                <div className={style.field}>
                    <label className={style.labelInput}>Jeux :</label>
                    {games.map((game) => (
                        <div key={game.id} className={style.gameCheckbox}>
                            <input
                                type="checkbox"
                                id={`game-${game.id}`}
                                checked={selectedGameIds.includes(game.id)}
                                onChange={() => handleGameChange(game.id)}
                                disabled={loading}
                            />
                            <label htmlFor={`game-${game.id}`}>{game.name}</label>
                        </div>
                    ))}
                </div>
                <div className={style.field}>
                    <label className={style.labelInput}>Plateformes :</label>
                    {platforms.map((platform) => (
                        <div key={platform.id} className={style.platformCheckbox}>
                            <input
                                type="checkbox"
                                id={`platform-${platform.id}`}
                                checked={selectedPlatformIds.includes(platform.id)}
                                onChange={() => handlePlatformChange(platform.id)}
                                disabled={loading}
                            />
                            <label htmlFor={`platform-${platform.id}`}>{platform.name}</label>
                        </div>
                    ))}
                </div>
                <button type="submit" disabled={loading} className={style.button}>Modifier</button>
            </form>
        </div>
    );
}
