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

export const MainContentSection = (): JSX.Element => {
  return (
    <main className="w-full h-full bg-white rounded-[20px_0px_0px_0px] flex flex-col overflow-hidden border border-solid border-[#eaeaea]">
      <header className="flex mx-5 h-[53px] relative mt-5 items-center justify-between">
        <div className="flex flex-col w-[422px] items-start gap-0.5 relative">
          <h1 className="self-stretch mt-[-1.00px] font-semibold text-[#111111] text-xl tracking-[0] leading-[30px] relative [font-family:'Manrope',Helvetica]">
            AI Fundraisr Agent
          </h1>

          <p className="self-stretch relative [font-family:'Manrope',Helvetica] font-normal text-[#4f5059] text-sm tracking-[0] leading-[21px]">
            Generate Personalized Investor Outreach With Ai
          </p>
        </div>

        <Badge className="inline-flex h-10 items-center gap-2 px-3 py-2 relative flex-[0_0_auto] bg-[#17a34a29] rounded-lg border-[0.5px] border-solid border-[#eaeaea] text-[#17a34a] font-medium text-xs tracking-[-0.24px] leading-[18px] [font-family:'Manrope',Helvetica] hover:bg-[#17a34a29]">
          Admin Access
        </Badge>
      </header>

      <Card className="mx-[19px] h-[493px] relative mt-5 rounded-[20px] border border-solid border-[#eaeaea]">
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
                    Drop File Here or Click To UploadIcon
                  </p>

                  <p className="w-fit whitespace-nowrap relative [font-family:'Manrope',Helvetica] font-normal text-[#4f5059] text-sm tracking-[0] leading-[21px]">
                    Supports Only Pdf File Type
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
                Linkedin Profile URL
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

      <Card className="flex mx-[19px] h-[177px] relative mt-[22px] rounded-[20px] overflow-hidden border border-solid border-[#dbdbdb]">
        <CardContent className="flex-col items-start gap-[22px] p-5 flex">
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
