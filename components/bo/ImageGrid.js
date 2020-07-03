import s from "./modules/ImageGrid.module.css";
import { imageUrlFor } from "../../services/sanity";

export function ImageGrid(props = { data }) {
    return (
        <div className={s.holder}>
            <div className={s.grid}>
                {props.data.content.map((picture) => (
                    <img src={imageUrlFor(picture)} />
                ))}
            </div>
        </div>
    );
}
