import { Fragment } from "react";

const LandingPage = () => {
    return (
        <Fragment>
            <div className='landing-page'>
                <div className='glass'>
                    <section className='intro'>
                        <h1>Hi, I'm Solomon</h1>
                        <h2>FRONT-END DEVELOPER</h2>
                    </section>
                    <div className='btn-links'>
                        <a className='my-works' href='#PORTFOLIO'>
                            My Works
                        </a>
                        <a className='hire-me' href='#CONTACT'>
                            Hire Me.
                        </a>
                    </div>
                </div>
                <div className='circle-1'></div>
                <div className='circle-2'></div>
            </div>
        </Fragment>
    );
};

export default LandingPage;
