import s from "./modules/Footer.module.css";

export function Footer() {
    return (
        <div className={s.container}>
            <img src='/logo.png' className={s.logo} alt='logo' />
            <nav className={s.nav}>
                <a href='#about' className='link'>
                    About
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
