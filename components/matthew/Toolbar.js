import s from "./modules/Toolbar.module.css";

export function Toolbar() {
    return (
        <div className={s.container}>
            <h2 style={{ color: "white" }}>Trike Creek</h2>
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
    );
}
