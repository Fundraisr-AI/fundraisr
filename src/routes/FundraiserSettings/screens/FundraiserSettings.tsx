import React from "react";
import { AccountSettingsSection } from "./sections/AccountSettingsSection";
import { SidebarNavigationSection } from "./sections/SidebarNavigationSection";

export const FundraiserSettings = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex min-h-screen w-full">
      <SidebarNavigationSection />
      <div className="flex-1">
        <AccountSettingsSection />
      </div>
    </div>
  );
};
