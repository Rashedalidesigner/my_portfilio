import profile from "../assets/profile.png";

export default function About() {
    return (
        <section
            id="about"
            className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-16 py-20 bg-[#0b1120] text-white"
        >
            {/* IMAGE */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={profile}
                    alt="profile"
                    className="w-64 sm:w-80 md:w-full max-w-sm md:max-w-md rounded-2xl shadow-lg"
                />
            </div>

            {/* CONTENT */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    About Me
                </h2>

                <p className="text-gray-400 leading-7 text-sm md:text-base">
                    I’m a MERN stack developer with a passion for building high-quality
                    web applications that are both scalable and user-friendly. I focus
                    on writing clean, maintainable code and developing efficient APIs
                    while delivering smooth and responsive front-end experiences. I’m
                    always eager to learn, adapt, and take on new challenges in the
                    ever-evolving world of web development.
                </p>

                <button className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90 transition text-sm md:text-base">
                    Download Resume
                </button>
            </div>
        </section>
    );
}