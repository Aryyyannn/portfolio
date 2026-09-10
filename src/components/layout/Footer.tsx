"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-slate-200/80 bg-white/60 backdrop-blur-md pt-12 pb-8 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Brand */}
        <div className="text-center md:text-left space-y-2">
          <a href="#hero" className="text-2xl font-bold font-heading tracking-wider text-slate-900 inline-block">
            ARYAN<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#0891B2]">STUDIO</span>
          </a>
          <p className="text-slate-500 text-xs sm:text-sm max-w-sm">
            Crafting high-converting, mobile-first websites and digital experiences for modern brands worldwide.
          </p>
        </div>

        {/* Center Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-600">
          <a href="#hero" className="hover:text-slate-900 transition-colors">Home</a>
          <a href="#work" className="hover:text-slate-900 transition-colors">Work</a>
          <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>

        {/* Right Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-100/80 border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-white hover:border-violet-400/50 transition-all shadow-sm"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-100/80 border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-white hover:border-violet-400/50 transition-all shadow-sm"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-100/80 border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-white hover:border-violet-400/50 transition-all shadow-sm"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

            {/* Dribbble */}
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-100/80 border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-white hover:border-violet-400/50 transition-all shadow-sm"
              aria-label="Dribbble"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.946 11.237c-.332-.07-2.617-.54-5.267-.221 1.091-2.993 1.542-5.719 1.62-6.223 2.152 1.666 3.486 4.148 3.647 6.444zm-5.748-7.533c-.11.669-.583 3.313-1.637 6.257-3.415-.992-6.529-.933-6.84-.925C8.948 5.666 12.008 4.024 12 4.024c1.554 0 3.013.6 4.198 1.68zm-9.988 2.592c.365-.008 3.235-.04 6.467.925-.572 1.583-1.229 3.21-2.009 4.808-3.904-.849-7.391.226-7.534.271.168-2.28 1.258-4.382 3.076-6.004zM2.08 12.96c.216-.067 3.208-1.02 6.842-.236.702-1.474 1.309-2.977 1.839-4.444-2.884-.87-5.46-.838-5.811-.83-.008.067-.015.134-.015.202 0 1.866.697 3.57 1.845 4.872zm2.08 2.226c.162-.05 3.37-1.026 7.106-.118-.949 2.518-2.054 4.856-3.232 6.82-3.155-1.121-5.474-3.948-5.874-7.464l2.000.762zm10.024 6.782c1.173-1.921 2.261-4.226 3.176-6.697 2.473-.341 4.549.124 4.858.2.008.172.015.344.015.516 0 3.42-2.196 6.34-5.26 7.426.000-.472-1.789 1.445-2.789-1.445z"/>
              </svg>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-violet-100 border border-violet-200 text-violet-700 hover:bg-violet-600 hover:text-white transition-all ml-2 shadow-sm cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} Aryan Studio. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed &amp; Built with <span className="text-[#7C3AED]">✦</span> Next.js &amp; Framer Motion
        </p>
      </div>
    </footer>
  );
};
