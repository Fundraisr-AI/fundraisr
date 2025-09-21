import { NavigationSection } from "@/components/sidebar/NavigationSection";
import { MainContentSection } from "./section/MainContentSection";

export default function FundRaisingPage() {
  return (
    <div className="bg-[#fbfbfb] flex min-h-screen w-full">
      <NavigationSection />
      <div className="flex-1">
        <MainContentSection />
      </div>
    </div>
  );
}
