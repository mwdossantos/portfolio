import Head from "next/head";
import { Header } from "../../../components/matthew/Header";
import { HomeNav } from "../../../components/general/HomeNav";
import { PortfolioItem } from "../../../components/matthew/PortfolioItem";

import { getMattSprint1, getMattSprint2, getMattSprint3 } from "../../../services/sanity";

export default function Home({ mattSprint1, mattSprint2, mattSprint3 }) {
    return (
        <>
            <Head>
                <title>WOW - Matthew</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='container' style={{ paddingTop: "3rem" }}>
                <HomeNav link='/' label='< Go home' />
                <Header />
                <PortfolioItem data={mattSprint1} link='/portfolios/matthew/sprint1' />
                <PortfolioItem data={mattSprint2} link='/portfolios/matthew/sprint2' />
                <PortfolioItem data={mattSprint3} link='/portfolios/matthew/sprint3' />
                <div
                    style={{
                        marginTop: "6rem",
                        marginBottom: "3rem",
                        textAlign: "center",
                    }}
                >
                    <a href='mailto:tengoldblums@icloud.com'>Contact me ></a>
                </div>
            </div>
            <style global jsx>{`
                body {
                    background: black;
                }
            `}</style>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            mattSprint1: await getMattSprint1(),
            mattSprint2: await getMattSprint2(),
            mattSprint3: await getMattSprint3(),
        },
    };
}
