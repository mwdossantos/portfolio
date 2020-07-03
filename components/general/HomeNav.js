import s from "./modules/HomeNav.module.css";

import Link from "next/link";

export function HomeNav(props = { link, label }) {
    return (
        <div className={s.holder}>
            <Link href={props.link}>
                <a>{props.label}</a>
            </Link>
        </div>
    );
}
