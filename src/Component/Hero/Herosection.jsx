import React from "react";
import { motion } from "framer-motion";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

function Herosection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="mt-5 bg-white/10 flex flex-row gap-4 px-6"
    >
      {/* LEFT SIDE */}
      <HeroLeft />

      {/* RIGHT SIDE - FIXED COLOR CARD */}
      <HeroRight />
    </motion.div>
  );
}

export default Herosection;

