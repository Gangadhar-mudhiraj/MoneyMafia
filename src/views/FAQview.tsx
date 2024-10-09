
import React, { useState } from 'react';
import FAQItem from './FAQItem';

const FAQview: React.FC = () => {
    interface FAQ {
        question: string;
        askedBy: string;
        answer: string;
        answeredBy: string;
    }

    const initialFAQs: FAQ[] = [
        {
            question: "How can I reset my password?",
            askedBy: "User123",
            answer: "You can reset your password by clicking on 'Forgot Password' at the login screen.",
            answeredBy: "Support Team"
        },
        {
            question: "Where can I check my order history?",
            askedBy: "User456",
            answer: "Order history is available in the 'My Orders' section in your profile.",
            answeredBy: "Support Team"
        },
        {
            question: "How can I contact customer support?",
            askedBy: "User789",
            answer: "You can contact customer support through the 'Contact Us' page.",
            answeredBy: "Support Team"
        }
    ];

    const [faqs, setFaqs] = useState<FAQ[]>(initialFAQs);
    const [query, setQuery] = useState<string>('');
    const [showInput, setShowInput] = useState<boolean>(false);

    const currentUser = "You";

    const handleQuerySubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.trim() === "") {
            return;
        }


        const newFAQ: FAQ = {
            question: query,
            askedBy: currentUser,
            answer: "Your question has been received. Our response will be available soon.",
            answeredBy: "Support Team"
        };


        setFaqs([...faqs, newFAQ]);
        setQuery('');
    };

    const toggleInputBox = () => {
        setShowInput(!showInput);
    };

    const handleDelete = (question: string) => {
        setFaqs(faqs.filter(faq => faq.question !== question));
    };


    const sortedFAQs = [...faqs].sort((a, b) => {
        if (a.askedBy === currentUser && b.askedBy !== currentUser) return -1;
        if (a.askedBy !== currentUser && b.askedBy === currentUser) return 1;
        return 0;
    });

    return (
        <div className="space-y-6">

            <div className="sticky top-0 z-10 bg-gray-600 p-4">
                <button
                    onClick={toggleInputBox}
                    className="mt-6 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
                >
                    {showInput ? "Hide Question Box" : "Ask a Question"}
                </button>


                {showInput && (
                    <form onSubmit={handleQuerySubmit} className="mt-4">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Ask a question..."
                            className="w-full p-3 bg-gray-100 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="mt-3 w-full py-2 bg-orange-500 text-gray-900 rounded-lg hover:bg-orange-600 transition-all duration-300"
                        >
                            Submit Query
                        </button>
                    </form>
                )}
            </div>

            <div className="space-y-4 mt-4">
                {sortedFAQs.map((faq, index) => (
                    <FAQItem key={index} faq={faq} currentUser={currentUser} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default FAQview;
