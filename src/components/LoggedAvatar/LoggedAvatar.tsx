import {JSX} from "react";
import style from "./style.module.css"
import Image from "next/image";
import SignOutButton from "@/components/SignOutButton/SignOutButton";
import Link from "next/link";

type LoggedAvatarProps = {
    username: string;
    status: string;
    id: number;
}

export default function LoggedAvatar({username, status, id}: LoggedAvatarProps): JSX.Element {
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
                <Link className={style.links} href={`/user/profile/${id}`}>
                    <Image src="/assets/profile_dropdown/profile.svg" alt="Logo de profile" width={25} height={100}/>
                    <p>Mon profil</p>
                </Link>
                {/*<Link className={style.links} href="">*/}
                {/*    <Image src="/assets/profile_dropdown/friends.svg" alt="Logo des amis" width={25} height={100}/>*/}
                {/*    <p>Mes amis</p>*/}
                {/*</Link>*/}
                <Link className={style.links} href={`/user/update/${id}`}>
                    <Image src="/assets/profile_dropdown/settings.svg" alt="Logo des paramètres" width={25} height={100}/>
                    <p>Paramètres</p>
                </Link>
                <SignOutButton />
            </div>
        </div>
    );
}