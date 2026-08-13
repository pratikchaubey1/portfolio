import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Download, Building2, Star, Briefcase, Hand, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import portrait from "../../assets/ITSME.jpeg";

function HeroCard() {
    // Keep only the mouse-follow glow for a premium feel without the 3D complexity
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const glowX = useTransform(mouseX, (v) => v - 150);
    const glowY = useTransform(mouseY, (v) => v - 150);

    const handlePointerMove = (e) => {
        const container = e.currentTarget;
        const rect = container.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const techStack = [
        "React.js", "Node.js", "Express.js", "JavaScript", 
        "Tailwind CSS", "MongoDB", "MySQL", "PHP", ".NET"
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full flex flex-col xl:flex-row gap-10 items-center xl:items-start pt-10 pb-10 group/hero bg-white/40 xl:bg-transparent rounded-3xl p-6 xl:p-0"
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
                        <Hand className="w-4 h-4 text-amber-500" /> Hello There!
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-slate-200/60 text-slate-700 font-medium px-4 py-2 rounded-full text-sm shadow-sm"
                    >
                        <Sparkles className="w-4 h-4 text-emerald-500" />
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
                        <a href="/final.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-2xl font-semibold shadow-sm hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 active:scale-[0.98] transition-all duration-300">
                            <Download className="w-4 h-4" />
                            Resume
                        </a>
                    </div>

                    <div className="hidden sm:block w-px h-8 bg-slate-200"></div>

                    {/* Socials */}
                    <div className="flex items-center gap-4">
                        {[
                            { icon: FaGithub, link: "https://github.com/pratikchaubey1" },
                            { icon: FaLinkedin, link: "https://www.linkedin.com/in/pratik-chaturvedi-584270239" },
                            { icon: FaInstagram, link: "https://instagram.com/prabonlyy" },
                            { icon: FaEnvelope, link: "mailto:pratikup89@gmail.com" }
                        ].map((social, idx) => (
                            <a 
                                key={idx}
                                href={social.link} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#6366F1] hover:border-[#6366F1]/30 hover:shadow-lg hover:shadow-[#6366F1]/10 hover:-translate-y-1 transition-all duration-300"
                            >
                                <social.icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* RIGHT COLUMN - VISUALS (Normal with Great Animation) */}
            <div 
                className="relative flex-shrink-0 w-full xl:w-[400px] 2xl:w-[500px] h-[400px] 2xl:h-[500px] flex items-center justify-center z-10 mx-auto xl:ml-auto xl:mr-0 mt-8 xl:mt-0"
                onPointerMove={handlePointerMove}
            >
                {/* Mouse-follow interactive glow */}
                <motion.div 
                    className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-indigo-500/40 via-purple-500/40 to-fuchsia-500/40 rounded-full blur-[100px] pointer-events-none transition-opacity duration-500 opacity-0 group-hover/hero:opacity-100"
                    style={{ x: glowX, y: glowY, left: 0, top: 0 }}
                />

                {/* Core Ambient Glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="absolute w-[70%] h-[70%] bg-indigo-500/15 rounded-full blur-[80px] animate-pulse" />
                    <div className="absolute w-[50%] h-[50%] bg-fuchsia-500/15 rounded-full blur-[60px] translate-x-10 translate-y-10" />
                </div>
                
                {/* Orbiting Tech Particles */}
                <div className="absolute flex items-center justify-center w-full h-full pointer-events-none z-0">
                    <div className="absolute inset-[40px] rounded-full animate-[spin_20s_linear_infinite]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
                    </div>
                    <div className="absolute inset-[20px] rounded-full animate-[spin_25s_linear_infinite_reverse]">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.8)]" />
                    </div>
                </div>

                {/* Main Image Container */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 100, damping: 20 }}
                    className="relative flex items-center justify-center w-[260px] h-[260px] 2xl:w-[340px] 2xl:h-[340px] group/image z-10"
                >
                    {/* Animated Outer Gradient Ring */}
                    <div className="absolute inset-[-6px] bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 rounded-full animate-[spin_4s_linear_infinite] opacity-50 group-hover/image:opacity-100 blur-[8px] transition-opacity duration-500"></div>
                    <div className="absolute inset-[-4px] bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 rounded-full animate-[spin_4s_linear_infinite] opacity-80"></div>
                    
                    {/* Inner Content (The Image) */}
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative w-full h-full rounded-full overflow-hidden bg-white border-4 border-white shadow-[0_20px_50px_-15px_rgba(99,102,241,0.5)] z-10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10 pointer-events-none"></div>
                        <img 
                            src={portrait} 
                            alt="Pratik Profile" 
                            className="w-full h-full object-cover" 
                        />
                    </motion.div>
                </motion.div>

                {/* Floating Glass Cards */}
                
                {/* Card 1: TCIL */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
                    className="absolute top-8 sm:top-12 -left-2 sm:left-4 xl:-left-12 z-20"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-white/80 backdrop-blur-xl border border-white p-3 sm:p-4 rounded-2xl shadow-[0_15px_30px_rgb(0,0,0,0.08)] flex gap-3 sm:gap-4 items-center w-[220px] sm:w-[260px] cursor-pointer"
                    >
                        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                            <Building2 className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-xs sm:text-[13px] font-extrabold text-slate-800 leading-tight mb-0.5">TCIL Internship</h4>
                            <p className="text-[9px] sm:text-[10px] font-bold text-slate-500">Govt. of India Enterprise</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Card 2: Experience */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, type: "spring", stiffness: 100 }}
                    className="absolute -bottom-8 sm:-bottom-4 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-8 z-20"
                >
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-white/90 backdrop-blur-xl border border-white p-4 rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.1)] flex flex-col gap-2 cursor-pointer w-[190px]"
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                                <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
                            </div>
                            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest">Experience</h4>
                        </div>
                        <div className="space-y-2 mt-1">
                            <div className="flex justify-between items-center text-[11px]">
                                <span className="text-slate-500 font-bold">TCIL Intern</span>
                                <span className="font-extrabold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">3 Mo</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"></div>
                            </div>
                            <div className="flex justify-between items-center text-[11px] pt-0.5">
                                <span className="text-slate-500 font-bold">Projects</span>
                                <span className="font-extrabold text-slate-800">4+</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Card 3: Available Now Badge */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1, type: "spring", stiffness: 100 }}
                    className="absolute bottom-28 sm:bottom-40 -right-2 sm:-right-4 xl:-right-16 z-20"
                >
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-slate-900/90 backdrop-blur-xl border border-slate-700 py-3 px-5 rounded-full shadow-[0_15px_30px_rgb(0,0,0,0.15)] flex gap-3 items-center cursor-pointer"
                    >
                        <div className="flex items-center justify-center bg-amber-400 w-7 h-7 rounded-full text-white shadow-[0_0_15px_rgba(251,191,36,0.6)]">
                            <Star className="w-4 h-4 fill-current" />
                        </div>
                        <div>
                            <h4 className="text-[12px] font-extrabold text-white leading-tight">Available Now</h4>
                            <p className="text-[9px] font-bold text-slate-300 uppercase tracking-wider">Open for Freelance</p>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </motion.div>
    );
}

export default HeroCard;
