import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaGithubAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { projects, techIcons } from "./data";

function HeroRight() {
    return (
        <motion.div
            className="w-[35%] flex justify-center items-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
        >
            <div className="relative bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-gray-200 flex flex-col max-h-[680px] overflow-y-auto">
                <div className="flex items-center gap-2 mb-6">
                    <FaReact className="text-cyan-500 text-3xl" />
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Featured Projects
                    </h2>
                </div>

                <div className="flex flex-col gap-5 pr-3">
                    {projects.map((proj, index) => (
                        <motion.div
                            key={proj.title}
                            initial={{ x: 40, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.12 }}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl"
                        >
                            <div className="flex justify-between items-center">
                                {/* Left side — icon + title */}
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">{techIcons[proj.tech[0]]}</span>
                                    <h3 className="text-lg font-semibold text-slate-900">
                                        {proj.title}
                                    </h3>
                                </div>

                                {/* Tag */}
                                <span className="bg-slate-900 text-white text-[11px] px-3 py-1 rounded-full">
                                    {proj.tag}
                                </span>
                            </div>

                            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                                {proj.description}
                            </p>

                            {/* Tech chips */}
                            <div className="flex gap-2 mt-3 flex-wrap">
                                {proj.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-full text-[12px] font-medium"
                                    >
                                        {techIcons[t]} {t}
                                    </span>
                                ))}
                            </div>

                            {/* Links: Repo + Open Site */}
                            <div className="mt-4 flex items-center gap-4 flex-wrap">
                                {/* Repo link (only if exists) */}
                                {proj.repo && (
                                    <a
                                        href={proj.repo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1 text-[12px] font-medium text-slate-700 hover:text-black"
                                    >
                                        <FaGithubAlt className="text-sm" />
                                        <span>View Repository</span>
                                    </a>
                                )}

                                {/* Open Site (only if live link exists) */}
                                {proj.live && (
                                    <a
                                        href={proj.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1 text-[12px] font-medium text-blue-700 hover:text-blue-900"
                                    >
                                        <FiExternalLink className="text-sm" />
                                        <span>Open Site</span>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default HeroRight;
