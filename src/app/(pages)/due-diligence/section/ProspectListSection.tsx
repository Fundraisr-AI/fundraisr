"use client";
import {
  ArrowUpDownIcon,
  CalendarIcon,
  ChevronDownIcon,
  FilterIcon,
  MailIcon,
  MoreHorizontalIcon,
  SearchIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getAllLeadsByUserIdAsync,
  LeadState,
  selectLead,
} from "@/features/slices/LeadSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";

const prospects = [
  {
    id: 1,
    name: "Sarah Chen",
    email: "sarah.chen@a16z.com",
    rating: "4/5",
    category: "Venture Capital",
    description:
      "Partner at andreessen Horowitz.\nfocus On Ai/ml Investments.met At Techcrunch.",
    location: "San Francisco,\nCA",
    company: "Andreessen\nHorowitz",
    avatar: "https://c.animaapp.com/mfr96fgpUpNNmx/img/change-image-here-1.svg",
    meetingDate: "20 Oktober 2025",
  },
  {
    id: 2,
    name: "Mike Wilson",
    email: "mike.wilson@sequoiacap.com",
    rating: "4/5",
    category: "Venture Capital",
    description:
      "Principal at sequoia Capital.\ninterested In B2b Saas Companies.",
    location: "Menlo Park,\nCA",
    company: "Sequoia\nCapital",
    avatar: "https://c.animaapp.com/mfr96fgpUpNNmx/img/change-image-here.svg",
    meetingDate: "20 Oktober 2025",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    email: "emma@firstround.com",
    rating: "4/5",
    category: "Venture Capital",
    description:
      "Investment Manager at first Round Capital.\nearly Stage Focus, Particularly Fintech.",
    location: "New York,\nNY",
    company: "First Round\nCapital",
    avatar: "https://c.animaapp.com/mfr96fgpUpNNmx/img/change-image-here-4.svg",
    meetingDate: "20 Oktober 2025",
  },
  {
    id: 4,
    name: "Sarah Chen",
    email: "sarah.chen@a16z.com",
    rating: "4/5",
    category: "Venture Capital",
    description:
      "Partner at andreessen Horowitz.\nfocus On Ai/ml Investments.met At Techcrunch.",
    location: "San Francisco,\nCA",
    company: "Andreessen\nHorowitz",
    avatar: "https://c.animaapp.com/mfr96fgpUpNNmx/img/change-image-here-1.svg",
    meetingDate: "20 Oktober 2025",
  },
  {
    id: 5,
    name: "Mike Wilson",
    email: "mike.wilson@sequoiacap.com",
    rating: "4/5",
    category: "Venture Capital",
    description:
      "Principal at sequoia Capital.\ninterested In B2b Saas Companies.",
    location: "Menlo Park,\nCA",
    company: "Sequoia\nCapital",
    avatar: "https://c.animaapp.com/mfr96fgpUpNNmx/img/change-image-here.svg",
    meetingDate: "20 Oktober 2025",
  },
  {
    id: 6,
    name: "Emma Rodriguez",
    email: "emma@firstround.com",
    rating: "4/5",
    category: "Venture Capital",
    description:
      "Investment Manager at first Round Capital.\nearly Stage Focus, Particularly Fintech.",
    location: "New York,\nNY",
    company: "First Round\nCapital",
    avatar: "https://c.animaapp.com/mfr96fgpUpNNmx/img/change-image-here-4.svg",
    meetingDate: "20 Oktober 2025",
  },
];

