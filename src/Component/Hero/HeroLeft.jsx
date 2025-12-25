import React from "react";
import { GiNinjaStar } from "react-icons/gi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { skills } from "./data";

function HeroLeft() {
    return (
        <div className="w-2/3 flex flex-col gap-4">
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 90 }}
                className="relative bg-gradient-to-r from-gray-100 to-gray-200 shadow-xl hover:shadow-2xl hover:shadow-gray-400/40 w-full h-[300px] rounded-3xl p-10 transition-all"
            >
                <GiNinjaStar className="absolute top-4 right-4 text-3xl text-gray-500 animate-spin" />

                <h1 className="text-5xl font-bold ml-2 tracking-tight">
                    Hello I am Pratik
                </h1>
                <div className="w-32 h-1 bg-gray-700 rounded-full ml-2 mb-4 mt-2" />

                <p className="ml-2 text-xl font-serif">
                    A curious learner and web developer.
                </p>
                <p className="ml-2 text-xl font-serif">
                    Currently working on modern UI, React and AI-based projects.
                </p>

                {/* Skills */}
                <div className="flex gap-3 mt-5 ml-2 flex-wrap">
                    {skills.map(({ label, path, icon }) => (
                        <motion.div key={label} whileHover={{ y: -2, scale: 1.05 }}>
                            <Link to={path}>
                                <span className="flex items-center gap-1 px-4 py-1.5 bg-white text-gray-800 rounded-full text-sm shadow-md hover:bg-black hover:text-white">
                                    {icon}
                                    <span className="font-medium">{label}</span>
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <Link to="/About">
                    <motion.button
                        whileHover={{ x: 6 }}
                        className="mt-6 ml-2 text-lg text-gray-900 font-semibold hover:underline"
                    >
                        Know More →
                    </motion.button>
                </Link>
            </motion.div>

            {/* Bottom Cards */}
            <div className="flex flex-row gap-4">
                <motion.div className="bg-gray-100 shadow-md w-1/2 h-[360px] rounded-3xl"></motion.div>

                <motion.div className="bg-gray-100 shadow-md w-1/2 h-[360px] rounded-3xl"></motion.div>
            </div>
        </div>
    );
}

export default HeroLeft;
