import PlayerCard from "@/components/PlayerCard/PlayerCard"
import style from "@/components/PlayerPage/style.module.css";

const retrievePlayers = async () => {
    try {
        const apiUrl = process.env.APP_URL;
        const res = await fetch(`${apiUrl}/api/users/players`, { cache: 'no-store' });
        console.log(res);
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export default async function PlayerPage() {
    let players = [];
    try {
        const all_players = await retrievePlayers();
        players = all_players.data.filter((player: any) => player.isPublicProfile);
    } catch (error) {
        console.error('Error fetching players:', error);
    }

    return (
        <div className={style.container}>
            <div className={style.page_title}>
                {players.length != 0 && <h2>Trouvez vos meilleurs coéquipiers</h2>}
                {players.length === 0 && <p className={style.noPlayers}>Il n&apos;y a pas de joueurs pour le moment.</p>}
            </div>
            <div className={style.player_container}>
                {players.map((player: any) => (
                    <PlayerCard key={player.id} id={player.id} aria-label="Player" />
                ))}
            </div>
        </div>
    );
}