export const ProspectListSection = (): JSX.Element => {
  const leads = useSelector(selectLead);
  const dispatch = useDispatch<AppDispatch>();
  dispatch(
    getAllLeadsByUserIdAsync({
      filters: { status: ["MEETING_BOOKED"] },
    })
  );

  return (
    <section className="flex-1 flex flex-col bg-white rounded-[20px_0px_0px_0px] overflow-hidden border border-solid border-[#eaeaea]">
      <header className="flex mx-5 h-[53px] relative mt-5 items-center justify-between bg-transparent">
        <div className="flex flex-col w-[422px] items-start gap-0.5 relative">
          <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-xl tracking-[0] leading-[30px]">
            Due Diligence
          </h1>

          <p className="self-stretch font-normal text-sm leading-[21px] relative [font-family:'Manrope',Helvetica] text-[#4f5059] tracking-[0]">
            Rate Prospects With Booked Meetings
          </p>
        </div>

        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <div className="relative w-[332px] h-[37px] bg-white rounded-lg overflow-hidden border border-solid border-[#eaeaea]">
            <div className="relative top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_156px)] w-[147px] flex gap-2.5">
              <SearchIcon className="w-5 h-5 text-[#4f5059]" />
              <span className="w-[115px] h-5 [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-sm tracking-[-0.31px] leading-5 whitespace-nowrap">
                Search prospect...
              </span>
            </div>
          </div>

          <Button className="h-10 px-3 py-2 bg-[#09215e] border-[0.5px] border-solid border-[#fbfbfb] text-[#fbfbfb] text-xs tracking-[-0.24px] leading-[18px] [font-family:'Manrope',Helvetica] font-medium rounded-lg">
            Add Prospect
          </Button>
        </div>
      </header>

      <div className="flex mx-5 h-10 relative mt-[26px] items-center justify-between">
        <Tabs
          defaultValue="all"
          className="inline-flex items-center p-0.5 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] bg-[#fbfbfb] rounded-lg border border-solid border-[#eaeaea]"
        >
          <TabsList className="bg-transparent p-0 h-auto">
            <TabsTrigger
              value="all"
              className="flex w-[159px] items-center justify-center gap-2.5 px-4 py-2 relative mt-[-1.00px] ml-[-1.00px] bg-white rounded-md border border-solid border-[#eaeaea] data-[state=active]:bg-white data-[state=active]:text-[#272a34] data-[state=active]:shadow-none [font-family:'Manrope',Helvetica] font-semibold text-[#272a34] text-sm tracking-[-0.28px] leading-[19.6px]"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="organization"
              className="flex w-[156px] items-center justify-center gap-2.5 px-4 py-1.5 relative data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#7b7f93] data-[state=inactive]:shadow-none [font-family:'Manrope',Helvetica] font-medium text-[#7b7f93] text-sm tracking-[-0.28px] leading-[19.6px]"
            >
              Organization
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="inline-flex gap-3 flex-[0_0_auto] items-center relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="inline-flex h-10 items-center gap-3 px-3 py-2 relative flex-[0_0_auto] rounded-lg border-[0.5px] border-solid border-[#d9dadb] bg-white hover:bg-gray-50"
              >
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <ArrowUpDownIcon className="relative w-4 h-4 text-[#4f5059]" />
                  <span className="mt-[-1.00px] leading-[18px] whitespace-nowrap relative w-fit [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px]">
                    Sort
                  </span>
                </div>
                <ChevronDownIcon className="relative w-3 h-3 text-[#4f5059]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Name A-Z</DropdownMenuItem>
              <DropdownMenuItem>Name Z-A</DropdownMenuItem>
              <DropdownMenuItem>Rating High-Low</DropdownMenuItem>
              <DropdownMenuItem>Rating Low-High</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="inline-flex h-10 items-center gap-3 px-3 py-2 relative flex-[0_0_auto] rounded-lg border-[0.5px] border-solid border-[#d9dadb] bg-white hover:bg-gray-50"
              >
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <FilterIcon className="relative w-4 h-4 text-[#4f5059]" />
                  <span className="mt-[-1.00px] leading-[18px] whitespace-nowrap relative w-fit [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px]">
                    Filter
                  </span>
                </div>
                <ChevronDownIcon className="relative w-3 h-3 text-[#4f5059]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All Categories</DropdownMenuItem>
              <DropdownMenuItem>Venture Capital</DropdownMenuItem>
              <DropdownMenuItem>Private Equity</DropdownMenuItem>
              <DropdownMenuItem>Angel Investor</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex mx-[19px] relative mt-[17px] flex-wrap items-start gap-[16px_16px]">
        {leads.leads.map((lead: LeadState) => (
          <Card
            key={lead.id}
            className="flex flex-col w-[371px] items-center gap-3.5 p-4 relative bg-white rounded-2xl overflow-hidden border border-solid border-[#eaeaea]"
          >
            <CardContent className="p-0 w-full">
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <Badge className="inline-flex items-center justify-center gap-2.5 px-3 py-1 relative flex-[0_0_auto] bg-[#17a34a29] rounded-[100px] text-[#17a34a] hover:bg-[#17a34a29] [font-family:'Manrope',Helvetica] font-medium text-xs tracking-[-0.24px] leading-3">
                  {lead.status}
                </Badge>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto w-auto"
                    >
                      <MoreHorizontalIcon className="w-[18px] h-[18px] text-[#4f5059]" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="relative w-[111px] h-[111px] bg-white rounded-[100px] overflow-hidden mx-auto mt-3.5">
                <Avatar className="w-[111px] h-[111px]">
                  <AvatarImage
                    src={""}
                    alt={lead.firstname + " " + lead.lastname}
                    className="object-cover"
                  />
                  <AvatarFallback className="text-2xl">
                    {lead.firstname
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>

              <div className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto] mt-3.5">
                <h3 className="self-stretch font-semibold text-[#111111] text-xl leading-[30px] relative mt-[-1.00px] [font-family:'Manrope',Helvetica] text-center tracking-[0]">
                  {lead.firstname + " " + lead.lastname}
                </h3>

                <Badge className="gap-1.5 bg-[#09215e29] inline-flex items-center justify-center px-3 py-1 relative flex-[0_0_auto] rounded-[100px] text-[#09215e] hover:bg-[#09215e29] [font-family:'Manrope',Helvetica] font-medium text-xs tracking-[-0.24px] leading-3">
                  <MailIcon className="w-4 h-4" />
                  {lead.email}
                </Badge>

                <div className="flex items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <img
                    className="relative flex-[0_0_auto]"
                    alt="Star"
                    src="https://c.animaapp.com/mfr96fgpUpNNmx/img/star.svg"
                  />
                  <span className="w-fit font-medium text-[#4f5059] text-xs leading-[18px] whitespace-nowrap relative mt-[-1.00px] [font-family:'Manrope',Helvetica] text-center tracking-[0]">
                    {lead.interested}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto] mt-3.5">
                <p className="flex-1 mt-[-1.00px] font-normal text-sm text-center leading-[21px] relative [font-family:'Manrope',Helvetica] text-[#4f5059] tracking-[0] whitespace-pre-line">
                  {lead.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-[12px_12px] relative self-stretch w-full flex-[0_0_auto] mt-3.5">
                <div className="flex flex-col w-[164.5px] h-[82px] items-center justify-center gap-1.5 relative bg-[#fbfbfb] rounded-lg border border-solid border-[#eaeaea]">
                  <img
                    className="relative w-[18px] h-[18px]"
                    alt="Location"
                    src="https://c.animaapp.com/mfr96fgpUpNNmx/img/frame-1.svg"
                  />
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <span className="mt-[-1.00px] text-center leading-[15.6px] relative w-fit [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] whitespace-pre-line">
                      {lead.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col w-[164.5px] h-[82px] items-center justify-center gap-1.5 relative bg-[#fbfbfb] rounded-lg border border-solid border-[#eaeaea]">
                  <img
                    className="relative w-[18px] h-[18px]"
                    alt="Company"
                    src="https://c.animaapp.com/mfr96fgpUpNNmx/img/frame-2.svg"
                  />
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <span className="mt-[-1.00px] text-center leading-[15.6px] relative w-fit [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] whitespace-pre-line">
                      {lead.companyName}
                    </span>
                  </div>
                </div>

                <div className="flex w-[164.5px] h-[42px] items-center justify-center gap-2 pl-2.5 pr-3 py-2 relative bg-[#fbfbfb] rounded-lg border border-solid border-[#eaeaea]">
                  <img
                    className="relative w-4 h-4"
                    alt="Research"
                    src="https://c.animaapp.com/mfr96fgpUpNNmx/img/frame-2.svg"
                  />
                  <span className="leading-[18px] whitespace-nowrap relative w-fit [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px]">
                    Research
                  </span>
                </div>

                <div className="flex w-[164.5px] h-[42px] justify-center pl-2.5 pr-3 py-2 bg-[#fbfbfb] border border-solid border-[#eaeaea] items-center gap-2 relative rounded-lg">
                  <img
                    className="relative w-4 h-4"
                    alt="PDF File"
                    src="https://c.animaapp.com/mfr96fgpUpNNmx/img/frame-4.svg"
                  />
                  <span className="leading-[18px] whitespace-nowrap relative w-fit [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px]">
                    PDF File
                  </span>
                </div>
              </div>

              <Separator className="relative self-stretch w-full mt-3.5" />

              <div className="flex items-start relative self-stretch w-full flex-[0_0_auto] mt-3.5">
                <div className="flex items-center gap-1 relative flex-1 grow">
                  <CalendarIcon className="w-4 h-4 text-[#4f5059]" />
                  <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#4f5059] text-xs tracking-[0] leading-[16.8px] whitespace-nowrap">
                    Meeting Schedule
                  </span>
                </div>
                <span className="w-fit mt-[-1.00px] font-medium text-xs leading-[18px] whitespace-nowrap relative [font-family:'Manrope',Helvetica] text-[#4f5059] tracking-[0]">
                  {lead.meetingDate}
                </span>
              </div>

              <Button className="flex h-10 justify-center px-3 py-2 self-stretch w-full bg-[#09215e] border-[0.5px] border-solid border-[#fbfbfb] items-center gap-2 relative rounded-lg mt-3.5 text-[#fbfbfb] [font-family:'Manrope',Helvetica] font-medium text-xs tracking-[-0.24px] leading-[18px] hover:bg-[#09215e]/90">
                DD Report
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
