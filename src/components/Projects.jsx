import { projects } from "../api/local_data"


const Projects = () => {
    return (
        <>
            <section id="projects" className="p-4 sm:p-6 lg:p-8 dark:text-white bg-[#B1B2FF] dark:bg-[#222831]">
                <div className="container max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-indigo-950 shadow-inner rounded-3xl">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-5 lg:mb-7">Projects</p>
                    <div className='flex flex-col items-center md:flex-row gap-4 sm:gap-6 md:gap-8'>
                        {
                            projects.map((project) => (
                                <div key={project.id} className="border-2  rounded-xl overflow-hidden flex flex-col">
                                    <a href={project.link} className="max-h-48 overflow-auto border-b-2">
                                        <img src={project.img} alt="" className="rounded" />
                                    </a>
                                    <div className="p-2 flex flex-col gap-2 ">
                                        <p className="text-indigo-950 font-bold md:text-lg dark:text-slate-50">{project.name}</p>
                                        <div className="">
                                            <p className="font-semibold text-sm md:text-base">Technologies :</p>
                                            <div className="flex flex-wrap gap-2 mt-1 text-black">
                                                {project.technologies.map((tech, index) => (
                                                    <span key={index} className="bg-gray-200 px-2 text-xs py-[2px] rounded-full md:text-sm">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>

        </>
    )
}

export default Projects;