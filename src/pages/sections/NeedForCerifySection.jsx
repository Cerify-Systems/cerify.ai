import React from "react";

export const NeedForCerifySection = () => {
  return (
    <section
      className="relative w-screen flex flex-col items-center justify-center bg-white"
    >
      {/* Heading */}
      <h2 className="font-bold text-[#0A4FD7] text-[2rem] md:text-[2.5rem] text-center leading-tight [font-family:'Atkinson_Hyperlegible',Helvetica] mt-[60px] md:mt-[80px] px-fluid">
        THE NEED FOR CERIFY
      </h2>
      <p className="font-semibold text-[#6B7280] text-lg md:text-xl text-center mt-2 mb-10 [font-family:'Inter',Helvetica] px-fluid">
        Smart Contract Vulnerabilities are Crushing Web3
      </p>

      {/* Circles */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-28 w-full px-fluid mt-2 md:mt-6 mb-6 md:mb-16">
        {/* Circle 1 */}
        <div className="relative flex flex-col items-center justify-center">
          <img
            src="/figmaAssets/circle.png"
            alt="$7.9B"
            className="w-[200px] md:w-[320px] h-[200px] md:h-[320px] object-contain"
          />
          <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full pointer-events-none">
            <span className="font-semibold text-[#2C00CA] text-[2rem] md:text-[4rem] [font-family:'Inter',Helvetica] mt-[5px] md:mt-[20px]">$7.9B</span>
            <span className="font-semibold text-[#2C00CA] text-xs md:text-base text-center mt-2 [font-family:'Inter',Helvetica]">
              Lost to smart contract<br />hacks since 2021.
            </span>
          </div>
        </div>
        {/* Circle 2 */}
        <div className="relative flex flex-col items-center justify-center">
          <img
            src="/figmaAssets/circle.png"
            alt="83%"
            className="w-[200px] md:w-[320px] h-[200px] md:h-[320px] object-contain"
          />
          <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full pointer-events-none">
            <span className="font-semibold text-[#2C00CA] text-[2rem] md:text-[4rem] [font-family:'Inter',Helvetica] mt-[5px] md:mt-[20px]">83%</span>
            <span className="font-semibold text-[#2C00CA] text-xs md:text-base text-center mt-2 [font-family:'Inter',Helvetica]">
              of smart contracts contain at<br />least one critical or high-<br />severity vulnerability
            </span>
          </div>
        </div>
        {/* Circle 3 */}
        <div className="relative flex flex-col items-center justify-center">
          <img
            src="/figmaAssets/circle.png"
            alt=">60%"
            className="w-[200px] md:w-[320px] h-[200px] md:h-[320px] object-contain"
          />
          <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full pointer-events-none">
            <span className="font-semibold text-[#2C00CA] text-[2rem] md:text-[4rem] [font-family:'Inter',Helvetica] mt-[5px] md:mt-[20px]">&gt;60%</span>
            <span className="font-semibold text-[#2C00CA] text-xs md:text-base text-center mt-2 [font-family:'Inter',Helvetica]">
              of hacks could have been<br />prevented with better<br />auditing and patching tools
            </span>
          </div>
        </div>
      </div>

      {/* Cerify Features Section */}
      <div className="flex flex-col md:flex-row w-full max-w-[1400px] mx-auto px-fluid 2xl:px-0 gap-8 md:gap-12">
      {/* Left Text */}
      <div className="flex-1 flex items-start justify-center mb-8 md:mb-0">
        <p className="text-[1.1rem] md:text-[1.25rem] leading-snug [font-family:'Inter',Helvetica]">
          <span className="font-bold text-[2rem] text-[#0A4FD7]">Cerify</span>
          <span className="text-[#4B5563] font-medium"> is the first AI-Powered Smart Contract Verification Engine from 4-8 week bottleneck to 10-minute automated security.</span>
        </p>
      </div>
      <div className="hidden md:block w-8"></div>
      {/* Right Features */}
      <div className="flex-[1.5] flex flex-col gap-6">
        {/* Feature 1 */}
        <div className="flex items-center bg-[#0A4FD7] rounded-xl py-3 px-4 md:py-5 md:px-10">
          <img src="/figmaAssets/icon-analyze.svg" alt="Analyze" className="w-7 h-7 md:w-8 md:h-8 mr-4" />
          <span className="text-[#2cff92] text-base md:text-lg font-medium [font-family:'Inter',Helvetica]">
            Analyzes your code against vulnerabilities
          </span>
        </div>
        {/* Feature 2 */}
        <div className="flex items-center bg-[#0A4FD7] rounded-xl py-3 px-4 md:py-5 md:px-10">
          <img src="/figmaAssets/icon-bug.svg" alt="Bug" className="w-7 h-7 md:w-8 md:h-8 mr-4" />
          <span className="text-[#2cff92] text-base md:text-lg font-medium [font-family:'Inter',Helvetica]">
            Detects real bugs — not just noise in less than 5 minutes
          </span>
        </div>
        {/* Feature 3 */}
        <div className="flex items-center bg-[#0A4FD7] rounded-xl py-3 px-4 md:py-5 md:px-10">
          <img src="/figmaAssets/icon-pinpoint.svg" alt="Pinpoint" className="w-7 h-7 md:w-8 md:h-8 mr-4" />
          <span className="text-[#2cff92] text-base md:text-lg font-medium [font-family:'Inter',Helvetica]">
            Pinpoints them line-by-line
          </span>
        </div>
        {/* Feature 4 */}
        <div className="flex items-center bg-[#0A4FD7] rounded-xl py-3 px-4 md:py-5 md:px-10">
          <img src="/figmaAssets/icon-badge.svg" alt="Badge" className="w-7 h-7 md:w-8 md:h-8 mr-4" />
          <span className="text-[#2cff92] text-base md:text-lg font-medium [font-family:'Inter',Helvetica]">
            Issues a compliance-aligned certification badge
          </span>
        </div>
      </div>
    </div>
    </section>
  );
};