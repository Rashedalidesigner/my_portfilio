import React from "react";
import profile from "../assets/profile.png";
import {
    Github,
    Linkedin,
    Facebook,
    Twitter,
} from "lucide-react";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";



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
                        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500" onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>
                            View Projects
                        </button>
                        <button className="px-5 py-2 rounded-full border border-gray-600" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
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
                            src={profile}
                            alt="profile"
                            className="relative w-72 h-72 object-cover rounded-full border-4 border-[#0f172a]"
                        />

                        {/* Floating Icons */}
                        <div className="absolute -top-4 left-10 text-blue-400 text-2xl"><TbBrandJavascript /></div>
                        <div className="absolute top-10 -right-6 text-blue-400 text-2xl"><FaNodeJs /></div>
                        <div className="absolute bottom-10 -left-6 text-blue-400 text-2xl"><TbBrandHtml5 /></div>
                        <div className="absolute bottom-0 right-10 text-blue-400 text-2xl"><IoLogoReact /></div>

                    </div>
                </div>

            </div>
        </header>
    );
};

export default Hero;