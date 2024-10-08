import React from 'react';

const BookContentView: React.FC = () => {
    return (
        <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center py-4 sm:py-6 text-gray-200 underline">
                What's in the book
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-6 md:px-8">
                <div className="col1 space-y-6">
                    <div className="col bg-gray-100 p-4 rounded-lg shadow-md">
                        <h1 className="text-xl font-bold mb-2">Lorem ipsum dolor sit amet.</h1>
                        <p className="text-sm md:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, cupiditate quos? Error laborum, voluptas recusandae nesciunt exercitationem commodi sit molestias?
                        </p>
                    </div>
                    <div className="col bg-gray-100 p-4 rounded-lg shadow-md">
                        <h1 className="text-xl font-bold mb-2">Lorem ipsum dolor sit amet.</h1>
                        <p className="text-sm md:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, cupiditate quos? Error laborum, voluptas recusandae nesciunt exercitationem commodi sit molestias?
                        </p>
                    </div>
                </div>
                <div className="col2 bg-gray-100 p-4 rounded-lg shadow-md">
                    <h1 className="text-xl font-bold mb-2 py-6">Lorem ipsum dolor sit amet.</h1>
                    <p className="text-sm md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, cupiditate quos? Error laborum, voluptas recusandae nesciunt exercitationem commodi sit molestias?
                    </p>
                </div>
                <div className="col3 space-y-6">
                    <div className="col bg-gray-100 p-4 rounded-lg shadow-md">
                        <h1 className="text-xl font-bold mb-2">Lorem ipsum dolor sit amet.</h1>
                        <p className="text-sm md:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, cupiditate quos? Error laborum, voluptas recusandae nesciunt exercitationem commodi sit molestias?
                        </p>
                    </div>
                    <div className="col bg-gray-100 p-4 rounded-lg shadow-md">
                        <h1 className="text-xl font-bold mb-2">Lorem ipsum dolor sit amet.</h1>
                        <p className="text-sm md:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, cupiditate quos? Error laborum, voluptas recusandae nesciunt exercitationem commodi sit molestias?
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookContentView;
