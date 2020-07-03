import s from "./modules/PortfolioItem.module.css";
import Link from "next/link";

export function PortfolioItem() {
    return (
        <div className={s.container}>
            <h1>Sprint 1: Branding</h1>
            <img src='https://s3-alpha-sig.figma.com/img/9548/eae0/dab16dafed28e45483f63162c802c9ae?Expires=1594598400&Signature=aRHiSW2g-PxZ~AIJNF3IFvyqx2RxH6ARr-eZU1jFrfmqkpMUbRMnu0o2WTZUp1JIZvZj8sPElfjqHZ5ur~VDuVkXLQiL27mqD7gVe2dpIAOj-SiHRXYUkUPil0yMaLYXUo3cZTjOVXLlHd2~tDOzSTqaAm1q9Bkn6r3cXqW~etEWXY2v7eEAwCd20LcqDOEvg8JgmUk9CsYB4IaBHP3T9HGyjd1AHUwx6wbDBWN5-L235nBbMTo81dLS08-812iQOEbM0wsVZwJsLiE5sckqH9ovU0I2aVzhsaEmLfxrR7IabAKWDwYdf4SgiCEsTmJLC8v9-q6mTy0ldOVAhQr-wA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
            <Link href='/portfolios/wenyi/sprint1'>
                <button>Show more</button>
            </Link>
        </div>
    );
}
