import React, { useState } from "react";
import { useLocation } from "wouter";

export const NavigationBarSection = () => {
  const [, setLocation] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "About", route: "/about" },
    { label: "Audit Now", route: "/tool" },
    { label: "Contact Us", route: "/contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full h-[60px] md:h-[81px] flex items-center justify-between px-3 md:px-[73px] py-2 md:py-[18px] bg-white rounded-b-[26px] shadow-[0_4px_4px_0_rgba(44,0,202,0.25)] z-20 border-b-4" style={{ borderColor: "rgba(44,0,202,0.4)" }}>
      {/* Logo */}
      <button
        type="button"
        className="bg-transparent border-none p-0 m-0 cursor-pointer flex items-center"
        aria-label="Go to Home"
        onClick={() => setLocation("/")}
      >
        <img
          className="w-[100px] h-[25px] md:w-[157px] md:h-[39.98px]"
          alt="Cerify Logo"
          src="/figmaAssets/vector-8.svg"
        />
      </button>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6 md:gap-[69px]">
        {navItems.map((item, index) => {
          if (item.label === "Audit Now") {
            return (
              <button
                key={index}
                type="button"
                className="bg-transparent border-none cursor-pointer text-[#0A4FD7] font-medium text-base md:text-xl [font-family:'Inter',Helvetica] hover:underline"
                onClick={() => window.open("http://cerify.iitd.ac.in", "_blank")}
              >
                {item.label}
              </button>
            );
          }
          return (
            <button
              key={index}
              type="button"
              className="bg-transparent border-none cursor-pointer text-[#0A4FD7] font-medium text-base md:text-xl [font-family:'Inter',Helvetica] hover:underline"
              onClick={() => setLocation(item.route)}
            >
              {item.label}
            </button>
          );
        })}
        {/* Sign Up Now Button */}
        <button
          type="button"
          className="ml-4 px-4 py-2 rounded-[8px] bg-[#3DFE90] text-[#000000] font-semibold text-base md:text-lg [font-family:'Inter',Helvetica] shadow hover:bg-[#24e07e] transition"
          onClick={() => setLocation("/signup")}
        >
          Sign Up Now
        </button>
      </div>

      {/* Hamburger for Mobile */}
      <div className="md:hidden flex items-center gap-4">
        {/* Sign Up Now Button (always visible on mobile, left of hamburger) */}
        <button
          type="button"
          className="px-3 py-1.5 rounded-[8px] bg-[#3DFE90] text-[#000000] font-semibold text-sm [font-family:'Inter',Helvetica] shadow hover:bg-[#24e07e] transition"
          onClick={() => setLocation("/signup")}
        >
          Sign Up Now
        </button>
        {/* Hamburger */}
        <button
          type="button"
          className="p-2"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Hamburger Icon */}
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect y="5" width="24" height="2" rx="1" fill="#0A4FD7"/>
            <rect y="11" width="24" height="2" rx="1" fill="#0A4FD7"/>
            <rect y="17" width="24" height="2" rx="1" fill="#0A4FD7"/>
          </svg>
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setMenuOpen(false)}>
            <div
              className="absolute top-0 right-0 w-4/5 max-w-xs h-full bg-white shadow-lg flex flex-col p-6 gap-4"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="self-end mb-4"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path d="M6 6l12 12M6 18L18 6" stroke="#0A4FD7" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              {navItems.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  className="text-[#0A4FD7] font-medium text-base [font-family:'Inter',Helvetica] text-left py-2"
                  onClick={() => {
                    setMenuOpen(false);
                    if (item.label === "Audit Now") {
                      window.open("http://cerify.iitd.ac.in", "_blank");
                    } else {
                      setLocation(item.route);
                    }
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};