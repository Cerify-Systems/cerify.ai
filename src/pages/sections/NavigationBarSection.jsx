import React from "react";
import { useLocation } from "wouter";

export const NavigationBarSection = () => {
  const [, setLocation] = useLocation();

  const navItems = [
    { label: "About", route: "/about" },
    { label: "Tool", route: "/tool" },
    { label: "Contact Us", route: "/contact" },
  ];

  return (
    <nav className="flex w-full h-[81px] items-center justify-between px-4 md:px-[73px] py-[18px] bg-white rounded-b-[26px] shadow-[0_4px_4px_0_rgba(44,0,202,0.25)] relative z-20 border-b-4" style={{ borderColor: "rgba(44,0,202,0.4)" }}>
      {/* Logo */}
      <button
        type="button"
        className="bg-transparent border-none p-0 m-0 cursor-pointer flex items-center"
        aria-label="Go to Home"
        onClick={() => setLocation("/")}
      >
        <img
          className="relative w-[120px] md:w-[157px] h-[30px] md:h-[39.98px]"
          alt="Cerify Logo"
          src="/figmaAssets/vector-8.svg"
        />
      </button>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 md:gap-[69px]">
        {navItems.map((item, index) => {
          if (item.label === "Tool") {
            return (
              <button
                key={index}
                type="button"
                className="bg-transparent border-none cursor-pointer text-[#0A4FD7] font-medium text-lg md:text-xl [font-family:'Inter',Helvetica] hover:underline"
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
              className="bg-transparent border-none cursor-pointer text-[#0A4FD7] font-medium text-lg md:text-xl [font-family:'Inter',Helvetica] hover:underline"
              onClick={() => setLocation(item.route)}
            >
              {item.label}
            </button>
          );
        })}

        {/* Sign Up Now Button */}
        <button
          type="button"
          className="ml-4 px-5 py-2 rounded-[8px] bg-[#3DFE90] text-[#000000] font-semibold text-lg [font-family:'Inter',Helvetica] shadow hover:bg-[#24e07e] transition"
          onClick={() => setLocation("/signup")}
        >
          Sign Up Now
        </button>
      </div>
    </nav>
  );
};