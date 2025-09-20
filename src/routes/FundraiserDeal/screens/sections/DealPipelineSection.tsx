import {
  ArrowUpDownIcon,
  ChevronDownIcon,
  FilterIcon,
  SearchIcon,
  TrendingDownIcon,
  TrendingUpIcon,
} from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

export const DealPipelineSection = (): JSX.Element => {
  const statsData = [
    {
      value: "84",
      label: "Interested Contacts",
      change: "12%",
      isPositive: true,
      lastPeriod: "65",
      lastPeriodLabel: "last year",
      chartSrc: "https://c.animaapp.com/mfr8j7rbwvSuXy/img/container-1.svg",
    },
    {
      value: "25",
      label: "Meeting Scheduled",
      change: "5%",
      isPositive: true,
      lastPeriod: "20",
      lastPeriodLabel: "last month",
      chartSrc: "https://c.animaapp.com/mfr8j7rbwvSuXy/img/container.svg",
    },
    {
      value: "$180,000",
      label: "Commitments",
      change: "10%",
      isPositive: false,
      lastPeriod: "$200,000",
      lastPeriodLabel: "last month",
      chartSrc: "https://c.animaapp.com/mfr8j7rbwvSuXy/img/container-2.svg",
    },
  ];

  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const calendarWeeks = [
    [
      { day: "31", isOtherMonth: true, isToday: false },
      {
        day: "1",
        isOtherMonth: false,
        isToday: false,
        events: [
          {
            name: "Chantal Thibault",
            status: "Do Not Contact",
            color: "#f00000",
          },
          {
            name: "Chantal Thibault",
            status: "Do Not Contact",
            color: "#0078f0",
          },
        ],
      },
      { day: "2", isOtherMonth: false, isToday: false },
      { day: "3", isOtherMonth: false, isToday: false },
      { day: "4", isOtherMonth: false, isToday: false },
      { day: "5", isOtherMonth: false, isToday: false },
      { day: "6", isOtherMonth: false, isToday: false },
    ],
    [
      { day: "7", isOtherMonth: false, isToday: false },
      { day: "8", isOtherMonth: false, isToday: false },
      {
        day: "9",
        isOtherMonth: false,
        isToday: false,
        events: [
          {
            name: "Chantal Thibault",
            status: "Do Not Contact",
            color: "#f00000",
          },
          {
            name: "Chantal Thibault",
            status: "Do Not Contact",
            color: "#0078f0",
          },
        ],
      },
      { day: "10", isOtherMonth: false, isToday: false },
      { day: "11", isOtherMonth: false, isToday: false },
      { day: "12", isOtherMonth: false, isToday: true },
      { day: "13", isOtherMonth: false, isToday: false },
    ],
    [
      { day: "14", isOtherMonth: false, isToday: false },
      { day: "15", isOtherMonth: false, isToday: false },
      { day: "16", isOtherMonth: false, isToday: false },
      { day: "17", isOtherMonth: false, isToday: false },
      {
        day: "18",
        isOtherMonth: false,
        isToday: false,
        events: [
          {
            name: "Chantal Thibault",
            status: "Do Not Contact",
            color: "#f00000",
          },
          {
            name: "Chantal Thibault",
            status: "Do Not Contact",
            color: "#0078f0",
          },
        ],
      },
      { day: "19", isOtherMonth: false, isToday: false },
      { day: "20", isOtherMonth: false, isToday: false },
    ],
    [
      { day: "21", isOtherMonth: false, isToday: false },
      { day: "22", isOtherMonth: false, isToday: false },
      { day: "23", isOtherMonth: false, isToday: false },
      { day: "24", isOtherMonth: false, isToday: false },
      { day: "25", isOtherMonth: false, isToday: false },
      { day: "26", isOtherMonth: false, isToday: false },
      { day: "27", isOtherMonth: false, isToday: false },
    ],
    [
      { day: "28", isOtherMonth: false, isToday: false },
      { day: "29", isOtherMonth: false, isToday: false },
      { day: "30", isOtherMonth: false, isToday: false },
      { day: "1", isOtherMonth: true, isToday: false },
      { day: "2", isOtherMonth: true, isToday: false },
      { day: "3", isOtherMonth: true, isToday: false },
      { day: "4", isOtherMonth: true, isToday: false },
    ],
  ];

  return (
    <section className="w-full h-full content-section flex flex-col overflow-hidden">
      <header className="flex mx-6 h-[60px] relative mt-6 items-center justify-between">
        <div className="flex flex-col items-start gap-1 relative">
          <h1 className="font-bold text-foreground text-2xl leading-tight tracking-tight">
            Deal Pipeline
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Track And Manage Your Fundraising Opportunities
          </p>
        </div>

        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <div className="relative flex items-center gap-3 px-4 py-2.5 bg-background rounded-lg border border-input input-enhanced max-w-sm">
            <SearchIcon className="w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search transactions, campaigns..."
              className="border-none p-0 bg-transparent focus-visible:ring-0 text-sm placeholder:text-muted-foreground"
            />
          </div>

          <Button className="btn-primary px-4 py-2">
            Add Prospect
          </Button>
        </div>
      </header>

      <div className="flex mx-6 h-40 relative mt-6 items-center gap-5">
        {statsData.map((stat, index) => (
          <Card
            key={index}
            className="card-elevated flex flex-col h-[162px] items-start justify-between p-6 relative flex-1 grow"
          >
            <CardContent className="p-0 w-full">
              <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-0.5 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-bold text-[#111111] text-[32px] tracking-[-0.64px] leading-[35.2px] whitespace-nowrap">
                      {stat.value}
                    </div>
                  </div>
                  <div className="w-fit font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope',Helvetica] tracking-[0]">
                    {stat.label}
                  </div>
                </div>

                <Badge
                  className={`inline-flex items-center gap-1 pl-1 pr-1.5 py-1 relative flex-[0_0_auto] ${stat.isPositive ? "bg-[#17a34a14]" : "bg-[#a3171714]"} rounded-[100px] border-0`}
                >
                  {stat.isPositive ? (
                    <TrendingUpIcon className="w-3 h-3 text-[#1b8341]" />
                  ) : (
                    <TrendingDownIcon className="w-3 h-3 text-[#831b1b]" />
                  )}
                  <span
                    className={`relative w-fit mt-[-0.50px] [font-family:'Manrope',Helvetica] font-semibold ${stat.isPositive ? "text-[#1b8341]" : "text-[#831b1b]"} text-xs text-center tracking-[0] leading-[13.2px] whitespace-nowrap`}
                  >
                    {stat.change}
                  </span>
                </Badge>
              </div>

              <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto] mt-4">
                <div className="inline-flex items-center justify-center gap-0.5 relative flex-[0_0_auto]">
                  <div className="w-fit mt-[-1.00px] font-semibold text-[#111111] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope',Helvetica] tracking-[0]">
                    {stat.lastPeriod}
                  </div>
                  <div className="w-fit mt-[-1.00px] font-normal text-[#8d8e93] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope',Helvetica] tracking-[0]">
                    {stat.lastPeriodLabel}
                  </div>
                </div>

                <img
                  className="relative w-[113px] h-[51px] mt-[-1.00px] mb-[-1.00px] mr-[-1.00px]"
                  alt="Chart"
                  src={stat.chartSrc}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mx-[19px] h-[994px] relative mt-[23px] items-start gap-[22px] p-5 rounded-[20px] flex flex-col overflow-hidden border border-solid border-[#eaeaea]">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <Tabs
            defaultValue="calendar"
            className="inline-flex items-center p-0.5 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] bg-[#fbfbfb] rounded-lg border border-solid border-[#eaeaea]"
          >
            <TabsList className="bg-transparent p-0 h-auto">
              <TabsTrigger
                value="kanban"
                className="flex w-[156px] items-center justify-center gap-2.5 px-4 py-1.5 relative data-[state=active]:bg-transparent"
              >
                <span className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#7b7f93] text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap">
                  Kanban
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="calendar"
                className="flex w-[159px] items-center justify-center gap-2.5 px-4 py-2 relative mt-[-1.00px] bg-white rounded-md border border-solid border-[#eaeaea] data-[state=active]:bg-white"
              >
                <span className="relative w-fit mt-[-0.50px] [font-family:'Manrope',Helvetica] font-semibold text-[#272a34] text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap">
                  Calendar
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="notes"
                className="flex w-[157px] items-center justify-center gap-2.5 px-4 py-1.5 relative data-[state=active]:bg-transparent"
              >
                <span className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#7b7f93] text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap">
                  Notes
                </span>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="inline-flex gap-3 flex-[0_0_auto] items-center relative">
            <Button
              variant="outline"
              className="inline-flex items-center gap-3 px-3 py-2 relative flex-[0_0_auto] rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
            >
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <ArrowUpDownIcon className="w-4 h-4 text-[#4f5059]" />
                <span className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                  Sort
                </span>
              </div>
              <ChevronDownIcon className="w-3 h-3 text-[#4f5059]" />
            </Button>

            <Button
              variant="outline"
              className="inline-flex items-center gap-3 px-3 py-2 relative flex-[0_0_auto] rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
            >
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <FilterIcon className="w-4 h-4 text-[#4f5059]" />
                <span className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                  Filter
                </span>
              </div>
              <ChevronDownIcon className="w-3 h-3 text-[#4f5059]" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="calendar" className="w-full">
          <TabsContent value="calendar" className="mt-0">
            <div className="flex flex-col items-start gap-4 pt-4 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] ml-[-1.00px] rounded-[14px] overflow-hidden border border-solid border-[#eaeaea]">
              <div className="flex items-center justify-between px-4 py-0 relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 pl-1 pr-0 py-0 relative flex-[0_0_auto] rounded-[100px]">
                    <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-2xl tracking-[-0.48px] leading-9 whitespace-nowrap">
                      September 2025
                    </h2>
                  </div>
                </div>

                <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <Button
                      variant="outline"
                      className="inline-flex items-center gap-2 pl-3 pr-2 py-2 relative flex-[0_0_auto] rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
                    >
                      <span className="text-[#4f5059] relative w-fit [font-family:'Manrope',Helvetica] font-medium text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                        Month View
                      </span>
                      <div className="relative w-4 h-4">
                        <img
                          className="absolute top-px left-0.5 w-3 h-[13px]"
                          alt="Calendar"
                          src="https://c.animaapp.com/mfr8j7rbwvSuXy/img/calendar.png"
                        />
                      </div>
                    </Button>

                    <Button
                      variant="outline"
                      className="inline-flex items-center gap-3 px-3 py-2 relative flex-[0_0_auto] rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
                    >
                      <span className="text-[#4f5059] relative w-fit [font-family:'Manrope',Helvetica] font-medium text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                        Today
                      </span>
                    </Button>
                  </div>

                  <img
                    className="relative w-px h-6 object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/mfr8j7rbwvSuXy/img/line-2342.svg"
                  />

                  <img
                    className="relative flex-[0_0_auto]"
                    alt="Frame"
                    src="https://c.animaapp.com/mfr8j7rbwvSuXy/img/frame-2147218141.svg"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] border border-solid border-[#eaeaea]">
                <div className="flex h-12 items-center justify-between relative self-stretch w-full bg-white border-b [border-bottom-style:solid] border-[#eaeaea]">
                  {weekDays.map((day, index) => (
                    <div
                      key={day}
                      className={`flex items-center justify-center gap-2 relative flex-1 self-stretch grow ${index < 6 ? "border-r [border-right-style:solid] border-[#eaeaea]" : ""}`}
                    >
                      <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-sm tracking-[-0.28px] leading-[21px] whitespace-nowrap">
                        {day}
                      </div>
                    </div>
                  ))}
                </div>

                {calendarWeeks.map((week, weekIndex) => (
                  <div
                    key={weekIndex}
                    className="flex h-[154px] items-center justify-between relative self-stretch w-full bg-[#fbfbfb] border-b [border-bottom-style:solid] border-[#eaeaea]"
                  >
                    {week.map((dayData, dayIndex) => (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className={`${dayData.events ? "flex-col items-center pt-3 pb-0 px-3" : "items-start justify-center pt-3 pb-0 px-0"} ${dayIndex < 6 ? "border-r [border-right-style:solid] border-[#eaeaea]" : ""} flex gap-2 relative flex-1 self-stretch grow`}
                      >
                        <div
                          className={`flex w-[26px] h-[26px] items-center justify-center gap-2.5 relative rounded-[100px] ${dayData.isToday ? "bg-[#587cd7]" : ""}`}
                        >
                          <div
                            className={`relative w-8 ml-[-3.00px] mr-[-3.00px] [font-family:'Manrope',Helvetica] font-semibold ${dayData.isOtherMonth ? "text-[#bcbdc2]" : dayData.isToday ? "text-[#fbfbfb]" : "text-[#111111]"} text-sm text-center tracking-[-0.28px] leading-[21px]`}
                          >
                            {dayData.day}
                          </div>
                        </div>

                        {dayData.events &&
                          dayData.events.map((event, eventIndex) => (
                            <div
                              key={eventIndex}
                              className="flex items-center gap-2 px-2 py-1 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-md overflow-hidden shadow-[0px_1px_2px_#00000014]"
                            >
                              <div
                                className="relative w-1 h-7 rounded-[100px]"
                                style={{ backgroundColor: event.color }}
                              />
                              <div className="relative w-[110px] h-8 mr-[-4.86px]">
                                <div className="absolute top-0 left-4 w-[90px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-xs tracking-[-0.24px] leading-[18px]">
                                  {event.name}
                                </div>
                                <img
                                  className="absolute top-1 left-0 w-3 h-3"
                                  alt="Envelope open"
                                  src="https://c.animaapp.com/mfr8j7rbwvSuXy/img/envelopeopen.svg"
                                />
                                <div className="absolute top-[18px] left-px [font-family:'Manrope',Helvetica] font-normal text-[#4f5059] text-[10px] tracking-[0] leading-[14px] whitespace-nowrap">
                                  {event.status}
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </section>
  );
};
