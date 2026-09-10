"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") !== null ||
        target.closest("a") !== null ||
        target.getAttribute("role") === "button";

      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ambient soft pastel aura */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full blur-lg opacity-30 hidden lg:block"
        animate={{
          x: position.x - 40,
          y: position.y - 40,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.1 }}
        style={{
          width: 80,
          height: 80,
          background: "radial-gradient(circle, rgba(124,58,237,0.5) 0%, rgba(8,145,178,0.3) 60%, transparent 100%)",
        }}
      />
      {/* Inner precise cursor dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-slate-900/85 hidden lg:block shadow-sm"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isPointer ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.05 }}
        style={{
          width: 8,
          height: 8,
        }}
      />
    </>
  );
};
