import User from "@/type/User/User";
import style from "@/components/ProfileFavouriteGames/style.module.css";
import GameIcon from "@/components/GameIcon/GameIcon";
import { Game_User } from ".prisma/client";

export default async function ProfileFavouriteGames({player}: { player: User }) {
    const favoriteGames = player.game_user.filter((gameUser: Game_User) => [1, 2, 3].includes(gameUser.order))
        .sort((a: Game_User, b: Game_User) => a.order - b.order);

    console.log('favoriteGames '+ favoriteGames);
    return (
        <div>
            <div className={style.favourite_games_container}>
                {favoriteGames.map((gameUser: Game_User) => (
                    <GameIcon key={gameUser.gameId} game={gameUser.game} />
                ))}
            </div>
        </div>
    )
}