import React from "react";

const projects = [
    {
        title: "MERN Todo App (2025)",
        desc: "A fully functional Todo application with authentication, CRUD operations, and a clean responsive UI.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        image: "/projects/project1.png",
        github: "#",
        live: "#",
    },
    {
        title: "E-Commerce Demo (2025)",
        desc: "A demo e-commerce platform featuring product listing, cart system, and checkout flow.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        image: "/projects/project2.png",
        github: "#",
        live: "#",
    },
];

const Projects = () => {
    return (
        <section className="py-20 bg-[#0b1120] text-white relative overflow-hidden" id="projects">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-wide">
                    Recent Projects
                </h2>
                <p className="text-gray-400 mb-14 text-sm md:text-base max-w-xl mx-auto">
                    Here are some of the real-world projects I've built using the MERN stack.
                </p>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-10">

                    {projects.map((project, i) => (
                        <div key={i} className="group relative rounded-2xl p-[1px]">

                            {/* OUTER GLOW */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-25 blur-md group-hover:opacity-60 transition duration-500"></div>

                            {/* CARD */}
                            <div className="relative h-full w-full rounded-2xl bg-[#0f172a]/90 backdrop-blur-xl border border-[#1f2937] overflow-hidden transition-all duration-300 group-hover:-translate-y-1">

                                {/* IMAGE */}
                                <div className="overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="p-6 text-left">

                                    {/* TITLE */}
                                    <h3 className="text-lg font-semibold mb-2">
                                        {project.title}
                                    </h3>

                                    {/* DESC */}
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {project.desc}
                                    </p>

                                    {/* TECH STACK */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-3 py-1 rounded-full bg-[#111827] border border-gray-700 text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* BUTTONS */}
                                    <div className="flex gap-3">
                                        <a
                                            href={project.github}
                                            className="px-4 py-2 text-xs rounded-full bg-[#111827] border border-gray-600 hover:border-blue-500 transition"
                                        >
                                            GitHub ↗
                                        </a>
                                        <a
                                            href={project.live}
                                            className="px-4 py-2 text-xs rounded-full bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90 transition"
                                        >
                                            Live Demo ↗
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Projects;