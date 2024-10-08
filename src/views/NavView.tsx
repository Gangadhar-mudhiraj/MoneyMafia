import React from 'react';
import { FaBook } from 'react-icons/fa';

const NavView: React.FC = () => {
    return (
        <header className="sticky top-0 z-10">
            <nav className="w-11/12 p-3 mx-auto flex justify-between rounded-b-full bg-gray-800 text-gray-100 shadow-lg">
                <div className="flex justify-between w-full rounded-b-xl">
                    <div className="w-1/3 px-3 text-center rounded-r-xl rounded-tl-xl text-lg text-white font-extrabold flex items-center">
                        <div className="ms-3 h-8 w-8 bg-white rounded-lg flex items-center justify-center">
                            <FaBook className="text-orange-900 text-2xl" />
                        </div>
                        <span className="ml-2">Money Mafia</span>
                    </div>
                    <ul className="flex space-x-4 px-7 my-auto">
                        <li>
                            <a href="#home" className="text-center text-white text-lg hover:bg-orange-600 hover:text-white p-2 rounded-r-xl rounded-tl-xl font-bold">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#Bookcontent" className="text-center text-white text-lg hover:bg-orange-600 hover:text-white p-2 rounded-r-xl rounded-tl-xl font-bold">
                                Book Content
                            </a>
                        </li>
                        <li>
                            <a href="#Author" className="text-center text-white text-lg hover:bg-orange-600 hover:text-white p-2 rounded-r-xl rounded-tl-xl font-bold">
                                Author
                            </a>
                        </li>
                        <li>
                            <a href="#Feedback" className="text-center text-white text-lg hover:bg-orange-600 hover:text-white p-2 rounded-r-xl rounded-tl-xl font-bold">
                                Feedback
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavView;
