import {JSX} from "react";
import Image from "next/image";

export default function NotLoggedAvatar(): JSX.Element {
    return (
        <Image src="/assets/not_logged_avatar.svg" alt="Avatar de compte déconnecté" width={40} height={100} />
    );
}