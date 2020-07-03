import s from "./modules/Main.module.css";
import { Sidebar } from "./Sidebar";
import { ImageGrid } from "./ImageGrid";

export function Main() {
    return (
        <div className={s.holder}>
            <Sidebar />
            <ImageGrid />
        </div>
    );
}
