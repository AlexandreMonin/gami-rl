import {GetPlayerById} from "@/components/PlayerCard/PlayerCard"
import User from "@/type/User/User";
import style from "@/components/ProfilePage/style.module.css";
import ProfileBanner from "@/components/ProfileBanner/ProfileBanner";
import ProfileFavouriteGames from "@/components/ProfileFavouriteGames/ProfileFavouriteGames";
import ProfileOtherGames from "@/components/ProfileOtherGames/ProfileOtherGames";
import PlayerLinks from "@/components/PlayerLinks/PlayerLinks";

export default async function ProfilePage({id}: { id: number }) {

    const playerId = await GetPlayerById(id);
    const player = playerId.data as User;
    return (
        <div className={style.page}>
            <div className={style.profile_page}>
                <ProfileBanner player={player}/>
                <div className={style.container}>
                    <div className={style.favourite_container}>
                        <ProfileFavouriteGames player={player}/>
                    </div>
                    <div className={style.link_container}>
                        <PlayerLinks player={player}/>
                    </div>
                </div>
                <div className={style.other_title}>
                    <h3>Mes autres jeux</h3>
                </div>
                <div className={style.other_container}>
                    <ProfileOtherGames player={player}/>
                </div>
            {/*<div>*/}
            {/*    <h3>ProfileGamesList</h3>*/}
            {/*    <span>ProfileGames</span>*/}
            {/*</div>*/}
        </div>
        </div>
    )
}