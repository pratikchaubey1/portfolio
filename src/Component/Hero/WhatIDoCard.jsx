import React from "react";
import { motion } from "framer-motion";
import { Code2, MonitorSmartphone, Server, Sparkles, Paintbrush, Briefcase, ChevronRight } from "lucide-react";

function WhatIDoCard() {
    const services = [
        {
            title: "UI/UX Development",
            icon: <Paintbrush className="w-5 h-5" />,
            color: "text-[#EC4899]",
            bg: "bg-pink-50"
        },
        {
            title: "Full Stack Web Apps",
            icon: <MonitorSmartphone className="w-5 h-5" />,
            color: "text-[#4F7CFF]",
            bg: "bg-blue-50"
        },
        {
            title: "REST APIs",
            icon: <Server className="w-5 h-5" />,
            color: "text-[#7B61FF]",
            bg: "bg-purple-50"
        },
        {
            title: "React Native Mobile",
            icon: <Code2 className="w-5 h-5" />,
            color: "text-[#22C55E]",
            bg: "bg-green-50"
        },
        {
            title: "AI Powered Apps",
            icon: <Sparkles className="w-5 h-5" />,
            color: "text-[#F59E0B]",
            bg: "bg-amber-50"
        },
        {
            title: "Freelance Work",
            icon: <Briefcase className="w-5 h-5" />,
            color: "text-[#0F172A]",
            bg: "bg-slate-100"
        }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 flex flex-col h-full"
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#F1F5F9] p-2.5 rounded-xl text-[#4F7CFF]">
                    <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#0F172A]">What I Do</h3>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6 flex-1">
                {services.map((service, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        whileHover={{ y: -2, scale: 1.02 }}
                        className="flex flex-col justify-center gap-3 bg-[#F8FAFC]/60 p-4 rounded-2xl border border-[#E2E8F0]/60 hover:bg-white hover:shadow-xl hover:shadow-[#4F7CFF]/5 hover:border-[#4F7CFF]/30 transition-all cursor-default"
                    >
                        <div className={`${service.bg} ${service.color} w-10 h-10 rounded-xl flex items-center justify-center shadow-sm`}>
                            {service.icon}
                        </div>
                        <h4 className="font-semibold text-[13px] text-[#1E293B] leading-tight">
                            {service.title}
                        </h4>
                    </motion.div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-auto">
                <button className="flex items-center gap-2 text-sm font-semibold text-[#4F7CFF] hover:text-[#7B61FF] transition-colors group/btn">
                    Explore Skills 
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>

        </motion.div>
    );
}

export default WhatIDoCard;
