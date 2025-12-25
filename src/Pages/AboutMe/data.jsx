import React from "react";
import {
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaMobileAlt,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiFreelancer } from "react-icons/si";

export const skills = [
    { name: "React", icon: <FaReact className="text-cyan-500" /> },
    { name: "React Native", icon: <FaMobileAlt className="text-indigo-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" /> },
    { name: "MongoDB / DBMS", icon: <FaDatabase className="text-emerald-600" /> },
    { name: "Freelance Work", icon: <SiFreelancer className="text-purple-500" /> },
];

export const stats = [
    { label: "Years of Coding", value: "3+" },
    { label: "Projects Shipped", value: "15+" },
    { label: "Freelance Clients", value: "5+" },
];
