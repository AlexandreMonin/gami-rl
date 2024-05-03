import {JSX} from "react";
import Image from "next/image";
import Link from "next/link";

export default function NotLoggedAvatar(): JSX.Element {
    return (
        <Link href="/user/signin">
            <Image src="/assets/avatar_white.svg" alt="Avatar de compte déconnecté" width={40} height={100} />
        </Link>
    );
}