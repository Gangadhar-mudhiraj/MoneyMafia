import React from 'react';
import HomeContainer from '../containers/HomeContainer';
import BookContentContainer from '../containers/BookContentContainer';
import NavView from '../views/NavView';
import AuthorContainer from '../containers/AuthorContainer';
import FeedbackContainer from '../containers/FeedbackContainer';
import FooterContainer from '../containers/FooterContainer';


const Homepage: React.FC = () => {
    return (
        <>
            <NavView />

            <main>
                <HomeContainer />
                <BookContentContainer />
                <AuthorContainer authorName='Author Name' />
                <FeedbackContainer />
                <FooterContainer />
            </main>
        </>
    );
};

export default Homepage;
