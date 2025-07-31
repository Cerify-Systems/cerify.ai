import React from "react";

export const HeroBannerSection = () => {
  return (
    <section
      className="relative w-full min-w-0 flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "569.5px",
        height: "569.5px",
        maxHeight: "569.5px",
        width: "100vw",
        zIndex: 0,
        marginTop: 0,
      }}
    >
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/figmaAssets/herobg.png')",
          width: "100vw",
          height: "569.5px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 md:px-0">
        <h1 className="font-bold text-white text-[1.5rem] md:text-[3rem] lg:text-[3.5rem] text-center leading-tight md:leading-[4.5rem] [font-family:'Atkinson_Hyperlegible',Helvetica] mt-[100px] md:mt-[120px]">
          Deploy Smart Contracts with Confidence
        </h1>
        <div className="mt-8 md:mt-10 text-center w-full max-w-[1000px]">
          <h2 className="font-semibold text-white text-lg md:text-2xl [font-family:'Inter',Helvetica] mb-4">
            Cerify is AI-powered trust layer for Web3
          </h2>
          <p className="font-normal text-white text-base md:text-lg [font-family:'Inter',Helvetica]">
            We don&apos;t just find bugs, we locate them precisely, patch them, and certify your smart contract in under <span className="font-bold">10 minutes.</span>
          </p>
        </div>
        <button
          type="button"
          className="mt-10 md:mt-14 px-2 md:px-6 py-3 md:py-4 rounded-[12px] md:rounded-[16px] bg-[#3DFE90] text-[#000000] font-semibold text-lg md:text-xl [font-family:'Inter',Helvetica] shadow hover:bg-[#24e07e] transition"
        >
          Get Beta Access
        </button>
      </div>
    </section>
  );
};