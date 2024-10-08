import React from 'react';
import FeedbackView from '../views/FeedbackView';

const FeedbackContainer: React.FC = () => {
    return (
        <section id="Feedback" className="feedback-section bg-gray-600 p-8  shadow-md">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center py-4 sm:py-6 text-gray-200 underline">
                Give Your Feedback
            </h1>

            <FeedbackView />
        </section>
    );
}

export default FeedbackContainer;
