import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDownload, FaBriefcase, FaUserGraduate, FaCode, FaRocket } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiMysql, SiExpress } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import portrait from "../../assets/ITSMe.jpeg";

function AboutLeft() {
    return (
        <div className="flex flex-col w-full h-full text-slate-800">
            {/* Top Bar: Status Badge */}
            <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="mb-8 inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100 self-start"
            >
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-600">Available for Freelance</span>
            </motion.div>

            {/* Profile Row */}
            <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                {/* Profile Card */}
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }} 
                    animate={{ scale: 1, opacity: 1 }} 
                    transition={{ delay: 0.1 }}
                    className="shrink-0 relative group rounded-[32px] p-2 bg-gradient-to-b from-blue-50 to-purple-50 shadow-lg shadow-blue-900/5"
                >
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-[24px] overflow-hidden bg-white shadow-inner">
                        <img 
                            src={portrait} 
                            alt="Pratik - Full Stack Developer" 
                            className="w-full h-full object-cover opacity-90 transition duration-500"
                        />
                    </div>
                </motion.div>

                {/* Headers & Internship Card */}
                <div className="flex flex-col w-full">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                        <span className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-2 block">
                            About Me
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-2 leading-tight">
                            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Pratik</span> <br/>
                            Full Stack Developer
                        </h1>
                        <p className="text-lg text-slate-500 font-medium mb-6">
                            Building Modern Web & Mobile Experiences.
                        </p>
                    </motion.div>

                    {/* Internship Glassmorphism Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.3 }}
                        className="bg-white/60 backdrop-blur-md border border-white shadow-sm p-4 rounded-2xl flex items-center gap-4 w-full md:w-fit"
                    >
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl shrink-0">
                            <FaBriefcase />
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-800 leading-tight">TCIL Intern</h4>
                            <p className="text-xs text-slate-500 max-w-[200px]">Telecommunications Consultants India Limited (A Govt. of India Enterprise)</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Description */}
            <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.4 }}
                className="text-slate-600 leading-relaxed mb-6 text-base"
            >
                I'm currently in my <strong>3rd year</strong>, passionate about building clean, scalable, and user-focused digital experiences. I completed my internship at <strong>Telecommunications Consultants India Limited (TCIL)</strong>, where I gained hands-on experience in developing real-world web applications and working in a professional development environment.
                <br /><br />
                I work across the stack to build responsive web and mobile applications. I also take on freelance projects, helping businesses and creators transform ideas into polished, production-ready products—from intuitive UI design to deployment.
            </motion.p>

            {/* Tech Badges */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-2 mb-10"
            >
                {[
                    { name: "React", icon: <FaReact className="text-[#61DAFB]"/> },
                    { name: "React Native", icon: <TbDeviceMobileCode className="text-[#61DAFB]" /> },
                    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]"/> },
                    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]"/> },
                    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]"/> },
                    { name: "Express.js", icon: <SiExpress className="text-gray-600"/> },
                    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]"/> },
                    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]"/> }
                ].map((tech) => (
                    <span key={tech.name} className="flex items-center gap-1.5 bg-white border border-gray-100 shadow-sm px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:shadow-md transition">
                        {tech.icon} {tech.name}
                    </span>
                ))}
            </motion.div>

            {/* CTAs & Socials */}
            <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.6 }}
                className="flex flex-wrap items-center gap-4 mb-12"
            >
                <a href="/final.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all">
                    <FaDownload /> Download Resume
                </a>
                <Link to="/contact">
                    <button className="flex items-center gap-2 bg-white text-slate-700 border border-gray-200 px-6 py-3 rounded-xl font-semibold shadow-sm hover:bg-gray-50 transition-all">
                        Let's Talk
                    </button>
                </Link>

                <div className="flex items-center gap-3 ml-0 md:ml-auto">
                    {[
                        { icon: <FaGithub />, link: "https://github.com/pratikchaubey1" },
                        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/pratik-chaturvedi-584270239" },
                        { icon: <FaInstagram />, link: "https://instagram.com/prabonlyy" },
                        { icon: <FaEnvelope />, link: "mailto:pratikup89@gmail.com" },
                    ].map((social, i) => (
                        <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-slate-500 shadow-sm hover:text-blue-600 hover:shadow-md transition-all text-lg">
                            {social.icon}
                        </a>
                    ))}
                </div>
            </motion.div>

            {/* Statistics Cards */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.7 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
                {[
                    { value: "4+", label: "Years of Coding", sub: "Learning & Building", icon: <FaCode className="text-blue-500"/> },
                    { value: "15+", label: "Projects Shipped", sub: "Web & Mobile Apps", icon: <FaRocket className="text-green-500"/> },
                    { value: "5+", label: "Freelance Clients", sub: "Happy Clients Worldwide", icon: <FaBriefcase className="text-purple-500"/> },
                    { value: "6 Months", label: "Internship at TCIL", sub: "Govt. of India Enterprise", icon: <FaUserGraduate className="text-orange-500"/> }
                ].map((stat, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between h-full">
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mb-3">
                            {stat.icon}
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-900 text-lg leading-none mb-1">{stat.value}</h5>
                            <p className="text-xs font-semibold text-slate-700 mb-0.5">{stat.label}</p>
                            <p className="text-[10px] text-slate-400 leading-tight">{stat.sub}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default AboutLeft;
