"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Layout, Search, Sparkles } from "lucide-react";
import { AboutWorkspaceSvg } from "../svg/AboutWorkspaceSvg";
import { GlassCard } from "../ui/GlassCard";

export const About = () => {
  const stats = [
    {
      icon: <CheckCircle2 className="w-5 h-5 text-[#22D3EE]" />,
      title: "100% Responsive",
      desc: "Pixel-perfect mobile & desktop layouts",
    },
    {
      icon: <Zap className="w-5 h-5 text-[#8B5CF6]" />,
      title: "Fast Performance",
      desc: "Sub-second loading & 100/100 Lighthouse",
    },
    {
      icon: <Layout className="w-5 h-5 text-purple-400" />,
      title: "Premium UI",
      desc: "Awwwards-worthy Gen-Z design",
    },
    {
      icon: <Search className="w-5 h-5 text-cyan-400" />,
      title: "SEO Ready",
      desc: "Structured data & search engine visibility",
    },
  ];

  return (
    <section id="about" className="relative py-14 sm:py-16 px-5 sm:px-8 z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
        
        {/* Left Column: SVG Workspace Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 relative order-2 lg:order-1"
        >
          <AboutWorkspaceSvg />
        </motion.div>

        {/* Right Column: Narrative & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 space-y-6 sm:space-y-8 order-1 lg:order-2"
        >
          <div className="space-y-4 text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED] bg-[#7C3AED]/10 px-4 py-1.5 rounded-full border border-[#7C3AED]/20 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Aryan Studio</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-slate-900 leading-tight text-center lg:text-left">
              Crafting Digital Experiences, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#0891B2]">Not Just Websites</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              I'm Aryan, a freelance web designer focused on building premium websites for startups and local businesses. Every project is designed with performance, aesthetics, and conversion in mind.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              By combining Framer Motion micro-interactions, Next.js architecture, and minimal luxury design principles, I turn ordinary brand pages into magnetic digital destinations.
            </p>
          </div>

          {/* 4 Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {stats.map((stat, idx) => (
              <GlassCard key={idx} className="p-5 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 shrink-0 shadow-sm">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">{stat.title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{stat.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
