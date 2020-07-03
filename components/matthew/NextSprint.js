import s from "./modules/NextSprint.module.css";
import Link from "next/link";

export function NextSprint() {
    return (
        <div className={s.container}>
            <img src='https://images.unsplash.com/photo-1593110774833-20bcb2ca56d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' />
            <div className={s.right}>
                <h2 style={{ color: "white" }}>Next sprint</h2>
                <p
                    style={{
                        color: "white",
                        opacity: 0.5,
                        marginTop: "1.5rem",
                        marginBottom: "1.5rem",
                    }}
                >
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...
                </p>
                <Link href='/portfolios/matthew/sprint1'>
                    <a>Read More ></a>
                </Link>
            </div>
        </div>
    );
}
