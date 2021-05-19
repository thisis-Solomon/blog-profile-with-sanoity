import bgImage from "../images/bg-image.jpg";
const Home = () => {
    return (
        <main>
            <img
                src={bgImage}
                alt='background showing two pencials'
                className='absolute object-cover w-full h-full'
            />
            <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
                <h1 className="font-bold text-7xl leading-none lg:leading-snug">Hey, I'm Myname</h1>
            </section>
        </main>
    );
};

export default Home;
