import Head from "next/head";

import { Header } from "../../../components/wenyi/Header";
import { HomeNav } from "../../../components/general/HomeNav";
import { getWenyiSprint3, renderRichText } from "../../../services/sanity";

export default function Sprint1({ wenyiSprint3 }) {
    return (
        <>
            <Head>
                <title>WOW - Wenyi - Sprint 3</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='container'>
                <Header />
                <div style={{ maxWidth: 768, margin: "0 auto", paddingLeft: "1.5rem" }}>
                    <HomeNav link='/' label='< Go home' />
                </div>
                <div style={{ maxWidth: 768, margin: "0 auto", padding: "0 1.5rem" }}>
                    <h2 style={{ color: "black" }}>{wenyiSprint3.name}</h2>
                    <div className='richTextHolderDark'>{renderRichText(wenyiSprint3.content)}</div>
                </div>

                <div style={{ backgroundColor: "white", padding: "3rem" }}>
                    <h2 style={{ color: "black", maxWidth: 1024, margin: "0 auto" }}>
                        Get in touch with me
                    </h2>
                    <div
                        className='contactDetailsHolder'
                        style={{
                            display: "flex",
                            maxWidth: 1024,
                            margin: "1.5rem auto 0 auto",
                        }}
                    >
                        <p>
                            Do you have any questions about anything? Would you like to give me a
                            feedback?
                            <br />
                            <br />I will appreciate it so much!
                        </p>
                        <p className='secondP' style={{ marginLeft: "1.5rem" }}>
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
                    display: flex;
                }

                @media screen and (max-width: 900px) and (min-width: 320px) {
                    .holder {
                        flex-direction: column;
                    }
                    .opening {
                        flex-direction: column;
                    }

                    .pf {
                        width: 100%;
                        margin-bottom: 1.5rem;
                    }
                }

                @media screen and (max-width: 900px) and (min-width: 320px) {
                    .contactDetailsHolder {
                        flex-direction: column;
                    }

                    .secondP {
                        margin-left: 0px !important;
                        margin-top: 1.5rem;
                    }
                }
            `}</style>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            wenyiSprint3: await getWenyiSprint3(),
        },
    };
}
