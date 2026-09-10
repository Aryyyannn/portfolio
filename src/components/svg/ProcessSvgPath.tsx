"use client";

import React from "react";
import { motion } from "framer-motion";

export const ProcessSvgPath = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto hidden md:block py-6">
      <svg viewBox="0 0 900 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <defs>
          <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#C084FC" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>

          <filter id="pathGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background Track */}
        <path
          d="M 100 50 C 250 10, 350 90, 500 50 C 650 10, 750 90, 800 50"
          stroke="rgba(148, 163, 184, 0.3)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Animated Glowing Connecting Path */}
        <motion.path
          d="M 100 50 C 250 10, 350 90, 500 50 C 650 10, 750 90, 800 50"
          stroke="url(#processGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#pathGlow)"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Timeline Nodes */}
        <g>
          {/* Step 1 Node */}
          <circle cx="100" cy="50" r="16" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="4" />
          <circle cx="100" cy="50" r="6" fill="#7C3AED" />

          {/* Step 2 Node */}
          <circle cx="330" cy="50" r="16" fill="#FFFFFF" stroke="#9333EA" strokeWidth="4" />
          <circle cx="330" cy="50" r="6" fill="#9333EA" />

          {/* Step 3 Node */}
          <circle cx="560" cy="50" r="16" fill="#FFFFFF" stroke="#C084FC" strokeWidth="4" />
          <circle cx="560" cy="50" r="6" fill="#C084FC" />

          {/* Step 4 Node */}
          <circle cx="800" cy="50" r="16" fill="#FFFFFF" stroke="#0891B2" strokeWidth="4" />
          <circle cx="800" cy="50" r="6" fill="#0891B2" />
        </g>
      </svg>
    </div>
  );
};
