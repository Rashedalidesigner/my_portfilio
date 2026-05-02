import React from "react";
import {
    Facebook,
    Twitter,
    Github,
    Linkedin,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#0b1120] text-white border-t border-gray-800 mt-10">
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

                {/* Left */}
                <h2 className="text-blue-400 text-sm mb-4 md:mb-0">
                    MERN Stack Developer
                </h2>

                {/* Center Links */}
                <ul className="flex gap-6 text-sm text-gray-400 mb-4 md:mb-0">
                    <li className="hover:text-white cursor-pointer">Home</li>
                    <li className="hover:text-white cursor-pointer">About</li>
                    <li className="hover:text-white cursor-pointer">Services</li>
                    <li className="hover:text-white cursor-pointer">Projects</li>
                    <li className="hover:text-white cursor-pointer">Contact</li>
                </ul>

                {/* Social Icons */}
                <div className="flex gap-4 text-gray-400">
                    <Facebook size={18} className="hover:text-blue-500 cursor-pointer" />
                    <Twitter size={18} className="hover:text-blue-400 cursor-pointer" />
                    <Github size={18} className="hover:text-white cursor-pointer" />
                    <Linkedin size={18} className="hover:text-blue-500 cursor-pointer" />
                </div>
            </div>

            {/* Bottom */}
            <div className="text-center text-gray-500 text-xs pb-4">
                Copyright © 2026 Rashed ali. All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;