import Head from "next/head";
import { Header } from "../../../components/bo/Header";
import { BackgroundImage } from "../../../components/bo/BackgroundImage";
import { Main } from "../../../components/bo/Main";
import { HomeNav } from "../../../components/general/HomeNav";

export default function Home() {
    return (
        <>
            <Head>
                <title>WOW - Bo</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <BackgroundImage />
            <div className='container'>
                <Header />
                <Main />
                <HomeNav link='/' label='< Go home' />
            </div>
        </>
    );
}
