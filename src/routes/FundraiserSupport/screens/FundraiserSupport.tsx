import { SharedSidebarNavigation } from "../../../components/SharedSidebarNavigation";
import { SupportSection } from "./sections/SupportSection";

export const FundraiserSupport = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex w-full min-h-screen overflow-hidden">
      <SharedSidebarNavigation />
      <SupportSection />
    </div>
  );
};
