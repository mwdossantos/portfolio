import s from "./modules/PortfolioItem.module.css";
import Link from "next/link";

export function PortfolioItem() {
    return (
        <div className={s.container}>
            <img src='https://s3-alpha-sig.figma.com/img/6742/688b/318486b85b32f3dfee62647a60d59788?Expires=1594598400&Signature=JqAbisAm1WtzxMTpZc745eKo61Y-rYEddZ0dnTChARrlRpJOW0Unqz8Obk3vqxRPJbfDhnqboVcncavcVAv71t0uymvagWzs24MLa7u2qTOqXYss5LUYZuu8boCzcgKA88aCW5NquCe8ExsnzG2OJyvgMeT7dHhHLxBxMCskP1-TUCQkKC-3LeQuaqG9jIqDDEs9yrohE0CvFeCo64Ed7OBJheUFS3ODVa28NoqinHx7oggewFyT6wpaxQRQtMQZArqTGCt4sVK6a~MwnmAL677bBsPIPluke2ubUhlMXsfag58BvzJpPIjYN6X0MM0DZCdOe5WQKjCT62TGcmC9vQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
            <div className={s.content}>
                <h2 style={{ color: "white" }}>Trike Creek</h2>
                {/* rich text */}
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
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <Link href='/portfolios/matthew/sprint1'>
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
                            1
                        </p>
                    </div>
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
                            1
                        </p>
                    </div>
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
                            1
                        </p>
                    </div>
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
                            1
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
