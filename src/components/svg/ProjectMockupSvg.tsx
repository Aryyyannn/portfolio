"use client";

import React from "react";

interface ProjectMockupProps {
  id: "fitzone" | "brewhaven" | "glowstudio" | "urbannest";
}

export const ProjectMockupSvg: React.FC<ProjectMockupProps> = ({ id }) => {
  if (id === "fitzone") {
    return (
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-[#09090E] border border-white/10 group-hover:border-[#8B5CF6]/50 transition-all duration-500">
        {/* Ambient Neon Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 via-transparent to-[#22D3EE]/20 blur-xl opacity-60" />

        <svg viewBox="0 0 800 500" fill="none" className="w-full h-full">
          {/* Top Bar */}
          <rect x="0" y="0" width="800" height="36" fill="#12121A" />
          <circle cx="20" cy="18" r="5" fill="#FF5F56" />
          <circle cx="36" cy="18" r="5" fill="#FFBD2E" />
          <circle cx="52" cy="18" r="5" fill="#27C93F" />
          <rect x="250" y="10" width="300" height="16" rx="8" fill="rgba(255,255,255,0.06)" />
          <text x="340" y="22" fill="#A1A1AA" fontSize="10" fontFamily="sans-serif">fitzone-performance.com</text>

          {/* Web Header */}
          <text x="40" y="80" fill="#FFFFFF" fontSize="24" fontWeight="bold" fontFamily="sans-serif">
            FITZONE <tspan fill="#8B5CF6">PRO</tspan>
          </text>
          <rect x="680" y="65" width="80" height="28" rx="8" fill="linear-gradient(135deg, #8B5CF6, #22D3EE)" />
          <text x="700" y="83" fill="#FFFFFF" fontSize="11" fontWeight="bold">JOIN NOW</text>

          {/* Hero Banner */}
          <rect x="40" y="110" width="480" height="200" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
          <text x="70" y="160" fill="#22D3EE" fontSize="12" fontWeight="bold" letterSpacing="2">TRANSFORM YOUR LIMITS</text>
          <text x="70" y="195" fill="#FFFFFF" fontSize="26" fontWeight="bold">Elite Fitness &amp; Personal Training</text>
          <rect x="70" y="220" width="130" height="36" rx="10" fill="#8B5CF6" />
          <text x="95" y="242" fill="#FFFFFF" fontSize="12" fontWeight="bold">Claim Pass</text>

          {/* Dashboard Stats */}
          <rect x="540" y="110" width="220" height="90" rx="16" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.3)" />
          <text x="560" y="140" fill="#A1A1AA" fontSize="11">Active Members</text>
          <text x="560" y="175" fill="#FFFFFF" fontSize="28" fontWeight="bold">4,820+</text>

          <rect x="540" y="220" width="220" height="90" rx="16" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.3)" />
          <text x="560" y="250" fill="#A1A1AA" fontSize="11">Caloric Burn Rate</text>
          <text x="560" y="285" fill="#22D3EE" fontSize="28" fontWeight="bold">98.4%</text>

          {/* Classes Cards */}
          <rect x="40" y="330" width="220" height="130" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
          <text x="60" y="365" fill="#FFFFFF" fontSize="16" fontWeight="bold">HIIT &amp; Cardio</text>
          <rect x="60" y="380" width="100" height="8" rx="4" fill="#8B5CF6" />

          <rect x="280" y="330" width="220" height="130" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
          <text x="300" y="365" fill="#FFFFFF" fontSize="16" fontWeight="bold">Strength &amp; Iron</text>
          <rect x="300" y="380" width="100" height="8" rx="4" fill="#22D3EE" />

          <rect x="520" y="330" width="240" height="130" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
          <text x="540" y="365" fill="#FFFFFF" fontSize="16" fontWeight="bold">Recovery Spa</text>

          {/* Mobile Preview Frame Floating on bottom right */}
          <g transform="translate(640, 240)">
            <rect width="130" height="230" rx="20" fill="#0D0D14" stroke="#8B5CF6" strokeWidth="3" />
            <rect x="40" y="10" width="50" height="6" rx="3" fill="#1A1A24" />
            <text x="20" y="50" fill="#FFFFFF" fontSize="12" fontWeight="bold">FitZone App</text>
            <rect x="20" y="65" width="90" height="40" rx="8" fill="#8B5CF6" />
            <rect x="20" y="115" width="90" height="30" rx="6" fill="rgba(255,255,255,0.1)" />
            <rect x="20" y="155" width="90" height="30" rx="6" fill="rgba(255,255,255,0.1)" />
          </g>
        </svg>
      </div>
    );
  }

  if (id === "brewhaven") {
    return (
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-[#0C0A09] border border-white/10 group-hover:border-[#22D3EE]/50 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-[#22D3EE]/10 blur-xl opacity-60" />
        <svg viewBox="0 0 800 500" fill="none" className="w-full h-full">
          <rect x="0" y="0" width="800" height="36" fill="#1C1917" />
          <circle cx="20" cy="18" r="5" fill="#FF5F56" />
          <circle cx="36" cy="18" r="5" fill="#FFBD2E" />
          <circle cx="52" cy="18" r="5" fill="#27C93F" />
          <text x="340" y="22" fill="#A8A29E" fontSize="10">brewhavencafe.co</text>

          {/* Café Brand Header */}
          <text x="40" y="85" fill="#F59E0B" fontSize="22" fontWeight="bold" fontFamily="serif">
            BREW HAVEN <tspan fill="#F5F5F4" fontSize="12" fontFamily="sans-serif">ARTISANAL COFFEE</tspan>
          </text>

          {/* Product Hero */}
          <rect x="40" y="110" width="460" height="230" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(245,158,11,0.2)" />
          <text x="70" y="160" fill="#F59E0B" fontSize="11" fontWeight="bold">ORIGIN ROASTS</text>
          <text x="70" y="195" fill="#FFFFFF" fontSize="26" fontWeight="bold">Ethiopian Yirgacheffe</text>
          <text x="70" y="220" fill="#D6D3D1" fontSize="13">Notes of bergamot, jasmine &amp; wild honey.</text>
          <rect x="70" y="245" width="140" height="36" rx="10" fill="#F59E0B" />
          <text x="95" y="267" fill="#0C0A09" fontSize="12" fontWeight="bold">Order Beans ($24)</text>

          {/* Coffee Bag SVG Illustration */}
          <g transform="translate(340, 135)">
            <rect width="130" height="180" rx="12" fill="#1C1917" stroke="#F59E0B" strokeWidth="2" />
            <circle cx="65" cy="80" r="30" fill="#F59E0B" opacity="0.2" />
            <text x="45" y="85" fill="#F59E0B" fontSize="14" fontWeight="bold">☕ BREW</text>
          </g>

          {/* Menu Grid */}
          <rect x="520" y="110" width="240" height="105" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
          <text x="540" y="145" fill="#FFFFFF" fontSize="14" fontWeight="bold">Single Origin Pour Over</text>
          <text x="540" y="170" fill="#22D3EE" fontSize="16" fontWeight="bold">$6.50</text>

          <rect x="520" y="235" width="240" height="105" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
          <text x="540" y="270" fill="#FFFFFF" fontSize="14" fontWeight="bold">Velvet Oat Latte</text>
          <text x="540" y="295" fill="#22D3EE" fontSize="16" fontWeight="bold">$7.00</text>

          {/* Footer Bar */}
          <rect x="40" y="365" width="720" height="90" rx="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" />
          <text x="70" y="415" fill="#FFFFFF" fontSize="14" fontWeight="bold">Visit Our Roastery &amp; Espresso Bar</text>
        </svg>
      </div>
    );
  }

  if (id === "glowstudio") {
    return (
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-[#0F0A15] border border-white/10 group-hover:border-[#8B5CF6]/50 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/15 via-[#8B5CF6]/20 to-transparent blur-xl opacity-60" />
        <svg viewBox="0 0 800 500" fill="none" className="w-full h-full">
          <rect x="0" y="0" width="800" height="36" fill="#181124" />
          <circle cx="20" cy="18" r="5" fill="#FF5F56" />
          <circle cx="36" cy="18" r="5" fill="#FFBD2E" />
          <circle cx="52" cy="18" r="5" fill="#27C93F" />
          <text x="340" y="22" fill="#C084FC" fontSize="10">glowstudio-spa.com</text>

          <text x="40" y="85" fill="#EC4899" fontSize="24" fontWeight="bold" fontFamily="sans-serif">
            GLOW <tspan fill="#FFFFFF" fontWeight="300">STUDIO</tspan>
          </text>
          <rect x="660" y="65" width="100" height="28" rx="14" fill="linear-gradient(135deg, #EC4899, #8B5CF6)" />
          <text x="680" y="83" fill="#FFFFFF" fontSize="11" fontWeight="bold">BOOK APPOINTMENT</text>

          {/* Hero Content */}
          <rect x="40" y="110" width="490" height="230" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(236,72,153,0.3)" />
          <text x="70" y="155" fill="#EC4899" fontSize="11" fontWeight="bold" letterSpacing="1.5">LUXURY BEAUTY &amp; WELLNESS</text>
          <text x="70" y="195" fill="#FFFFFF" fontSize="26" fontWeight="bold">Rejuvenate Your Natural Aura</text>
          <text x="70" y="222" fill="#A1A1AA" fontSize="13">Bespoke skincare treatments, facial sculpting &amp; organic spa treatments.</text>
          <rect x="70" y="248" width="150" height="36" rx="10" fill="#EC4899" />
          <text x="92" y="270" fill="#FFFFFF" fontSize="12" fontWeight="bold">Explore Rituals</text>

          {/* Service Cards */}
          <rect x="550" y="110" width="210" height="105" rx="14" fill="rgba(236,72,153,0.1)" stroke="rgba(236,72,153,0.3)" />
          <text x="570" y="145" fill="#FFFFFF" fontSize="14" fontWeight="bold">HydraGlow Facial</text>
          <text x="570" y="170" fill="#EC4899" fontSize="14" fontWeight="bold">60 Min • $185</text>

          <rect x="550" y="235" width="210" height="105" rx="14" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.3)" />
          <text x="570" y="270" fill="#FFFFFF" fontSize="14" fontWeight="bold">Aromatherapy Sculpt</text>
          <text x="570" y="295" fill="#8B5CF6" fontSize="14" fontWeight="bold">90 Min • $240</text>

          {/* Customer Rating Bar */}
          <rect x="40" y="365" width="720" height="90" rx="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" />
          <text x="70" y="415" fill="#FBBF24" fontSize="16">★★★★★ <tspan fill="#FFFFFF" fontSize="14" fontFamily="sans-serif">4.98/5 Rated by 650+ Clients</tspan></text>
        </svg>
      </div>
    );
  }

  // Urban Nest Realty
  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-[#070D14] border border-white/10 group-hover:border-[#22D3EE]/50 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/20 via-transparent to-blue-600/20 blur-xl opacity-60" />
      <svg viewBox="0 0 800 500" fill="none" className="w-full h-full">
        <rect x="0" y="0" width="800" height="36" fill="#101924" />
        <circle cx="20" cy="18" r="5" fill="#FF5F56" />
        <circle cx="36" cy="18" r="5" fill="#FFBD2E" />
        <circle cx="52" cy="18" r="5" fill="#27C93F" />
        <text x="340" y="22" fill="#38BDF8" fontSize="10">urbannest-luxury.com</text>

        <text x="40" y="85" fill="#38BDF8" fontSize="24" fontWeight="bold" fontFamily="sans-serif">
          URBAN NEST <tspan fill="#FFFFFF" fontWeight="300">REALTY</tspan>
        </text>

        {/* Search Bar */}
        <rect x="360" y="65" width="400" height="32" rx="16" fill="rgba(255,255,255,0.05)" stroke="rgba(56,189,248,0.3)" />
        <text x="380" y="85" fill="#94A3B8" fontSize="11">Search Penthouse, Loft, Villa...</text>

        {/* Featured Property */}
        <rect x="40" y="115" width="480" height="230" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(56,189,248,0.2)" />
        <text x="70" y="155" fill="#38BDF8" fontSize="11" fontWeight="bold" letterSpacing="1.5">FEATURED RESIDENCE</text>
        <text x="70" y="195" fill="#FFFFFF" fontSize="24" fontWeight="bold">Skyline Penthouse IX</text>
        <text x="70" y="220" fill="#94A3B8" fontSize="13">Downtown Manhattan • 4 Beds • 3.5 Baths • 3,850 sq ft</text>
        <text x="70" y="270" fill="#38BDF8" fontSize="24" fontWeight="bold">$4,250,000</text>

        {/* Property Grid */}
        <rect x="540" y="115" width="220" height="105" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
        <text x="560" y="150" fill="#FFFFFF" fontSize="14" fontWeight="bold">Waterfront Modern Villa</text>
        <text x="560" y="175" fill="#38BDF8" fontSize="14" fontWeight="bold">$2,890,000</text>

        <rect x="540" y="240" width="220" height="105" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
        <text x="560" y="275" fill="#FFFFFF" fontSize="14" fontWeight="bold">Tribeca Architectural Loft</text>
        <text x="560" y="300" fill="#38BDF8" fontSize="14" fontWeight="bold">$1,950,000</text>

        {/* Stats */}
        <rect x="40" y="365" width="720" height="90" rx="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" />
        <text x="80" y="415" fill="#FFFFFF" fontSize="14" fontWeight="bold">$450M+ <tspan fill="#94A3B8" fontSize="12" fontWeight="normal">Property Volume Sold</tspan></text>
      </svg>
    </div>
  );
};
