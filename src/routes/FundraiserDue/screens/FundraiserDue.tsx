import React from "react";
import { NavigationSidebarSection } from "./sections/NavigationSidebarSection";
import { ProspectListSection } from "./sections/ProspectListSection";

export const FundraiserDue = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex w-full min-h-screen overflow-hidden">
      <NavigationSidebarSection />
      <ProspectListSection />
    </div>
  );
};
