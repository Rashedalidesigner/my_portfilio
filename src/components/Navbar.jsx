export default function Navbar() {
    return (
        <div className="flex justify-between items-center px-10 py-5 bg-[#0f172a] sticky top-0 z-100">
            <h1 className="text-xl font-bold text-blue-400">MERN Stack Developer</h1>

            <ul className="flex gap-6">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <button className="bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-2 rounded-full">
                Hire Me
            </button>
        </div>
    );
}