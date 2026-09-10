"use client";

import React from "react";
import { motion } from "framer-motion";

export const HeroLaptopSvg = () => {
  return (
    <div className="relative w-full max-w-[620px] mx-auto aspect-[4/3] flex items-center justify-center p-4">
      {/* Background radial neon aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6]/30 via-[#22D3EE]/20 to-transparent blur-3xl rounded-full animate-pulse-glow" />

      {/* Main SVG Container */}
      <svg
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_25px_50px_rgba(139,92,246,0.3)] animate-float"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="laptopBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E1E28" />
            <stop offset="100%" stopColor="#0B0B10" />
          </linearGradient>

          <linearGradient id="screenBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="screenBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0D0D15" />
            <stop offset="100%" stopColor="#06060A" />
          </linearGradient>

          <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>

          <linearGradient id="cardGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.02" />
          </linearGradient>

          {/* Glow Filters */}
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- LAPTOP BASE --- */}
        <path
          d="M 120 480 Q 400 530 680 480 L 730 515 Q 400 560 70 515 Z"
          fill="url(#laptopBody)"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
        />
        {/* Trackpad */}
        <polygon
          points="350,495 450,495 460,515 340,515"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.1)"
        />
        {/* Front Edge Glow */}
        <path
          d="M 70 515 Q 400 560 730 515"
          stroke="url(#heroGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#neonGlow)"
        />

        {/* --- LAPTOP SCREEN FRAME --- */}
        <rect
          x="140"
          y="80"
          width="520"
          height="390"
          rx="20"
          fill="url(#screenBg)"
          stroke="url(#screenBorder)"
          strokeWidth="3"
        />

        {/* Screen Top Camera */}
        <circle cx="400" cy="94" r="4" fill="#22D3EE" opacity="0.8" />
        <circle cx="400" cy="94" r="1.5" fill="#FFFFFF" />

        {/* --- SCREEN CONTENT (FUTURISTIC WEB APP UI) --- */}

        {/* App Header */}
        <rect x="160" y="115" width="480" height="36" rx="8" fill="rgba(255,255,255,0.03)" />
        <circle cx="180" cy="133" r="5" fill="#FF5F56" />
        <circle cx="196" cy="133" r="5" fill="#FFBD2E" />
        <circle cx="212" cy="133" r="5" fill="#27C93F" />

        {/* Nav links simulation */}
        <rect x="420" y="128" width="40" height="10" rx="5" fill="#8B5CF6" />
        <rect x="475" y="128" width="35" height="10" rx="5" fill="rgba(255,255,255,0.3)" />
        <rect x="525" y="128" width="35" height="10" rx="5" fill="rgba(255,255,255,0.3)" />
        <rect x="575" y="123" width="50" height="20" rx="10" fill="url(#heroGradient)" />

        {/* Main Hero Showcase inside Laptop Screen */}
        <text x="180" y="195" fill="#FFFFFF" fontSize="22" fontWeight="bold" fontFamily="sans-serif">
          Next-Gen Digital Platform
        </text>
        <text x="180" y="218" fill="#A1A1AA" fontSize="12" fontFamily="sans-serif">
          Transforming ideas into high-converting digital products.
        </text>

        {/* Primary CTA button on screen */}
        <rect x="180" y="235" width="110" height="28" rx="8" fill="url(#heroGradient)" />
        <text x="205" y="253" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
          Explore Work
        </text>

        {/* Analytics Glass Card inside Screen */}
        <rect
          x="180"
          y="285"
          width="210"
          height="140"
          rx="12"
          fill="url(#cardGlass)"
          stroke="rgba(255,255,255,0.15)"
        />
        <text x="195" y="310" fill="#22D3EE" fontSize="12" fontWeight="600" fontFamily="sans-serif">
          Conversion Rate
        </text>
        <text x="195" y="338" fill="#FFFFFF" fontSize="24" fontWeight="bold" fontFamily="sans-serif">
          +342.8%
        </text>

        {/* Animated Chart Line */}
        <path
          d="M 195 400 Q 230 380 260 390 T 320 340 T 375 330"
          fill="none"
          stroke="url(#heroGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#neonGlow)"
        />
        <circle cx="375" cy="330" r="5" fill="#22D3EE" />

        {/* Secondary UI Glass Card */}
        <rect
          x="410"
          y="180"
          width="210"
          height="245"
          rx="12"
          fill="url(#cardGlass)"
          stroke="rgba(255,255,255,0.15)"
        />
        {/* Placeholder UI Grid items inside card */}
        <rect x="430" y="200" width="170" height="80" rx="8" fill="rgba(139,92,246,0.15)" stroke="rgba(139,92,246,0.3)" />
        <circle cx="460" cy="240" r="18" fill="url(#heroGradient)" />
        <rect x="490" y="230" width="90" height="8" rx="4" fill="#FFFFFF" />
        <rect x="490" y="244" width="60" height="6" rx="3" fill="#A1A1AA" />

        <rect x="430" y="295" width="170" height="50" rx="8" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.3)" />
        <rect x="430" y="358" width="170" height="50" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />

        {/* --- FLOATING 3D GLASS CARDS OUTSIDE LAPTOP (AWWWARDS STYLE) --- */}
        <g transform="translate(60, 160)">
          <rect
            width="130"
            height="70"
            rx="16"
            fill="rgba(17,17,24,0.9)"
            stroke="url(#heroGradient)"
            strokeWidth="1.5"
            filter="url(#neonGlow)"
          />
          <text x="16" y="32" fill="#22D3EE" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
            AESTHETIC
          </text>
          <text x="16" y="52" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
            Gen-Z Luxury
          </text>
        </g>

        <g transform="translate(620, 290)">
          <rect
            width="135"
            height="75"
            rx="16"
            fill="rgba(17,17,24,0.9)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.5"
          />
          <circle cx="28" cy="38" r="14" fill="#8B5CF6" />
          <text x="23" y="43" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
            ⚡
          </text>
          <text x="50" y="34" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
            100/100
          </text>
          <text x="50" y="50" fill="#A1A1AA" fontSize="10" fontFamily="sans-serif">
            Lighthouse Score
          </text>
        </g>
      </svg>
    </div>
  );
};
