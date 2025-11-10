"use client";
import { Phone, Hotel, Coffee, ParkingSquare, Clock } from "lucide-react";
import { Poppins, Playfair_Display, Barlow_Condensed } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

import Image from "next/image";

export default function DarbhangaPage() {
  const features = [
    { icon: <Hotel className="w-6 h-6" />, label: "Hotel" },
    { icon: <Coffee className="w-6 h-6" />, label: "Breakfast" },
    { icon: <ParkingSquare className="w-6 h-6" />, label: "Ample Parking" },
    { icon: <Clock className="w-6 h-6" />, label: "24*7 Service" },
  ];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/parnakuti-front.png')" }}
    >
      {/* ================= NAVBAR SECTION ================= */}
      <div className="w-full flex justify-center">
        <header className="flex flex-col text-white w-[100%] max-w-7xl">
          {/* --- Top Nav --- */}
          <div className="flex justify-between items-center py-3 text-sm">
            {/* Left: Phone Number */}
            <div className="flex items-center gap-2 text-white">
              <Phone className="w-4 h-4" />
              <span className="text-lg ">+91 8130026761/ 62/ 63</span>
            </div>

            {/* Right: Reservations / Gallery / Contact */}
            <div className={`flex items-center ${poppins.className}`}>
              {/* Vertical divider */}
              <div className="h-10 mt-5 w-[1px] bg-[#c28e47]/50 mx-6" />

              <button className="bg-stone-800 text-white text-lg px-6 py-2 uppercase tracking-wide font-medium hover:bg-[#FAB000] hover:text-black transition">
                Reservations
              </button>

              <a
                href="#"
                className="ml-6 text-xl hover:text-[#FAB000] transition"
              >
                Gallery
              </a>
              <a
                href="#"
                className="ml-6 text-xl hover:text-[#FAB000] transition"
              >
                Contact us
              </a>
            </div>
          </div>

          {/* --- Orange Separator Line (Controlled Width) --- */}
          <div className="h-[1px] mt-[-11.5] bg-[#c28e47]/40 w-full my-2"></div>

          {/* --- Bottom Nav --- */}
          <nav
            className={`${barlow.className} flex justify-end items-center gap-10 mt-3 py-3 text-xl font-[600] text-white tracking-wide pr-10`}
          >
            <a
              href="#"
              className="hover:underline underline-offset-16 decoration-[#FAB000] transition"
            >
              About us
            </a>
            <a
              href="#"
              className="hover:underline underline-offset-16 decoration-[#FAB000] transition"
            >
              Weddings & Occasions
            </a>
            <a
              href="#"
              className="hover:underline underline-offset-16 decoration-[#FAB000] transition"
            >
              Our Rooms
            </a>
            <a
              href="#"
              className="hover:underline underline-offset-16 decoration-[#FAB000] transition"
            >
              Banquets & Venue
            </a>
            <a
              href="#"
              className="hover:underline underline-offset-16 decoration-[#FAB000] transition"
            >
              Dining
            </a>
          </nav>
        </header>
      </div>

      {/* ================= LOGO & HEADING ================= */}
      {/* <div className="relative w-24 h-24 mb-4">
        <Image
          src="/parnakuti--gold-logo.png"
          alt="parnakuti-the-mithila"
          fill
          className="object-contain"
        />
      </div> */}

      {/* ================= BOTTOM ICONS ================= */}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <div className="relative flex items-center justify-center gap-20 w-[100%]">
          {/* Main Connecting Line */}
          <div className="absolute top-1/2 mt-[-13.5] left-0 right-0 h-[1px] bg-[#5ab6b8]/40 z-0" />

          {/* Feature icons */}
          {features.map((item, i) => (
            <div key={i} className="relative flex flex-col items-center z-10">
              <div className="relative flex items-center justify-center w-14 h-14 bg-[#032828] border-[2.5px] border-white rounded-full transition-all hover:bg-[#FAB000] hover:border-[#FAB000] cursor-pointer">
                {/* left line */}
                {i >= 0 && (
                  <div className="absolute left-[-16px] top-1/2 w-[15px] h-[3px] bg-[#5ab6b8] hover:bg-[#FAB000] -translate-y-1/2" />
                )}
                {/* right line */}
                {i <= features.length - 1 && (
                  <div className="absolute right-[-16px] top-1/2 w-[15px] h-[3px] bg-[#5ab6b8] hover:bg-[#FAB000] -translate-y-1/2" />
                )}

                {item.icon}
              </div>

              <span className="text-sm mt-2 text-white uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
