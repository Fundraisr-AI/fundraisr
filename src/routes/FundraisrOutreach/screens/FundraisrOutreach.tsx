import React from "react";
import { DashboardSection } from "./sections/DashboardSection";
import { SharedSidebarNavigation } from "../../../components/SharedSidebarNavigation";

export const FundraisrOutreach = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex min-h-screen w-full">
      <SharedSidebarNavigation />
      <div className="flex-1">
        <DashboardSection />
      </div>
    </div>
  );
};
