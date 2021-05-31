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
        <main className='relative h-screen flex items-center'>
            <img
                src={shedOfColors}
                alt='sheds-of-colors'
                className='absolute w-full h-full object-cover mr-9'
            />
            <div className='p-1 lg:pt-4 mx-auto flex justify-center relative'>
                <section className='bg-indigo-300 rounded-lg shadow-2xl lg:flex p-2 md:p-20 md:w-3/4'>
                    <img
                        src={urlFor(author.authorImage).url()}
                        alt={author.name}
                        className='rounded w-32 h-32 lg:w-64 lg:h-full'
                    />
                    <div className='text-lg flex flex-col justify-center md:w-2/4 mx-5'>
                        <h1 className='text-3xl md:text-6xl text-gray-600 mb-4'>
                            Hey, I'm{" "}
                            <span className='text-blue-900'>
                                {" "}
                                {author.name}
                            </span>
                        </h1>
                        <div className='prose lg:prose-xl '>
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
