import {
  ArrowUpDownIcon,
  CalendarIcon,
  FilterIcon,
  MoreHorizontalIcon,
  SearchIcon,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const PipelineSection = (): JSX.Element => {
  const metricCards = [
    {
      value: "84",
      label: "Interested Contacts",
      change: "12%",
      changeType: "positive",
      lastValue: "65",
      lastPeriod: "last year",
      chartSrc: "https://c.animaapp.com/mfr838xgQVdAo5/img/container-1.svg",
    },
    {
      value: "25",
      label: "Meeting Scheduled",
      change: "5%",
      changeType: "positive",
      lastValue: "20",
      lastPeriod: "last month",
      chartSrc: "https://c.animaapp.com/mfr838xgQVdAo5/img/container-2.svg",
    },
    {
      value: "$180,000",
      label: "Commitments",
      change: "10%",
      changeType: "negative",
      lastValue: "$200,000",
      lastPeriod: "last month",
      chartSrc: "https://c.animaapp.com/mfr838xgQVdAo5/img/container.svg",
    },
  ];

  const pipelineNotes = [
    {
      status: "Prospect",
      statusColor: "bg-[#17a34a29] text-[#17a34a]",
      title: "European Growth Fund",
      description:
        "European Growth Fund targeting shows strong interest. Schedule follow-up calls with top 5 prospects this week.",
      author: "John Alessandro",
      date: "Sep 14, 2025 at 4:43 PM",
      comments: "10",
    },
    {
      status: "Meeting Scheduled",
      statusColor: "bg-[#1e3a8a29] text-blue-900",
      title: "Follow Up With Major Donors",
      description:
        "Draft personalized thank you emails for everyone who donated over $1,000 in the last quarter. Mention the spe..",
      author: "John Alessandro",
      date: "Sep 15, 2025, 9:00 AM",
      comments: "10",
    },
    {
      status: "Second Meeting",
      statusColor: "bg-[#f59e0b29] text-amber-500",
      title: "Update Donor Database",
      description:
        "Import the list of attendees from the charity walk and update their contact information and donation history.",
      author: "John Alessandro",
      date: "Sept 17, 2025, 3:30 PM",
      comments: "10",
    },
    {
      status: "No Show",
      statusColor: "bg-[#db515129] text-[#db5050]",
      title: "New Intern Onboarding",
      description:
        "Prepare an onboarding plan for our new fundraising intern, starting next Monday. Include an overview of our CRM..",
      author: "John Alessandro",
      date: "Sept 18, 2025, 9:00 AM",
      comments: "10",
    },
    {
      status: "Term Sheet",
      statusColor: "bg-[#fb923c29] text-orange-400",
      title: "Board Meeting Prep",
      description:
        "Prepare the Q3 fundraising report and the presentation slides for the upcoming board meeting.",
      author: "John Alessandro",
      date: "Sep 19, 2025, 1:00 PM",
      comments: "10",
    },
    {
      status: "Won",
      statusColor: "bg-[#10b98129] text-emerald-500",
      title: "Campaign Performance Analysis",
      description:
        'Analyze the performance of the "Summer Giving" campaign. Let\'s identify what worked well and what we can impro..',
      author: "John Alessandro",
      date: "Sep 20, 2025, 2:00 PM",
      comments: "10",
    },
    {
      status: "Dataroom Granted",
      statusColor: "bg-[#5b21b629] text-violet-800",
      title: "Follow-up On John Smith's Inquiry",
      description:
        'John Smith emailed asking for more details about our "Clean Water Initiative." Send him the project report and a lin..',
      author: "John Alessandro",
      date: "Sept 21, 2025, 2:00 PM",
      comments: "10",
    },
  ];

  return (
    <section className="w-full h-full bg-white rounded-[20px_0px_0px_0px] flex flex-col overflow-hidden border border-solid border-[#eaeaea]">
      <header className="flex ml-5 w-[1140px] h-[53px] relative mt-5 items-center justify-between">
        <div className="flex flex-col w-[422px] items-start gap-0.5 relative">
          <h1 className="self-stretch mt-[-1.00px] font-semibold text-[#111111] text-xl leading-[30px] relative [font-family:'Manrope',Helvetica] tracking-[0]">
            Deal Pipeline
          </h1>
          <p className="self-stretch font-normal text-[#4f5059] text-sm leading-[21px] relative [font-family:'Manrope',Helvetica] tracking-[0]">
            Track And Manage Your Fundraising Opportunities
          </p>
        </div>

        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <div className="relative w-[332px] h-[37px] bg-white rounded-lg overflow-hidden border border-solid border-[#eaeaea]">
            <div className="relative top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_156px)] w-[238px] flex gap-2.5">
              <SearchIcon className="w-5 h-5 text-[#4f5059]" />
              <Input
                placeholder="SearchIcon transaction, campaigns..."
                className="w-[206px] h-5 border-none p-0 [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-sm tracking-[-0.31px] leading-5 bg-transparent focus-visible:ring-0"
              />
            </div>
          </div>

          <Button className="inline-flex h-10 items-center gap-2 px-3 py-2 relative flex-[0_0_auto] bg-[#09215e] rounded-lg border-[0.5px] border-solid border-[#fbfbfb]">
            <span className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-[#fbfbfb] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
              Add Prosprect
            </span>
          </Button>
        </div>
      </header>

      <div className="flex ml-5 w-[1140px] h-40 relative mt-6 items-center gap-5">
        {metricCards.map((card, index) => (
          <Card
            key={index}
            className="flex flex-col h-[162px] items-start justify-between p-4 relative flex-1 grow mt-[-1.00px] mb-[-1.00px] bg-white rounded-[20px] overflow-hidden border border-solid border-[#eaeaea]"
          >
            <CardContent className="p-0 w-full">
              <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-0.5 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-bold text-[#111111] text-[32px] tracking-[-0.64px] leading-[35.2px] whitespace-nowrap">
                      {card.value}
                    </div>
                  </div>
                  <div className="w-fit font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope',Helvetica] tracking-[0]">
                    {card.label}
                  </div>
                </div>

                <Badge
                  className={`inline-flex items-center gap-1 pl-1 pr-1.5 py-1 relative flex-[0_0_auto] ${
                    card.changeType === "positive"
                      ? "bg-[#17a34a14]"
                      : "bg-[#a3171714]"
                  } rounded-[100px] border-none`}
                >
                  <img
                    className="relative flex-[0_0_auto]"
                    alt="Change indicator"
                    src={
                      card.changeType === "positive"
                        ? "https://c.animaapp.com/mfr838xgQVdAo5/img/up.svg"
                        : "https://c.animaapp.com/mfr838xgQVdAo5/img/up-2.svg"
                    }
                  />
                  <span
                    className={`relative w-fit mt-[-0.50px] [font-family:'Manrope',Helvetica] font-semibold ${
                      card.changeType === "positive"
                        ? "text-[#1b8341]"
                        : "text-[#831b1b]"
                    } text-xs text-center tracking-[0] leading-[13.2px] whitespace-nowrap`}
                  >
                    {card.change}
                  </span>
                </Badge>
              </div>

              <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto] mt-4">
                <div className="inline-flex items-center justify-center gap-0.5 relative flex-[0_0_auto]">
                  <div className="w-fit mt-[-1.00px] font-semibold text-[#111111] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope',Helvetica] tracking-[0]">
                    {card.lastValue}
                  </div>
                  <div className="w-fit mt-[-1.00px] font-normal text-[#8d8e93] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope',Helvetica] tracking-[0]">
                    {card.lastPeriod}
                  </div>
                </div>

                <img
                  className="relative w-[113px] h-[51px] mt-[-1.00px] mb-[-1.00px] mr-[-1.00px]"
                  alt="Chart"
                  src={card.chartSrc}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="ml-[19px] w-[1142px] h-[531px] relative mt-[23px] rounded-[20px] overflow-hidden border border-solid border-[#eaeaea]">
        <CardContent className="flex flex-col items-start gap-[22px] p-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
              <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                Pipeline Notes
              </h2>
              <p className="w-fit font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope',Helvetica] tracking-[0]">
                Real-time Market Analysis And Trends
              </p>
            </div>

            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
              <div className="relative w-[332px] h-[37px] bg-white rounded-lg overflow-hidden border border-solid border-[#eaeaea]">
                <div className="relative top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_156px)] w-[202px] flex gap-2.5">
                  <SearchIcon className="w-5 h-5 text-[#4f5059]" />
                  <Input
                    placeholder="SearchIcon notes, campaigns..."
                    className="w-[170px] h-5 border-none p-0 [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-sm tracking-[-0.31px] leading-5 bg-transparent focus-visible:ring-0"
                  />
                </div>
              </div>

              <Button className="inline-flex h-10 items-center gap-2 px-3 py-2 relative flex-[0_0_auto] bg-[#09215e] rounded-lg border-[0.5px] border-solid border-[#fbfbfb]">
                <img
                  className="relative w-[10.5px] h-[10.5px]"
                  alt="Add icon"
                  src="https://c.animaapp.com/mfr838xgQVdAo5/img/vector.svg"
                />
                <span className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-[#fbfbfb] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                  Add Note
                </span>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <Tabs
              defaultValue="notes"
              className="inline-flex items-center p-0.5 relative flex-[0_0_auto] bg-[#fbfbfb] rounded-lg border border-solid border-[#eaeaea]"
            >
              <TabsList className="bg-transparent p-0 h-auto">
                <TabsTrigger
                  value="kanban"
                  className="flex w-[156px] items-center justify-center gap-2.5 px-4 py-1.5 relative data-[state=active]:bg-white data-[state=active]:text-[#272a34] data-[state=active]:border data-[state=active]:border-[#eaeaea] data-[state=active]:font-semibold"
                >
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#7b7f93] text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap">
                    Kanban
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="calendar"
                  className="flex w-[157px] items-center justify-center gap-2.5 px-4 py-1.5 relative data-[state=active]:bg-white data-[state=active]:text-[#272a34] data-[state=active]:border data-[state=active]:border-[#eaeaea] data-[state=active]:font-semibold"
                >
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#7b7f93] text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap">
                    CalendarIcon
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="notes"
                  className="flex w-[159px] items-center justify-center gap-2.5 px-4 py-2 relative mt-[-1.00px] bg-white rounded-md border border-solid border-[#eaeaea] data-[state=active]:bg-white data-[state=active]:text-[#272a34] data-[state=active]:border data-[state=active]:border-[#eaeaea] data-[state=active]:font-semibold"
                >
                  <span className="relative w-fit mt-[-0.50px] [font-family:'Manrope',Helvetica] font-semibold text-[#272a34] text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap">
                    Notes
                  </span>
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="inline-flex gap-3 flex-[0_0_auto] items-center relative">
              <Button
                variant="outline"
                className="inline-flex h-10 items-center gap-3 px-3 py-2 relative flex-[0_0_auto] rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
              >
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <ArrowUpDownIcon className="relative w-4 h-4" />
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                    Sort
                  </span>
                </div>
                <img
                  className="relative w-3 h-3"
                  alt="Chevron down"
                  src="https://c.animaapp.com/mfr838xgQVdAo5/img/chevron-down.svg"
                />
              </Button>

              <Button
                variant="outline"
                className="inline-flex h-10 items-center gap-3 px-3 py-2 relative flex-[0_0_auto] rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
              >
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <FilterIcon className="relative w-4 h-4" />
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                    FilterIcon
                  </span>
                </div>
                <img
                  className="relative w-3 h-3"
                  alt="Chevron down"
                  src="https://c.animaapp.com/mfr838xgQVdAo5/img/chevron-down.svg"
                />
              </Button>

              <Button
                variant="outline"
                className="inline-flex h-10 items-center gap-3 px-3 py-2 relative flex-[0_0_auto] rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
              >
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <CalendarIcon className="relative w-4 h-4" />
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                    This Week
                  </span>
                </div>
                <img
                  className="relative w-3 h-3"
                  alt="Chevron down"
                  src="https://c.animaapp.com/mfr838xgQVdAo5/img/chevron-down.svg"
                />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 relative self-stretch w-full flex-[0_0_auto]">
            {pipelineNotes.map((note, index) => (
              <Card
                key={index}
                className="flex flex-col w-[358px] h-44 gap-3 p-4 bg-white rounded-[14px] border border-solid border-[#eaeaea]"
              >
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-3 relative self-stretch w-full flex-[0_0_auto]">
                    <Badge
                      className={`inline-flex items-center justify-center gap-1 px-3 py-1 relative flex-[0_0_auto] ${note.statusColor} rounded-[100px] border-none hover:${note.statusColor}`}
                    >
                      <span className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-xs tracking-[-0.24px] leading-3 whitespace-nowrap">
                        {note.status}
                      </span>
                    </Badge>
                    <MoreHorizontalIcon className="relative w-[18px] h-[18px]" />
                  </div>

                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto] mb-3">
                    <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-sm tracking-[-0.28px] leading-[16.8px]">
                      {note.title}
                    </h3>
                    <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-normal text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px]">
                      {note.description}
                    </p>
                  </div>

                  <img
                    className="relative self-stretch w-full h-px mb-3"
                    alt="Divider"
                    src="https://c.animaapp.com/mfr838xgQVdAo5/img/line-3.svg"
                  />

                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                      <Avatar className="w-[25px] h-[25px]">
                        <AvatarImage
                          src="https://c.animaapp.com/mfr838xgQVdAo5/img/profile-image-7.png"
                          alt="Profile"
                        />
                        <AvatarFallback className="bg-[#d9d9d9]">
                          JA
                        </AvatarFallback>
                      </Avatar>
                      <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                        <span className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-[10px] tracking-[-0.20px] leading-[10px] whitespace-nowrap">
                          {note.author}
                        </span>
                        <span className="relative w-fit [font-family:'Manrope',Helvetica] font-normal text-[#84858b] text-[8px] tracking-[-0.16px] leading-[8px] whitespace-nowrap">
                          {note.date}
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <img
                        className="relative w-3 h-3"
                        alt="Comments"
                        src="https://c.animaapp.com/mfr838xgQVdAo5/img/frame.svg"
                      />
                      <span className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-[#84858b] text-[10px] tracking-[-0.20px] leading-[10px] whitespace-nowrap">
                        {note.comments}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="flex flex-col w-[358px] h-44 items-center justify-center p-4 bg-white rounded-[14px] border-dashed border border-[#eaeaea]">
              <CardContent className="p-0 flex items-center justify-center">
                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <img
                    className="relative w-6 h-6"
                    alt="Add icon"
                    src="https://c.animaapp.com/mfr838xgQVdAo5/img/vuesax-linear-add.svg"
                  />
                  <span className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-base tracking-[0] leading-6 whitespace-nowrap">
                    Add Notes
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
