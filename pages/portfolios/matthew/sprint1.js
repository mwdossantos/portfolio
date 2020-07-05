import Head from "next/head";
import { Header } from "../../../components/matthew/Header";
import { HomeNav } from "../../../components/general/HomeNav";
import { Toolbar } from "../../../components/matthew/Toolbar";
import { NextSprint } from "../../../components/matthew/NextSprint";

// importing the fetching functions from the middleman file
import { getMattSprint1, getMattSprint2 } from "../../../services/sanity";

// importing the helper function
import { renderRichText } from "../../../services/sanity";

// passing the data as two props to the page, and thus exposing to the components
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
                {/* populating the Toolbar component with the data */}
                <Toolbar data={mattSprint1} />
                {/* rendering a rich text with content from the data */}
                <div className='richTextHolderLight'>{renderRichText(mattSprint1.content)}</div>

                {/* populating the NextSprint component with data about sprint 2 */}
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
