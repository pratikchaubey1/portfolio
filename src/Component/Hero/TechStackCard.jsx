import React from "react";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { FaReact, FaNodeJs, FaGithub, FaFigma } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiMysql, SiExpress, SiPostman } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

function TechStackCard() {
    const techStack = [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "React Native", icon: <TbDeviceMobileCode className="text-[#61DAFB]" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Express", icon: <SiExpress className="text-gray-700" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "Git & GitHub", icon: <FaGithub className="text-gray-900" /> },
        { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
        { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 flex flex-col h-full"
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <div className="bg-[#F1F5F9] p-2.5 rounded-xl text-[#7B61FF]">
                    <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#0F172A]">Tech Stack</h3>
            </div>

            {/* Flex Wrap Container for Chips */}
            <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                    <motion.div 
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                        whileHover={{ y: -3, scale: 1.05 }}
                        className="flex items-center gap-2.5 bg-white border border-[#E2E8F0]/80 px-4 py-2.5 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-[#4F7CFF]/10 hover:border-[#4F7CFF]/30 transition-all cursor-default"
                    >
                        <div className="text-xl shrink-0">
                            {tech.icon}
                        </div>
                        <span className="text-[13px] font-semibold text-[#334155] whitespace-nowrap">{tech.name}</span>
                    </motion.div>
                ))}
            </div>
            
        </motion.div>
    );
}

export default TechStackCard;
