import React from "react";
import { DashboardSection } from "./sections/DashboardSection/DashboardSection";
import { SharedSidebarNavigation } from "../../components/SharedSidebarNavigation";

export const FundraisrHomepage = (): JSX.Element => {
  return (
    <div
      className="flex min-h-screen w-full bg-[#fbfbfb] translate-y-[-1rem] animate-fade-in opacity-0"
      data-model-id="28:5659"
    >
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <SharedSidebarNavigation />
      </div>
      <div className="flex-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <DashboardSection />
      </div>
    </div>
  );
};
