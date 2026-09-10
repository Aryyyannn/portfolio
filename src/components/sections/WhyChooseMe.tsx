"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";

export const WhyChooseMe = () => {
  const features = [
    {
      title: "Gen-Z Premium Design",
      desc: "Cutting-edge visual aesthetics inspired by Apple, Linear, and Awwwards that captivate modern audiences and elevate your brand perception.",
      glow: "rgba(124, 58, 237, 0.15)",
      svgIcon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
          <circle cx="24" cy="24" r="20" stroke="#7C3AED" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 16 24 L 22 30 L 32 18" stroke="#0891B2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Lightning Fast Performance",
      desc: "Built on Next.js 15 App Router with zero bloat. Sub-second loading speeds deliver flawless 100/100 Lighthouse scores.",
      glow: "rgba(8, 145, 178, 0.15)",
      svgIcon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
          <path d="M 26 6 L 14 26 H 24 L 22 42 L 34 22 H 24 L 26 6 Z" fill="#06B6D4" opacity="0.2" />
          <path d="M 26 6 L 14 26 H 24 L 22 42 L 34 22 H 24 L 26 6 Z" stroke="#0891B2" strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Mobile-First Experience",
      desc: "Over 70% of web traffic originates on mobile. Every layout is crafted for thumb-friendly navigation and crisp rendering.",
      glow: "rgba(168, 85, 247, 0.15)",
      svgIcon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
          <rect x="14" y="8" width="20" height="32" rx="6" fill="#F1F5F9" stroke="#9333EA" strokeWidth="2" />
          <line x1="20" y1="12" x2="28" y2="12" stroke="rgba(15,23,42,0.3)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="34" r="2" fill="#0891B2" />
        </svg>
      ),
    },
    {
      title: "Business Growth Focused",
      desc: "A beautiful website is useless without results. Every section is engineered around conversion funnels and customer trust.",
      glow: "rgba(236, 72, 153, 0.15)",
      svgIcon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
          <path d="M 10 36 L 20 24 L 28 30 L 38 14" stroke="#DB2777" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="30,14 38,14 38,22" stroke="#DB2777" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-us" className="relative py-14 sm:py-16 px-5 sm:px-8 z-10">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED] bg-[#7C3AED]/10 px-4 py-1.5 rounded-full border border-[#7C3AED]/20 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Competitive Edge</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-slate-900">
            Why Choose Aryan Studio?
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            I don't use generic drag-and-drop templates. I build bespoke digital engines engineered for growth.
          </p>
        </div>

        {/* Asymmetrical Layout with 4 feature blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Main Large Highlight Feature (Left 7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex"
          >
            <GlassCard glowColor="rgba(124, 58, 237, 0.2)" className="w-full flex flex-col justify-between p-6 sm:p-8 lg:p-12 relative overflow-hidden">
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-[#7C3AED]/10 border border-[#7C3AED]/25 w-fit shadow-xs">
                  {features[0].svgIcon}
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-slate-900">
                    {features[0].title}
                  </h3>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    {features[0].desc}
                  </p>
                </div>
              </div>

              {/* Decorative SVG Graphic lines inside card */}
              <div className="pt-8 border-t border-slate-200/80 mt-8 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
                  <span className="text-[#0891B2]">01 / 04</span>
                  <span>DESIGN SYSTEM</span>
                </div>
                <div className="h-1 w-24 bg-gradient-to-r from-[#7C3AED] to-[#0891B2] rounded-full" />
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column Stack (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
            {features.slice(1).map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex-1"
              >
                <GlassCard glowColor={feat.glow} className="h-full p-6 flex items-start gap-5">
                  <div className="p-3 rounded-2xl bg-slate-100 border border-slate-200 shrink-0 shadow-sm">
                    {feat.svgIcon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-heading text-slate-900">{feat.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
