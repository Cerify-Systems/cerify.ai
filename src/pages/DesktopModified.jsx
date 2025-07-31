import React from "react";
import { DeploySmartContractsSection } from "./sections/DeploySmartContractsSection";
import { DetectionProcessSection } from "./sections/DetectionProcessSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { NeedForCerifySection } from "./sections/NeedForCerifySection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { ProcessStepsSection } from "./sections/ProcessStepsSection";
import { SiteFooterSection } from "./sections/SiteFooterSection";
import { UserRatingsSection } from "./sections/UserRatingsSection";

export const DesktopModified = () => {
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <div className="bg-white w-screen relative overflow-x-hidden">
        <NavigationBarSection />
        <HeroBannerSection />
        <NeedForCerifySection />
        <ProcessStepsSection />
        <DetectionProcessSection />
        <UserRatingsSection />
        <DeploySmartContractsSection />
        <SiteFooterSection />
      </div>
    </div>
  );
};
