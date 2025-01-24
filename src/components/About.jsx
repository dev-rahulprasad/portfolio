import aboutImg from '../assets/about.jpg'
const About = () => {
    return (
        <>
            <section id='about' className="p-4 sm:p-6 lg:p-8 dark:text-white bg-[#B1B2FF] dark:bg-[#222831]">
                <div className="container max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-indigo-950 shadow-inner rounded-3xl">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-5 lg:mb-7">About Me</p>
                    <div className='flex flex-col items-center md:flex-row gap-4 sm:gap-6 md:gap-8'>
                        <figure className='flex items-center justify-center p-2 sm:p-4'>
                            <img src={aboutImg} alt="About Image" className='rounded-full drop-shadow max-w-[50vw] md:max-w-[30vw]' />
                        </figure>

                        <div className="flex flex-col gap-2 md:text-xl">

                            <p>
                                Hi, I'm Rahul, a passionate Shopify developer dedicated to crafting seamless and visually captivating online stores. I specialize in Shopify Liquid and excel in creating custom solutions from scratch. With expertise in HTML, CSS, JavaScript, jQuery, and frameworks like Tailwind CSS and Bootstrap, I ensure responsive and engaging user experiences.
                            </p>
                            <p>


                                My approach combines clean, efficient code with a keen eye for design, translating concepts into functional and aesthetic digital platforms. I’m also expanding my skill set by diving into React JS, enabling me to create dynamic and interactive web applications. <br />
                            </p>
                            <p>

                                If you're looking to elevate your online store or need a developer committed to quality and creativity, let’s collaborate to bring your vision to life!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About;