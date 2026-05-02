import React from "react";
import {
    Github,
    Linkedin,
    Facebook,
    Twitter,
} from "lucide-react";

const Hero = () => {
    return (
        <header className="bg-[#0b1120] text-white" id="hero">
            {/* HERO */}
            <div className="grid md:grid-cols-2 items-center px-6 md:px-12 py-16 gap-10">

                {/* LEFT */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
                            Rashed Ali
                        </span>
                    </h2>

                    <p className="text-gray-400 mb-6 max-w-md">
                        I design and develop scalable web apps using React, Node.js, Express, and MongoDB, with a strong focus on performance and clean, maintainable code.
                    </p>

                    <div className="flex gap-4">
                        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500">
                            View Projects
                        </button>
                        <button className="px-5 py-2 rounded-full border border-gray-600">
                            Let’s Collaborate
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center relative">
                    <div className="relative">

                        {/* Glow */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 blur-2xl opacity-30"></div>

                        {/* Image */}
                        <img
                            src="/profile.png" // replace with your image
                            alt="profile"
                            className="relative w-72 h-72 object-cover rounded-full border-4 border-[#0f172a]"
                        />

                        {/* Floating Icons */}
                        <div className="absolute -top-4 left-10 text-blue-400 text-xs">JS</div>
                        <div className="absolute top-10 -right-6 text-blue-400 text-xs">CSS</div>
                        <div className="absolute bottom-10 -left-6 text-blue-400 text-xs">HTML</div>
                        <div className="absolute bottom-0 right-10 text-blue-400 text-xs">React</div>

                    </div>
                </div>

            </div>
        </header>
    );
};

export default Hero;