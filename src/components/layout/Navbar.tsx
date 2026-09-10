"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-us" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-8 py-4 sm:py-5 bg-transparent"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold font-heading tracking-wider text-slate-900">
              ARYAN<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#0891B2]">STUDIO</span>
            </span>
            <span className="w-2 h-2 rounded-full bg-[#0891B2] animate-pulse" />
          </a>

          {/* Desktop Navigation Links - Sleek Curved Pill Island */}
          <nav className="hidden md:flex items-center gap-1 bg-white/85 border border-slate-200/85 px-4 py-1.5 rounded-full shadow-lg shadow-slate-900/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-950 transition-colors rounded-full hover:bg-slate-100/90"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action & Status */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Status Pill */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Available</span>
            </div>

            {/* Book Call Magnetic Button */}
            <MagneticButton onClick={onOpenBooking}>
              <div className="flex items-center gap-2 px-4.5 py-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#0891B2] text-white font-semibold text-xs uppercase tracking-wider hover:shadow-lg hover:shadow-[#7C3AED]/25 transition-all cursor-pointer">
                <span>Book a Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/80 border border-slate-200 text-slate-800 cursor-pointer hover:bg-slate-100 transition-colors shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-over Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#F8FAFD]/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 md:hidden"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 w-fit text-xs font-medium text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Taking on new clients Q3/Q4</span>
              </div>

              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold font-heading text-slate-800 hover:text-slate-950 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#0891B2] text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                <span>Book a Free Strategy Call</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
