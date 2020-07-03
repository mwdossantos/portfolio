import s from "./modules/Header.module.css";

import Link from "next/link";

export function Header() {
    return (
        <div className={s.container}>
            <div className={s.left}>
                <Link href='/'>
                    <a>
                        <img src='/logo.svg' className={s.logo} alt='logo' />
                    </a>
                </Link>
                <p style={{ color: "white" }}>
                    My journey throughout the past 20 weeks which I thought was pretty wow
                </p>
            </div>

            <nav className={s.nav}>
                <a style={{ color: "white" }} href='mailto:bobaekers@hotmail.com' className='link'>
                    Contact: bobaekers@hotmail.com
                </a>
            </nav>
        </div>
    );
}
