"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ExternalLink,
  ArrowUpRight,
  TrendingUp,
  Star,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { ProjectMockupSvg } from "../svg/ProjectMockupSvg";

interface FeaturedWorkProps {
  onOpenBooking: () => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [isHovered, setIsHovered] = useState(false);

  const categories = [
    { label: "All Projects", key: "All" },
    { label: "Fitness", key: "Fitness" },
    { label: "E-Commerce", key: "E-Commerce" },
    { label: "Beauty", key: "Beauty" },
    { label: "Real Estate", key: "Real Estate" },
  ];

  const projects = [
    {
      id: "fitzone",
      categoryKey: "Fitness",
      title: "FitZone Gym",
      category: "Fitness & Wellness",
      domain: "fitzone-pro.com",
      projectType: "Full-Stack Web App",
      desc: "High-energy conversion platform featuring real-time trainer schedules and Stripe checkout.",
      metric: "+140% Online Signups",
      metricIcon: TrendingUp,
      techStack: ["Next.js 15", "Tailwind", "Framer", "Stripe API"],
      accent: "#8B5CF6",
      glow: "rgba(139, 92, 246, 0.28)",
      linkText: "View Live Demo",
    },
    {
      id: "brewhaven",
      categoryKey: "E-Commerce",
      title: "Brew Haven Café",
      category: "E-Commerce & Food",
      domain: "brewhavencafe.co",
      projectType: "Shopify Headless Store",
      desc: "Artisanal coffee roastery storefront with roast subscriptions and interactive café locator.",
      metric: "3.2x Roast Subscriptions",
      metricIcon: Zap,
      techStack: ["React", "Tailwind", "Shopify API", "Framer"],
      accent: "#22D3EE",
      glow: "rgba(34, 211, 238, 0.28)",
      linkText: "View Case Study",
    },
    {
      id: "glowstudio",
      categoryKey: "Beauty",
      title: "Glow Studio Salon",
      category: "Luxury Spa & Beauty",
      domain: "glowstudio-spa.com",
      projectType: "Boutique Booking Platform",
      desc: "Ultra-aesthetic spa interface with ritual service menus and live booking staff calendars.",
      metric: "4.98★ (650+ Bookings)",
      metricIcon: Star,
      techStack: ["Next.js", "TypeScript", "Tailwind", "Calendly"],
      accent: "#EC4899",
      glow: "rgba(236, 72, 153, 0.28)",
      linkText: "View Live Demo",
    },
    {
      id: "urbannest",
      categoryKey: "Real Estate",
      title: "Urban Nest Realty",
      category: "Architectural Realty",
      domain: "urbannest-luxury.com",
      projectType: "Luxury Showcase Platform",
      desc: "Minimalist luxury property showcase with 3D penthouse tours and high-ticket inquiry funnels.",
      metric: "$4.2M Lead Pipeline",
      metricIcon: ShieldCheck,
      techStack: ["Next.js 15", "Tailwind", "Mapbox", "Framer"],
      accent: "#38BDF8",
      glow: "rgba(56, 189, 248, 0.28)",
      linkText: "View Case Study",
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.categoryKey === activeTab);

  // Seamless repeating boxes (duplicated so 50% translate is completely seamless)
  const repeatedProjects =
    activeTab === "All"
      ? [...projects, ...projects]
      : [...filteredProjects, ...filteredProjects, ...filteredProjects, ...filteredProjects];

  return (
    <section id="work" className="relative py-14 sm:py-16 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      {/* CSS Keyframe for buttery GPU continuous right-to-left rotation */}
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 28s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header (No sliding buttons) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED] bg-[#7C3AED]/10 px-4 py-1.5 rounded-full border border-[#7C3AED]/20 inline-flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Selected Portfolio</span>
              </span>

              {/* Live Status Badge */}
              <span className="text-[10px] font-mono text-slate-500 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isHovered ? "bg-amber-500" : "bg-emerald-500 animate-pulse"
                  }`}
                />
                <span>{isHovered ? "Paused on Hover" : "Continuous Rotation"}</span>
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 tracking-tight">
              Featured Client Work
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore custom websites built for ambitious businesses. Watch our client showcases rotate continuously, or hover any box to pause and inspect the live demo.
            </p>
          </div>

          {/* Header Action CTA */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0891B2] hover:text-slate-950 px-5 py-2.5 rounded-full bg-white border border-slate-200 hover:border-[#0891B2]/50 transition-all cursor-pointer shadow-sm"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Quick Tabs */}
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeTab === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveTab(cat.key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white border border-slate-900 shadow-sm scale-105"
                      : "text-slate-600 hover:text-slate-950 bg-transparent border border-transparent hover:bg-slate-100/90"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="text-[11px] font-mono text-slate-400 hidden sm:flex items-center gap-1.5">
            <span>Hover any box to freeze rotation</span>
          </div>
        </div>

        {/* Continuous Rotating Track (Right to Left with Seamless Repeat) */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative overflow-hidden py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          {/* Continuous Repeating Box Strip */}
          <div className="marquee-track flex gap-5">
            {repeatedProjects.map((project, idx) => {
              const MetricIcon = project.metricIcon;

              return (
                <div
                  key={`${project.id}-${idx}`}
                  className="group relative flex-shrink-0 w-[78vw] sm:w-[320px] md:w-[340px] lg:w-[360px] rounded-[22px] p-[1px] transition-all duration-500 select-none hover:shadow-xl hover:scale-[1.015]"
                  style={{
                    background: `linear-gradient(180deg, rgba(226, 232, 240, 0.9) 0%, rgba(241, 245, 249, 0.6) 60%, transparent 100%)`,
                  }}
                >
                  {/* Glow border overlay on hover */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(180deg, ${project.accent} 0%, rgba(226,232,240,0.5) 40%, transparent 100%)`,
                    }}
                  />

                  {/* Inner Card Container - Compact & Aesthetic */}
                  <div className="relative z-10 h-full flex flex-col justify-between rounded-[21px] bg-white/95 backdrop-blur-2xl border border-slate-200/80 p-4 sm:p-5 overflow-hidden transition-all duration-300 group-hover:bg-white group-hover:border-transparent group-hover:shadow-xl shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]">
                    
                    {/* Top ambient radial glow */}
                    <div
                      className="pointer-events-none absolute -top-16 -right-16 w-32 h-32 rounded-full blur-2xl opacity-15 group-hover:opacity-40 transition-opacity duration-500"
                      style={{ background: project.glow }}
                    />

                    <div className="space-y-3.5">
                      {/* Device Mockup Showcase Window */}
                      <div className="relative overflow-hidden rounded-xl group/mockup border border-slate-200 group-hover:border-slate-300 transition-all duration-500 shadow-sm">
                        
                        {/* Live Client Badge */}
                        <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[9.5px] font-medium text-emerald-600 shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Live Client</span>
                        </div>

                        {/* Domain Tag */}
                        <div className="absolute top-2.5 right-2.5 z-20 hidden sm:flex items-center px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[9.5px] font-mono text-slate-500 shadow-xs">
                          <span>{project.domain}</span>
                        </div>

                        {/* Vector Mockup */}
                        <div className="group-hover:scale-[1.03] transition-transform duration-500">
                          <ProjectMockupSvg id={project.id as any} />
                        </div>

                        {/* Interactive Hover Glass Overlay */}
                        <div
                          onClick={onOpenBooking}
                          className="cursor-pointer absolute inset-0 z-20 bg-slate-900/30 backdrop-blur-[2px] opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        >
                          <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[11px] font-semibold text-slate-900 shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover/mockup:translate-y-0 transition-transform duration-300">
                            <span>Explore Live Demo</span>
                            <ExternalLink className="w-3 h-3" />
                          </span>
                        </div>
                      </div>

                      {/* Meta Row: Category Pill & Index */}
                      <div className="flex items-center justify-between pt-0.5">
                        <span
                          className="text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block"
                          style={{
                            color: project.accent,
                            backgroundColor: `${project.accent}12`,
                            border: `1px solid ${project.accent}25`,
                          }}
                        >
                          {project.category}
                        </span>

                        <span className="text-[10px] font-mono text-slate-400 font-medium">
                          0{(idx % projects.length) + 1} / 04
                        </span>
                      </div>

                      {/* Title, Type & Impact Metric */}
                      <div className="space-y-1.5">
                        <div className="flex items-baseline justify-between gap-2">
                          <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 group-hover:text-slate-950 transition-colors">
                            {project.title}
                          </h3>
                          <span className="text-[9.5px] font-mono text-slate-500">{project.projectType}</span>
                        </div>

                        {/* Key Impact Metric Pill */}
                        <div
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold"
                          style={{
                            backgroundColor: `${project.accent}12`,
                            color: project.accent,
                            border: `1px solid ${project.accent}25`,
                          }}
                        >
                          <MetricIcon className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{project.metric}</span>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                          {project.desc}
                        </p>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[9.5px] font-medium text-slate-700 bg-slate-100 border border-slate-200/80 px-2 py-0.5 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Bottom CTA */}
                    <div className="pt-3.5 mt-3.5 border-t border-slate-200/80">
                      <button
                        onClick={onOpenBooking}
                        className="w-full flex items-center justify-between group/btn text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
                      >
                        <span className="group-hover/btn:translate-x-0.5 transition-transform">
                          {project.linkText}
                        </span>
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center border border-slate-200 bg-slate-100/80 transition-all duration-300 group-hover:scale-110 shadow-sm"
                          style={{
                            borderColor: `${project.accent}40`,
                          }}
                        >
                          <ArrowUpRight
                            className="w-3.5 h-3.5 transition-all duration-300 group-hover:rotate-45"
                            style={{ color: project.accent }}
                          />
                        </div>
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
