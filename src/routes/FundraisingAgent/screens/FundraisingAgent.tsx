import React from "react";
import { NavigationSidebarSection } from "./sections/NavigationSidebarSection";
import { FundraisingAgentSection } from "./sections/FundraisingAgentSection";

export const FundraisingAgent = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex min-h-screen w-full">
      <NavigationSidebarSection />
      <div className="flex-1">
        <FundraisingAgentSection />
      </div>
    </div>
  );
};
