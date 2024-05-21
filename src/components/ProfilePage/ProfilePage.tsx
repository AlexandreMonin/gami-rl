import {GetPlayerById} from "@/components/PlayerCard/PlayerCard"
import User from "@/type/User/User";
import style from "@/components/ProfilePage/style.module.css";

export default async function ProfilePage({id}: { id: number }) {

    const playerId = await GetPlayerById(id);
    const player = playerId.data as User;
    return (
        <div>
        {/*// <div className={style.player_card}>*/}
        {/*//     <h2 className={style.player_card_name}>{player.username}</h2>*/}
        {/*//     <p className={style.player_card_status}>{player.status}</p>*/}
            <p className={style.player_card_biography}>{player.biography}</p>
        {/*// </div>*/}
            <div><span>ProfileBanner</span></div>
            <div><span>Biography</span></div>
            <div><span>FavouriteGames</span></div>
            <div><span>PlayerLinks</span></div>
            <div><span>ProfileGames</span></div>
        </div>
    )
}