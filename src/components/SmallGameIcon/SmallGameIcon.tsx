import User from "@/type/User/User";
import style from "@/components/SmallGameIcon/style.module.css";

export default async function SmallGameIcon({player}: { player: User }) {

    return (
        <div className={style.container}>
            <div className={style.game_container}>
                <div className={style.game_card_icon}>
                </div>
                <div className={style.game_name}>
                    <span>The House in Fata Morgana - Dreams of the Revenants Edition </span>
                </div>
            </div>
        </div>
    )
}