import s from "./modules/Header.module.css";

export function Header() {
    return (
        <div className={s.container}>
            <img src='/logo.svg' className={s.logo} alt='logo' />
        </div>
    );
}
