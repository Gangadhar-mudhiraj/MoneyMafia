import React, { useState } from 'react';
import { FaBook, FaBars, FaTimes } from 'react-icons/fa';

interface NavItemProps {
    href: string;
    label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
    return (
        <li className="my-2 md:my-0">
            <a
                href={href}
                className="text-center text-white text-lg hover:bg-orange-600 hover:text-white px-4 py-2 rounded-tl-lg rounded-r-lg font-bold transition-all duration-300"
            >
                {label}
            </a>
        </li>
    );
};

const NavView: React.FC = () => {
<<<<<<< HEAD
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
=======
    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
>>>>>>> e96607fa15c241de64e49ac744078c3ec90a1e89
    };

    return (
        <header className="sticky top-0 z-10">
            <nav className="w-11/12 py-3 px-5 mx-auto flex justify-between items-center rounded-b-full bg-gray-800 text-gray-100 shadow-lg">
                <div className="flex items-center">
                    <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center">
                        <FaBook className="text-orange-900 text-2xl" />
                    </div>
                    <span className="ml-2 text-lg font-extrabold text-white">Money Mania</span>
                </div>

<<<<<<< HEAD
=======
              
>>>>>>> e96607fa15c241de64e49ac744078c3ec90a1e89
                <div className="block md:hidden" onClick={toggleMenu}>
                    {isOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
                </div>

                <ul
                    className={`flex-col md:flex-row md:flex md:space-x-4 absolute md:static bg-gray-800 md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'
                        } md:flex`}
<<<<<<< HEAD
                    style={{ top: '60px' }}
=======
                    style={{ top: '60px' }} 
>>>>>>> e96607fa15c241de64e49ac744078c3ec90a1e89
                >
                    <NavItem href="#home" label="Home" />
                    <NavItem href="#Bookcontent" label="Book Content" />
                    <NavItem href="#Author" label="Author" />
                    <NavItem href="#Feedback" label="Feedback & FAQ" />
                    <NavItem href="#contact-us" label="Contact us" />
                </ul>
            </nav>
        </header>
    );
};

export default NavView;
