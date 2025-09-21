import { NavigationSection } from "@/components/sidebar/NavigationSection";
import { CalendarSection } from "./section/CalendarSection";

export default function FundRaisingPage() {
  return (
    <div className="bg-[#fbfbfb] flex min-h-screen w-full">
      <NavigationSection />
      <div className="flex-1">
        <CalendarSection />
      </div>
    </div>
  );
}
