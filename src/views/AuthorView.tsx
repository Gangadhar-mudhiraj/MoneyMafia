import React from "react";
import author from "../assets/author.png";

interface AuthorViewProps {
    name: string;
}

const AuthorView: React.FC<AuthorViewProps> = ({ name }) => {
    return (
        <>

            <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
                <img
                    src={author}
                    alt="Author"
                    className="h-auto object-cover rounded-lg shadow-lg"
                />
            </div>

            <div className="w-full md:w-1/2 md:pl-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-fuchsia-200">{name}</h2>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
        </>
    );
};

export default AuthorView;
