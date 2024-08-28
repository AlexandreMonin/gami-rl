import style from "./style.module.css";
import Link from "next/link";

type LinkToProps = {
    href: string;
    text: string;
    className: "buttonOutline" | "buttonPrimary" | "textPrimary";
}

export default function LinkTo({href, text, className}: LinkToProps) {
    return (
        <Link href={href} className={style[className]}>
            {text}
        </Link>
    )
}