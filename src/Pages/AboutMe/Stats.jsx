import React from "react";
import { motion } from "framer-motion";
import { stats } from "./data";

function Stats() {
    return (
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
    );
}

export default Stats;
