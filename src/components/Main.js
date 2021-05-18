import AboutPage from "./layouts/AboutPage";
import LandingPage from "./layouts/LandingPage";

const Main = ({data}) => {
    return (
        <main>
            <LandingPage />
            <AboutPage data={data}/>
        </main>
    );
};

export default Main;
