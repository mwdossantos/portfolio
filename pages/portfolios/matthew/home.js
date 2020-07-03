import Head from "next/head";
import { Header } from "../../../components/matthew/Header";
import { HomeNav } from "../../../components/general/HomeNav";
import { PortfolioItem } from "../../../components/matthew/PortfolioItem";

export default function Home() {
    return (
        <>
            <Head>
                <title>WOW - Matthew</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='container' style={{ paddingTop: "3rem" }}>
                <HomeNav link='/' label='< Go home' />
                <Header />
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
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
