import {GetPlayerById} from "@/components/PlayerCard/PlayerCard"
import User from "@/type/User/User";
import style from "@/components/PlayerLinkItem/style.module.css";

export default async function PlayerLinkItem({player}: { player: User }) {

    return (
        <div className={style.link_container}>
            <h2 className={style.player_card_name}>{player.username}</h2>
        </div>
    )
}