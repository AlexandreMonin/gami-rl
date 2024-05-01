import {JSX} from "react";
import style from "./style.module.css"
import Image from "next/image";

type LoggedAvatarProps = {
    username: string;
    status: string;
}

export default function LoggedAvatar({username, status}: LoggedAvatarProps): JSX.Element {
    return (
        <div className={style.container}>
            <div className={style.visible}>
                <div>
                    <p className={style.username}>
                        {username}
                    </p>
                    <p className={style.status}>
                        {status}
                    </p>
                </div>
                <div>
                    <Image src="/assets/avatar_black.svg" alt="Avatar de compte déconnecté" width={45} height={100}/>
                </div>
            </div>

            <div className={style.wrap}>
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </div>
        </div>
    );
}