import { NotificationSection } from "./sections/NotificationSection";
import { SharedSidebarNavigation } from "../../../components/SharedSidebarNavigation";

export const FundraiserNotifications = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex w-full min-h-screen overflow-hidden">
      <SharedSidebarNavigation />
      <NotificationSection />
    </div>
  );
};
