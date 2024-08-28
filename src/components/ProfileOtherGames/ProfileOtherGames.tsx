import {GetPlayerById} from "@/components/PlayerCard/PlayerCard"
import User from "@/type/User/User";
import style from "@/components/ProfileOtherGames/style.module.css";
import SmallGameIcon from "@/components/SmallGameIcon/SmallGameIcon";
import { Game_User } from ".prisma/client";

export default async function ProfileOtherGames({player}: { player: User }) {

    const otherGames = player.game_user
        .filter((gameUser: Game_User) => gameUser.order > 3)
        .sort((a: Game_User, b: Game_User) => a.order - b.order);

    return (
        <div className={style.other_games_container}>
            {otherGames.map((gameUser: Game_User) => (
                <SmallGameIcon key={gameUser.gameId} game={gameUser.game} />
            ))}
        </div>
    )
}