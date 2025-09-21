import React from "react";
import { CalendarSection } from "./sections/CalendarSection";
import { SharedSidebarNavigation } from "../../../components/SharedSidebarNavigation";

export const FundraiserCalendar = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex min-h-screen w-full">
      <SharedSidebarNavigation />
      <div className="flex-1">
        <CalendarSection />
      </div>
    </div>
  );
};
