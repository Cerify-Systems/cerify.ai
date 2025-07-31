import React from "react";

export const SiteFooterSection = () => {
  const socialLinks = [
    { name: "LinkedIn", icon: "/figmaAssets/linkedin.svg" },
    { name: "Twitter", icon: "/figmaAssets/vector-10.svg" },
    { name: "Telegram", icon: "/figmaAssets/telegram.svg" },
  ];

  const auditLinks = [
    "Instant Audit",
    "Login",
    "Sign Up",
  ];
  const companyLinks = [
    "About",
    "Careers",
    "Blog",
    "Contact",
  ];
  const legalLinks = [
    "Disclaimer",
    "Privacy Policy",
    "Cookie Policy",
    "Terms and Conditions",
  ];

  return (
    <footer className="w-full bg-[#0A4FD7] rounded-t-[30px] overflow-hidden shadow-[0px_-10px_20px_4px_#00000033] pt-10 md:pt-20 pb-24 md:pb-48 px-4 md:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
        {/* Left: Logo, tagline, socials */}
        <div className="flex flex-col items-center md:items-start flex-1">
          <img
            className="w-[240px] md:w-[340px] h-[62px] md:h-[110px] mb-4"
            alt="Cerify Logo"
            src="/figmaAssets/vector-5.svg"
          />
          <p className="text-white text-base md:text-medium [font-family:'Inter',Helvetica] mb-6 text-center md:text-left max-w-[500px]">
            The First AI-Powered Smart Contract Verification Engine
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((link, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={link.name}
                className="hover:opacity-80 transition-opacity bg-transparent border-none p-0 cursor-pointer"
                onClick={() => { /* TODO: Add social link logic here */ }}
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-[23px] h-[23px]"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Navigation columns */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 w-full md:w-auto justify-between mt-12 md:mt-0">
          {/* Audit */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold text-lg md:text-xl mb-4 [font-family:'Inter',Helvetica]">Audit</h3>
            <div className="flex flex-col gap-3">
              {auditLinks.map((name, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="text-white text-base [font-family:'Inter',Helvetica] hover:underline text-center md:text-left bg-transparent border-none p-0 cursor-pointer"
                  aria-label={name}
                  onClick={() => { /* TODO: Add navigation logic here */ }}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
          {/* Company */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold text-lg md:text-xl mb-4 [font-family:'Inter',Helvetica]">Company</h3>
            <div className="flex flex-col gap-3">
              {companyLinks.map((name, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="text-white text-base [font-family:'Inter',Helvetica] hover:underline text-center md:text-left bg-transparent border-none p-0 cursor-pointer"
                  aria-label={name}
                  onClick={() => { /* TODO: Add navigation logic here */ }}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
          {/* Legal */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold text-lg md:text-xl mb-4 [font-family:'Inter',Helvetica]">Legal</h3>
            <div className="flex flex-col gap-3">
              {legalLinks.map((name, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="text-white text-base [font-family:'Inter',Helvetica] hover:underline text-center md:text-left bg-transparent border-none p-0 cursor-pointer"
                  aria-label={name}
                  onClick={() => { /* TODO: Add navigation or modal logic here */ }}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};