import React from "react";

export const ProcessStepsSection = () => {
  // Define the process steps data matching the exact image layout
  const processSteps = [
    {
      step: 1,
      title: "Upload",
      description:
        "Submit your smart contract - whether it's Solidity, Vyper, or Kotlin-based",
      iconSrc: "/figmaAssets/vector-9.svg",
      rectangleSrc: "/figmaAssets/rectangle-1.svg",
      iconPosition: "top-left",
      stepPosition: "top-right",
      descriptionPosition: "bottom",
    },
    {
      step: 2,
      title: "Detect",
      description:
        "Cerify's symbolic engine scans for 14 core vulnerabilities and currently flags 7 of them with detailed location-based insights",
      iconSrc: "/figmaAssets/vector-12.svg",
      rectangleSrc: "/figmaAssets/rectangle-2.svg",
      iconPosition: "top-right",
      stepPosition: "top-left",
      descriptionPosition: "bottom",
    },
    {
      step: 4,
      title: "Certify",
      description:
        "Each verified contract earns the Cerify Trust Badge — a public, verifiable certificate tied to security and regulatory benchmarks",
      iconSrc: "/figmaAssets/vector-11.svg",
      rectangleSrc: "/figmaAssets/rectangle-3.svg",
      iconPosition: "bottom-left",
      stepPosition: "bottom-right",
      descriptionPosition: "top",
    },
    {
      step: 3,
      title: "Patch",
      description:
        "AI-generated secure suggestions will auto-remediate common flaws — reducing development time",
      iconSrc: "/figmaAssets/vector-6.svg",
      rectangleSrc: "/figmaAssets/rectangle-4.svg",
      iconPosition: "bottom-right",
      stepPosition: "bottom-left",
      descriptionPosition: "top",
    },
  ];

  return (
    <section className="relative w-full md:py-4 px-fluid">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-['Atkinson_Hyperlegible',Helvetica] font-bold text-[#0A4FD7] text-[24px] md:text-[32px] tracking-[0] leading-normal mb-4 text-center">
          FROM UPLOAD TO CERTIFICATION IN MINUTES
        </h2>
        <h3 className="font-['Inter',Helvetica] font-semibold text-[#4B5563] text-lg md:text-xl tracking-[0] leading-normal mb-12 text-center">
          How Does It Work ?
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative w-full max-w-[380px] h-[380px]"
            >
              {/* Background rectangle */}
              <img
                className="absolute inset-0 w-full h-full object-contain"
                alt={`Step ${step.step} background`}
                src={step.rectangleSrc}
              />

              {/* Purple icon container */}
              <div className={`absolute w-32 h-32 lg:w-36 lg:h-36 bg-[#0A4FD7] rounded-2xl flex items-center justify-center ${
                step.iconPosition === 'top-left' ? 'top-0 left-0 lg:top-4 lg:left-0' :
                step.iconPosition === 'top-right' ? 'top-0 right-0 lg:top-4 lg:right-0' :
                step.iconPosition === 'bottom-left' ? 'bottom-0 left-0 lg:bottom-4 lg:left-0' :
                'bottom-0 right-0 lg:bottom-4 lg:right-0'
              }`}>
                <img
                  className="w-16 h-16 lg:w-24 lg:h-24 object-contain"
                  alt={`Step ${step.step} icon`}
                  src={step.iconSrc}
                />
              </div>

              {/* Step number and label */}
              <div className={`absolute ${
                step.stepPosition === 'top-right' ? 'top-12 right-20 lg:top-4 lg:right-20' :
                step.stepPosition === 'top-left' ? 'top-12 left-12 lg:top-4 lg:left-8' :
                step.stepPosition === 'bottom-right' ? 'bottom-12 right-12 lg:bottom-8 lg:right-16' :
                'bottom-12 left-12 lg:bottom-8 lg:left-8'
              } overflow-hidden`}>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm lg:text-base font-medium text-[#0A4FD7]">STEP</span>
                  <span className="font-semibold text-[#0A4FD7] leading-none"
                    style={{
                      fontSize: 'clamp(5rem, 12vw, 9rem)'
                    }}
                  >
                    {step.step}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className={`absolute px-0 lg:px-0 ${
                step.descriptionPosition === 'bottom'
                  ? (step.step === 2
                      ? 'bottom-16 left-8 right-8 lg:bottom-12 lg:left-8 lg:right-12'
                      : 'bottom-8 left-8 right-8 lg:bottom-24 lg:left-8 lg:right-12')
                  : 'top-8 left-8 right-8 lg:top-8 lg:left-8 lg:right-12'
              } overflow-hidden`}>
                <h4 className="font-['Inter',Helvetica] font-semibold text-[#0A4FD7] text-sm lg:text-base mb-1 lg:mb-2" style={{
                  fontSize: 'clamp(1rem, 4vw, 1.5rem)'
                }}>
                  {step.title}
                </h4>
                <p className="font-['Inter',Helvetica] font-medium text-[#4B5563] text-xs lg:text-sm leading-tight lg:leading-relaxed" style={{
                  fontSize: 'clamp(0.5rem, 2.2vw, 1rem)'
                }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
