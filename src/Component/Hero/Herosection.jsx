import React from "react";
import HeroCard from "./HeroCard";
import WhatIDoCard from "./WhatIDoCard";
import TechStackCard from "./TechStackCard";
import FeaturedProjects from "./FeaturedProjects";
import Statistics from "./Statistics";

function Herosection() {
    return (
        <div className="relative min-h-screen w-full bg-[#F8FAFC] text-[#111827] font-sans selection:bg-[#4F7CFF] selection:text-white overflow-hidden pt-32 md:pt-36 pb-10 px-4 md:px-8 lg:px-12">
            
            {/* Background Gradients & Effects */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Noise texture overlay */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
                
                {/* Large blurred lighting circles */}
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-500/10 rounded-full blur-[150px]" />
                <div className="absolute top-[30%] left-[50%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px]" />
                
                {/* Subtle grid mesh */}
                <div 
                    className="absolute inset-0 opacity-[0.02]"
                    style={{ backgroundImage: 'linear-gradient(to right, #111827 1px, transparent 1px), linear-gradient(to bottom, #111827 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col gap-6">
                
                {/* Top Section: Split Layout */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
                    
                    {/* Left Column (Hero + Second Row) */}
                    <div className="xl:col-span-7 flex flex-col gap-6">
                        {/* Hero Card */}
                        <HeroCard />
                        
                        {/* Second Row (What I Do + Tech Stack) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                            <WhatIDoCard />
                            <TechStackCard />
                        </div>
                    </div>
                    
                    {/* Right Column (Featured Projects) */}
                    <div className="xl:col-span-5 h-full">
                        <FeaturedProjects />
                    </div>

                </div>

                {/* Bottom Section (Statistics) */}
                <Statistics />
                
            </div>
        </div>
    );
}

export default Herosection;
