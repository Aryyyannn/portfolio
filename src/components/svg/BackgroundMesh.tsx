"use client";

import React from "react";

export const BackgroundMesh = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Top Left Soft Pastel Glow (Hero area) */}
      <div className="absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full bg-[#7C3AED]/10 blur-[140px]" />
      
      {/* Top Right Radiant Cyan Bloom (About & Services area) */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-[#0891B2]/10 blur-[160px]" />
      
      {/* Middle Left Radiant Violet Bloom (Work & Why Us area) */}
      <div className="absolute top-1/2 -left-40 w-[550px] h-[550px] rounded-full bg-[#8B5CF6]/8 blur-[150px]" />

      {/* Bottom Right Pastel Bloom (Process & Contact area) */}
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full bg-[#06B6D4]/10 blur-[150px]" />

      {/* Bottom Center Soft Rose Bloom */}
      <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-[#EC4899]/6 blur-[140px]" />

      {/* Grid Pattern Overlay flowing seamlessly across all sections */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0F172A" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridPattern)" />
      </svg>
    </div>
  );
};

export const ContactWaveSvg = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
      <svg viewBox="0 0 1440 600" fill="none" className="w-full h-full object-cover">
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#F8FAFD" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 0 300 Q 360 150 720 300 T 1440 300 L 1440 600 L 0 600 Z"
          fill="url(#waveGrad)"
        />
        <path
          d="M 0 400 Q 360 250 720 400 T 1440 400 L 1440 600 L 0 600 Z"
          fill="url(#waveGrad)"
          opacity="0.6"
        />

        {/* Floating Particles */}
        <circle cx="200" cy="200" r="3" fill="#0891B2" opacity="0.6" className="animate-pulse" />
        <circle cx="500" cy="120" r="4" fill="#7C3AED" opacity="0.5" className="animate-bounce" />
        <circle cx="900" cy="250" r="2.5" fill="#64748B" opacity="0.5" />
        <circle cx="1200" cy="180" r="3" fill="#0891B2" opacity="0.4" className="animate-pulse" />
      </svg>
    </div>
  );
};
