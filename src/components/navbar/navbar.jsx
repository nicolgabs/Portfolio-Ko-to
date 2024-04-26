import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const refreshPage = () => {
        window.location.reload();
    };

    const links = [
        {
            id: 1,
            link: 'Projects',
            path: '#projects'
        },
        {
            id: 2,
            link: 'Skills',
            path: '#skills'
        },
        {
            id: 3,
            link: 'Contact',
            path: '#contact'
        },
    ];

    return (
        <div className={`flex flex-col sm:flex-row justify-between items-center text-xl space-x-8 w-full h-20 px-4 sm:px-8 ${isSticky ? 'fixed top-0 left-0 z-50 bg-transparent text-white' : 'bg-transparent text-black'}`}>
            <div className="w-12 transform origin-center hover:rotate-180 transition-transform cursor-pointer" onClick={refreshPage}>
                <img src='./src/Images/mylogo.png' alt="Logo" />
            </div>

            <ul className="flex justify-center font-mono sm:flex-row">
                {links.map(({ id, link, path }) => (
                    <li key={id} className="px-4 cursor-pointer capitalize font-md hover:scale-105 duration-200">
                        <a href={path}>{link}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
