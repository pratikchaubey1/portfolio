import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaGithubAlt } from "react-icons/fa";
import {
    SiTailwindcss,
    SiJavascript,
    SiOpenai,
    SiMongodb,
    SiExpress,
    SiGoogle,
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi"; // external link icon

// Map for tech → icon
export const techIcons = {
    React: <FaReact className="text-cyan-500" />,
    Tailwind: <SiTailwindcss className="text-sky-500" />,
    Node: <FaNodeJs className="text-green-600" />,
    OpenAI: <SiOpenai className="text-slate-700" />,
    MongoDB: <SiMongodb className="text-emerald-600" />,
    Express: <SiExpress className="text-slate-600" />,
    JavaScript: <SiJavascript className="text-yellow-500" />,
    Gemini: <SiGoogle className="text-blue-600" />,
};

export const skills = [
    {
        label: "JavaScript",
        path: "/JS",
        icon: <SiJavascript className="text-yellow-500" />,
    },
    {
        label: "React Js",
        path: "/React",
        icon: <FaReact className="text-cyan-500" />,
    },
    {
        label: "Node Js",
        path: "/Node",
        icon: <FaNodeJs className="text-green-600" />,
    },

    {
        label: "Tailwind Css",
        path: "/Tailwind",
        icon: <SiTailwindcss className="text-sky-500" />,
    },
    {
        label: "DBMS",
        path: "/DBMS",
        icon: <FaDatabase className="text-emerald-600" />,
    },
];

export const projects = [
    {
        title: "LEVEL",
        tag: "e-commerce",
        description:
            "An e-commerce website where users can browse and purchase sneakers, shirts, jeans, bags and more stylish fashion products.",
        tech: ["React", "Express", "Tailwind", "MongoDB"],
        repo: "https://github.com/pratikchaubey1/Level_only",
        // live: "https://your-level-live-link.com", // (optional)
    },
    {
        title: "Cyper Shop",
        tag: "Govt",
        description:
            "A government service interface where citizens can easily access and manage multiple official services. It bridges the communication gap between government and people. This project was developed as a freelance service platform.",
        tech: ["React", "Express", "Tailwind", "MongoDB"],
        live: "https://sshjk.in/",
        // repo: "https://github.com/your-username/cyper-shop",
    },
    {
        title: "Learning Web",
        tag: "Full AI Function",
        description:
            "An AI-powered exam preparation platform that uses Gemini to generate practice questions and create personalized daily study schedules, helping students stay consistent and exam-ready.",
        tech: ["React", "Express", "Tailwind", "MongoDB", "Gemini"],
        repo: "https://github.com/your-username/learning-web",
        // live: "https://your-learning-web-live-link.com", // (optional)
    },
    {
        title: "Life Spark",
        tag: "MLM",
        description:
            "Life Spark is a modern MLM (Multi-Level Marketing) platform designed to empower individuals with sustainable income opportunities and long-term growth.",
        tech: ["React", "Express", "Tailwind", "MongoDB",],
        repo: "https://github.com/pratikchaubey1/LifeSpark_Only",
        live: "http://31.97.73.66/", // (optional)
    },
];

export const UnComingProject = [
    {
        title: "Biopic Studio",
        description: "A modern studio website showcasing biopic films, creative works, team profiles and cinematic storytelling with smooth UI.",
        tech: ["React", "Express", "Tailwind", "MongoDB",],
    },
    {
        title: "Product Base Project",
        description:
            "A scalable product-based web application focused on performance, clean architecture and real-world business use cases.",
        tech: ["React", "Express", "Tailwind", "MongoDB",],
    },
];
