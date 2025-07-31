import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export const UserRatingsSection = () => {
  // Testimonial data for mapping
  const testimonials = [
    {
      quote:
        "Cerify is solving the smart contract audit problem the right way — automated, precise, and practical.",
      position: "Senior Security Analyst",
      organization: "Anonymous/Web3 Org",
      organizationIsSmaller: true,
    },
    {
      quote:
        "The AI patching roadmap is a game-changer. This is what Web3 security needs.",
      position: "Ex-Certik Engineer",
      organization: "",
      organizationIsSmaller: false,
    },
    {
      quote:
        "Finally, a product that understands both compliance and security from the ground up.",
      position: "Blockchain Consultant",
      organization: "Independent/Early Advisor",
      organizationIsSmaller: true,
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-[32px] md:gap-[52px] pt-4 md:pt-6 pb-8 md:pb-12 relative px-4">
      <h2 className="font-bold text-[24px] md:text-[32px] text-center text-[#0A4FD7] [font-family:'Atkinson_Hyperlegible',Helvetica] tracking-[0] leading-normal">
        TRUSTED BY INDUSTRY EXPERTS
      </h2>

      <div className="w-screen bg-[#0A4FD7] py-8 md:py-12 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-center gap-[25px] max-w-[1400px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="w-full max-w-[430px] h-auto min-h-[270px] bg-white rounded-[26px] shadow-[4px_6px_10px_#00000059] border-none mx-auto"
            >
              <CardContent className="p-6 relative h-full">
                <div className="flex items-center gap-1 mb-4">
                  <img
                    className="w-[25px] h-[20px]"
                    alt="Quote icon"
                    src="/figmaAssets/vector.svg"
                  />
                  {/* 5 yellow stars for each testimonial */}
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="#FFD700"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>

                <p className="[font-family:'Inter',Helvetica] font-normal italic text-[#0A4FD7] text-sm md:text-base tracking-[0] leading-normal mb-6 min-h-[100px] md:min-h-[120px] mt-8 ml-4">
                  {testimonial.quote}
                </p>

                <div className="absolute bottom-10 left-10 [font-family:'Inter',Helvetica]">
                  <p className="font-medium text-[#4B5563] text-sm leading-[17px]">
                    {testimonial.position}
                  </p>
                  {testimonial.organization && (
                    <p className="font-medium text-[#0A4FD7] text-xs leading-[17px]">
                      {testimonial.organization}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
