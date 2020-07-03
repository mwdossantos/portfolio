import Head from "next/head";
import { Header } from "../../../components/bo/Header";
import { BackgroundImage } from "../../../components/bo/BackgroundImage";
import { Main } from "../../../components/bo/Main";
import { HomeNav } from "../../../components/general/HomeNav";
import { getBo } from "../../../services/sanity";

export default function Home({ bo }) {
    return (
        <>
            <Head>
                <title>WOW - Bo</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <BackgroundImage />
            <div className='container' style={{ maxWidth: "inherit" }}>
                <Header />
                <Main data={bo} />
                <HomeNav link='/' label='< Go home' />
            </div>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            bo: await getBo(),
        },
    };
}
