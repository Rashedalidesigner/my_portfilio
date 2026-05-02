import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-gray-800">
            <div className="flex justify-between items-center px-6 md:px-10 py-4 text-white">

                {/* LOGO */}
                <h1 className="text-lg md:text-xl font-bold text-blue-400">
                    MERN Developer
                </h1>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex gap-6 text-sm">
                    <li><a href="#hero" className="hover:text-blue-400">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-400">About</a></li>
                    <li><a href="#services" className="hover:text-blue-400">Services</a></li>
                    <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                </ul>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-4">

                    {/* BUTTON */}
                    <button className="hidden md:block bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-2 rounded-full text-sm hover:opacity-90 transition">
                        Hire Me
                    </button>

                    {/* MOBILE MENU ICON */}
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden px-6 pb-6 text-white">
                    <ul className="flex flex-col gap-4 text-sm">

                        <li><a href="#hero" onClick={() => setOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
                        <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
                        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
                        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>

                        <button className="mt-4 bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-2 rounded-full text-sm">
                            Hire Me
                        </button>

                    </ul>
                </div>
            )}
        </nav>
    );
}