import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../Client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

const SinglePost = () => {
    const { slug } = useParams();
    const [singlePost, setSinglePost] = useState("");

    useEffect(() => {
        sanityClient
            .fetch(
                `*[slug.current == "${slug}"]{
           title,
           _id,
           slug,
           mainImage{
               asset -> {
                   _id, url
               }
           },
           body,
           "name": author -> name,
           "authorImage": author -> image
       }`
            )
            .then((data) => setSinglePost(data[0]))
            .catch(console.error);
    }, [slug]);
    console.log(singlePost);
    // if (!singlePost) return <div>Loading...</div>;
    return (
        <main className='bg-yellow-300 min-h-screen p12'>
            <article className='container mx-auto rounded-lg shadow-xl bg-yellow-200'>
                <header className='relative'>
                    <div className='absolute h-full w-full flex items-center justify-center p-8'>
                        <div className='bg-yellow-200 bg-opacity-75 rounded p-12'>
                            <h1 className='text-3xl lg:text-6xl mb-4'>
                                {singlePost.title}
                            </h1>
                            <div className='flex justify-centee text-gray-800'>
                                <img
                                    className='w-10 h-10 rounded-full'
                                    src={urlFor(singlePost.authorImage).url()}
                                    alt={singlePost.name}
                                />
                                <p className='flex items-center pl-2 text-2xl'>
                                    {singlePost.name}
                                </p>
                            </div>
                        </div>
                    </div>
                    <img
                        src={urlFor(singlePost.mainImage).url()}
                        alt={singlePost.title}
                        className='w-full object-cover rounded-t'
                        style={{ height: "500px" }}
                    />
                </header>
                <div className='px-16 lg:px48 py-12 lg:py-20 prose lg:prose-xl max-w-full'>
                    <BlockContent
                        blocks={singlePost.body}
                        projectId='lejqf7b5'
                        dataset='production'
                    />
                </div>
            </article>
        </main>
    );
};

export default SinglePost;
