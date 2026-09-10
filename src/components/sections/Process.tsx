"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Compass, LayoutGrid, Paintbrush, Rocket } from "lucide-react";
import { ProcessSvgPath } from "../svg/ProcessSvgPath";
import { GlassCard } from "../ui/GlassCard";

export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      desc: "Deep-dive strategy session to analyze your target audience, business goals, competitors, and conversion funnels.",
      icon: <Compass className="w-5 h-5 text-[#8B5CF6]" />,
      glow: "rgba(139, 92, 246, 0.2)",
    },
    {
      number: "02",
      title: "Wireframe",
      desc: "Crafting structured UX wireframes and user journeys to ensure seamless navigation and maximum lead conversion.",
      icon: <LayoutGrid className="w-5 h-5 text-[#A855F7]" />,
      glow: "rgba(168, 85, 247, 0.2)",
    },
    {
      number: "03",
      title: "Design",
      desc: "Creating pixel-perfect glassmorphic UI components with bespoke typography, smooth gradients, and interactive micro-animations.",
      icon: <Paintbrush className="w-5 h-5 text-[#C084FC]" />,
      glow: "rgba(192, 132, 252, 0.2)",
    },
    {
      number: "04",
      title: "Launch",
      desc: "Developing high-performance Next.js 15 code, configuring SEO metadata, running speed audits, and going live flawlessly.",
      icon: <Rocket className="w-5 h-5 text-[#22D3EE]" />,
      glow: "rgba(34, 211, 238, 0.2)",
    },
  ];

  return (
    <section id="process" className="relative py-14 sm:py-16 px-6 sm:px-8 z-10">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0891B2] bg-[#0891B2]/10 px-4 py-1.5 rounded-full border border-[#0891B2]/20 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Methodology</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-slate-900">
            The Design &amp; Launch Process
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            A transparent, 4-step framework designed to take your website from initial concept to a live, high-converting digital platform.
          </p>
        </div>

        {/* Animated Connecting SVG Path (Desktop view) */}
        <ProcessSvgPath />

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <GlassCard glowColor={step.glow} className="h-full p-6 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-slate-100 border border-slate-200 group-hover:scale-110 transition-transform shadow-xs">
                      {step.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                      STEP {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-[#0891B2] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
