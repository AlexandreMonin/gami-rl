"use client"
import {JSX, useEffect, useState} from "react";
import style from "./style.module.css";
import {usePathname} from "next/navigation";
import Link from "next/link";

type NavbarTabProps = {
    name: String;
    href: string;
}

export default function NavbarTab({ name, href } : NavbarTabProps): JSX.Element {
    const pathname: string = usePathname();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(pathname === href);
    }, [pathname, href]);

    return (
        <Link className={ isActive ? style.activeText : style.text} href={href}>
            {name}
        </Link>
    );
}