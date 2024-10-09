import React from "react";
import SocialMediaLinks from "../views/SocialMediaLinks";

const FooterContainer: React.FC = () => {
    const socialLinks = [
        {
            name: "Facebook",
            url: "https://facebook.com",
        },
        {
            name: "Twitter",
            url: "https://twitter.com",
        },
        {
            name: "Instagram",
            url: "https://instagram.com",
        },
    ];

    return (
        <footer className="bg-gray-800 text-gray-100 py-4 bottom-0 w-full" id="contact-us">
            <div className="container mx-auto text-center">
                <p className="mb-2">© 2024 Your Company Name. All rights reserved.</p>
                <SocialMediaLinks links={socialLinks} />
            </div>
        </footer>
    );
};

export default FooterContainer;
