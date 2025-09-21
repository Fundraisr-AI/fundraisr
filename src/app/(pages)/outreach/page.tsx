import { DashboardSection } from "./sections/DashboardSection";
import { NavigationSection } from "@/components/sidebar/NavigationSection";

export default function OutreachPage() {
  return (
    <div className="bg-[#fbfbfb] flex min-h-screen w-full">
      <NavigationSection />
      <div className="flex-1">
        <DashboardSection />
      </div>
    </div>
  );
}
