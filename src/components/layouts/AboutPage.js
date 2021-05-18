const AboutPage = ({data}) => {
    console.log(data.about.img)
    return (

        <img src={data.about.img} alt="Solomon"/>
        // <div className='about-page'>
        //     <div className='about-img'>
        //         <img src="../../images/devcon-bg.jpg" alt='Solomon' />
        //     </div>
        //     <div className='about-info'>
        //         <h1>Who am I?</h1>
        //         <p>
        //             I'm <span>Solomon Njobvu</span>, A Web and Mobile App
        //             Developer based in Lusaka, Zambia. Using software
        //             development to solve identified problem in the community is
        //             my most enjoyable moment i can ever while am coding. I Love
        //             work with <span className='js'>Javascript</span>,{" "}
        //             <span className='nodejs'>nodejs</span> ,{" "}
        //             <span className='html'>MongoDB</span>,{" "}
        //             <span className='expressjs'>Epressjs</span> ,{" "}
        //             <span className='reactjs'>Reactjs</span> ,{" "}
        //             <span className='react-native'>React-Native</span>,{" "}
        //             <span className='html'>HTML</span> and ,{" "}
        //             <span className='css'>CSS</span>, But am always open to
        //             learn new things.
        //         </p>
        //         <p>
        //             Beside coding, I'm currently holding Bachelor's degree in
        //             Specail Education with Civic Education. I love listening to
        //             music, watching movies, making friends, having a good and
        //             socail interaction with other people and lastly but not the
        //             least fixing vehicles which is my part time job.
        //         </p>
        //     </div>
        // </div>
    );
};

export default AboutPage;
