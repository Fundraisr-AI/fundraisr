import { SharedSidebarNavigation } from "../../../components/SharedSidebarNavigation";
import { DealRoomSection } from "./sections/DealRoomSection";

export const FundraiserDealRoom = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex w-full min-h-screen overflow-hidden">
      <SharedSidebarNavigation />
      <DealRoomSection />
    </div>
  );
};
