import s from "./modules/Sidebar.module.css";
import { renderRichText } from "../../services/sanity";

export function Sidebar(props = { data }) {
    return (
        <div className={s.holder}>
            <img src='https://s3-alpha-sig.figma.com/img/6461/e048/f825aa251c12db6849a300d94183656e?Expires=1594598400&Signature=hVNK4tJw3Qe9Pj11s6jQGTiufXSJNZ-mfUZige1DM8-LgBJBdaG759Du00yxEeB0g6-njbGpjdKRKFajfWEvfNd3DOWAO9WbXIfci6dYVrpjIvmIViE7BZMPWwZtscJFTXRpDHhbKL1ohO4xYKgZrlFJxQ2vAPWI7PKvh~JtGlZAQELlSKtqdRUbcaFtyh7i3JTc62vg2DZydG0Dh~rKdeS4rEcbYzF7pd8591pJ4kUfTp6bTr~hQr~E~2OTVXE81vBQCglz4Fs5mQasc74pLnQk9OjMS2p4Bx1mi17oY8qltcS5eCxuX8uNEtLJeJlM09BQsFSjA5svuMqU-5A3pQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />

            <h2>Bo Baekers</h2>
            {/* rich text */}
            <p>
                <div className='richTextHolderDark'>{renderRichText(props.data.sidebar)}</div>
            </p>
        </div>
    );
}
