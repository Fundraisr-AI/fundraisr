import { NavigationSection } from "@/components/sidebar/NavigationSection";
import { SupportSection } from "./section/SupportSection";

export default function FundRaisingPage() {
  return (
    <div className="bg-[#fbfbfb] flex w-full min-h-screen overflow-hidden">
      <NavigationSection />
      <SupportSection />
    </div>
  );
}
