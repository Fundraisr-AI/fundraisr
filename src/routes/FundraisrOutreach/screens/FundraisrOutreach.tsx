import React from "react";
import { DashboardSection } from "./sections/DashboardSection";
import { NavigationSidebarSection } from "./sections/NavigationSidebarSection";

export const FundraisrOutreach = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex min-h-screen w-full">
      <NavigationSidebarSection />
      <div className="flex-1">
        <DashboardSection />
      </div>
    </div>
  );
};
