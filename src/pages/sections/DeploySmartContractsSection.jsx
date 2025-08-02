import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const DeploySmartContractsSection = () => {
  // Benefits list data for mapping
  const betaBenefits = [
    "Free audit credits for first 100 users",
    "Priority access to auto-patching feature",
    "Direct feedback line to our engineering team",
    "Grandfathered pricing when we launch commercially",
    "Certificate of participation",
  ];

  return (
    <section className="relative w-full pt-4 pb-4 flex flex-col items-center">
      {/* Background glow effect */}
      <div className="absolute w-full h-[381px] top-1/2 left-0 -translate-y-1/2">
        <div className="w-full h-full bg-[#aa96f1] blur-[300px] opacity-50" />
      </div>

      {/* Main content container */}
      <div className="relative w-full max-w-[1440px] flex flex-col items-center px-fluid">
        {/* Heading */}
        <h2 className="font-bold text-[#0A4FD7] text-[2rem] md:text-[3rem] lg:text-[64px] text-center [font-family:'Atkinson_Hyperlegible',Helvetica]">
          Ready to Deploy Fearlessly?
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg lg:text-[20px] text-center [font-family:'Inter',Helvetica] mt-2">
          <span className="text-[#4B5563]">
            Beta access is limited — reserve your spot{" "}
          </span>
          <span className="font-bold text-[#4B5563]">TODAY</span>
        </p>

        {/* Benefits card */}
        <Card className="mt-8 w-full max-w-[900px] bg-white rounded-[30px] md:rounded-[50px] border-2 border-solid border-[#0A4FD7] px-fluid">
          <CardContent className="flex flex-col items-center gap-6 md:gap-[31px] px-4 md:px-[40px] py-4 md:py-7">
            <h3 className="w-full max-w-[266px] [font-family:'Inter',Helvetica] font-bold text-[#0A4FD7] text-lg md:text-2xl mt-6 md:mt-12 text-center">
              Beta Program Benefits
            </h3>

            <div className="w-full max-w-[700px] [font-family:'Inter',Helvetica] font-medium text-[#4B5563] text-sm md:text-base text-center mb-8 md:mb-12 break-words md:break-normal">
              {betaBenefits.map((benefit, index) => (
                <React.Fragment key={index}>
                  {benefit}
                  {index < betaBenefits.length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Button */}
        <Button className="mt-10 md:mt-16 mb-6 md:mb-8 px-8 md:px-[47px] py-4 md:py-8 bg-[#3DFE90] rounded-[10px] md:rounded-[12px] hover:bg-[#3dfe90]/90">
          <span className="font-medium text-black text-base md:text-[20px] [font-family:'Inter',Helvetica]">
            Get Beta Access
          </span>
        </Button>
      </div>
    </section>
  );
};
