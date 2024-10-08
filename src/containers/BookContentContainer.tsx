import React from 'react';
import BookContentView from '../views/BookContentView';

const BookContentContainer: React.FC = () => {

    return (
        <section id="Bookcontent" className='w- m-auto bg-gray-600'>
            <BookContentView />
        </section>
    );
};

export default BookContentContainer;
