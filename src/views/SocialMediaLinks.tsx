import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing social media icons

type SocialMediaLink = {
    name: string;
    url: string;
}

interface SocialMediaLinksProps {
    links: SocialMediaLink[];
}

const iconMap: { [key: string]: JSX.Element } = {
    Facebook: <FaFacebook className="text-xl hover:text-blue-600" />,
    Twitter: <FaTwitter className="text-xl hover:text-blue-400" />,
    Instagram: <FaInstagram className="text-xl hover:text-pink-600" />,
};

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({ links }) => {
    return (
        <div className="flex justify-center space-x-4">
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"

                >
                    {iconMap[link.name]}
                </a>
            ))}
        </div>
    );
};

export default SocialMediaLinks;
