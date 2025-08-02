import React from "react";

export const ProcessStepsSection = () => {
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
          {processSteps
          .slice()
          .sort((a, b) => {
            if (window.innerWidth < 1024) {
              return a.step - b.step;
            }
            return 0;
          })
          .map((step, index) => (
            <div
              key={index}
              className="relative w-full max-w-[380px] aspect-[1/1] min-w-[260px] flex-shrink-0"
            >
              {/* Background rectangle */}
              <img
                className="absolute inset-0 w-full h-full object-contain"
                alt={`Step ${step.step} background`}
                src={step.rectangleSrc}
                draggable={false}
              />

              {/* Blue icon container */}
              <div
                className={`
                  absolute flex items-center justify-center
                  bg-[#0A4FD7] rounded-2xl
                  w-[40%] h-[40%]
                  ${
                    step.iconPosition === "top-left"
                      ? "left-[2%] top-[5%]"
                      : step.iconPosition === "top-right"
                      ? "right-[2%] top-[5%]"
                      : step.iconPosition === "bottom-left"
                      ? "left-[2%] bottom-[5%]"
                      : "right-[2%] bottom-[5%]"
                  }
                `}
              >
                <img
                  className="w-[60%] h-[60%] object-contain"
                  alt={`Step ${step.step} icon`}
                  src={step.iconSrc}
                  draggable={false}
                />
              </div>

              {/* Step number and label */}
              <div
                className={`
                  absolute flex flex-col items-start
                  ${
                    step.stepPosition === "top-right"
                      ? "top-[10%] right-[10%]"
                      : step.stepPosition === "top-left"
                      ? "top-[10%] left-[10%]"
                      : step.stepPosition === "bottom-right"
                      ? "bottom-[10%] right-[10%]"
                      : "bottom-[10%] left-[10%]"
                  }
                `}
                style={{ minWidth: "0" }}
              >
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-[#0A4FD7] font-medium"
                    style={{
                      fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                      fontFamily: "Inter, Helvetica",
                    }}
                  >
                    STEP
                  </span>
                  <span
                    className="font-semibold text-[#0A4FD7] leading-none"
                    style={{
                      fontSize: "clamp(2.7rem, 7vw, 5.5rem)",
                      fontFamily: "Atkinson_Hyperlegible, Helvetica",
                      lineHeight: 1,
                    }}
                  >
                    {step.step}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div
                className={`
                  absolute
                  ${
                    step.descriptionPosition === "bottom"
                      ? "left-[10%] right-[10%] bottom-[10%]"
                      : "left-[10%] right-[10%] top-[10%]"
                  }
                `}
                style={{ minWidth: "0" }}
              >
                <h4
                  className="font-['Inter',Helvetica] font-semibold text-[#0A4FD7] mb-1 text-left"
                  style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
                  }}
                >
                  {step.title}
                </h4>
                <p
                  className="font-['Inter',Helvetica] font-medium text-[#4B5563] text-left"
                  style={{
                    fontSize: "clamp(0.75rem, 2vw, 1.05rem)",
                    lineHeight: 1.3,
                  }}
                >
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