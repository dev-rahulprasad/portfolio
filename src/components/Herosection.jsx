// import banner from '../assets/banner.jpg'
import resume from '../assets/rahul-resume.pdf'
import { skills } from "../api/local_data";
const Herosection = () => {

    return (
        <>
            <section id='home' className="min-h-screen overflow-hidden flex justify-center items-center  bg-[#B1B2FF] dark:bg-[#222831] dark:text-white px-4 sm:px-6 lg:px-8">
                <main className="flex-1 h-[calc(100dvh_-_170px)] sm:h-[calc(100dvh_-_70px)] flex flex-col items-center justify-between">
                    <div className='flex-1 w-full flex flex-col gap-3 justify-center items-center text-center '>
                        <h1 className='text-4xl md:text-6xl font-semibold'>Hi, I am Rahul</h1>
                        <p className='text-lg md:text-xl text-balance mt-2 sm:border rounded-full sm:py-3 sm:px-4 sm:shadow'> Web Developer skilled in HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS, and Shopify.</p>
                    </div>
                    <div className='flex w-full items-center justify-center gap-4 py-4'>
                        <a href={resume} download="Rahul_Resume.pdf" className='flex flex-1 max-w-52 gap-2 items-center justify-center bg-green-400 dark:bg-green-700 rounded-full px-4 py-2 shadow-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            <p>Resume</p>
                        </a>
                        <a href="https://www.linkedin.com/in/dev-rahulprasad" className='flex flex-1 max-w-52 gap-2 items-center justify-center bg-[#EEEEEE] dark:bg-slate-700 rounded-full px-4 py-2 shadow-sm'>
                            <svg fill="#0a66c2" viewBox="0 0 310.00 310.00" stroke="#0a66c2" transform="matrix(1, 0, 0, 1, 0, 0)" className='size-5'>
                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.62" />
                                <g id="SVGRepo_iconCarrier"> <g id="XMLID_801_"> <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z" /> <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z" /> <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z" /> </g> </g>
                            </svg>
                        </a>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 items-start md:items-stretch gap-3'>
                        {
                            skills.map(skill => (
                                <div key={skill.id} className={`rounded-lg shadow-md text-white dark:text-[#222831] bg-[#222831] dark:bg-white py-4 px-6 flex gap-4 items-stretch justify-between`}>
                                    <div className="flex flex-col justify-between gap-2 text-balance">
                                        <p className='font-semibold'>{skill.name}</p>
                                        <p className='text-xs'>{skill.description}</p>
                                    </div>
                                    <div>{skill.icon}</div>
                                </div>
                            ))
                        }
                    </div>
                </main>
            </section>
        </>
    )
}

export default Herosection;