import s from './modules/Header.module.css'

export function Header() {
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
    )
}
