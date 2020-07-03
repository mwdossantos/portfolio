import s from "./modules/NextSprint.module.css";
import Link from "next/link";
import { imageUrlFor } from "../../services/sanity";

export function NextSprint(props = { data, link }) {
    return (
        <div className={s.container}>
            <img src={imageUrlFor(props.data.image)} />
            <div className={s.right}>
                <h2 style={{ color: "white" }}>{props.data.name}</h2>
                <p
                    style={{
                        color: "white",
                        opacity: 0.5,
                        marginTop: "1.5rem",
                        marginBottom: "1.5rem",
                    }}
                >
                    {props.data.summary}
                </p>
                <Link href={props.link}>
                    <a>Read More ></a>
                </Link>
            </div>
        </div>
    );
}
