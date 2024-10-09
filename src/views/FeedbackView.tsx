import React, { useState } from 'react';
import { FaStar, FaComments, FaLightbulb } from 'react-icons/fa';

interface Feedback {
    rating: number;
    experience: string;
    ideas: string;
}

const FeedbackView: React.FC = () => {
    const [rating, setRating] = useState<number>(0);
    const [experience, setExperience] = useState<string>('');
    const [ideas, setIdeas] = useState<string>('');
    const [hover, setHover] = useState<number>(0);

    const handleStarClick = (index: number) => {
        setRating(index);
    };

    const handleStarHover = (index: number) => {
        setHover(index);
    };

    const handleStarHoverOut = () => {
        setHover(0);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!rating || !experience || !ideas) {
            console.error("All fields are required!");
            return;
        }

        const feedback: Feedback = {
            rating,
            experience,
            ideas
        };

        console.log(feedback);


        setRating(0);
        setExperience('');
        setIdeas('');
    };

    return (
        <div className="bg-gray-800 p-8 rounded-lg w-full md:w-full lg:w-full mx-auto my-5">
            <form onSubmit={handleSubmit} className="space-y-6">


                <div className="flex items-center space-x-2 justify-center">
                    <FaStar className="text-orange-400" />
                    <span className="text-orange-400 text-lg">Rate Us:</span>
                </div>
                <div className="flex space-x-1 justify-center">
                    {Array.from({ length: 5 }, (_, index) => index + 1).map((star) => (
                        <FaStar
                            key={star}
                            className={`cursor-pointer text-3xl ${(hover || rating) >= star ? 'text-orange-400' : 'text-gray-400'}`}
                            onClick={() => handleStarClick(star)}
                            onMouseEnter={() => handleStarHover(star)}
                            onMouseLeave={handleStarHoverOut}
                        />
                    ))}
                </div>


                <div className="flex items-center space-x-2 justify-center">
                    <FaComments className="text-green-400" />
                    <label htmlFor="experience-input" className="text-green-400 text-lg">
                        Your Experience:
                    </label>
                </div>
                <input
                    type="text"
                    name="experience"
                    id="experience-input"
                    placeholder="Tell us your experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full p-3 bg-green-100 rounded-lg border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 mx-auto"
                    required
                />


                <div className="flex items-center space-x-2 justify-center">
                    <FaLightbulb className="text-blue-400" />
                    <label htmlFor="ideas-input" className="text-blue-400 text-lg">
                        Any Ideas?
                    </label>
                </div>
                <input
                    type="text"
                    name="ideas"
                    id="ideas-input"
                    placeholder="Share your creative ideas"
                    value={ideas}
                    onChange={(e) => setIdeas(e.target.value)}
                    className="w-full p-3 bg-blue-100 rounded-lg border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mx-auto"
                    required
                />


                <button
                    type="submit"
                    className="w-full py-3 px-6 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 mx-auto block"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FeedbackView;
