"use client";
import { FormEvent, useEffect, useState } from "react";
import style from "./style.module.css";
import User from "@/type/User/User";
import { Game_User, Game_Tag, Platform_Tag } from ".prisma/client";

export default function ProfileUpdateForm({ player }: { player: User }) {
    const [status, setStatus] = useState<string>('');
    const [biography, setBiography] = useState<string>('');
    const [games, setGames] = useState<Game_Tag[]>([]);
    const [platforms, setPlatforms] = useState<Platform_Tag[]>([]);
    const [favoriteGames, setFavoriteGames] = useState<{ gameId: number | null }[]>([]);
    const [selectedPlatformIds, setSelectedPlatformIds] = useState<number[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [initialLoad, setInitialLoad] = useState<boolean>(true);
    const [isPublicProfile, setIsPublicProfile] = useState<boolean>(false);
    // const [profilePictureUrl, setProfilePictureUrl] = useState<string>(''); // State for profile picture URL


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await fetch(`/api/users/${player.id}`);
                if (res.ok) {
                    const { data } = await res.json();
                    setStatus(data.status);
                    setBiography(data.biography);
                    setSelectedPlatformIds(data.UserPlatform.map((platform: { platformId: number }) => platform.platformId));
                    const initialFavoriteGames = data.game_user.map((gameUser: { gameId: number }) => ({
                        gameId: gameUser.gameId,
                    }));
                    setFavoriteGames(initialFavoriteGames);
                    setIsPublicProfile(data.isPublicProfile);
                    // setProfilePictureUrl(data.profilePictureUrl);
                } else {
                    alert('Error fetching user data');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
                setInitialLoad(false);
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
                    alert('Error fetching platforms');
                }
            } catch (error) {
                console.error('Error fetching platforms:', error);
            }
        };

        fetchUserData();
        fetchGames();
        fetchPlatforms();
    }, [player.id]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch(`/api/users/${player.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status,
                biography,
                favoriteGames: favoriteGames.map((item) => item.gameId).filter((id) => id !== null),
                platformIds: selectedPlatformIds,
                isPublicProfile,
            }),
        });

        if (res.ok) {
            const data = await res.json();
            alert('Votre profil a été mis à jour !');
            console.log(data);
            location.reload();
        } else {
            const errorData = await res.json();
            alert('Error updating user: ' + errorData.error);
        }
    };

    const handleGameChange = (e: React.ChangeEvent<HTMLSelectElement>, index: number) => {
        const gameId = parseInt(e.target.value);

        const isAlreadySelected = favoriteGames.some((game, idx) => idx !== index && game.gameId === gameId);

        if (!isAlreadySelected) {
            setFavoriteGames((prev) => {
                const updatedGames = [...prev];
                updatedGames[index] = { gameId };
                return updatedGames;
            });
        } else {
            alert('Ce jeu a déjà été ajouté.');
        }
    };

    const handleAddFavoriteGame = () => {
        setFavoriteGames((prev) => [...prev, { gameId: null }]);
    };

    const handleRemoveFavoriteGame = (index: number) => {
        setFavoriteGames((prev) => prev.filter((_, i) => i !== index));
    };

    const handlePlatformChange = (platformId: number) => {
        setSelectedPlatformIds((prev) =>
            prev.includes(platformId)
                ? prev.filter((id) => id !== platformId)
                : [...prev, platformId]
        );
    };

    if (initialLoad) {
        return <p className={style["loading-message"]}>Chargement...</p>;
    }

    return (
        <div className={style.page}>
            <form onSubmit={handleSubmit} className={style.form}>

                {/*<div className={style.field}>*/}
                {/*    <label htmlFor="profile-picture" className={style.labelInput}>Photo de profil :</label>*/}
                {/*    <input*/}
                {/*        id="profile-picture"*/}
                {/*        type="file"*/}
                {/*        accept="image/*"*/}
                {/*        onChange={(e) => handleProfilePictureChange(e.target.files)}*/}
                {/*        disabled={loading}*/}
                {/*        className={style.userInput}*/}
                {/*    />*/}
                {/*    {profilePictureUrl && (*/}
                {/*        <img src={profilePictureUrl} alt="Profile" className={style.profilePicture} />*/}
                {/*    )}*/}
                {/*</div>*/}
                <div className={style.field}>
                    <label htmlFor="status" className={style.labelInput}>Statut :</label>
                    <input
                        id="status"
                        type="text"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        disabled={loading}
                        className={style.userInput}
                    />
                </div>
                <div className={style.boolean_field}>
                    <input
                        type="checkbox"
                        id="public-profile"
                        checked={isPublicProfile}
                        onChange={(e) => setIsPublicProfile(e.target.checked)}
                        disabled={loading}
                        className={style.checkboxInput}
                    />
                    <label htmlFor="public-profile" className={style.checkboxlabelInput}>Profil public</label>
                    {isPublicProfile && (
                        <span className={style.additionalText}>
                            Le profil sera visible dans la liste des joueurs
                        </span>
                    )}
                </div>

                <div className={style.field}>
                    <label htmlFor="biography" className={style.labelInput}>Biographie :</label>
                    <textarea
                        id="biography"
                        value={biography}
                        onChange={(e) => setBiography(e.target.value)}
                        disabled={loading}
                        className={style.userInput}
                    />
                </div>
                <div className={style.field}>
                    <label className={style.labelInput}>Jeux préférés :</label>
                    <span className={style.gameAdditionalText}>
                            Ajoutez vos jeux préférés par ordre de préférence
                    </span>
                    <div>
                    {favoriteGames.map((favorite, index) => (
                        <div key={index} className={style.favoriteGame}>
                            <select
                                value={favorite.gameId || ''}
                                onChange={(e) => handleGameChange(e, index)}
                                className={style.gameSelect}
                                disabled={loading} required
                            >
                                <option value="">Sélectionner un jeu</option>
                                {games.map((game) => (
                                    <option key={game.id} value={game.id}>{game.name}</option>
                                ))}
                            </select>
                            <button
                                type="button"
                                onClick={() => handleRemoveFavoriteGame(index)}
                                className={style.removeButton}
                            >
                                Supprimer
                            </button>
                        </div>
                    ))}</div>
                    <button
                        type="button"
                        onClick={handleAddFavoriteGame}
                        disabled={loading || favoriteGames.length >= 10}
                        className={style.addButton}
                    >
                        Ajouter un jeu préféré
                    </button>
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
