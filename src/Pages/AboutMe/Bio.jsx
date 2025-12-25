import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { skills } from "./data";
import Stats from "./Stats";

function Bio() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5 md:space-y-6"
        >
            <div>
                <p className="text-xs tracking-[0.25em] uppercase text-slate-500 mb-2">
                    About Me
                </p>
                <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight flex items-center gap-2">
                    <FaReact className="text-cyan-500 text-2xl md:text-3xl" />
                    <span>
                        Hi, I'm Pratik
                        <span className="block text-lg md:text-xl text-slate-600 mt-1 font-normal">
                            Full Stack Developer • React Native • Freelancer
                        </span>
                    </span>
                </h1>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-slate-600 max-w-xl">
                I'm currently in my{" "}
                <span className="font-medium text-slate-800">3rd year</span>, building experiences that
                feel clean, fast and modern. I work across the stack with{" "}
                <span className="font-medium">React, Node.js, JavaScript, Tailwind CSS</span> and
                production-ready databases.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-slate-600 max-w-xl">
                Along with web apps, I also build{" "}
                <span className="font-medium">mobile applications using React Native</span> and take on{" "}
                <span className="font-medium">freelance projects</span>, helping brands and creators
                ship polished products — from UI concepts to live deployment.
            </p>

            {/* SKILLS with icons */}
            <div>
                <p className="text-xs font-semibold tracking-wide text-slate-500 mb-2">
                    Tools & Focus
                </p>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <span
                            key={skill.name}
                            className="flex items-center gap-1 text-[11px] md:text-xs px-3 py-1 rounded-full border border-slate-200/80 bg-slate-50/90 text-slate-700 shadow-sm hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                        >
                            {skill.icon}
                            {skill.name}
                        </span>
                    ))}
                </div>
            </div>

            {/* BUTTONS + SOCIALS */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* Resume - open in new tab */}
                <a
                    href="/main.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2 rounded-full bg-slate-900 text-slate-50 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                    <FiDownload className="text-sm" />
                    Download Resume
                </a>

                <div className="flex items-center gap-3 text-slate-500 text-xl">
                    <a
                        href="https://github.com/pratikchaubey1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-slate-900 hover:-translate-y-0.5 transition-all duration-150"
                        aria-label="Github"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pratik-chaturvedi-584270239/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-slate-900 hover:-translate-y-0.5 transition-all duration-150"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://www.instagram.com/_prabonly/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-slate-900 hover:-translate-y-0.5 transition-all duration-150"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>

            {/* STATS STRIP */}
            <Stats />
        </motion.div>
    );
}

export default Bio;
