import React from "react";
import { motion } from "framer-motion";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

function AboutMe() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#FAFAFA] flex items-center justify-center px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-20 font-sans">
            {/* Background Gradients (Apple-inspired subtle glows) */}
            <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-blue-100/40 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-purple-100/40 rounded-full blur-[140px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
            {/* Container for the Two Sections */}
            <div className="relative max-w-7xl w-full flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-stretch z-10">
                
                {/* Left Section (Content & Details) */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <AboutLeft />
                </div>
                {/* Right Section (3D Workspace Visuals) */}
                <div className="w-full lg:w-1/2 flex items-center justify-center relative">
                    <AboutRight />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
