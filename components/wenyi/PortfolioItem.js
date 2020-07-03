import s from "./modules/PortfolioItem.module.css";
import Link from "next/link";
import { imageUrlFor } from "../../services/sanity";

export function PortfolioItem(props = { data, link }) {
    return (
        <div className={s.container}>
            <h1>{props.data.name}</h1>
            <img src={imageUrlFor(props.data.image)} />
            <Link href={props.link}>
                <button>Show more</button>
            </Link>
        </div>
    );
}
