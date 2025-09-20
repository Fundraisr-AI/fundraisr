import React from "react";
import { MainContentSection } from "./sections/MainContentSection";
import { SidebarSection } from "./sections/SidebarSection";

export const Fundraiser = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex min-h-screen w-full">
      <SidebarSection />
      <div className="flex-1">
        <MainContentSection />
      </div>
    </div>
  );
};
