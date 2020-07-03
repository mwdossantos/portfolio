import Head from "next/head";
import { Header } from "../../../components/matthew/Header";
import { HomeNav } from "../../../components/general/HomeNav";
import { Toolbar } from "../../../components/matthew/Toolbar";
import { NextSprint } from "../../../components/matthew/NextSprint";

import { getMattSprint1, getMattSprint2 } from "../../../services/sanity";

import { renderRichText } from "../../../services/sanity";

export default function Sprint1({ mattSprint1, mattSprint2 }) {
    return (
        <>
            <Head>
                <title>WOW - Matthew - Sprint 1</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='container' style={{ paddingTop: "3rem" }}>
                <HomeNav link='/' label='< Go home' />
                <Header />
                <HomeNav link='/portfolios/matthew/home' label='< Go back' />
                <Toolbar data={mattSprint1} />
                <div className='richTextHolderLight'>{renderRichText(mattSprint1.content)}</div>

                <NextSprint data={mattSprint2} link='/portfolios/matthew/sprint2' />
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
        },
    };
}
