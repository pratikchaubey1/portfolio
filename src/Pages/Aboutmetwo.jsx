import React from "react";
import ITSME from "../assets/ITSME.jpeg";
import { motion } from "framer-motion";

// social + tech icons
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobileAlt,
  FaPalette,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiFreelancer } from "react-icons/si";
import { FiDownload } from "react-icons/fi";

function Aboutmetwo() {
  const skills = [
    { name: "React", icon: <FaReact className="text-cyan-500" /> },
    { name: "React Native", icon: <FaMobileAlt className="text-indigo-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" /> },
    { name: "MongoDB / DBMS", icon: <FaDatabase className="text-emerald-600" /> },
    { name: "Freelance Work", icon: <SiFreelancer className="text-purple-500" /> },
  ];

  const stats = [
    { label: "Years of Coding", value: "3+" },
    { label: "Projects Shipped", value: "15+" },
    { label: "Freelance Clients", value: "5+" },
  ];

  return (
    <div className="relative min-h-[90vh] w-full  overflow-hidden bg-white flex justify-center px-6 md:px-12 lg:px-20 py-16">
      {/* soft neutral blobs */}
      <div className="pointer-events-none absolute -top-10 -left-10 w-64 h-64 rounded-full bg-slate-100/60 blur-3xl opacity-80" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full bg-slate-100/60 blur-3xl opacity-80" />

      {/* soft neutral outer glow */}
      <div className="absolute inset-x-4 md:inset-x-16 lg:inset-x-32 top-24 -z-10 h-[60vh] rounded-[2.5rem] bg-slate-100/70 blur-3xl opacity-80" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-6xl w-full bg-white/90 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-3xl px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-[1.1fr,1.6fr] gap-10 items-center"
      >
        {/* rotating React icon in bg */}
        <motion.div
          className="hidden md:block absolute -top-10 -right-6 text-[140px] text-cyan-400/15"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        >
          <FaReact />
        </motion.div>

        {/* LEFT – IMAGE (floating with badge) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center md:justify-start"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Availability badge on top of image */}
            <div className="absolute -top-0.5 -left-3 z-20 bg-slate-900 text-white text-[10px] md:text-[11px] px-3 py-1 rounded-full flex items-center gap-2 shadow-lg border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Available for freelance
            </div>

            <div className="absolute -inset-3 rounded-3xl shadow-xl shadow-cyan-200 blur-xl opacity-90 z-0" />
            <img
              src={ITSME}
              alt="Pratik"
              className="relative z-10 w-[230px] md:w-[280px] lg:w-[300px] aspect-[4/5] rounded-3xl shadow-2xl object-cover"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT – TEXT CONTENT */}
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
                Hi, I&apos;m Pratik
                <span className="block text-lg md:text-xl text-slate-600 mt-1 font-normal">
                  Full Stack Developer • React Native • Freelancer
                </span>
              </span>
            </h1>
          </div>

          <p className="text-sm md:text-base leading-relaxed text-slate-600 max-w-xl">
            I&apos;m currently in my{" "}
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
          <div className="pt-4 border-t border-slate-100 mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3 shadow-sm flex flex-col"
                >
                  <span className="text-sm font-semibold text-slate-900">
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-slate-500">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Aboutmetwo;
