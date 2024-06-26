import PlayerCard from "@/components/PlayerCard/PlayerCard"
import User from "@/type/User/User";
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
    const all_players = await retrievePlayers();
    const players = all_players.data.filter((player) => player.isPublicProfile);
    const data = players as User[];


    return (
        <div className={style.container}>
            <div className={style.player_container}>
                 {data.map((player) => (
                    <PlayerCard key={player.id} id={player.id} aria-label="Player" />
                ))}
            </div>
        </div>
    );
}