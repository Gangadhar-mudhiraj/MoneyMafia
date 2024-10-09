import React from "react";
import FeedbackView from "../views/FeedbackView";
import H1 from "../utils/H1";
import FAQview from "../views/FAQview";

const FeedbackContainer: React.FC = () => {
    return (
        <section id="Feedback" className="feedback-section bg-gray-600 p-8 shadow-md">
            <H1 Title="Feedback and FAQ" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="md:col-span-1 flex flex-col">
                    <FeedbackView />
                </div>

                <div className="md:col-span-2 flex flex-col h-auto md:h-[500px] overflow-y-auto">
                    <FAQview />
                </div>
            </div>
        </section>
    );
};

export default FeedbackContainer;
