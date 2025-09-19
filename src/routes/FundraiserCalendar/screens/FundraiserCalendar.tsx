import React from "react";
import { CalendarSection } from "./sections/CalendarSection";
import { NavigationSidebarSection } from "./sections/NavigationSidebarSection";

export const FundraiserCalendar = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex min-h-screen w-full">
      <NavigationSidebarSection />
      <div className="flex-1">
        <CalendarSection />
      </div>
    </div>
  );
};
