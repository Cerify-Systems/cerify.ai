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
        <h2 className="font-bold text-[#0A4FD7] text-[64px] text-center [font-family:'Atkinson_Hyperlegible',Helvetica]">
          Ready to Deploy Fearlessly?
        </h2>

        {/* Subheading */}
        <p className="text-[20px] text-center [font-family:'Inter',Helvetica]">
          <span className="text-[#4B5563]">
            Beta access is limited — reserve your spot{" "}
          </span>
          <span className="font-bold text-[#4B5563]">TODAY</span>
        </p>

        {/* Benefits card */}
        <Card className="mt-8 w-[700px] bg-white rounded-[50px] border-2 border-solid border-[#0A4FD7]">
          <CardContent className="flex flex-col items-center gap-[31px] px-[40px] py-3.5">
            <h3 className="w-[266px] [font-family:'Inter',Helvetica] font-bold text-[#0A4FD7] text-2xl mt-12">
              Beta Program Benefits
            </h3>

            <div className="w-[416px] [font-family:'Inter',Helvetica] font-medium text-[#4B5563] text-base text-center mb-12">
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
        <Button className="mt-16 mb-8 px-[47px] py-8 bg-[#3DFE90] rounded-[12px] hover:bg-[#3dfe90]/90">
          <span className="font-medium text-black text-[20px] [font-family:'Inter',Helvetica]">
            Get Beta Access
          </span>
        </Button>
      </div>
    </section>
  );
};
