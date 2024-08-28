import {GetPlayerById} from "@/components/PlayerCard/PlayerCard"
import User from "@/type/User/User";
import style from "./style.module.css";

export default async function ProfileBanner({player}: { player: User }) {

    return (
        <div>
            <div className={style.banner_container}>
                {/*{player.profileBannerFile ? (*/}
                {/*    <div className={style.banner_image}>*/}
                {/*        <img*/}
                {/*            src={`/attachments/profile/${player.id}/banner/${player.profileBannerFile}`}*/}
                {/*            alt="Profile Banner"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*) : (*/}
                <div className={style.banner_image}></div>
                {/*)}*/}
                <div className={style.row_container}>
                    <div className={style.circle}>
                        <img
                            src="/assets/images/profile_picture.png"
                            alt="Profile Picture"
                            className={style.circle_image}
                        />
                    </div>
                    {/*)}*/}
                    <div className={style.banner_content}>
                        <div className={style.row_top_banner_container}>
                            <div className={style.profile_name}>
                                <h1 >{player.username}</h1>
                            </div>
                            <div className={style.profile_platform_icons}>
                                {/*<span>GamePlatforms</span>*/}
                                {/*<span className={style.dot}></span>*/}
                                {/*<span className={style.dot}></span>*/}
                                {/*<span className={style.dot}></span>*/}
                                {/*<span className={style.dot}></span>*/}
                            </div>
                        </div>
                        <div className={style.row_bottom_banner_container}>
                        <div className={style.profile_status}>
                            <p>{player.status}</p>
                        </div>
                        {/*<div className={style.profile_settings_buttons}>*/}
                        {/*    <span className={style.buttons}></span>*/}
                        {/*    <span className={style.buttons}></span>*/}
                        {/*    <span className={style.buttons}></span>*/}
                        {/*</div>*/}
                    </div>
                    </div>
                </div>

            </div>
            <div className={style.profile_biography}>
                <span>{player.biography}</span>
            </div>
        </div>
    )
}