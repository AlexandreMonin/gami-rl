import {GetPlayerById} from "@/components/PlayerCard/PlayerCard"
import User from "@/type/User/User";
import style from "@/components/ProfilePage/style.module.css";
import ProfileBanner from "@/components/ProfileBanner/ProfileBanner";

export default async function ProfilePage({id}: { id: number }) {

    const playerId = await GetPlayerById(id);
    const player = playerId.data as User;
    return (
        <div>
        {/*// <div className={style.player_card}>*/}
        {/*    <h1 className={style.player_card_name}>{player.username}</h1>*/}
        {/*    <p className={style.player_card_status}>{player.status}</p>*/}
        {/*// </div>*/}
        {/*    <div><span>ProfileBanner</span></div>*/}
        {/*    <div className={style.player_card_biography}><span>{player.biography}</span></div>*/}
            <ProfileBanner player={player}/>
            <div>
            <div><span>FavouriteGames</span></div>
            <div><span>PlayerLinks</span></div>
            </div>

            <h3>Mes autres jeux</h3>
            <div>
                <h3>ProfileGamesList</h3>
                <span>ProfileGames</span>
            </div>
        </div>
    )
}