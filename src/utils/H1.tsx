import React from 'react';

interface H1Props {
    Title: string;
}

const H1: React.FC<H1Props> = ({ Title }) => {
    return (
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center py-4 sm:py-6 text-gray-200 underline">
            {Title}
        </h1>
    );
};

export default H1;
