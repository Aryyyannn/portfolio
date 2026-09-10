"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MessageSquare, Mail, Check, ArrowRight } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Landing Page Design",
    budget: "$1k - $3k",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@aryanstudio.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        onClose();

        setFormData({
          name: "",
          email: "",
          service: "Landing Page Design",
          budget: "$1k - $3k",
          message: "",
        });
      }, 2500);
    }
  } catch (error) {
    alert("Backend se connect nahi ho paya!");
  }
};
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-[28px] border border-slate-200 bg-white/95 backdrop-blur-xl p-6 sm:p-8 shadow-2xl z-10"
          >
            {/* Ambient Top Glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-violet-400/15 blur-3xl" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-violet-50 border border-violet-200 text-violet-600 flex items-center justify-center mx-auto animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-slate-900">Call Request Received!</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base">
                  Thanks for reaching out! Aryan will review your project details and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED] bg-[#7C3AED]/10 px-3 py-1 rounded-full border border-[#7C3AED]/20">
                    Let's Connect
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-3">
                    Book a Free Strategy Call
                  </h2>
                  <p className="text-slate-600 text-sm mt-1">
                    Tell me about your business goals, timeline, or vision. No commitment required.
                  </p>
                </div>

                {/* Direct Action Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <a
                    href="https://wa.me/15550192834?text=Hi%20Aryan!%20I'd%20like%20to%20discuss%20a%20website%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100/80 transition-all group shadow-sm"
                  >
                    <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-medium text-emerald-600">Instant Chat</p>
                      <p className="text-sm font-semibold text-slate-900">WhatsApp Me</p>
                    </div>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-violet-50 border border-violet-200 text-violet-800 hover:bg-violet-100/80 transition-all text-left shadow-sm cursor-pointer"
                  >
                    <div className="p-2 rounded-xl bg-violet-100 text-violet-700">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-violet-600">Direct Email</p>
                      <p className="text-sm font-semibold text-slate-900">
                        {copied ? "Copied to Clipboard!" : "hello@aryanstudio.com"}
                      </p>
                    </div>
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Rivera"
                        className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Service Needed</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-[#7C3AED] focus:outline-none"
                      >
                        <option value="Landing Page Design">Landing Page Design</option>
                        <option value="Business Website">Business Website</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Website Redesign">Website Redesign</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Estimated Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-[#7C3AED] focus:outline-none"
                      >
                        <option value="$1k - $3k">$1,000 - $3,000</option>
                        <option value="$3k - $5k">$3,000 - $5,000</option>
                        <option value="$5k+">$5,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Project Details</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your goals, timeframe, or references..."
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#7C3AED] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#0891B2] text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-opacity shadow-lg shadow-[#7C3AED]/20 cursor-pointer"
                  >
                    <span>Schedule Free Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
