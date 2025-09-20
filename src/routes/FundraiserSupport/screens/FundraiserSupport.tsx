import { NavigationSidebarSection } from "./sections/NavigationSidebarSection";
import { SupportSection } from "./sections/SupportSection";

export const FundraiserSupport = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex w-full min-h-screen overflow-hidden">
      <NavigationSidebarSection />
      <SupportSection />
    </div>
  );
};
