import React from "react";
import { CampaignCreationSection } from "./sections/CampaignCreationSection";
import { CampaignOverviewSection } from "./sections/CampaignOverviewSection";
import { NavigationSidebarSection } from "./sections/NavigationSidebarSection";

export const OutreachCreate = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] overflow-x-hidden w-full min-w-[1440px] min-h-[1024px] relative">
      <CampaignOverviewSection />
      <NavigationSidebarSection />
      <div className="absolute top-0 left-0 w-[1440px] h-[1024px] bg-[#0a0a0a99] backdrop-blur-[3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3px)_brightness(100%)]" />
      <CampaignCreationSection />
    </div>
  );
};
