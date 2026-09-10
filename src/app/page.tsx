"use client";

import React, { useState } from "react";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { BackgroundMesh } from "@/components/svg/BackgroundMesh";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/ui/BookingModal";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { WhyChooseMe } from "@/components/sections/WhyChooseMe";
import { Process } from "@/components/sections/Process";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <main className="relative bg-[#F8FAFD] text-slate-900 overflow-hidden min-h-screen">
      {/* Interactive Glowing Custom Cursor */}
      <CustomCursor />

      {/* Ambient Grid & Background Glow Orbs */}
      <BackgroundMesh />

      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services onOpenBooking={handleOpenBooking} />

      {/* Featured Work Section */}
      <FeaturedWork onOpenBooking={handleOpenBooking} />

      {/* Why Choose Me Section */}
      <WhyChooseMe />

      {/* Process Section */}
      <Process />

      {/* Contact CTA Section */}
      <ContactCTA onOpenBooking={handleOpenBooking} />

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Strategy Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </main>
  );
}
