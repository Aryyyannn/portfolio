"use client";

import React from "react";

export const AboutWorkspaceSvg = () => {
  return (
    <div className="relative w-full max-w-[560px] mx-auto aspect-square flex items-center justify-center p-2">
      {/* Background Neon Aura */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/12 via-transparent to-[#0891B2]/12 blur-3xl rounded-full" />

      <svg
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_20px_35px_rgba(15,23,42,0.1)]"
      >
        <defs>
          <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>

          <linearGradient id="deskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          <linearGradient id="screenCode" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          <filter id="purpleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Back Wall Glow */}
        <circle cx="300" cy="240" r="160" fill="#7C3AED" opacity="0.1" filter="url(#purpleGlow)" />
        <circle cx="450" cy="180" r="100" fill="#0891B2" opacity="0.08" filter="url(#purpleGlow)" />

        {/* Studio Desk Table */}
        <rect x="50" y="440" width="500" height="20" rx="6" fill="url(#deskGrad)" stroke="rgba(15,23,42,0.08)" />
        <rect x="90" y="460" width="20" height="110" rx="4" fill="#1E293B" stroke="rgba(15,23,42,0.06)" />
        <rect x="490" y="460" width="20" height="110" rx="4" fill="#1E293B" stroke="rgba(15,23,42,0.06)" />

        {/* --- MONITOR 1 (LEFT: CODE / DEVELOPMENT) --- */}
        <g transform="translate(70, 180)">
          {/* Stand */}
          <rect x="90" y="220" width="30" height="40" fill="#1E1E28" rx="4" />
          <polygon points="60,260 150,260 140,264 70,264" fill="#2A2A38" />
          {/* Bezel */}
          <rect x="10" y="10" width="190" height="210" rx="14" fill="url(#screenCode)" stroke="rgba(139,92,246,0.5)" strokeWidth="2" />
          {/* IDE Window */}
          <rect x="20" y="24" width="170" height="20" rx="4" fill="rgba(255,255,255,0.04)" />
          <circle cx="32" cy="34" r="3.5" fill="#FF5F56" />
          <circle cx="44" cy="34" r="3.5" fill="#FFBD2E" />
          <circle cx="56" cy="34" r="3.5" fill="#27C93F" />
          <text x="75" y="38" fill="#A1A1AA" fontSize="9" fontFamily="monospace">AryanStudio.tsx</text>
          {/* Code Lines */}
          <rect x="25" y="55" width="60" height="6" rx="3" fill="#8B5CF6" />
          <rect x="90" y="55" width="40" height="6" rx="3" fill="#22D3EE" />
          <rect x="25" y="70" width="120" height="6" rx="3" fill="rgba(255,255,255,0.4)" />
          <rect x="35" y="85" width="90" height="6" rx="3" fill="#8B5CF6" />
          <rect x="35" y="100" width="130" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
          <rect x="35" y="115" width="80" height="6" rx="3" fill="#22D3EE" />
          <rect x="25" y="130" width="140" height="6" rx="3" fill="rgba(255,255,255,0.4)" />
          <rect x="25" y="145" width="70" height="6" rx="3" fill="#8B5CF6" />

          {/* Floating Next.js Badge */}
          <rect x="30" y="165" width="75" height="22" rx="6" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" />
          <text x="42" y="180" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Next.js 15</text>
        </g>

        {/* --- MONITOR 2 (RIGHT / MAIN: FIGMA / UI DESIGN) --- */}
        <g transform="translate(280, 140)">
          {/* Stand */}
          <rect x="115" y="260" width="30" height="40" fill="#1E1E28" rx="4" />
          <polygon points="85,300 175,300 165,304 95,304" fill="#2A2A38" />
          {/* Bezel */}
          <rect x="10" y="10" width="240" height="250" rx="16" fill="url(#screenCode)" stroke="url(#glowGrad)" strokeWidth="2.5" />
          {/* Top Bar */}
          <rect x="20" y="24" width="220" height="24" rx="6" fill="rgba(255,255,255,0.05)" />
          <text x="32" y="40" fill="#22D3EE" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Figma — Portfolio System</text>
          {/* Canvas Area */}
          <rect x="25" y="58" width="210" height="190" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
          {/* Design Layout Wireframes */}
          <rect x="40" y="75" width="180" height="45" rx="8" fill="rgba(139,92,246,0.15)" stroke="rgba(139,92,246,0.4)" />
          <circle cx="60" cy="97" r="12" fill="url(#glowGrad)" />
          <rect x="85" y="90" width="80" height="6" rx="3" fill="#FFFFFF" />
          <rect x="85" y="101" width="50" height="5" rx="2.5" fill="#A1A1AA" />

          {/* Cards Layout */}
          <rect x="40" y="130" width="82" height="100" rx="8" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.3)" />
          <rect x="50" y="142" width="62" height="35" rx="4" fill="rgba(255,255,255,0.1)" />
          <rect x="50" y="185" width="50" height="5" rx="2.5" fill="#FFFFFF" />
          <rect x="50" y="195" width="35" height="4" rx="2" fill="#A1A1AA" />

          <rect x="138" y="130" width="82" height="100" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
          <rect x="148" y="142" width="62" height="35" rx="4" fill="rgba(255,255,255,0.06)" />
          <rect x="148" y="185" width="50" height="5" rx="2.5" fill="#FFFFFF" />
          <rect x="148" y="195" width="35" height="4" rx="2" fill="#A1A1AA" />
        </g>

        {/* --- DESIGNER CHARACTER (MINIMAL LUXURY SILHOUETTE WITH NEON HEADPHONES) --- */}
        <g transform="translate(230, 290)">
          {/* Chair back */}
          <rect x="35" y="80" width="70" height="90" rx="14" fill="#15151F" stroke="rgba(255,255,255,0.1)" />
          {/* Body / Shoulders */}
          <path d="M 20 150 Q 70 120 120 150 L 115 170 L 25 170 Z" fill="#1E1E2B" stroke="rgba(139,92,246,0.3)" />
          {/* Head */}
          <circle cx="70" cy="105" r="24" fill="#2A2A3C" />
          {/* Headphones */}
          <path d="M 44 105 Q 70 70 96 105" fill="none" stroke="url(#glowGrad)" strokeWidth="4" strokeLinecap="round" />
          <rect x="42" y="98" width="8" height="18" rx="4" fill="#22D3EE" />
          <rect x="90" y="98" width="8" height="18" rx="4" fill="#8B5CF6" />
        </g>

        {/* Desk Accessories */}
        {/* Coffee Mug */}
        <rect x="230" y="415" width="18" height="24" rx="4" fill="#1E1E28" stroke="rgba(255,255,255,0.2)" />
        <path d="M 248 420 Q 254 427 248 434" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
        {/* Steam */}
        <path d="M 235 410 Q 237 402 235 396" fill="none" stroke="#22D3EE" strokeWidth="1.5" opacity="0.6" />

        {/* Keyboard & Glowing Trackpad */}
        <rect x="290" y="430" width="110" height="8" rx="3" fill="#1E1E28" stroke="rgba(255,255,255,0.15)" />
        <rect x="330" y="422" width="30" height="5" rx="2" fill="url(#glowGrad)" />

        {/* Ambient Neon Desk Strip */}
        <line x1="50" y1="440" x2="550" y2="440" stroke="url(#glowGrad)" strokeWidth="2" filter="url(#purpleGlow)" />
      </svg>
    </div>
  );
};
