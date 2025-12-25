import React from "react";
import { motion } from "framer-motion";
import ITSME from "../../assets/ITSME.jpg";

function ProfileImage() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center md:justify-start"
        >
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
            >
                {/* Availability badge on top of image */}
                <div className="absolute -top-0.5 -left-3 z-20 bg-slate-900 text-white text-[10px] md:text-[11px] px-3 py-1 rounded-full flex items-center gap-2 shadow-lg border border-white/20">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    Available for freelance
                </div>

                <div className="absolute -inset-3 rounded-3xl shadow-xl shadow-cyan-200 blur-xl opacity-90 z-0" />
                <img
                    src={ITSME}
                    alt="Pratik"
                    className="relative z-10 w-[230px] md:w-[280px] lg:w-[300px] aspect-[4/5] rounded-3xl shadow-2xl object-cover"
                />
            </motion.div>
        </motion.div>
    );
}

export default ProfileImage;
