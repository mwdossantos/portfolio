import Head from "next/head";

import { Header } from "../../../components/wenyi/Header";
import { HomeNav } from "../../../components/general/HomeNav";
import { PortfolioItem } from "../../../components/wenyi/PortfolioItem";
import { getWenyiSprint1, getWenyiSprint2, getWenyiSprint3 } from "../../../services/sanity";

export default function Home({ wenyiSprint1, wenyiSprint2, wenyiSprint3 }) {
    return (
        <>
            <Head>
                <title>WOW - Wenyi</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='container'>
                <Header />
                <div style={{ paddingLeft: "1.5rem" }}>
                    <HomeNav link='/' label='< Go home' />
                </div>

                <div className='opening' style={{ maxWidth: 1024, margin: "0 auto" }}>
                    <img
                        className='pf'
                        src='https://s3-alpha-sig.figma.com/img/1485/4c85/dbec41d8d65aee88f77ca285f4aab23d?Expires=1594598400&Signature=JUb~xhHlX~K6gG8nOd12WAxdk5Y6Az78BDdUXkYu8a51RryIBbrUPkg2oHP1lA2sXgRXP7qZyYE0BsGImlCqRlPC2iDIyrbF4kdr63-LRWrQxI8Nm4ojpyJX2EGT7x7sqHyEIuLj9FWH6lN~jkRgcianB-lM8NSY~DqkSXlvTaqY4UVqR90HZOeZRaPyHy3NKBxkeej5-LP3pT6GmESRt7AILNBl0QChrFEeqUn1U6t~VFyKojuslsxcxGLLurwaWBRG~PPunhOXW5eJWcGafC~ih7LKmILi91hP1bHnRHE0rnYao236iyV-JOdwZGaaqk7w3LRS3CZr7cs4rKUMDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                    />
                    <div>
                        <h2>Wenyi’s portfolio</h2>
                        <p>
                            In the past 15 weeks I have worked on three projects. The first project
                            was to brand a new event by creating a logo, banner and flyer.The second
                            project was learning how to animate and make animations for a client and
                            the third project was building my own website.
                        </p>
                    </div>
                </div>

                <div style={{ backgroundColor: "red", padding: "3rem" }}>
                    <h2 style={{ color: "white" }}>Portfolio</h2>
                    <div className='holder'>
                        <PortfolioItem data={wenyiSprint1} link='/portfolios/wenyi/sprint1' />
                        <PortfolioItem data={wenyiSprint2} link='/portfolios/wenyi/sprint2' />
                        <PortfolioItem data={wenyiSprint3} link='/portfolios/wenyi/sprint3' />
                    </div>
                </div>
                <div style={{ backgroundColor: "white", padding: "3rem" }}>
                    <h2>Get in touch with me</h2>
                    <div
                        style={{
                            display: "flex",
                            marginTop: "1.5rem",
                        }}
                    >
                        <p>
                            Do you have any questions about anything? Would you like to give me a
                            feedback?
                            <br />
                            <br />I will appreciate it so much!
                        </p>
                        <p style={{ marginLeft: "1.5rem" }}>
                            Email:{" "}
                            <a
                                style={{ textTransform: "inherit" }}
                                href='mailto:wenyivetw@gmail.com'
                            >
                                wenyivetw@gmail.com
                            </a>
                            <br />
                            Telephone number:{" "}
                            <a style={{ textTransform: "inherit" }} href='tel:0636344388'>
                                0636344388
                            </a>
                            <br />
                            Location: The Netherlands
                            <br />
                            <br />
                            Looking forward to your response.
                        </p>
                    </div>
                </div>
            </div>
            <style global jsx>{`
                .opening {
                    padding: 1.5rem;
                    display: flex;
                }
                .pf {
                    max-width: 400px;
                    object-fit: cover;
                    margin-right: 3rem;
                }
                .container {
                    max-width: 100%;
                    padding: 0px;
                }

                .holder {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                }

                @media screen and (max-width: 1400px) and (min-width: 320px) {
                    .holder {
                        grid-template-columns: 1fr;
                    }
                }
                @media screen and (max-width: 900px) and (min-width: 320px) {
                    .opening {
                        flex-direction: column;
                    }

                    .pf {
                        width: 100%;
                        margin-bottom: 1.5rem;
                    }
                }
            `}</style>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            wenyiSprint1: await getWenyiSprint1(),
            wenyiSprint2: await getWenyiSprint2(),
            wenyiSprint3: await getWenyiSprint3(),
        },
    };
}
