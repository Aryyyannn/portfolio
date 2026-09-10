import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aryan Studio — Premium Web Designer & Digital Creator",
  description: "Modern, high-converting mobile-first websites for growing businesses, startups, and luxury brands. Crafted with Next.js, Framer Motion, and high-end UI/UX aesthetics.",
  keywords: ["Web Designer", "Aryan Studio", "Freelance Web Designer", "UI/UX Designer", "Next.js Portfolio", "Gen-Z Designer", "Conversion Optimization"],
  authors: [{ name: "Aryan Studio" }],
  openGraph: {
    title: "Aryan Studio — Modern Websites for Growing Businesses",
    description: "I create premium, mobile-first websites that help businesses build trust, attract customers, and stand out online.",
    type: "website",
    locale: "en_US",
    siteName: "Aryan Studio Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Studio — Premium Web Designer",
    description: "Crafting digital experiences, not just websites.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} light scroll-smooth`}
    >
      <body className="bg-[#F8FAFD] text-slate-900 selection:bg-[#8B5CF6]/25 selection:text-[#7C3AED] font-sans antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
