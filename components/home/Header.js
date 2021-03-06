import s from "./modules/Header.module.css";

export function Header() {
    return (
        <div className={s.container}>
            <img src='/logo.svg' className={s.logo} alt='logo' />
            <nav className={s.nav}>
                <a href='#about' className='link'>
                    About us
                </a>
                <a href='#portfolios' className='link'>
                    Portfolios
                </a>
                <a href='#contact' className='link'>
                    Contact
                </a>
            </nav>
        </div>
    );
}
