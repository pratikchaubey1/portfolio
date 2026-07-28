import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Building2, Star, Briefcase } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";
import portrait from "../../assets/ITSMe.jpg";

function HeroCard() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    // Mouse follow effect for right side glow
    useEffect(() => {
        const handleMouseMove = (e) => {
            const container = document.getElementById("hero-right-container");
            if (container) {
                const rect = container.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const techStack = [
        "React.js", "Node.js", "Express.js", "JavaScript", 
        "Tailwind CSS", "MongoDB", "MySQL", "PHP", ".NET"
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full flex flex-col xl:flex-row gap-10 items-center xl:items-start pt-10 pb-10 group bg-white/40 xl:bg-transparent rounded-3xl p-6 xl:p-0"
        >
            {/* LEFT COLUMN - CONTENT */}
            <div className="flex-1 z-10 flex flex-col items-center xl:items-start text-center xl:text-left w-full max-w-[650px]">
                
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-slate-200/60 text-slate-700 font-medium px-4 py-2 rounded-full text-sm shadow-sm"
                    >
                        <span className="text-base leading-none">👋</span> Hello There!
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-slate-200/60 text-slate-700 font-medium px-4 py-2 rounded-full text-sm shadow-sm"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        Available for Freelance
                    </motion.div>
                </div>

                {/* Main Heading */}
                <motion.h1 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-5xl sm:text-6xl lg:text-7xl xl:text-[56px] 2xl:text-[64px] font-heading font-extrabold tracking-tighter leading-[1.1] mb-6 text-slate-900"
                >
                    Hello, I'm <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#3B82F6]">
                        Pratik
                    </span>
                </motion.h1>

                {/* Subtitle & Description */}
                <motion.h2 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-2xl font-semibold text-slate-800 tracking-tight mb-4"
                >
                    Full Stack Developer
                </motion.h2>

                <motion.p 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 max-w-[500px] font-medium"
                >
                    I build scalable, responsive and high-performance web applications using React.js, Node.js, Express.js, Tailwind CSS, MongoDB, PHP, .NET and MySQL with clean architecture and excellent user experience.
                </motion.p>

                {/* Tech Pills */}
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-wrap justify-center xl:justify-start gap-2 mb-8 max-w-[500px]"
                >
                    {techStack.map((tech) => (
                        <div 
                            key={tech} 
                            className="bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-sm text-slate-600 px-4 py-2 rounded-full text-sm font-semibold hover:border-[#6366F1]/40 hover:bg-white hover:text-slate-900 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default"
                        >
                            {tech}
                        </div>
                    ))}
                </motion.div>

                {/* CTAs and Socials */}
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center xl:items-start gap-6 w-full justify-center xl:justify-start"
                >
                    {/* Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link to="/about">
                            <button className="group flex items-center gap-2 bg-[#111827] hover:bg-[#000000] text-white px-6 py-3 rounded-2xl font-semibold shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                                My Self
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                        <button className="flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-2xl font-semibold shadow-sm hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 active:scale-[0.98] transition-all duration-300">
                            <Download className="w-4 h-4" />
                            Resume
                        </button>
                    </div>

                    <div className="hidden sm:block w-px h-8 bg-slate-200"></div>

                    {/* Socials */}
                    <div className="flex items-center gap-4">
                        {[
                            { icon: FaGithub, link: "https://github.com/pratikchaubey1" },
                            { icon: FaLinkedin, link: "https://linkedin.com/in/pratikchaubey1" },
                            { icon: SiLeetcode, link: "#" }, // Leetcode equivalent
                            { icon: FaEnvelope, link: "mailto:contact@example.com" }
                        ].map((social, idx) => (
                            <a 
                                key={idx}
                                href={social.link} 
                                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#6366F1] hover:border-[#6366F1]/30 hover:shadow-lg hover:shadow-[#6366F1]/10 hover:-translate-y-1 transition-all duration-300"
                            >
                                <social.icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* RIGHT COLUMN - VISUALS */}
            <div 
                id="hero-right-container"
                className="relative flex-shrink-0 w-full xl:w-[350px] 2xl:w-[450px] h-[350px] 2xl:h-[450px] flex items-center justify-center z-10 mx-auto xl:ml-auto xl:mr-0"
            >
                {/* Mouse-follow glow */}
                <div 
                    className="absolute w-[400px] h-[400px] bg-gradient-to-br from-[#6366F1]/20 to-[#8B5CF6]/20 rounded-full blur-[80px] pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 mix-blend-screen"
                    style={{
                        transform: `translate(${mousePosition.x - 200}px, ${mousePosition.y - 200}px)`,
                        left: 0,
                        top: 0,
                    }}
                />

                {/* Static Background Glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[80%] h-[80%] bg-[#6366F1]/10 rounded-full blur-3xl mix-blend-multiply" />
                    <div className="absolute w-[60%] h-[60%] bg-[#8B5CF6]/10 rounded-full blur-3xl mix-blend-multiply translate-x-10 translate-y-10" />
                </div>
                
                {/* Glowing Animated Rings */}
                <div className="relative flex items-center justify-center w-[280px] h-[280px] 2xl:w-[380px] 2xl:h-[380px]">
                    <div className="absolute inset-0 rounded-full border-[1.5px] border-slate-200/50 animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-[-15px] 2xl:inset-[-20px] rounded-full border-[1px] border-dashed border-indigo-200/50 animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="absolute inset-[-30px] 2xl:inset-[-40px] rounded-full border-[1px] border-[#8B5CF6]/20 animate-[spin_20s_linear_infinite]" />
                    
                    {/* Glowing Dots on rings */}
                    <div className="absolute inset-0 rounded-full animate-[spin_10s_linear_infinite]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#6366F1] shadow-[0_0_15px_#6366F1]" />
                    </div>
                    <div className="absolute inset-[-30px] 2xl:inset-[-40px] rounded-full animate-[spin_20s_linear_infinite]">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]" />
                    </div>

                    {/* Circular Portrait */}
                    <div className="relative w-[240px] h-[240px] 2xl:w-[300px] 2xl:h-[300px] rounded-full overflow-hidden border-8 border-white shadow-[0_20px_60px_-15px_rgba(99,102,241,0.2)] z-10 group-hover:scale-[1.02] group-hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.4)] transition-all duration-700 ease-out">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#6366F1]/10 to-transparent z-10 mix-blend-overlay pointer-events-none"></div>
                        <img 
                            src={portrait} 
                            alt="Pratik Profile" 
                            className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" 
                        />
                    </div>
                </div>

                {/* Floating Glass Cards */}
                
                {/* Card 1: TCIL */}
                <motion.div 
                    initial={{ opacity: 0, x: -20, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="absolute top-10 sm:top-16 -left-4 sm:left-0 xl:-left-8 bg-white/70 backdrop-blur-xl border border-white/60 p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex gap-4 items-center w-[260px] z-20 cursor-pointer"
                >
                    <div className="w-10 h-10 bg-indigo-50/80 rounded-xl flex items-center justify-center text-[#6366F1] shrink-0 shadow-inner">
                        <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="text-[13px] font-bold text-slate-800 leading-tight mb-1">TCIL Internship</h4>
                        <p className="text-[10px] font-medium text-slate-500">Government of India Enterprise</p>
                    </div>
                </motion.div>

                {/* Card 2: Available Now */}
                <motion.div 
                    initial={{ opacity: 0, x: 20, y: -20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.1, type: "spring", stiffness: 100 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="absolute bottom-20 sm:bottom-32 -right-4 sm:-right-8 xl:-right-12 bg-white/70 backdrop-blur-xl border border-white/60 py-3 px-5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex gap-3 items-center z-20 cursor-pointer"
                >
                    <div className="flex items-center justify-center bg-amber-100 w-6 h-6 rounded-full text-amber-500 shadow-inner">
                        <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <div>
                        <h4 className="text-[12px] font-bold text-slate-800 leading-tight">Available Now</h4>
                        <p className="text-[9px] font-semibold text-slate-500 uppercase tracking-wide">Open for Freelance</p>
                    </div>
                </motion.div>

                {/* Card 3: Experience */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, type: "spring", stiffness: 100 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="absolute -bottom-4 sm:bottom-0 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-12 bg-white/80 backdrop-blur-xl border border-white/80 p-4 rounded-2xl shadow-[0_12px_40px_rgb(0,0,0,0.08)] flex flex-col gap-2 z-20 cursor-pointer w-[180px]"
                >
                    <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="w-4 h-4 text-emerald-500" />
                        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Experience</h4>
                    </div>
                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[11px]">
                            <span className="text-slate-500 font-medium">TCIL Intern</span>
                            <span className="font-bold text-slate-800">3 Mo</span>
                        </div>
                        <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-emerald-400 rounded-full"></div>
                        </div>
                        <div className="flex justify-between items-center text-[11px] pt-1">
                            <span className="text-slate-500 font-medium">Projects</span>
                            <span className="font-bold text-slate-800">4+</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    );
}

export default HeroCard;
