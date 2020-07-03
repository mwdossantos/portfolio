import s from "./modules/Main.module.css";
import { Sidebar } from "./Sidebar";
import { ImageGrid } from "./ImageGrid";

export function Main(props = { data }) {
    return (
        <div className={s.holder}>
            <Sidebar data={props.data} />
            <ImageGrid data={props.data} />
        </div>
    );
}
