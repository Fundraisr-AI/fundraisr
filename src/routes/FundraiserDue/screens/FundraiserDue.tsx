import { SharedSidebarNavigation } from "../../../components/SharedSidebarNavigation";
import { ProspectListSection } from "./sections/ProspectListSection";

export const FundraiserDue = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex w-full min-h-screen overflow-hidden">
      <SharedSidebarNavigation />
      <ProspectListSection />
    </div>
  );
};
