import React from "react";
import { DealPipelineSection } from "./sections/DealPipelineSection";
import { NavigationSidebarSection } from "./sections/NavigationSidebarSection";

export const FundraiserDeal = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex min-h-screen w-full">
      <NavigationSidebarSection />
      <div className="flex-1">
        <DealPipelineSection />
      </div>
    </div>
  );
};
