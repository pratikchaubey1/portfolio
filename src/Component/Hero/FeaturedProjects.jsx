import React from "react";
import { ExternalLink, LayoutTemplate } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import project1 from "../../assets/project1.png"; 
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

// Data Structure - Added 'height' class to simulate a staggered masonry grid 
// since the source images might have the same aspect ratios.
const projectsData = [
    {
        id: 1,
        title: "Inventory Management System",
        category: "TCIL Internship",
        image: project1,
        height: "h-[400px]", // Tall
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "Level",
        category: "Full Stack",
        image: project2, 
        height: "h-[280px]", // Short
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Crime Prediction Dashboard",
        category: "Data Visualization",
        image: project3, 
        height: "h-[340px]", // Medium
        liveUrl: "#",
        githubUrl: "#"
    }
];

function FeaturedProjects() {
    return (
        <div className="w-full flex flex-col relative z-10">
            {/* Header (Pinterest Style) */}
            <div className="flex flex-col items-center text-center mb-10 gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200/60 shadow-sm text-sm font-bold text-slate-600">
                    <LayoutTemplate className="w-4 h-4 text-indigo-600" />
                    Highlighted works shaping my journey
                </div>
                
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                    Interactive Showcase
                </h3>
            </div>

            {/* Pinterest Masonry Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 w-full max-w-7xl mx-auto mt-4">
                {projectsData.map((project) => (
                    <div 
                        key={project.id} 
                        className="break-inside-avoid relative group flex flex-col cursor-zoom-in"
                    >
                        {/* Image Container (Pinterest Style) */}
                        <div className={`relative w-full ${project.height} rounded-[32px] overflow-hidden bg-slate-100 mb-3 shadow-sm group-hover:shadow-lg transition-all duration-300`}>
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                                {/* Top Badge */}
                                <div className="self-end bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">
                                    {project.category}
                                </div>
                                
                                {/* Bottom Buttons */}
                                <div className="flex items-center gap-3 self-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <a 
                                        href={project.liveUrl} 
                                        onClick={(e) => e.stopPropagation()}
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold px-6 py-3 rounded-full shadow-lg transition-colors cursor-pointer"
                                    >
                                        Visit Site
                                    </a>
                                    <a 
                                        href={project.githubUrl} 
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex items-center justify-center w-11 h-11 bg-white/90 hover:bg-white text-slate-900 rounded-full shadow-lg backdrop-blur-sm transition-colors cursor-pointer" 
                                        title="GitHub Code"
                                    >
                                        <FaGithub className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Text Below Image */}
                        <div className="px-2">
                            <h4 className="text-lg font-bold text-slate-900 leading-tight mb-1">{project.title}</h4>
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{project.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturedProjects;
