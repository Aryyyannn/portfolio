"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Mail, Sparkles, Check, ArrowRight } from "lucide-react";
import { ContactWaveSvg } from "../svg/BackgroundMesh";
import { MagneticButton } from "../ui/MagneticButton";

interface ContactCTAProps {
  onOpenBooking: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenBooking }) => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@aryanstudio.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 px-6 sm:px-8 overflow-hidden z-10">
      {/* Background SVG Wave and Glowing Particles */}
      <ContactWaveSvg />

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        
        {/* Label Chip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 border border-slate-200/85 text-xs font-semibold uppercase tracking-widest text-[#7C3AED] backdrop-blur-md shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
          <span>Start Your Transformation</span>
        </motion.div>

        {/* Emotional Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.15]"
        >
          Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#0891B2]">Unforgettable.</span>
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-600 text-lg sm:text-2xl max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Ready to give your business a premium online presence? Let's create a website your customers will remember.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-5 pt-4"
        >
          {/* WhatsApp Me */}
          <MagneticButton>
            <a
              href="https://wa.me/15550192834?text=Hi%20Aryan!%20I'm%20interested%20in%20building%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-emerald-600 text-white font-bold text-sm tracking-wide flex items-center gap-3 shadow-xl shadow-emerald-600/25 hover:bg-emerald-500 transition-all cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>WhatsApp Me</span>
            </a>
          </MagneticButton>

          {/* Send Email */}
          <MagneticButton onClick={handleCopyEmail}>
            <div className="px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-800 font-semibold text-sm tracking-wide flex items-center gap-3 hover:bg-slate-50 transition-all backdrop-blur-md shadow-sm cursor-pointer">
              {emailCopied ? <Check className="w-5 h-5 text-emerald-600" /> : <Mail className="w-5 h-5 text-[#7C3AED]" />}
              <span>{emailCopied ? "Email Copied!" : "Send Email"}</span>
            </div>
          </MagneticButton>

          {/* Direct Booking Modal Button */}
          <MagneticButton onClick={onOpenBooking}>
            <div className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#0891B2] text-white font-bold text-sm tracking-wide flex items-center gap-3 shadow-xl shadow-[#7C3AED]/25 hover:opacity-95 transition-all cursor-pointer">
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};
