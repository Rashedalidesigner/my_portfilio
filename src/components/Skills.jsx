import React from "react";
import {
    SiTailwindcss,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiHtml5,
} from "react-icons/si";

const skills = [
    {
        icon: <SiTailwindcss />,
        title: "Tailwind CSS",
        desc: "Creating responsive, modern, and clean layouts quickly using utility-first styling.",
    },
    {
        icon: <SiJavascript />,
        title: "JavaScript",
        desc: "Writing efficient, modern, and optimized code for frontend and backend logic.",
    },
    {
        icon: <SiReact />,
        title: "React",
        desc: "Building fast, interactive UI with reusable components and clean state management.",
    },
    {
        icon: <SiNodedotjs />,
        title: "Node.js",
        desc: "Developing scalable backend logic and high-performance server-side applications.",
    },
    {
        icon: <SiMongodb />,
        title: "MongoDB",
        desc: "Managing NoSQL databases with flexible schemas for high-performance storage.",
    },
    {
        icon: <SiHtml5 />,
        title: "HTML",
        desc: "Creating clean, structured layouts using semantic markup and best practices.",
    },
];

const Skills = () => {
    return (
        <section className="py-20 bg-[#0b1120] text-white relative overflow-hidden" id="skills">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-wide">
                    Skills & Technologies
                </h2>
                <p className="text-gray-400 mb-14 text-sm md:text-base max-w-xl mx-auto">
                    I work with modern tools and technologies to build fast,
                    scalable, and efficient web applications.
                </p>

                {/* Grid */}
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-7">

                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className="group relative rounded-xl p-[1px]"
                        >
                            {/* Glow Border */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-sm group-hover:opacity-70 transition duration-500"></div>

                            {/* Card */}
                            <div className="relative h-full w-full rounded-xl bg-[#0f172a] px-6 py-8 flex flex-col items-center text-center border border-[#1f2937] backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1">

                                {/* Icon */}
                                <div className="text-[42px] text-blue-400 mb-5 transition duration-300 group-hover:text-cyan-400 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">
                                    {skill.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold mb-2">
                                    {skill.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {skill.desc}
                                </p>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Skills;