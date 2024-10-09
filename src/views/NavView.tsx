import React, { useState } from 'react';
import { FaBook, FaBars, FaTimes } from 'react-icons/fa';

const NavView: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
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

              
                <div className="block md:hidden" onClick={toggleMenu}>
                    {isOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
                </div>

                <ul
                    className={`flex-col md:flex-row md:flex md:space-x-4 absolute md:static bg-gray-800 md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'
                        } md:flex`}
                    style={{ top: '60px' }} 
                >
                    <li className="my-2 md:my-0">
                        <a
                            href="#home"
                            className="text-center text-white text-lg hover:bg-orange-600 hover:text-white px-4 py-2 rounded-lg font-bold transition-all duration-300"
                        >
                            Home
                        </a>
                    </li>
                    <li className="my-2 md:my-0">
                        <a
                            href="#Bookcontent"
                            className="text-center text-white text-lg hover:bg-orange-600 hover:text-white px-4 py-2 rounded-lg font-bold transition-all duration-300"
                        >
                            Book Content
                        </a>
                    </li>
                    <li className="my-2 md:my-0">
                        <a
                            href="#Author"
                            className="text-center text-white text-lg hover:bg-orange-600 hover:text-white px-4 py-2 rounded-lg font-bold transition-all duration-300"
                        >
                            Author
                        </a>
                    </li>
                    <li className="my-2 md:my-0">
                        <a
                            href="#Feedback"
                            className="text-center text-white text-lg hover:bg-orange-600 hover:text-white px-4 py-2 rounded-lg font-bold transition-all duration-300"
                        >
                            Feedback & FAQ
                        </a>
                    </li>
                    <li className="my-2 md:my-0">
                        <a
                            href="#contact-us"
                            className="text-center text-white text-lg hover:bg-orange-600 hover:text-white px-4 py-2 rounded-lg font-bold transition-all duration-300"
                        >
                            Contact us
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavView;
