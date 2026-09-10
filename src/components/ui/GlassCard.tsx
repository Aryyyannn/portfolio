"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  glowColor = "rgba(139, 92, 246, 0.12)",
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-[24px] bg-white/85 backdrop-blur-xl border border-slate-200/80 p-6 sm:p-8 transition-all duration-500 hover:border-violet-400/40 hover:bg-white/95 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.12)] ${className}`}
    >
      {/* Ambient gradient top edge light source */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-48 h-48 rounded-full blur-2xl transition-opacity duration-500 opacity-20 group-hover:opacity-60"
        style={{ background: glowColor }}
      />
      {children}
    </motion.div>
  );
};
