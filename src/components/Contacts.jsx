import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                toast.success("Message sent 🚀");
                setForm({ name: "", email: "", subject: "", message: "" });
            } else {
                toast.error("Something went wrong ❌");
            }
        } catch {
            toast.error("Server error ⚠️");
        }
    };

    return (
        <section className="py-20 bg-[#0b1120] text-white" id="contact">
            <Toaster position="top-right" />

            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Contact Me
                    </h2>
                    <p className="text-gray-400 mt-3 text-sm md:text-base">
                        Let’s build something amazing together.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    {/* LEFT SIDE */}
                    <div className="space-y-6">

                        <h3 className="text-xl font-semibold">
                            Get in Touch
                        </h3>

                        <p className="text-gray-400 text-sm">
                            I’m open to freelance, full-time roles, or collaborations.
                        </p>

                        {/* Info Cards */}
                        {[
                            {
                                icon: <FiMail />,
                                label: "Email",
                                value: "rashedalidesigner@email.com",
                            },
                            {
                                icon: <FiPhone />,
                                label: "Phone",
                                value: "+88 01914291809",
                            },
                            {
                                icon: <FiMapPin />,
                                label: "Location",
                                value: "Bera,Pabna,Bangladesh post-code(6683)",
                            },
                        ].map((item, i) => (
                            <div key={i} className="group relative rounded-xl p-[1px]">

                                {/* Glow */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-md group-hover:opacity-50 transition"></div>

                                {/* Card */}
                                <div className="relative flex items-center gap-3 bg-[#0f172a] border border-[#1f2937] rounded-xl px-4 py-3">
                                    <span className="text-blue-400 text-lg">
                                        {item.icon}
                                    </span>
                                    <div>
                                        <p className="text-xs text-gray-400">
                                            {item.label}
                                        </p>
                                        <p className="text-sm font-medium">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* RIGHT SIDE FORM */}
                    <div className="group relative rounded-2xl p-[1px]">

                        {/* Glow */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-25 blur-md group-hover:opacity-60 transition"></div>

                        {/* Form Card */}
                        <div className="relative bg-[#0f172a]/90 backdrop-blur-xl border border-[#1f2937] rounded-2xl p-6 md:p-8">

                            <form onSubmit={handleSubmit} className="space-y-5">

                                {/* Inputs */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Name"
                                        required
                                        className="w-full px-4 py-2 bg-[#111827] border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        required
                                        className="w-full px-4 py-2 bg-[#111827] border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition"
                                    />
                                </div>

                                <input
                                    type="text"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className="w-full px-4 py-2 bg-[#111827] border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition"
                                />

                                <textarea
                                    rows="5"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Your Message..."
                                    required
                                    className="w-full px-4 py-2 bg-[#111827] border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition resize-none"
                                />

                                {/* Button */}
                                <button
                                    type="submit"
                                    className="w-full py-3 text-sm rounded-full bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90 transition"
                                >
                                    Send Message →
                                </button>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;