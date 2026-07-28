import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

function FeaturedProjects() {
    const projects = [
        // {
        //     name: "LEVEL",
        //     description: "Modern ecommerce platform with a sleek UI and smooth checkout experience.",
        //     category: "E-Commerce",
        //     categoryColor: "bg-emerald-50 text-emerald-600 border border-emerald-200/50",
        //     // image: project1,
        //     tech: ["React", "Express", "Tailwind", "MongoDB"],
        //     github: "#",
        //     live: null
        // },
        // {
        //     name: "Cyber Shop",
        //     description: "A government service portal allowing citizens to access multiple official services seamlessly.",
        //     category: "Govt",
        //     categoryColor: "bg-blue-50 text-blue-600 border border-blue-200/50",
        //     // image: project2,
        //     tech: ["React", "Node", "Tailwind", "MySQL"],
        //     github: null,
        //     live: "#"
        // },
        // {
        //     name: "Learning Web",
        //     description: "AI-powered learning platform that generates tailored practice questions.",
        //     category: "Education",
        //     categoryColor: "bg-purple-50 text-purple-600 border border-purple-200/50",
        //     // image: project3,
        //     tech: ["React", "Express", "Tailwind", "Gemini"],
        //     github: "#",
        //     live: "#"
        // }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-2xl rounded-[10px] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white h-full flex flex-col relative overflow-hidden"
        >
            {/* Top decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#000000] via-[#fefefe] to-[#000000] opacity-80" />

            {/* Header */}
            <div className="flex items-center justify-between mb-6 lg:mb-8">
                <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-3.5 rounded-2xl text-amber-500 shadow-sm border border-amber-200/60 relative overflow-hidden">
                        <Sparkles className="w-6 h-6 relative z-10" />
                        <div className="absolute inset-0 bg-white/40 z-0"></div>
                    </div>
                    <div>
                        <h3 className="text-2xl lg:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">Featured Projects</h3>
                        <p className="text-sm lg:text-base text-slate-500 font-medium mt-1">Selected works showcasing my expertise</p>
                    </div>
                </div>
                <button className="hidden sm:flex text-sm font-bold text-indigo-600 hover:text-white bg-indigo-50 hover:bg-indigo-600 px-5 py-2.5 rounded-xl transition-all duration-300 items-center gap-2 group/view border border-indigo-100 hover:border-indigo-600 shadow-sm">
                    View All <ArrowRight className="w-3 h-3 group-hover/view:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Projects List */}
            <div className="flex flex-col gap-6 flex-1">
                {projects.map((project, index) => (
                    <motion.div 
                        key={project.name}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -4, scale: 1.01 }}
                        className="group flex flex-col md:flex-row gap-6 p-4 sm:p-5 rounded-[24px] border border-slate-200/70 bg-white hover:bg-slate-50/50 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer"
                    >
                        {/* Thumbnail */}
                        <div className="w-full md:w-[220px] h-[180px] md:h-[150px] rounded-xl overflow-hidden shrink-0 border border-slate-100 shadow-sm relative group-hover:shadow-md transition-shadow">
                            <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 justify-center py-1">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-heading font-bold text-xl lg:text-2xl text-slate-900 group-hover:text-indigo-600 transition-colors">{project.name}</h4>
                                <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${project.categoryColor}`}>
                                    {project.category}
                                </span>
                            </div>
                            
                            <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-4 line-clamp-2">
                                {project.description}
                            </p>

                            {/* Tech Pills */}
                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-[11px] lg:text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200/60 px-3 py-1.5 rounded-lg shadow-sm">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="mt-auto flex items-center gap-6 pt-1">
                                {project.github && (
                                    <a href={project.github} onClick={(e)=>e.stopPropagation()} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors group/link">
                                        <FaGithub className="w-4 h-4 lg:w-5 lg:h-5" /> 
                                        <span className="relative">
                                            Code
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover/link:w-full"></span>
                                        </span>
                                    </a>
                                )}
                                {project.live && (
                                    <a href={project.live} onClick={(e)=>e.stopPropagation()} className="flex items-center gap-2 text-sm font-bold text-indigo-500 hover:text-indigo-700 transition-colors group/link">
                                        <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5" /> 
                                        <span className="relative">
                                            Live Demo
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover/link:w-full"></span>
                                        </span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Button for Mobile */}
            <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="sm:hidden mt-6 w-full bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white font-bold py-4 rounded-2xl text-sm transition-colors duration-300 flex items-center justify-center gap-2 group/more border border-indigo-100"
            >
                View All Projects 
                <ArrowRight className="w-4 h-4 group-hover/more:translate-x-1 transition-transform" />
            </motion.button>
            
        </motion.div>
    );
}

export default FeaturedProjects;
