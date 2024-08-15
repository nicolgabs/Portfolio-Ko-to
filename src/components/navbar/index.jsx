import { useState, useEffect } from 'react';
import logo from '../../Images/mylogo.png';

const Navbar = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;

          
            if (currentScrollTop > lastScrollTop) {
                
                setIsHidden(true);
            } else {
                
                setIsHidden(false);
            }

            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    const links = [
        {
            id: 1,
            link: 'Skills',
            path: '#skills'
        },
        {
            id: 2,
            link: 'Projects',
            path: '#projects'
        },
        {
            id: 3,
            link: 'Contact',
            path: '#contact'
        },
    ];

    return (
        <div className={`fixed top-0 left-0 w-full h-20 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center text-xl space-x-8 z-50 transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'} ${isHidden ? '':'bg-white text-black shadow-lg'}`}>
            <div className="w-12 transform origin-center hover:rotate-180 transition-transform cursor-pointer">
                <img src={logo} alt="Logo" />
            </div>

            <ul className="flex justify-center barlow-semi-bold font-semibold sm:flex-row">
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
