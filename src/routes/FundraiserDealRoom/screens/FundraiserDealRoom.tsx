import { NavigationSidebarSection } from "./sections/NavigationSidebarSection";
import { DealRoomSection } from "./sections/DealRoomSection";

export const FundraiserDealRoom = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex w-full min-h-screen overflow-hidden">
      <NavigationSidebarSection />
      <DealRoomSection />
    </div>
  );
};
