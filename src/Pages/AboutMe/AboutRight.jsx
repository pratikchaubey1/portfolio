import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import workspace from "../../assets/workspace.png";

function AboutRight() {
    const floatingTransition = {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 4,
        ease: "easeInOut"
    };

    return (
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-full min-h-[500px] flex items-center justify-center">
            
            {/* Background Image: 3D Workspace */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full rounded-[40px] overflow-hidden shadow-2xl shadow-blue-900/10"
            >
                {/* 
                  We use an inner div to contain the image so it fits beautifully, 
                  blending in with the surrounding Apple-aesthetic whitespace.
                */}
                <div className="w-full h-full bg-[#f8f9fc] flex items-center justify-center">
                    <img 
                        src={workspace} 
                        alt="3D Developer Workspace" 
                        className="w-full h-full object-cover opacity-90"
                    />
                </div>
                {/* Gradient overlay to ensure text readability of floating elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#f8f9fc]/40 to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating Code Window Overlay */}
            <motion.div
                initial={{ opacity: 0, x: 50, y: -20 }}
                animate={{ opacity: 1, x: 0, y: [-20, -10, -20] }}
                transition={{
                    opacity: { duration: 0.6, delay: 0.3 },
                    x: { duration: 0.6, delay: 0.3 },
                    y: floatingTransition
                }}
                className="absolute top-[10%] -right-4 lg:-right-12 w-[320px] bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden z-20"
            >
                <div className="bg-slate-800/80 px-4 py-2 flex items-center gap-2 border-b border-slate-700/50">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-slate-400 text-xs font-mono ml-auto">&lt;/&gt; Pratik.js</span>
                </div>
                <div className="p-5 font-mono text-[13px] text-slate-300 leading-loose">
                    <span className="text-purple-400">const</span> <span className="text-blue-300">Developer</span> <span className="text-purple-400">=</span> {'{'} <br/>
                    &nbsp;&nbsp;<span className="text-blue-300">name</span>: <span className="text-green-300">'Pratik'</span>,<br/>
                    &nbsp;&nbsp;<span className="text-blue-300">role</span>: <span className="text-green-300">'Full Stack Developer'</span>,<br/>
                    &nbsp;&nbsp;<span className="text-blue-300">passion</span>: <span className="text-green-300">'Building modern apps'</span>,<br/>
                    &nbsp;&nbsp;<span className="text-blue-300">skills</span>: [<span className="text-green-300">'React'</span>, <span className="text-green-300">'Node.js'</span>, ...],<br/>
                    &nbsp;&nbsp;<span className="text-blue-300">availableFor</span>: <span className="text-green-300">'Freelance'</span><br/>
                    {'}'};<br/>
                    <br/>
                    <span className="text-purple-400">export default</span> Developer;
                </div>
            </motion.div>

            {/* Floating Tech Icons connected by lines */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {/* SVG for connecting lines */}
                <svg className="absolute w-full h-full left-0 top-0 opacity-30 hidden md:block">
                    <path d="M 120 200 Q 250 150 200 350 T 350 400" fill="transparent" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
                    <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* React Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
                    transition={{ opacity: { delay: 0.5 }, scale: { delay: 0.5 }, y: { ...floatingTransition, duration: 5 } }}
                    className="absolute top-[25%] left-[10%] w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center border border-white/50 text-[#61DAFB] text-3xl"
                >
                    <FaReact className="animate-[spin_6s_linear_infinite]" />
                </motion.div>

                {/* Node.js Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, y: [0, 20, 0] }}
                    transition={{ opacity: { delay: 0.7 }, scale: { delay: 0.7 }, y: { ...floatingTransition, duration: 4.5, delay: 1 } }}
                    className="absolute bottom-[20%] left-[25%] w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center border border-white/50 text-[#339933] text-2xl"
                >
                    <FaNodeJs />
                </motion.div>

                {/* Tailwind Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
                    transition={{ opacity: { delay: 0.9 }, scale: { delay: 0.9 }, y: { ...floatingTransition, duration: 3.5, delay: 0.5 } }}
                    className="absolute top-[15%] left-[50%] w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center border border-white/50 text-[#06B6D4] text-xl"
                >
                    <SiTailwindcss />
                </motion.div>

                {/* MongoDB Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
                    transition={{ opacity: { delay: 1.1 }, scale: { delay: 1.1 }, y: { ...floatingTransition, duration: 6, delay: 2 } }}
                    className="absolute bottom-[10%] right-[30%] w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center border border-white/50 text-[#47A248] text-2xl"
                >
                    <SiMongodb />
                </motion.div>
            </div>
        </div>
    );
}

export default AboutRight;
