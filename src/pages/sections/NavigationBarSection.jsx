import React from "react";
import { useLocation } from "wouter";

export const NavigationBarSection = () => {
  const [, setLocation] = useLocation();

  // Merged navigation items
  const navItems = [
    { label: "About", width: "w-[58px]", route: "/about" },
    { label: "Tool", width: "w-11", route: "/tool" },
    // { label: "Blog", width: "w-11", route: "/blog" },
    { label: "Help", width: "w-11", route: "/help" },
    { label: "Contact", width: "w-[77px]", route: "/contact" },
  ];

  return (
    <nav className="flex w-full h-[81px] items-end justify-between px-4 md:px-[73px] py-[18px] bg-white rounded-[0px_0px_26px_26px] shadow-[0px_4px_4px_#2c00ca40] relative z-20">
      <button
        type="button"
        className="bg-transparent border-none p-0 m-0 cursor-pointer"
        aria-label="Go to Home"
        onClick={() => setLocation("/")}
      >
        <img
          className="relative w-[120px] md:w-[157px] h-[30px] md:h-[39.98px]"
          alt="Logo"
          src="/figmaAssets/vector-8.svg"
        />
      </button>

      <div className="inline-flex items-center gap-4 md:gap-[69px] relative flex-[0_0_auto]">
        {navItems.map((item, index) => {
          if (item.label === "Tool") {
            return (
              <button
                key={index}
                type="button"
                className={`relative h-[29px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#2c00ca] text-lg md:text-xl tracking-[0] leading-[normal] whitespace-nowrap bg-transparent border-none cursor-pointer hover:underline ${item.width}`}
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
              className={`relative h-[29px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#2c00ca] text-lg md:text-xl tracking-[0] leading-[normal] whitespace-nowrap bg-transparent border-none cursor-pointer hover:underline ${item.width}`}
              onClick={() => setLocation(item.route)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};