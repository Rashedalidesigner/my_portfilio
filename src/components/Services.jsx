import React from "react";
import {
    Code2,
    LayoutDashboard,
    ServerCog,
    Database,
    ShieldCheck,
    ShoppingCart,
    Gauge,
    Cloud,
} from "lucide-react";

const services = [
    {
        icon: <Code2 />,
        title: "Full-Stack Web Development",
        desc: "Building scalable web applications using MERN stack with clean architecture and optimized code.",
    },
    {
        icon: <LayoutDashboard />,
        title: "Frontend Development",
        desc: "Modern responsive UI using React, Tailwind CSS, and smooth user experience design.",
    },
    {
        icon: <ServerCog />,
        title: "Backend & API Development",
        desc: "Developing REST APIs with Node.js, Express, and secure authentication systems.",
    },
    {
        icon: <Database />,
        title: "Database Design & Management",
        desc: "Structured MongoDB database design with performance optimization.",
    },
    {
        icon: <ShieldCheck />,
        title: "Authentication & Authorization",
        desc: "Secure systems using JWT, OAuth, and role-based access control.",
    },
    {
        icon: <ShoppingCart />,
        title: "E-Commerce Development",
        desc: "Full-featured eCommerce platforms with payments, cart, and admin panels.",
    },
    {
        icon: <Gauge />,
        title: "Performance Optimization",
        desc: "Improving speed using lazy loading, caching, and best practices.",
    },
    {
        icon: <Cloud />,
        title: "Deployment & Hosting Support",
        desc: "Deploying apps on cloud with CI/CD and production-ready setup.",
    },
];

const Services = () => {
    return (
        <section className="py-20 bg-[#0b1120] text-white relative overflow-hidden" id="services">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-wide">
                    Services I Provide
                </h2>
                <p className="text-gray-400 mb-14 text-sm md:text-base max-w-xl mx-auto">
                    I offer design and development services focused on building fast,
                    modern, and user-friendly digital experiences.
                </p>

                {/* Grid */}
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-7">

                    {services.map((service, i) => (
                        <div key={i} className="group relative rounded-xl p-[1px]">

                            {/* OUTER GLOW */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-25 blur-md group-hover:opacity-60 transition duration-500"></div>

                            {/* CARD */}
                            <div className="relative h-full w-full rounded-xl bg-[#0f172a]/90 backdrop-blur-xl px-5 py-7 border border-[#1f2937] flex flex-col items-center text-center transition-all duration-300 group-hover:-translate-y-1">

                                {/* ICON */}
                                <div className="text-blue-400 text-3xl mb-4 transition duration-300 group-hover:text-cyan-400 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">
                                    {React.cloneElement(service.icon, { size: 32 })}
                                </div>

                                {/* TITLE */}
                                <h3 className="text-sm font-semibold mb-2 leading-snug">
                                    {service.title}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    {service.desc}
                                </p>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Services;