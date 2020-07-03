import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/home/Header";
import { Footer } from "../components/home/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>WOW - Portfolio</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='container'>
                <Header />
                <div id='about' className='textualSection'>
                    <h1 style={{ textAlign: "center" }}>About</h1>
                    <p>
                        Hey! Welcome to our website. This is not just a regular website, but one
                        that holds three portfolios of three Communication & Multimeda Design
                        students... Us! So, who's “us”? Well, we are Bo, Matthew & Wenyi and as we
                        already mentioned we are three students from The Hague University of Applied
                        Sciences in The Netherlands.. For a while now we've worked - individualy -
                        on some graphic design related stuff for a minor. The minor took 20 weeks.
                        For the three of us, these past 20 weeks were in a nutshell: Eye-opening, an
                        exploration and all about gaining knowledge. That's how we came up with the
                        logo. It was a WOW! experience for all of us. Are you curious about the work
                        we delivered and our journeys? Wait no longer and check our portfolios now.
                        Enjoy...
                    </p>
                </div>

                <div id='portfolios' className='portfolios'>
                    <h1 style={{ textAlign: "center" }}>Portfolios</h1>
                    <div className='portfolioHolder'>
                        <Link href='portfolios/bo/home'>
                            <div className='item first'>
                                <h2>Bo's</h2>
                                <h2>></h2>
                            </div>
                        </Link>

                        <Link href='portfolios/wenyi/home'>
                            <div className='item second'>
                                <h2>Wenyi's</h2>
                                <h2>></h2>
                            </div>
                        </Link>

                        <Link href='portfolios/matthew/home'>
                            <div className='item third'>
                                <h2>Matthew's</h2>
                                <h2>></h2>
                            </div>
                        </Link>
                    </div>
                </div>

                <div id='contact' className='textualSection'>
                    <h1 style={{ textAlign: "center" }}>Contact</h1>
                    <p>
                        Do you have any questions about anything? Would you like to give (one of) us
                        feedback? Or do you want to get in touch with us and our work? Don't
                        hesitate and contact us at Bo: bobaekers@hotmail.com Matthew: xxxxxx Wenyi:
                        xxxxxx We would love to hear from you.
                    </p>
                </div>
                <Footer />
            </div>
        </>
    );
}
