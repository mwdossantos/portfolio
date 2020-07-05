import s from "./modules/PortfolioItem.module.css";
import Link from "next/link";

import { imageUrlFor } from "../../services/sanity";

export function PortfolioItem(
    props = {
        data,
        link,
    }
) {
    if (!props.data) return null;

    return (
        <div className={s.container}>
            <img src={imageUrlFor(props.data.image)} />
            <div className={s.content}>
                <h1 style={{ color: "white", fontSize: 36 }}>{props.data.name}</h1>
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

                <div className={s.toolbar}>
                    <div className={s.toolbarItem}>
                        <p
                            style={{
                                color: "white",
                                opacity: 0.5,
                            }}
                        >
                            Sprint
                        </p>
                        <p
                            style={{
                                color: "white",
                            }}
                        >
                            {props.data.sprint}
                        </p>
                    </div>
                    <div className={s.toolbarItem}>
                        <p
                            style={{
                                color: "white",
                                opacity: 0.5,
                            }}
                        >
                            Duration
                        </p>
                        <p
                            style={{
                                color: "white",
                            }}
                        >
                            {props.data.duration}
                        </p>
                    </div>
                    <div className={s.toolbarItem}>
                        <p
                            style={{
                                color: "white",
                                opacity: 0.5,
                            }}
                        >
                            Deliverable
                        </p>
                        <p
                            style={{
                                color: "white",
                            }}
                        >
                            {props.data.deliverable}
                        </p>
                    </div>
                    <div className={s.toolbarItem}>
                        <p
                            style={{
                                color: "white",
                                opacity: 0.5,
                            }}
                        >
                            Grade
                        </p>
                        <p
                            style={{
                                color: "white",
                            }}
                        >
                            {props.data.grade}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
