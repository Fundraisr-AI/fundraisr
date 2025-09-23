import image from "./image.svg";
import line116 from "./line-116.svg";
import vector from "./vector.svg";
import { Button } from "@/components/ui/button";

interface WelcomeCardProps {
  name: string;
  fundraisingTarget: number;
  committedCapital: number;
}

export const WelcomeCard = ({
  name,
  fundraisingTarget,
  committedCapital,
}: WelcomeCardProps): JSX.Element => {
  // Data for the chart bars
  const chartBars = Array.from({ length: 72 }, (_, index) => index);

  // Calculate dynamic values
  const percentage = Math.round((committedCapital / fundraisingTarget) * 100);
  const remaining = fundraisingTarget - committedCapital;

  return (
    <div className="flex w-full max-w-none items-start gap-10 p-5 relative bg-[#FBFBFB] rounded-[20px] overflow-hidden border border-solid border-[#EBEBEB]">
      <div className="flex flex-col w-[500px] items-start gap-4 relative">
        <div className="relative w-[66px] h-16">
          <div className="absolute top-0 left-0 w-16 h-16 bg-[#e5effa] rounded-xl aspect-[1]" />

          <div className="absolute top-[calc(50.00%_-_24px)] left-[calc(50.00%_-_18px)] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-[48px] whitespace-nowrap">
            👋
          </div>
        </div>

        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="self-stretch mt-[-1.00px] text-[#4f5059] text-sm leading-[19.6px] relative [font-family:'Manrope-SemiBold',Helvetica] font-semibold tracking-[0]">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </div>

          <div className="w-fit text-[#111111] text-[26px] leading-[39px] whitespace-nowrap relative [font-family:'Manrope-SemiBold',Helvetica] font-semibold tracking-[0]">
            {(() => {
              const hour = new Date().getHours();
              if (hour >= 5 && hour < 12) {
                return `Good morning, ${name}`;
              } else if (hour >= 12 && hour < 17) {
                return `Good afternoon, ${name}`;
              } else {
                return `Good evening, ${name}`;
              }
            })()}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 relative flex-1 grow">
        <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                Fundraising Target
              </div>
            </div>

            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#111111] text-3xl tracking-[-0.60px] leading-[45px] whitespace-nowrap">
                ${fundraisingTarget?.toLocaleString()}
              </div>

              <div className="relative w-6 h-6 aspect-[1]">
                <img
                  className="absolute w-[78.12%] h-[78.13%] top-[9.37%] left-[12.50%]"
                  alt="Vector"
                  src={vector}
                />
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            className="h-8 px-3 py-2 rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
          >
            <span className="[font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px]">
              See all
            </span>
          </Button>
        </div>

        <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-[75%] h-[95px]">
            <div className="absolute top-0 left-0 w-full h-[26px] bg-[#888ae8] border border-solid" />

            <img
              className="absolute top-[26px] left-0 w-0.5 h-[69px]"
              alt="Line"
              src={line116}
            />

            <div className="flex w-[197px] left-[17px] flex-col items-start justify-center gap-0.5 absolute top-[38px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                ${committedCapital?.toLocaleString()}
              </div>

              <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                  Capital Committed
                </div>

                <div className="inline-flex h-5 items-center justify-center gap-2.5 px-1 py-0.5 relative flex-[0_0_auto] bg-[#b3bdbf29] rounded">
                  <div className="relative w-fit mt-[-1.50px] mb-[-0.50px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#848986] text-xs text-center tracking-[0] leading-[18px] whitespace-nowrap">
                    {percentage}%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-[25%] h-[95px]">
            <div className="flex w-full items-start gap-[1.5px] absolute top-0 left-0">
              {chartBars.map((_, index) => (
                <div
                  key={index}
                  className="relative w-[1.5px] h-[26px] bg-[#50a57c]"
                />
              ))}
            </div>

            <img
              className="absolute top-[26px] left-0 w-0.5 h-[69px]"
              alt="Line"
              src={image}
            />

            <div className="inline-flex left-3 flex-col items-start justify-center gap-0.5 absolute top-[38px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                ${remaining.toLocaleString()}
              </div>

              <div className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                Remaining
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
