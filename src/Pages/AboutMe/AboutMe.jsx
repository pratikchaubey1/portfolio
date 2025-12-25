import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import ProfileImage from "./ProfileImage";
import Bio from "./Bio";

function AboutMe() {
    return (
        <div className="relative min-h-[90vh] w-full overflow-hidden bg-white flex justify-center px-6 md:px-12 lg:px-20 py-16">
            {/* soft neutral blobs */}
            <div className="pointer-events-none absolute -top-10 -left-10 w-64 h-64 rounded-full bg-slate-100/60 blur-3xl opacity-80" />
            <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full bg-slate-100/60 blur-3xl opacity-80" />

            {/* soft neutral outer glow */}
            <div className="absolute inset-x-4 md:inset-x-16 lg:inset-x-32 top-24 -z-10 h-[60vh] rounded-[2.5rem] bg-slate-100/70 blur-3xl opacity-80" />

            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative max-w-6xl w-full bg-white/90 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-3xl px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-[1.1fr,1.6fr] gap-10 items-center"
            >
                {/* rotating React icon in bg */}
                <motion.div
                    className="hidden md:block absolute -top-10 -right-6 text-[140px] text-cyan-400/15"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
                >
                    <FaReact />
                </motion.div>

                {/* LEFT – IMAGE (floating with badge) */}
                <ProfileImage />

                {/* RIGHT – TEXT CONTENT */}
                <Bio />
            </motion.div>
        </div>
    );
}

export default AboutMe;
