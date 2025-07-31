import React from "react";

export const CerifySolutionSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-[2.5rem] md:py-[4rem] bg-white">
      {/* Heading */}
      <h2 className="font-bold text-[#0A4FD7] text-[2rem] md:text-[2.5rem] text-center leading-tight [font-family:'Atkinson_Hyperlegible',Helvetica] mb-2">
        THE CERIFY SOLUTION
      </h2>
      <p className="font-semibold text-[#4B5563] text-base md:text-lg text-center mb-8 [font-family:'Inter',Helvetica]">
        Key Features
      </p>

      {/* Features Card */}
      <div
        className="w-full max-w-[1400px] bg-[#F8F9FB] rounded-2xl flex flex-col items-center px-4 py-6 md:px-10 md:py-10"
        style={{
            boxShadow: "0 12px 24px -8px rgba(0,0,0,0.18)"
        }}
        >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-16 gap-x-8 md:gap-x-12 w-full">
          {/* Row 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#0A4FD7] rounded-xl p-4 mb-4 flex items-center justify-center">
              <img src="/figmaAssets/icon-detection.svg" alt="Detection" className="w-12 h-12" />
            </div>
            <h3 className="font-bold text-[#0A4FD7] text-lg md:text-xl mb-2 [font-family:'Inter',Helvetica]">
              14-Point Detection Engine
            </h3>
            <p className="text-[#374151] text-sm md:text-base font-medium [font-family:'Inter',Helvetica] mx-auto" style={{ maxWidth: "80%" }}>
              Tracks industry-standard vulnerabilities with line-by-line precision — no generic flags, just clear location-based risk alerts
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#0A4FD7] rounded-xl p-4 mb-4 flex items-center justify-center">
              <img src="/figmaAssets/icon-patch.svg" alt="Auto-Patching" className="w-12 h-12" />
            </div>
            <h3 className="font-bold text-[#0A4FD7] text-lg md:text-xl mb-2 [font-family:'Inter',Helvetica]">
              Auto-Patching (Coming Q4 2025)
            </h3>
            <p className="text-[#374151] text-sm md:text-base font-medium [font-family:'Inter',Helvetica] mx-auto" style={{ maxWidth: "80%" }}>
              Cerify&apos;s AI will suggest and deploy secure fixes, reducing remediation time from days to minutes.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#0A4FD7] rounded-xl p-4 mb-4 flex items-center justify-center">
              <img src="/figmaAssets/icon-compliance.svg" alt="Compliance" className="w-12 h-12" />
            </div>
            <h3 className="font-bold text-[#0A4FD7] text-lg md:text-xl mb-2 [font-family:'Inter',Helvetica]">
              Compliance-Ready Architecture
            </h3>
            <p className="text-[#374151] text-sm md:text-base font-medium [font-family:'Inter',Helvetica] mx-auto" style={{ maxWidth: "80%" }}>
              Aligned with MiCA, FIT21, CFTC, and RBI sandbox standards for institutional adoption.
            </p>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#0A4FD7] rounded-xl p-4 mb-4 flex items-center justify-center">
              <img src="/figmaAssets/icon-badge1.svg" alt="Certification Badge" className="w-12 h-12" />
            </div>
            <h3 className="font-bold text-[#0A4FD7] text-lg md:text-xl mb-2 [font-family:'Inter',Helvetica]">
              Instant Certification Badge
            </h3>
            <p className="text-[#374151] text-sm md:text-base font-medium [font-family:'Inter',Helvetica] mx-auto" style={{ maxWidth: "80%" }}>
              Public proof that your smart contract meets top-tier security and compliance benchmarks
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#0A4FD7] rounded-xl p-4 mb-4 flex items-center justify-center">
              <img src="/figmaAssets/icon-multichain.svg" alt="Multi-Chain" className="w-12 h-12" />
            </div>
            <h3 className="font-bold text-[#0A4FD7] text-lg md:text-xl mb-2 [font-family:'Inter',Helvetica]">
              Multi-Chain Support
            </h3>
            <p className="text-[#374151] text-sm md:text-base font-medium [font-family:'Inter',Helvetica] mx-auto" style={{ maxWidth: "80%" }}>
              Ethereum, Polygon, Optimism, Base, Corda (Kotlin), and more chains coming soon
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#0A4FD7] rounded-xl p-4 mb-4 flex items-center justify-center">
              <img src="/figmaAssets/icon-monitor.svg" alt="Monitoring" className="w-12 h-12" />
            </div>
            <h3 className="font-bold text-[#0A4FD7] text-lg md:text-xl mb-2 [font-family:'Inter',Helvetica]">
              Continuous Monitoring
            </h3>
            <p className="text-[#374151] text-sm md:text-base font-medium [font-family:'Inter',Helvetica] mx-auto" style={{ maxWidth: "80%" }}>
              Unlike one-time audits, Cerify provides ongoing security verification as your code evolves
            </p>
          </div>
        </div>
      </div>

        {/* CTA Button & Note */}
        <div className="w-full flex flex-col items-center justify-center mt-8">
        <button
            className="bg-[#3DFE90] text-[#111] font-semibold text-lg md:text-xl rounded-xl px-8 py-4 md:px-16 md:py-5 shadow transition hover:brightness-95 focus:outline-none [font-family:'Inter',Helvetica]"
            style={{ minWidth: "min(320px, 90vw)", maxWidth: "420px" }}
        >
            Schedule A Demo Now
        </button>
        <span className="text-[#0A4FD7] font-semibold text-base md:text-lg mt-4 [font-family:'Inter',Helvetica] text-center">
            Beta access is limited
        </span>
        </div>
    </section>
  );
};