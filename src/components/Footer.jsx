
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <section id='home' className="bg-[#B1B2FF] dark:bg-[#222831] dark:text-white px-4 sm:px-6 lg:px-8 pb-14">
            <div className="px-3 py-2 md:px-6 md:py-3 text-center rounded-lg text-xs md:text-sm lg:text-base">
            <p>&copy; {currentYear} <a href="https://www.linkedin.com/in/dev-rahulprasad/" className="font-bold">Rahul Prasad</a> All rights reserved.</p>
            </div>
            </section>
        </>
    )
}

export default Footer;