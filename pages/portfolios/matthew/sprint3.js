import Head from "next/head";
import { Header } from "../../../components/matthew/Header";
import { HomeNav } from "../../../components/general/HomeNav";
import { Toolbar } from "../../../components/matthew/Toolbar";
import { NextSprint } from "../../../components/matthew/NextSprint";

export default function Sprint3() {
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
                <Toolbar />
                {/* Rich Text */}

                <NextSprint />
            </div>
            <style global jsx>{`
                body {
                    background: black;
                }
            `}</style>
        </>
    );
}
