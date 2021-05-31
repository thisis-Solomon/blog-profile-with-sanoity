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
        <main className='bg-indigo-300 min-h-screen p-4'>
            <article className='container mx-auto rounded-lg shadow-xl bg-indigo-200'>
                <header className='relative'>
                    <div className='absolute h-full w-full flex items-center justify-center p-8'>
                        <div className='bg-indigo-200 bg-opacity-75 rounded p-12'>
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
                <div className='px-8 lg:px-48 py-8 leading-3 lg:py-8 prose lg:prose-xl max-w-full'>
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
