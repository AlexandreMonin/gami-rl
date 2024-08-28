import {GetPlayerById} from "@/components/PlayerCard/PlayerCard"
import User from "@/type/User/User";
import style from "@/components/PlayerLinks/style.module.css";
import PlayerLinkItem from "@/components/PlayerLinkItem/PlayerLinkItem";

export default async function PlayerLinks({player}: { player: User }) {

    return (
        <div className={style.link_container}>
            <PlayerLinkItem player={player}/>
            <PlayerLinkItem player={player}/>
            <PlayerLinkItem player={player}/>
        </div>
    )
}