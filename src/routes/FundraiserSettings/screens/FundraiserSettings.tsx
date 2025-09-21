import { AccountSettingsSection } from "./sections/AccountSettingsSection";
import { SharedSidebarNavigation } from "../../../components/SharedSidebarNavigation";

export const FundraiserSettings = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbfb] flex min-h-screen w-full">
      <SharedSidebarNavigation />
      <div className="flex-1">
        <AccountSettingsSection />
      </div>
    </div>
  );
};
