import { useEffect, useState } from "react";
import sanityClient from "../Client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

const Projects = () => {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "project"]{
            title, 
            date,
            place,
            description,
            projectType,
            link,
            tags,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
            )
            .then((data) => setProjectData(data))
            .catch(console.error);
    }, []);

    console.log(projectData);

    return (
        <main className='bg-indigo-300 min-h-screen p12'>
            <section className='container mx-auto'>
                <h1 className='flex justify-center text-7xl pt-5'>Projects</h1>
                <h2 className='text-lg text-gray-800 flex justify-center mb-12 text-center mx-2 md:mx-none'>
                    Thank you!! you have reached our projects page.
                </h2>
                <section className='flex flex-col w-11/12 mx-auto pb-5 md:grid md:grid-cols-2 gap-4 md:gap-8'>
                    {projectData &&
                        projectData.map((project, i) => (
                            <article
                                key={i}
                                className='relative rounded-lg shadow-xl bg-indigo-200'
                            >
                                <div className='relative'>
                                    <img
                                        src={urlFor(project.mainImage).url()}
                                        alt=''
                                        className='w-full h-full object-cover rounded'
                                    />
                                    {urlFor(project.mainImage).url() && (
                                        <div className='absolute bottom-0 p-3 bg-indigo-300 bg-opacity-50 w-full flex flex-wrap justify-center items-center'>
                                            <span>
                                                <strong className='font-bold ml-2'>
                                                    Fininshed on
                                                </strong>
                                                :{" "}
                                                {new Date(
                                                    project.date
                                                ).toLocaleDateString()}
                                            </span>
                                            <span>
                                                <strong className='font-bold ml-2'>
                                                    Company
                                                </strong>
                                                : {project.place}
                                            </span>
                                            <span>
                                                <strong className='font-bold ml-2'>
                                                    Type
                                                </strong>
                                                : {project.projectType}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className='px-5 md:px-16 md:py-4 '>
                                    <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-blue-900'>
                                        <a
                                            href={project.link}
                                            alt={project.title}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            {project.title}
                                        </a>
                                    </h3>
                                    <div className='text-gray-800 text-xs space-x4 '>
                                        <p className='my-6 text-gray-700 leading-relaxed'>
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                </section>
            </section>
        </main>
    );
};

export default Projects;
