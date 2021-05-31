import bgImage from "../images/bg-image.webp";
const Home = () => {
    return (
        <main>
            <img
                src={bgImage}
                alt='background showing two pencials'
                className='absolute object-cover w-full h-full opacity-70'
            />
            <div className='flex justify-center z-40'>
                <section className='relative md:w-3/4 flex justify-center min-h-screen pt-12 lg:pt-20 px-1 md:px-8'>
                    <h1 className='font-bold z-40 px-5 text-black text-3xl md:text-5xl leading-none lg:leading-snug'>
                        Hey, We're the{" "}
                        <span className='text-5xl md:text-6xl text-indigo-900'>
                            Zambia Youth Federation
                        </span>
                        , trained Metal fabrication By{" "}
                        <span className='text-6xl md:text-7xl text-indigo-900'>
                            Zambia Homeless and Poor People's Federation.
                        </span>
                    </h1>
                </section>
            </div>
        </main>
    );
};

export default Home;
