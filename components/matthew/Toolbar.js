import s from "./modules/Toolbar.module.css";

export function Toolbar(props = { data }) {
    if (!props.data) return null;

    return (
        <div className={s.container}>
            <h2 style={{ color: "white" }}>{props.data.name}</h2>
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
    );
}
