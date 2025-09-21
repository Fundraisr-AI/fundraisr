import { MainContentSection } from "./sections/MainContentSection";
import { SharedSidebarNavigation } from "../../../components/SharedSidebarNavigation";

export const Fundraiser = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex min-h-screen w-full">
      <SharedSidebarNavigation />
      <div className="flex-1">
        <MainContentSection />
      </div>
    </div>
  );
};
