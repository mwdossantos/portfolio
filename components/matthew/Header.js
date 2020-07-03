import s from "./modules/Header.module.css";

export function Header() {
    return (
        <div className={s.container} style={{ marginBottom: "1.5rem" }}>
            <h1>Matthew Wilson</h1>
            <img src='/pf.jpg' className={s.logo} alt='logo' />
        </div>
    );
}
