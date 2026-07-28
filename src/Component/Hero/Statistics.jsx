import React from "react";
import { motion } from "framer-motion";
import { Code, Rocket, Users, Briefcase, Send, Smartphone } from "lucide-react";

function Statistics() {
    const stats = [
        {
            value: "4+",
            label: "Years Learning",
            sub: "Learning, Building, Growing.",
            icon: <Code className="w-5 h-5 text-[#4F7CFF]" />,
            bg: "bg-blue-50"
        },
        {
            value: "15+",
            label: "Projects Built",
            sub: "Web & Mobile Apps",
            icon: <Rocket className="w-5 h-5 text-[#7B61FF]" />,
            bg: "bg-purple-50"
        },
        {
            value: "5+",
            label: "Happy Clients",
            sub: "Worldwide",
            icon: <Users className="w-5 h-5 text-[#22C55E]" />,
            bg: "bg-green-50"
        },
        {
            value: "6 Months",
            label: "TCIL Internship",
            sub: "Govt. of India Enterprise",
            icon: <Briefcase className="w-5 h-5 text-[#F59E0B]" />,
            bg: "bg-amber-50"
        },
        {
            value: "100%",
            label: "Responsive",
            sub: "Pixel Perfect UI",
            icon: <Smartphone className="w-5 h-5 text-[#EC4899]" />,
            bg: "bg-pink-50"
        }
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            
            {/* Stats Cards */}
            {stats.map((stat, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-[20px] p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60 flex flex-col justify-center gap-3 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl ${stat.bg} shrink-0`}>
                            {stat.icon}
                        </div>
                        <div>
                            <h4 className="text-xl font-heading font-bold text-[#0F172A] leading-none">{stat.value}</h4>
                        </div>
                    </div>
                    <div>
                        <p className="text-[13px] font-bold text-[#334155] leading-tight mb-0.5">{stat.label}</p>
                        <p className="text-[10px] font-medium text-[#64748B] leading-tight">{stat.sub}</p>
                    </div>
                </motion.div>
            ))}

            {/* Let's Connect Card */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-[#7B61FF] to-[#4F7CFF] rounded-[20px] p-5 shadow-[0_8px_30px_rgba(123,97,255,0.3)] text-white flex flex-col justify-center cursor-pointer group"
            >
                <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-lg font-heading font-bold">Let's Connect</h4>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs font-medium text-white/80 leading-relaxed">
                    I'm open to new opportunities and collaborations.
                </p>
            </motion.div>

        </div>
    );
}

export default Statistics;
