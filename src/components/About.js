import { useEffect, useState } from "react";
import sanityClient from "../Client";
import shedOfColors from "../images/about-me-bg.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

const About = () => {
    const [author, setAuthor] = useState("");
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset ->url
        }`
            )
            .then((data) => setAuthor(data[0]))
            .catch(console.error);
    }, []);
    return (
        <main className='relative'>
            <img
                src={shedOfColors}
                alt='sheds-of-colors'
                className='absolute w-full'
            />
            <div className='p-10 lg:pt-48 mx-auto relative'>
                <section className='bg-yellow-300 rounded-lg shadow-2xl lg:flex p-20'>
                    <img
                        src={urlFor(author.authorImage).url()}
                        alt={author.name}
                        className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8'
                    />
                    <div className='text-lg flex flex-col justify-center'>
                        <h1 className='cursive text-6xl text-gray-600 mb-4'>
                            Hey, I'm{" "}
                            <span className='text-blue-900'>
                                {" "}
                                {author.name}
                            </span>
                        </h1>
                        <div className='prose lg:prose-xl'>
                            <BlockContent
                                blocks={author.bio}
                                projectId='lejqf7b5'
                                dataset='production'
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default About;
