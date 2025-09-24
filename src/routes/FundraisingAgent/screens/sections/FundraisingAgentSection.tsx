import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const FundraisingAgentSection = (): JSX.Element => {
  return (
    <main className="w-full h-full content-section flex flex-col overflow-hidden">
      <header className="flex mx-6 h-[60px] relative mt-6 items-center justify-between">
        <div className="flex flex-col items-start gap-1 relative">
          <h1 className="font-bold text-foreground text-2xl leading-tight tracking-tight">
            AI Fundraisr Agent
          </h1>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Generate Personalized Investor Outreach With AI
          </p>
        </div>

        <Badge className="bg-[#17a34a29] text-[#17a34a] hover:bg-[#17a34a29] rounded px-4 py-2 text-sm font-medium">
          Admin Access
        </Badge>
      </header>

      <Card className="mx-6 relative mt-6 card-elevated flex-1">
        <CardContent className="items-start gap-[22px] p-5 flex flex-col overflow-hidden">
          <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
              <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                Basic Information
              </h2>

              <p className="w-fit font-normal text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap relative [font-family:'Manrope',Helvetica]">
                Company Information
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <Label className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[21px] whitespace-nowrap">
              Pitch Deck (PDF File)
            </Label>

            <div className="flex flex-col items-center gap-6 px-8 py-12 relative self-stretch w-full flex-[0_0_auto] bg-[#fbfbfb] rounded-2xl overflow-hidden border border-dashed border-[#4f5059]">
              <div className="flex flex-col max-w-[274px] items-center gap-4 relative flex-[0_0_auto]">
                <img
                  className="relative w-8 h-8"
                  alt="Frame"
                  src="https://c.animaapp.com/mfr6q2vwdnm9gO/img/frame.svg"
                />

                <div className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-base text-center tracking-[-0.32px] leading-6">
                    Drop File Here or Click To Upload
                  </p>

                  <p className="w-fit whitespace-nowrap relative [font-family:'Manrope',Helvetica] font-normal text-[#4f5059] text-sm tracking-[0] leading-[21px]">
                    Supports Only PDF File Type
                  </p>
                </div>
              </div>

              <Button className="inline-flex items-center justify-center gap-2 px-3 py-2 relative bg-[#09215e] rounded-lg hover:bg-[#09215e]/90">
                <img
                  className="relative w-[18px] h-[18px]"
                  alt="Frame"
                  src="https://c.animaapp.com/mfr6q2vwdnm9gO/img/frame-1.svg"
                />

                <span className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-white text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                  Browse Files
                </span>
              </Button>
            </div>
          </div>

          <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-2 relative flex-1 grow">
              <Label className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
                LinkedIn Profile URL
              </Label>

              <Input
                className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb] [font-family:'Manrope',Helvetica] font-normal text-[#a1a1a1] text-base tracking-[-0.29px] leading-[normal]"
                defaultValue="https://linkedin.com/in/profile-name"
              />
            </div>

            <div className="flex flex-col items-start gap-2 relative flex-1 grow">
              <Label className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
                Company Website
              </Label>

              <Input
                className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb] [font-family:'Manrope',Helvetica] font-normal text-[#a1a1a1] text-base tracking-[-0.29px] leading-[normal]"
                defaultValue="https://company.com"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="flex mx-[19px] h-[177px] relative mt-5 rounded-[20px] overflow-hidden border border-solid border-[#dbdbdb]">
        <CardContent className="flex-col items-start gap-4 p-4 flex">
          <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
              <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                Investor Context Configuration
              </h2>

              <p className="w-fit font-normal text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap relative [font-family:'Manrope',Helvetica]">
                Configure Investor-specific Context For Personalized Outreach
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <Label className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
              Select Client
            </Label>

            <Select>
              <SelectTrigger className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb] [font-family:'Manrope',Helvetica] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal]">
                <SelectValue placeholder="Please select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="client1">Client 1</SelectItem>
                <SelectItem value="client2">Client 2</SelectItem>
                <SelectItem value="client3">Client 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};
