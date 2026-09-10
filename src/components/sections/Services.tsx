"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  LayoutTemplate,
  Globe,
  Palette,
  Zap,
  ArrowUpRight,
  Check,
} from "lucide-react";

interface ServicesProps {
  onOpenBooking: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const services = [
    {
      id: "01",
      title: "Landing Page Design",
      badge: "High Conversion",
      desc: "High-converting, sub-second landing pages engineered to capture qualified leads and maximize ROI.",
      icon: LayoutTemplate,
      accent: "#8B5CF6",
      glow: "rgba(139, 92, 246, 0.25)",
      features: ["A/B Testing Ready", "Sub-Second Load", "Conversion Focused"],
    },
    {
      id: "02",
      title: "Business Website",
      badge: "Scalable Architecture",
      desc: "Complete multi-page platforms for scaling brands with seamless headless CMS and technical SEO.",
      icon: Globe,
      accent: "#22D3EE",
      glow: "rgba(34, 211, 238, 0.25)",
      features: ["Headless CMS", "Technical SEO", "Automated Funnels"],
    },
    {
      id: "03",
      title: "UI/UX Design",
      badge: "Design Systems",
      desc: "Pixel-perfect Figma designs, scalable token systems, and bespoke luxury micro-interactions.",
      icon: Palette,
      accent: "#EC4899",
      glow: "rgba(236, 72, 153, 0.25)",
      features: ["Figma Prototypes", "Custom UI Kit", "Micro-Interactions"],
    },
    {
      id: "04",
      title: "Website Redesign",
      badge: "Speed & Revamp",
      desc: "Overhaul sluggish, outdated websites into blazing-fast Next.js digital platforms with higher conversion.",
      icon: Zap,
      accent: "#10B981",
      glow: "rgba(16, 185, 129, 0.25)",
      features: ["99+ Lighthouse", "Modern UI Refresh", "Zero Downtime"],
    },
  ];

  return (
    <section id="services" className="relative py-14 sm:py-16 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0891B2] bg-[#0891B2]/10 px-4 py-1.5 rounded-full border border-[#0891B2]/20 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Solutions</span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 tracking-tight">
            High-Impact Web Services
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every business requires a unique strategy. I build custom, responsive digital experiences engineered to scale your online presence.
          </p>
        </div>

        {/* 4 Aesthetic Compact Service Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative h-full flex flex-col justify-between rounded-2xl p-[1px] transition-all duration-500 hover:shadow-xl shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)]"
                style={{
                  background: `linear-gradient(180deg, rgba(226, 232, 240, 0.9) 0%, rgba(241, 245, 249, 0.6) 60%, transparent 100%)`,
                }}
              >
                {/* Glow border overlay on hover */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(180deg, ${service.accent} 0%, rgba(226,232,240,0.5) 40%, transparent 100%)`,
                  }}
                />

                {/* Inner Card Box */}
                <div className="relative z-10 h-full flex flex-col justify-between rounded-[15px] bg-white/95 backdrop-blur-xl border border-slate-200/80 p-5 sm:p-6 overflow-hidden transition-all duration-300 group-hover:bg-white group-hover:border-transparent">
                  
                  {/* Subtle radial ambient light on top corner */}
                  <div
                    className="pointer-events-none absolute -top-14 -right-14 w-32 h-32 rounded-full blur-2xl opacity-15 group-hover:opacity-40 transition-opacity duration-500"
                    style={{ background: service.glow }}
                  />

                  <div className="space-y-4">
                    {/* Top Row: Icon Badge & Index */}
                    <div className="flex items-center justify-between">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 shadow-sm group-hover:scale-105"
                        style={{
                          background: `radial-gradient(circle at center, ${service.glow} 0%, rgba(241,245,249,0.5) 100%)`,
                          borderColor: `${service.accent}35`,
                        }}
                      >
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" style={{ color: service.accent }} />
                      </div>

                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200/80 text-slate-500 group-hover:text-slate-900 transition-colors">
                        {service.id}
                      </span>
                    </div>

                    {/* Badge Pill */}
                    <div>
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block"
                        style={{
                          color: service.accent,
                          backgroundColor: `${service.accent}12`,
                          border: `1px solid ${service.accent}25`,
                        }}
                      >
                        {service.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-slate-950 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                        {service.desc}
                      </p>
                    </div>

                    {/* Key Deliverables Pills */}
                    <div className="space-y-1.5 pt-2">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                          <Check className="w-3 h-3 flex-shrink-0" style={{ color: service.accent }} />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-5 mt-5 border-t border-slate-200/80">
                    <button
                      onClick={onOpenBooking}
                      className="w-full flex items-center justify-between group/btn text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
                    >
                      <span className="group-hover/btn:translate-x-0.5 transition-transform">Discuss Scope</span>
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center border border-slate-200 bg-slate-100/80 transition-all duration-300 group-hover:scale-110 shadow-sm"
                        style={{
                          borderColor: `${service.accent}40`,
                        }}
                      >
                        <ArrowUpRight
                          className="w-3.5 h-3.5 transition-all duration-300 group-hover:rotate-45"
                          style={{ color: service.accent }}
                        />
                      </div>
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
