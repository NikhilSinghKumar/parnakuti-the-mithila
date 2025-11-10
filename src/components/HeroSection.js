"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/parnakuti-front.png')",
        }}
      ></div>

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center text-white gap-24"
      >
        <Link
          href="/darbhanga"
          className="px-8 py-3 mt-[490px] bg-primary text-secondary font-semibold rounded-full hover:bg-secondary hover:text-primary transition-all duration-300"
        >
          Explore Now
        </Link>
        <div className="w-[1px] mb-4 h-10 bg-white mx-auto animate-bounce"></div>
      </motion.div>
    </section>
  );
}
