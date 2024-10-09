import React from "react";
import AuthorView from "../views/AuthorView";
import H1 from "../utils/H1";

interface AuthorContainerProps {
    authorName: string;
}

const AuthorContainer: React.FC<AuthorContainerProps> = ({ authorName }) => {
    return (
        <div className="px-4 py-8 bg-gray-900" id="Author">
            <H1 Title="Meet the Author" />
            <div className="w-5/6 mx-auto bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row items-center p-6">
                <AuthorView name={authorName} />
            </div>
        </div>
    );
};

export default AuthorContainer;
