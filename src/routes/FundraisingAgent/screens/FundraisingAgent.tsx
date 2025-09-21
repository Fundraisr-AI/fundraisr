import React from "react";
import { SharedSidebarNavigation } from "../../../components/SharedSidebarNavigation";
import { FundraisingAgentSection } from "./sections/FundraisingAgentSection";

export const FundraisingAgent = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex min-h-screen w-full">
      <SharedSidebarNavigation />
      <div className="flex-1">
        <FundraisingAgentSection />
      </div>
    </div>
  );
};
