import { useEffect, useState } from "react";
import sanityClient from "../Client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

const About = () => {
    const [authors, setAuthors] = useState("");
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset ->url
        }`
            )
            .then((data) => setAuthors(data))
            .catch(console.error);
    }, []);


    if (authors.length === 0)
    return (
        <div className='min-h-screen px-10 text-center bg-indigo-400 flex justify-center items-center'>
            <h1 className="text-5xl">There no Team profile yet</h1>
        </div>
    );

    return (
        <main className='bg-indigo-400 flex flex-col md:items-center min-h-screen'>
            <h2 className='p-4 text-center text-2xl'>
                This is the which was available to the training and able to put
                there profile online
            </h2>
            <div className='p-4 mx-auto flex flex-col md:flex-row gap-4 md:justify-center relative'>
                {authors &&
                    authors.map((author, i) => (
                        <section key={i} className='bg-indigo-300 flex rounded-lg shadow-2xl lg:flex'>
                            <img
                                src={urlFor(author.authorImage).url()}
                                alt={author.name}
                                className='rounded-l w-32 h-32 lg:w-64 lg:h-full'
                            />

                            <div className=''>
                                <div className='text-lg flex flex-col w-full justify-center lg:w-3/4 mx-5'>
                                    {author.name && (
                                        <h1 className='text-2xl md:text-4xl text-gray-600 mb-4'>
                                            Hey, I'm{" "}
                                            <span className='text-blue-900'>
                                                {" "}
                                                {author.name}
                                            </span>
                                        </h1>
                                    )}
                                    <div className='prose lg:prose-xl '>
                                        <BlockContent
                                            blocks={author.bio}
                                            projectId='lejqf7b5'
                                            dataset='production'
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
            </div>
        </main>
    );
};

export default About;
