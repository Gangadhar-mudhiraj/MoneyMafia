import React from 'react';
import { FaTrash } from 'react-icons/fa';

interface FAQ {
    question: string;
    askedBy: string;
    answer: string;
    answeredBy: string;
}

interface FAQItemProps {
    faq: FAQ;
    currentUser: string;
    onDelete: (question: string) => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, currentUser, onDelete }) => {
    return (
        <div className="bg-gray-700 p-4 rounded-lg shadow-md relative">
            <p className="text-sm text-gray-300">
                <span className="font-semibold">Asked by:</span> {faq.askedBy}
            </p>
            <h3 className="text-lg font-bold text-orange-400 flex justify-between items-center">
                {faq.question}
                {faq.askedBy === currentUser && (
                    <button
                        onClick={() => onDelete(faq.question)}
                        className="text-red-500 hover:text-red-700 transition-all duration-300 ml-2"
                        title="Delete this question"
                    >
                        <FaTrash />
                    </button>
                )}
            </h3>
            <p className="mt-4 text-gray-100">
                <span className="font-semibold">Answer:</span> {faq.answer}
            </p>
            <p className="text-sm text-gray-300 mt-2">
                <span className="font-semibold">Answered by:</span> {faq.answeredBy}
            </p>
        </div>
    );
};

export default FAQItem;
