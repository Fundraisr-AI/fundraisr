import React from "react";
import { DealPipelineSection } from "./sections/DealPipelineSection";
import { SharedSidebarNavigation } from "../../../components/SharedSidebarNavigation";

export const FundraiserDeal = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex min-h-screen w-full">
      <SharedSidebarNavigation />
      <div className="flex-1">
        <DealPipelineSection />
      </div>
    </div>
  );
};
