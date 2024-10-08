import React from 'react';

const HomeView: React.FC = () => {
    return (
        <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center py-4 sm:py-6 text-white underline drop-shadow-lg">
                Welcome
            </h1>
            <div className="w-full sm:w-11/12 lg:w-10/12 mx-auto flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 px-4 py-8 sm:py-12 backdrop-blur-sm rounded-lg shadow-lg">
                <div className="details w-full md:w-1/2 text-center md:text-left px-4 sm:px-6 lg:px-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 pb-4 sm:pb-6 text-fuchsia-100 drop-shadow-lg">
                        Money Mafia
                    </h2>
                    <button className="text-center text-lg bg-orange-600 text-white p-3 rounded-r-xl rounded-tl-xl font-bold transition transform hover:bg-orange-500 hover:scale-105">
                        Preorder Now
                    </button>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed lg:w-4/5 mx-auto md:mx-0 mt-4 sm:mt-6 text-gray-200 drop-shadow-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.
                    </p>
                </div>
                <div className="imgContainer w-full md:w-1/2 flex justify-center md:justify-end px-4">
                    <img src="/src/assets/Book.jpg" alt="Book Cover" className="object-cover shadow-lg rounded-lg w-4/5 md:w-full" />
                </div>
            </div>
        </>
    );
};

export default HomeView;
