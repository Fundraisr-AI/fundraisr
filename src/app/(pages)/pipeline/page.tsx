import { DealPipelineSection } from "./section/DealPipelineSection";
import { NavigationSection } from "@/components/sidebar/NavigationSection";

export default function PipelinePage() {
  return (
    <div className="bg-[#fbfbfb] flex min-h-screen w-full">
      <NavigationSection />
      <div className="flex-1">
        <DealPipelineSection />
      </div>
    </div>
  );
}
