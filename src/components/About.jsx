import profile from "../assets/profile.png";


export default function About() {
    return (
        <section className="flex gap-10 px-16 py-20 justify-between items-center" id="about">
            <img src={profile} className="w-120 rounded-xl" />

            <div className="max-w-1/2 ">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>

                <p className="text-gray-300 leading-7">
                    I’m a MERN stack developer with a passion for building high-quality web applications that are both scalable and user-friendly. I focus on writing clean, maintainable code and developing efficient APIs while delivering smooth and responsive front-end experiences. I’m always eager to learn, adapt, and take on new challenges in the ever-evolving world of web development.
                </p>

                <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 mt-5">
                    Download Resume
                </button>
            </div>
        </section>
    );
}