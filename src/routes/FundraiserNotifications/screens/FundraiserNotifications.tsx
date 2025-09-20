import { NotificationSection } from "./sections/NotificationSection";
import { SidebarSection } from "./sections/SidebarSection";

export const FundraiserNotifications = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex w-full min-h-screen overflow-hidden">
      <SidebarSection />
      <NotificationSection />
    </div>
  );
};
