import { NavigationSection } from "@/components/sidebar/NavigationSection";
import { NotificationSection } from "./section/NotificationSection";

export default function FundRaisingPage() {
  return (
    <div className="bg-[#fbfbfb] flex w-full min-h-screen overflow-hidden">
      <NavigationSection />
      <NotificationSection />
    </div>
  );
}
