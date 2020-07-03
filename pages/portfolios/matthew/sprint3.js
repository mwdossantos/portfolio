import Head from "next/head";
import { Header } from "../../../components/matthew/Header";
import { HomeNav } from "../../../components/general/HomeNav";
import { Toolbar } from "../../../components/matthew/Toolbar";
import { NextSprint } from "../../../components/matthew/NextSprint";
import { getMattSprint3 } from "../../../services/sanity";

import { renderRichText } from "../../../services/sanity";
export default function Sprint3({ mattSprint3 }) {
    return (
        <>
            <Head>
                <title>WOW - Matthew - Sprint 3</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='container' style={{ paddingTop: "3rem" }}>
                <HomeNav link='/' label='< Go home' />
                <Header />
                <HomeNav link='/portfolios/matthew/home' label='< Go back' />
                <Toolbar data={mattSprint3} />
                <div className='richTextHolderLight'>{renderRichText(mattSprint3.content)}</div>
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
            mattSprint3: await getMattSprint3(),
        },
    };
}
