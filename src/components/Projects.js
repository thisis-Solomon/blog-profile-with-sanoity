import { useEffect, useState } from "react";
import sanityClient from "../Client";

const Projects = () => {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == project]{
            title, 
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`
            )
            .then((data) => setProjectData(data))
            .catch(console.error);
    }, []);

    console.log(projectData)
    return (
        <main className='bg-yellow-300 min-h-screen p12'>
            <section className='container mx-auto'>
                <h1 className='flex justify-center text-7xl pt-5'>Projects</h1>
                <h2 className='text-lg text-gray-800 flex justify-center mb-12'>
                    Thank you!! you have reached my project page.
                </h2>
                <section className='grid grind-cols-2 grip-gap-8'>
                    {projectData &&
                        projectData.map((project, i) => (
                            <article className='relative rounded-lg shadow-xl bg-yellow-200 p-16'>
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
                                <div className='text-gray-800 text-xs space-x4'>
                                    <span>
                                        <strong className='font-bold'>
                                            Fininshed on
                                        </strong>
                                        :{" "}
                                        {
                                            new Date(
                                                project.date.tolocalDateString()
                                            )
                                        }
                                    </span>
                                    <span>
                                        <strong className='font-bold'>
                                            Company
                                        </strong>
                                        : {project.place}
                                    </span>
                                    <span>
                                        <strong className='font-bold'>
                                            Type
                                        </strong>
                                        : {project.projectType}
                                    </span>
                                    <p className='my-6 text-gray-700 leading-relaxed'>
                                        {project.description}
                                    </p>
                                    <a
                                        href={project.link}
                                        rel='noopener noreferrer'
                                        target='_blank'
                                        className='text-gray-800 font-bold hover:underline hover:text-blue-900'
                                    >
                                        View the whole project{" "}
                                        <span
                                            role='img'
                                            aria-label='right pointer'
                                        ></span>
                                    </a>
                                </div>
                            </article>
                        ))}
                </section>
            </section>
        </main>
    );
};

export default Projects;
