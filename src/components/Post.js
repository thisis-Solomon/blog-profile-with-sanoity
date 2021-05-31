import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../Client";

const Post = () => {
    const [postData, setPostData] = useState("");

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
        title,
        slug,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        }
    }`
            )
            .then((data) => setPostData(data))
            .catch(console.error);
    }, []);

    if (postData.length === 0)
    return (
        <div className='min-h-screen px-10 text-center bg-indigo-400 flex justify-center items-center'>
            <h1 className="text-5xl">Your Blog post is empty</h1>
        </div>
    );

    return (
        <main className='bg-indigo-300 min-h-screen p-12'>
            <section className='container mx-auto'>
                <h1 className='text-5xl flex justify-center '>Blog Page</h1>
                <h2 className='text-lg flex justify-center text-center mb-12 text-gray-600'>
                    welcome to my blog posts, hoping you'll learn something.
                </h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {postData &&
                        postData.map((post, index) => (
                            <article key={post.slug.current}>
                                <Link to={"/post/" + post.slug.current}>
                                    <span
                                        className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-indigo-400'
                                        key={index}
                                    >
                                        <img
                                            src={post.mainImage.asset.url}
                                            alt={post.mainImage.alt}
                                            className='w-full h-full rounded-r object-cover absolute'
                                        />
                                        <span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
                                            <h3 className='text-gray-800 text-lg font-bold px-3 py-4 bg-indigo-200 bg-opacity-75 rounded'>
                                                {post.title}
                                            </h3>
                                        </span>
                                    </span>
                                </Link>
                            </article>
                        ))}
                </div>
            </section>
        </main>
    );
};

export default Post;
