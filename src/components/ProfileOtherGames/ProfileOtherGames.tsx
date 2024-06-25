import {GetPlayerById} from "@/components/PlayerCard/PlayerCard"
import User from "@/type/User/User";
import style from "@/components/ProfileOtherGames/style.module.css";
import SmallGameIcon from "@/components/SmallGameIcon/SmallGameIcon";

export default async function ProfileOtherGames({player}: { player: User }) {

    return (
        <div className={style.profile_page}>
            <div className={style.other_games_container}>
                <SmallGameIcon player={player}/>
                <SmallGameIcon player={player}/>
                <SmallGameIcon player={player}/>
                <SmallGameIcon player={player}/>
                <SmallGameIcon player={player}/>
                <SmallGameIcon player={player}/>
                <SmallGameIcon player={player}/>
                <SmallGameIcon player={player}/>
                <SmallGameIcon player={player}/>
                <SmallGameIcon player={player}/>
            </div>
        </div>
    )
}