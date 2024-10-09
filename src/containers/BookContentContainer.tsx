import React from 'react';
import H1 from '../utils/H1';
import BookContentView from '../views/BookContentView';

const BookContentContainer: React.FC = () => {

    return (
        <section id="Bookcontent" className='w- m-auto bg-gray-600'>
            <H1 Title="What's in the book" />
            <BookContentView />
        </section >
    );
};

export default BookContentContainer;
