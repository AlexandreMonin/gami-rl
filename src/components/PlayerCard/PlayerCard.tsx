// import {Player, Step} from "@prisma/client";
import User from "@/type/User/User";
import style from "./style.module.css";

export async function GetPlayerById(id: number): Promise<{ data : {
    }}> {

    const apiUrl = process.env.APP_URL;
    try {
        const res = await fetch(`${apiUrl}/api/users/${id}`, {
            cache: 'no-store', // Disable caching
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch player with ID ${id}: ${res.statusText}`);
        }
        return res.json();
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export default async function PlayerCard({id}: { id: number }) {

    const playerId = await GetPlayerById(id);
    const player = playerId.data as User;
    return (
        <a href={`/user/profile/${id}`}>
            <div className={style.player_card}>
                <h2 className={style.player_card_name}>{player.username}</h2>
                <p className={style.player_card_status}>{player.status}</p>
                <p className={style.player_card_biography}>{player.biography}</p>
            </div>
        </a>
    )
}