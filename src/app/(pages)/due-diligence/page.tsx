import { NavigationSection } from "@/components/sidebar/NavigationSection";
import { ProspectListSection } from "./section/ProspectListSection";

export default function FundRaisingPage() {
  return (
    <div className="bg-[#fbfbfb] flex w-full min-h-screen overflow-hidden">
      <NavigationSection />
      <ProspectListSection />
    </div>
  );
}
