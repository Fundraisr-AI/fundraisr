import { NavigationSection } from "@/components/sidebar/NavigationSection";
import { DealRoomSection } from "./section/DealRoomSection";

export default function FundRaisingPage() {
  return (
    <div className="bg-[#fbfbfb] flex w-full min-h-screen overflow-hidden">
      <NavigationSection />
      <DealRoomSection />
    </div>
  );
}
