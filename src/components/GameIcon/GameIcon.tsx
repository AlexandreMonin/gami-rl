import style from "@/components/GameIcon/style.module.css";
import {Game_Tag} from ".prisma/client";
import { MdDoNotDisturbAlt } from "react-icons/md";

export default async function GameIcon({game}: { game: Game_Tag }) {

    return (
        <div className={style.container}>
            <div className={style.game_container}>
                {game?.image_url ? (
                    <div className={style.game_card_block}>
                        <img src={game.image_url} alt={game.name} className={style.game_card_icon}/>
                    </div>
                ) : (
                    <div className={style.game_card_block}>
                        <MdDoNotDisturbAlt className={style.game_card_icon} />
                        {/* Placeholder content when image_url is not available */}
                    </div>
                )}

                {/*<div className={style.game_card_icon}>*/}
                {/*</div>*/}
                <div className={style.game_name}>
                    <span>{game.name}</span>
                </div>
            </div>
        </div>
    )
}