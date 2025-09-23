import { DashboardSection } from "./sections/DashboardSection";
import { NavigationSection } from "@/components/sidebar/NavigationSection";

export default function HomePage() {
  return (
    <div
      className="flex min-h-screen w-full bg-[#fbfbfb] translate-y-[-1rem] animate-fade-in opacity-0"
      data-model-id="28:5659"
    >
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <NavigationSection />
      </div>
      <div className="flex-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <DashboardSection />
      </div>
    </div>
  );
}
