import {JSX} from "react";
import Image from "next/image";

export default function NotLoggedAvatar(): JSX.Element {
    return (
        <a href="/User/Signup">
            <Image src="/assets/avatar_white.svg" alt="Avatar de compte déconnecté" width={40} height={100} />
        </a>
    );
}