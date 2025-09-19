import React from "react";
import { DashboardSection } from "./sections/DashboardSection";
import { NavigationSection } from "./sections/NavigationSection";

export const FundraisrOutreach = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex min-h-screen w-full">
      <NavigationSection />
      <div className="flex-1">
        <DashboardSection />
      </div>
    </div>
  );
};
