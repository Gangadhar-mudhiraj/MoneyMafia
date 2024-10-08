import React from "react";
import AuthorView from "../views/AuthorView";

interface AuthorContainerProps {
    authorName: string;
}

const AuthorContainer: React.FC<AuthorContainerProps> = ({ authorName }) => {
    return (
        <div className="px-4 py-8 bg-gray-900" id="Author">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center py-4 sm:py-6 text-gray-200 underline">
                Meet the Author
            </h1>
            <div className="w-5/6 mx-auto bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row items-center p-6">
                <AuthorView name={authorName} />
            </div>
        </div>
    );
};

export default AuthorContainer;
