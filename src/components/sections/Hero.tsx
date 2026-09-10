"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, ChevronDown, ArrowRight } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { HeroLaptopSvg } from "../svg/HeroLaptopSvg";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const headlineWords = "Modern Websites for Growing Businesses.".split(" ");

  return (
    <section id="hero" className="relative min-h-[100svh] sm:min-h-[90vh] pt-24 pb-16 sm:pt-32 sm:pb-14 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        
        {/* Left Column (Text & CTAs) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left z-10">
          
          {/* Label Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/85 border border-slate-200/85 text-xs font-semibold uppercase tracking-widest text-[#7C3AED] backdrop-blur-md shadow-sm mx-auto lg:mx-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span>WEB DESIGNER • DIGITAL CREATOR</span>
          </motion.div>

          {/* Main Headline (Word by Word Reveal) */}
          <h1 className="text-[2.2rem] sm:text-6xl lg:text-7xl font-bold font-heading text-slate-900 tracking-tight leading-[1.1]">
            {headlineWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block mr-3"
              >
                {word === "Growing" || word === "Businesses." ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#0891B2]">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-600 text-sm sm:text-xl max-w-2xl leading-relaxed font-normal mx-auto lg:mx-0"
          >
            I create premium, mobile-first websites that help businesses build trust, attract more customers, and stand out online with exceptional digital experiences.
          </motion.p>

          {/* Magnetic CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col xs:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
          >
            <MagneticButton href="#work">
              <div className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#0891B2] text-white font-bold text-sm tracking-wide flex items-center gap-3 shadow-xl shadow-[#7C3AED]/20 hover:shadow-2xl hover:shadow-[#7C3AED]/35 transition-all w-full xs:w-auto justify-center">
                <span>View Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </MagneticButton>

            <MagneticButton onClick={onOpenBooking}>
              <div className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-white/90 border border-slate-200 text-slate-800 font-semibold text-sm tracking-wide flex items-center gap-3 hover:bg-white hover:border-slate-300 transition-all backdrop-blur-md shadow-sm w-full xs:w-auto justify-center">
                <Calendar className="w-4 h-4 text-[#7C3AED]" />
                <span>Book a Free Call</span>
              </div>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Column (SVG 3D Laptop Mockup) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative z-10 w-full max-w-sm mx-auto lg:max-w-none"
        >
          <HeroLaptopSvg />
        </motion.div>
      </div>

      {/* Bouncing Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full bg-white/90 border border-slate-200 text-slate-600 shadow-sm"
        >
          <ChevronDown className="w-4 h-4 text-[#7C3AED]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
