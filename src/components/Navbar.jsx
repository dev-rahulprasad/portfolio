import { useState, useEffect } from 'react';
import { navLinks } from "../api/local_data";
const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        () => localStorage.getItem('theme') === 'dark'
    );
    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <>
            <header className="container max-w-screen-2xl mx-auto p-4 sm:p-6 lg:px-8 fixed top-0 left-0 w-full z-10">
                <nav className="flex justify-between items-center dark:text-white gap-4">
                    <div className="flex-[1] font-semibold text-2xl sm:text-3xl">
                        Portfolio
                    </div>
                    <div className="flex-[2] hidden sm:flex justify-center p-2 sm:px-3 gap-6 md:gap-8 text-base md:text-lg shadow-inner rounded-full backdrop-blur bg-white/30 dark:bg-[#31363f50]">
                        {
                            navLinks.map((link, index) => (
                                <a href={link.path} key={index} className="cursor-pointer flex flex-col items-center hover:underline transition-all px-3 py-0">
                                    <p className="text-base md:text-lg">{link.name}</p>
                                </a>
                            ))
                        }
                    </div>
                    <div className='sm:flex-[1] flex justify-end '>

                        <button onClick={toggleDarkMode} className='flex justify-center items-center bg-[#B1B2FF] dark:bg-[#222831] dark:border-[#222222] rounded-full h-10 aspect-square'>
                            {isDarkMode ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                </svg>
                            }

                        </button>
                    </div>
                </nav>
                <div className="flex justify-between fixed bottom-0 left-0 px-4 w-full gap-4 text-sm sm:hidden backdrop-blur-md  bg-white/30 dark:bg-[#31363f50] dark:text-white">
                    {
                        navLinks.map((link, index) => (
                            <a href={link.path} key={index} className="cursor-pointer flex flex-col items-center hover:text-gray-300 transition-all py-2 px-3 sm:py-0">
                                <span className="sm:hidden">{link.icon}</span>
                                <p className="text-xs sm:text-base md:text-lg">{link.name}</p>
                            </a>
                        ))
                    }
                </div>
            </header>
        </>
    )
}

export default Navbar;