import {GetPlayerById} from "@/components/PlayerCard/PlayerCard"
import User from "@/type/User/User";
import style from "@/components/ProfileFavouriteGames/style.module.css";
import GameIcon from "@/components/GameIcon/GameIcon";

export default async function ProfileFavouriteGames({player}: { player: User }) {

    return (
        <div className={style.profile_page}>
            <div className={style.favourite_games_container}>
                <GameIcon player={player}/>
                <GameIcon player={player}/>
                <GameIcon player={player}/>
            </div>
        </div>
    )
}