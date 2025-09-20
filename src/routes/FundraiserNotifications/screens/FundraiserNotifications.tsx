import { NotificationSection } from "./sections/NotificationSection";
import { NavigationSidebarSection } from "./sections/NavigationSidebarSection";

export const FundraiserNotifications = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex w-full min-h-screen overflow-hidden">
      <NavigationSidebarSection />
      <NotificationSection />
    </div>
  );
};
