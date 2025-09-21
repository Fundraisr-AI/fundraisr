import { DashboardSection } from "./sections/DashboardSection/DashboardSection";
import { SharedSidebarNavigation } from "../../components/SharedSidebarNavigation";

export const FundraisrHomepage = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex min-h-screen w-full">
      <SharedSidebarNavigation />
      <div className="flex-1">
        <DashboardSection />
      </div>
    </div>
  );
};
