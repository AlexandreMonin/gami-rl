import {JSX} from "react";
import Image from "next/image";

export default function LoggedAvatar(): JSX.Element {
    return (
        <a href="/User/Signup">
            <Image src="/assets/not_logged_avatar.svg" alt="Avatar de compte déconnecté" width={150} height={100} />
        </a>
    );
}