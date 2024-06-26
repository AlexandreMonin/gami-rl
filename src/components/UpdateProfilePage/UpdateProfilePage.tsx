import {GetPlayerById} from "@/components/PlayerCard/PlayerCard"
import User from "@/type/User/User";
import style from "./style.module.css";
import ProfileUpdateForm from "@/components/ProfileUpdateForm/ProfileUpdateForm";
import Link from "next/link";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default async function UpdateProfilePage({id}: { id: number }) {

    const playerId = await GetPlayerById(id);
    const player = playerId.data as User;
    const session: Session | null = await getServerSession(authOptions);

    return (
        <div className={style.page}>
            <h2 className={style.title}>Modifier mon profil</h2>
            {
                session &&
                <ProfileUpdateForm player={player}/>
            }

        </div>
    )
}