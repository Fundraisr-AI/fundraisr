import {
  CalendarIcon,
  ClockIcon,
  EditIcon,
  EyeIcon,
  FilterIcon,
  MailIcon,
  MapPinIcon,
  MoreHorizontalIcon,
  PhoneIcon,
  SearchIcon,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import { Card as WelcomeCard } from "../../../../components/Card";
import { Input } from "../../../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const DashboardSection = (): JSX.Element => {

  const remainingBars = Array.from({ length: 72 }, (_, index) => ({
    width: "w-[1.5px]",
    height: "h-[26px]",
    bgColor: "bg-[#50a57c]",
    marginLeft: index === 71 ? "mr-[-2.50px]" : "",
  }));

  // Market insights data
  const marketInsightsData = [
    {
      color: "bg-[#ccdee0]",
      label: "Pension Funds",
      value: "1400",
      percentage: "(60%)",
    },
    {
      color: "bg-[#33a4a9]",
      label: "Familiy Office",
      value: "8129",
      percentage: "(60%)",
    },
    {
      color: "bg-[#1b8084]",
      label: "Healthcare Innovation",
      value: "5347",
      percentage: "(60%)",
    },
  ];

  const marketStatsData = [
    { color: "bg-[#edb52b]", label: "Total Contacts", value: "1500" },
    { color: "bg-[#329369]", label: "Positive Replies", value: "45" },
    { color: "bg-[#220ea2]", label: "Meetings Scheduled", value: "12" },
    { color: "bg-[#933277]", label: "Live Campaigns", value: "3" },
  ];

  // Campaign performance data
  const campaignData = [
    {
      title: "Healthcare Innovation",
      subtitle: "Healthcare Focused",
      geography: {
        flag: "https://c.animaapp.com/mfqjua33FHoyZF/img/united-states-of-america--us-.svg",
        location: "United States",
      },
      leadList: "Healthcare VCs",
      copy: "Healthcare Focused",
      status: { type: "approved", label: "Approved" },
    },
    {
      title: "European Growth Fund",
      subtitle: "Growth Equity",
      geography: {
        flag: "https://c.animaapp.com/mfqjua33FHoyZF/img/united-arab-emirates--ae-.svg",
        location: "Middle East",
      },
      leadList: "Healthcare VCs",
      copy: "Healthcare Focused",
      status: { type: "draft", label: "Draft" },
    },
    {
      title: "Healthcare Innovation",
      subtitle: "Healthcare Focused",
      geography: {
        flag: "https://c.animaapp.com/mfqjua33FHoyZF/img/china--cn-.svg",
        location: "Asia",
      },
      leadList: "Healthcare VCs",
      copy: "Healthcare Focused",
      status: { type: "completed", label: "Completed" },
    },
    {
      title: "European Growth Fund",
      subtitle: "Growth Equity",
      geography: {
        flag: "https://c.animaapp.com/mfqjua33FHoyZF/img/europe--eu-.svg",
        location: "Europe",
      },
      leadList: "Healthcare VCs",
      copy: "Healthcare Focused",
      status: { type: "in-progress", label: "In Progress" },
    },
    {
      title: "Healthcare Innovation",
      subtitle: "Healthcare Focused",
      geography: {
        flag: "https://c.animaapp.com/mfqjua33FHoyZF/img/brazil--br-.svg",
        location: "Latin America",
      },
      leadList: "Healthcare VCs",
      copy: "Healthcare Focused",
      status: { type: "approved", label: "Approved" },
    },
    {
      title: "Tech Venture Outreach Q4",
      subtitle: "Venture Capital",
      geography: {
        flag: "https://c.animaapp.com/mfqjua33FHoyZF/img/australia--au-.svg",
        location: "Oceania",
      },
      leadList: "Healthcare VCs",
      copy: "Healthcare Focused",
      status: { type: "in-progress", label: "In Progress" },
    },
    {
      title: "Healthcare Innovation",
      subtitle: "Healthcare Focused",
      geography: {
        flag: "https://c.animaapp.com/mfqjua33FHoyZF/img/twemoji-flag-australia.svg",
        location: "United States",
      },
      leadList: "Healthcare VCs",
      copy: "Healthcare Focused",
      status: { type: "approved", label: "Approved" },
    },
  ];

  // Upcoming calls data
  const upcomingCallsData = [
    {
      day: "Mon",
      date: "24",
      title: "Avalanche Daily Meeting",
      time: "10:30 - 11:00 AM (UTC)",
      location: "Google Meet",
      participants: [
        "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group.png",
        "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-1.png",
        "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-2.png",
        "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-3.png",
      ],
      additionalCount: "+6",
      isActive: true,
    },
    {
      day: "Tue",
      date: "25",
      title: "Management Standup",
      time: "09:20 -10:00 AM (UTC)",
      location: "Google Meet",
      participants: [
        "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-4.png",
        "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-5.png",
        "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-6.png",
        "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-7.png",
      ],
      additionalCount: "+4",
      isActive: false,
    },
    {
      day: "Tue",
      date: "25",
      title: "Avalanche Daily Meeting",
      time: "08:00 -10:00 AM (UTC)",
      location: "Google Meet",
      participants: [
        "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-8.png",
        "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-9.png",
        "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-10.png",
        "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-11.png",
      ],
      additionalCount: "+8",
      isActive: false,
    },
    {
      day: "Wed",
      date: "26",
      title: "Meeting with Management Team",
      time: "09:30 -10:00 AM (UTC)",
      location: "Google Meet",
      participants: [
        "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-12.png",
        "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-13.png",
        "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-14.png",
        "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-15.png",
      ],
      additionalCount: "+3",
      isActive: false,
    },
  ];

  // Recent leads data
  const recentLeadsData = [
    {
      name: "Leslie Alexander",
      avatar: "https://c.animaapp.com/mfqjua33FHoyZF/img/rectangle-1.png",
      date: "2024-01-15",
      email: "lesliealex@mail.com",
      phone: "1-566-581-9703 x039",
      company: "TechVentures Capital",
      status: { type: "in-progress", label: "In Progress" },
    },
    {
      name: "Carmen Gottlieb",
      avatar: "https://c.animaapp.com/mfqjua33FHoyZF/img/rectangle-2.png",
      date: "2024-01-15",
      email: "lesliealex@mail.com",
      phone: "1-566-581-9703 x039",
      company: "TechVentures Capital",
      status: { type: "pending", label: "Pending" },
    },
    {
      name: "Sam Bauch",
      avatar: "https://c.animaapp.com/mfqjua33FHoyZF/img/rectangle-2-1.png",
      date: "2024-01-15",
      email: "lesliealex@mail.com",
      phone: "1-566-581-9703 x039",
      company: "TechVentures Capital",
      status: { type: "pending", label: "Pending" },
    },
    {
      name: "Gwendolyn Schulist",
      avatar: "https://c.animaapp.com/mfqjua33FHoyZF/img/rectangle-2-2.png",
      date: "2024-01-15",
      email: "lesliealex@mail.com",
      phone: "1-566-581-9703 x039",
      company: "TechVentures Capital",
      status: { type: "closed", label: "Closed" },
    },
    {
      name: "Candice Becker",
      avatar: "https://c.animaapp.com/mfqjua33FHoyZF/img/rectangle-1-1.png",
      date: "2024-01-15",
      email: "lesliealex@mail.com",
      phone: "1-566-581-9703 x039",
      company: "TechVentures Capital",
      status: { type: "in-progress", label: "In Progress" },
    },
    {
      name: "Aubrey Kuhn",
      avatar: "https://c.animaapp.com/mfqjua33FHoyZF/img/rectangle-1-2.png",
      date: "2024-01-15",
      email: "lesliealex@mail.com",
      phone: "1-566-581-9703 x039",
      company: "TechVentures Capital",
      status: { type: "closed", label: "Closed" },
    },
  ];

  const getStatusBadgeStyles = (type: string) => {
    switch (type) {
      case "approved":
      case "closed":
        return "bg-[#ECF8F1] text-[#1B8441] hover:bg-[#ECF8F1] hover:text-[#1B8441]";
      case "completed":
        return "bg-[#D11818]/[0.16] text-[#D11818] hover:bg-[#D11818]/[0.16] hover:text-[#D11818]";
      case "in-progress":
        return "bg-[#D1A318]/[0.16] text-[#D1A318] hover:bg-[#D1A318]/[0.16] hover:text-[#D1A318]";
      case "draft":
      case "pending":
        return "bg-[#EFEFEF] text-[#3B4C63] hover:bg-[#EFEFEF] hover:text-[#3B4C63]";
      default:
        return "badge-neutral";
    }
  };

  return (
    <div className="w-full h-full flex flex-col content-section animate-fade-in-up">
      {/* Header Section */}
      <header className="flex mx-6 h-[60px] relative mt-6 items-center justify-between">
        <div className="flex flex-col items-start gap-1 relative">
          <h1 className="font-bold text-foreground text-2xl leading-tight tracking-tight">
            Dashboard
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Track Your Fundraising Progress And Investor Engagement
          </p>
        </div>

        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4f5059]" />
          <Input
            placeholder="Search transactions, campaigns..."
            className="w-[332px] h-[37px] pl-10 [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-sm tracking-[-0.31px]"
          />
        </div>
      </header>

      {/* Welcome Card */}
      <div className="mx-6 relative mt-6">
        <WelcomeCard />
      </div>

      {/* Market Insights Section */}
      <Card className="mx-[19px] flex-1 max-h-[404px] mt-[18px] rounded-[20px] border border-solid border-[#eaeaea] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <CardContent className="flex flex-col gap-2.5 p-5">
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
                <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
                  Market Insights
                </h2>
                <p className="w-fit font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope',Helvetica] tracking-[0]">
                  Real-time Market Analysis And Trends
                </p>
              </div>

              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <Tabs
                  defaultValue="investor-type"
                  className="inline-flex h-10 items-center p-0.5 relative flex-[0_0_auto] bg-[#f6f6f6] rounded-lg"
                >
                  <TabsList className="bg-transparent p-0 h-auto">
                    <TabsTrigger
                      value="geography"
                      className="px-4 py-1.5 text-[#7b7f93] data-[state=active]:bg-transparent data-[state=active]:text-[#7b7f93]"
                    >
                      Geography Distribution
                    </TabsTrigger>
                    <TabsTrigger
                      value="investor-type"
                      className="px-4 py-2 bg-white rounded-md text-[#272a34] font-semibold data-[state=active]:bg-white data-[state=active]:text-[#272a34]"
                    >
                      Investor Type Distribution
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                <Button
                  variant="outline"
                  className="h-10 gap-2 pl-3 pr-2 py-2 rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
                >
                  <span className="[font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px]">
                    Weekly View
                  </span>
                  <CalendarIcon className="w-4 h-4" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 p-1 rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
                >
                  <MoreHorizontalIcon className="w-6 h-6" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-bold text-[#111111] text-3xl tracking-[-0.60px] leading-[33px] whitespace-nowrap">
                  12,500
                </div>
                <Badge className="inline-flex items-center gap-1 pl-1 pr-1.5 py-1 bg-[#17a34a14] text-[#1b8341] rounded-[100px]">
                  <img
                    className="relative flex-[0_0_auto]"
                    alt="Up"
                    src="https://c.animaapp.com/mfqjua33FHoyZF/img/up.svg"
                  />
                  <span className="font-semibold text-xs">4.3%</span>
                </Badge>
              </div>

              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-[187px] h-[26px] bg-[#b3d4d6] rounded" />
                  <div className="relative w-[90px] h-[26px] bg-[#67aaad] rounded" />
                  <div className="relative flex-1 grow h-[26px] bg-[#1b8084] rounded" />
                </div>

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  {marketInsightsData.map((item, index) => (
                    <div
                      key={index}
                      className="flex h-8 items-center gap-4 pt-0 pb-2 px-0 relative self-stretch w-full border-b border-[#eaeaea]"
                    >
                      <div className="flex items-center gap-3 relative flex-1 grow">
                        <div
                          className={`${item.color} relative w-[13px] h-[5px] rounded-md`}
                        />
                        <div className="relative flex-1 mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#192330] text-base tracking-[-0.64px] leading-[22.4px]">
                          {item.label}
                        </div>
                      </div>
                      <div className="font-semibold text-[#192330] text-sm tracking-[-0.56px] leading-[19.6px] relative w-fit [font-family:'Manrope',Helvetica] whitespace-nowrap">
                        {item.value}
                      </div>
                      <div className="font-medium text-[#4f5059] text-sm tracking-[-0.56px] leading-[19.6px] relative w-fit [font-family:'Manrope',Helvetica] whitespace-nowrap">
                        {item.percentage}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex w-[1100px] items-start gap-[60px] px-3 py-2 relative flex-[0_0_auto] bg-[#f9f9f9] rounded-lg">
              {marketStatsData.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-end gap-1 relative"
                >
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div
                      className={`${stat.color} relative w-2 h-2 rounded-[100px]`}
                    />
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#84858b] text-sm tracking-[-0.28px] leading-[21px] whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                  <div className="relative w-fit [font-family:'Manrope',Helvetica] font-bold text-[#111111] text-2xl tracking-[-0.48px] leading-9 whitespace-nowrap">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bottom Section with Campaign Performance and Upcoming Calls */}
      <div className="flex mx-5 flex-1 max-h-[606px] relative mt-[22px] items-start gap-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        {/* Campaign Performance */}
        <Card className="flex-col h-[605px] gap-5 px-0 py-5 flex-1 grow flex relative items-start rounded-[20px] overflow-hidden border border-solid border-[#eaeaea]">
          <CardHeader className="flex flex-col items-start gap-5 px-5 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
                <h2
                  className="relative w-fit mt-
[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap"
                >
                  Campaign Performance
                </h2>
                <p className="w-fit font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope',Helvetica] tracking-[0]">
                  Track Campaign Results With Live Data And Actionable Insights
                </p>
              </div>

              <Button
                variant="outline"
                className="h-8 gap-2 pl-3 pr-2 py-2 rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
              >
                <FilterIcon className="w-4 h-4" />
                <span className="[font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px]">
                  Filters
                </span>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mb-[-20.00px] p-0">
            <Table>
              <TableHeader className="bg-[#eef1f4]">
                <TableRow className="border-t border-b border-[#d0d5dd]">
                  <TableHead className="w-[220px] pl-5 pr-4 py-4 border-r border-[#d0d5dd] font-semibold text-[#3b4c63] text-xs tracking-[0.24px]">
                    CAMPAIGN TITLE
                  </TableHead>
                  <TableHead className="w-[140px] p-4 border-r border-[#d0d5dd] font-semibold text-[#3b4c63] text-xs tracking-[0.24px]">
                    GEOGRAPHY
                  </TableHead>
                  <TableHead className="w-[105px] p-4 border-r border-[#d0d5dd] font-semibold text-[#3b4c63] text-xs tracking-[0.24px]">
                    LEAD LIST
                  </TableHead>
                  <TableHead className="w-[100px] p-4 border-r border-[#d0d5dd] font-medium text-[#3b4c63] text-xs tracking-[-0.48px]">
                    COPY
                  </TableHead>
                  <TableHead className="w-[145px] p-4 border-r border-[#d0d5dd] font-medium text-[#3b4c63] text-xs tracking-[-0.48px]">
                    STATUS
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaignData.map((campaign, index) => (
                  <TableRow
                    key={index}
                    className="h-[72px] border-b border-[#e9eaec]"
                  >
                    <TableCell className="w-[220px] pl-5 pr-4 py-4 border-r border-[#e9eaec]">
                      <div className="flex items-center gap-2">
                        <img
                          className="relative flex-[0_0_auto]"
                          alt="Frame"
                          src="https://c.animaapp.com/mfqjua33FHoyZF/img/frame-1171275486.svg"
                        />
                        <div className="inline-flex flex-col items-start justify-center">
                          <div className="font-semibold text-[#192330] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
                            {campaign.title}
                          </div>
                          <div className="font-normal text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica] text-[#3b4c63]">
                            {campaign.subtitle}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="w-[140px] p-4 border-r border-[#e9eaec]">
                      <div className="flex items-center gap-2">
                        <img
                          className="relative w-5 h-[15px]"
                          alt="Flag"
                          src={campaign.geography.flag}
                        />
                        <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
                          {campaign.geography.location}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="w-[105px] p-4 border-r border-[#e9eaec]">
                      <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
                        {campaign.leadList}
                      </span>
                    </TableCell>
                    <TableCell className="w-[100px] p-4 border-r border-[#e9eaec]">
                      <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
                        {campaign.copy}
                      </span>
                    </TableCell>
                    <TableCell className="w-[145px] p-4 border-r border-[#e9eaec]">
                      <Badge
                        className={`inline-flex items-center justify-center gap-1 px-3 py-1 rounded-[100px] ${getStatusBadgeStyles(campaign.status.type)}`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-[80px] ${campaign.status.type === "approved" || campaign.status.type === "closed" ? "bg-[#1B8441]" : campaign.status.type === "draft" || campaign.status.type === "pending" ? "bg-[#C3C8D0]" : campaign.status.type === "completed" ? "bg-[#D11818]" : campaign.status.type === "in-progress" ? "bg-[#D1A318]" : "bg-[#d1a218]"}`}
                        />
                        <span className="font-medium text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
                          {campaign.status.label}
                        </span>
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="absolute w-[calc(100%_-_2px)] left-0 bottom-0.5 h-[65px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />
          </CardContent>
        </Card>

        {/* Upcoming Calls */}
        <Card className="w-[428px] gap-2.5 p-5 rounded-[20px] overflow-hidden border border-solid border-[#eaeaea]">
          <CardContent className="flex flex-col items-start gap-5 relative flex-1 grow p-0">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
                <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
                  Upcoming Calls
                </h2>
                <p className="w-fit font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope',Helvetica] tracking-[0]">
                  Stay On Top Of Scheduled Meetings And Client Calls
                </p>
              </div>

              <Button className="h-8 px-3 py-1 bg-white rounded-lg border-[0.5px] border-solid border-[#09215e] text-[#09215e]">
                <span className="[font-family:'Manrope',Helvetica] font-medium text-xs tracking-[-0.24px] leading-[18px]">
                  Add Event
                </span>
              </Button>
            </div>

            <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <Tabs
                defaultValue="ongoing"
                className="flex p-0.5 self-stretch w-full flex-[0_0_auto] bg-[#f6f6f6] rounded-lg items-center"
              >
                <TabsList className="bg-transparent p-0 h-auto w-full">
                  <TabsTrigger
                    value="ongoing"
                    className="flex-1 px-4 py-2 bg-white rounded-md text-[#272a34] font-semibold data-[state=active]:bg-white data-[state=active]:text-[#272a34]"
                  >
                    On Going
                  </TabsTrigger>
                  <TabsTrigger
                    value="finished"
                    className="flex-1 px-4 py-1.5 text-[#7b7f93] data-[state=active]:bg-white data-[state=active]:text-[#272a34]"
                  >
                    Finished
                  </TabsTrigger>
                  <TabsTrigger
                    value="cancelled"
                    className="flex-1 px-4 py-1.5 text-[#7b7f93] data-[state=active]:bg-white data-[state=active]:text-[#272a34]"
                  >
                    Cancelled
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                {upcomingCallsData.map((call, index) => (
                  <Card
                    key={index}
                    className={`relative self-stretch w-full h-[103px] rounded-[10px] overflow-hidden border border-solid ${call.isActive ? "border-[#4e7fe3]" : "border-[#eaeaea]"}`}
                  >
                    <CardContent className="p-0 relative h-full">
                      <div className="inline-flex flex-col items-center justify-center gap-2 pl-0 pr-3 py-0 absolute top-[15px] left-[15px] border-r border-[#eaeaea]">
                        <div
                          className={`w-[60px] text-center relative mt-[-0.50px] [font-family:'Manrope',Helvetica] text-sm tracking-[-0.28px] leading-[19.6px] ${call.isActive ? "font-semibold text-[#272a34]" : "font-normal text-[#272a34b2]"}`}
                        >
                          {call.day}
                        </div>
                        <div
                          className={`relative self-stretch [font-family:'Manrope',Helvetica] text-3xl text-center tracking-[0] leading-[normal] ${call.isActive ? "font-semibold text-[#111111]" : "font-normal text-[#030512b2]"}`}
                        >
                          {call.date}
                        </div>
                      </div>

                      <div className="inline-flex flex-col items-start gap-2 absolute top-[calc(50.00%_-_32px)] left-[104px]">
                        <div className="relative mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#272a34] text-sm tracking-[-0.28px] leading-[19.6px]">
                          {call.title}
                        </div>
                        <div className="relative [font-family:'Manrope',Helvetica] font-medium text-[#7b7f93] text-xs tracking-[-0.24px] leading-[16.8px] whitespace-nowrap">
                          {call.time}
                        </div>
                      </div>

                      <div className="flex flex-col w-[142px] items-start justify-center gap-3 p-2 absolute top-[calc(50.00%_-_36px)] left-[235px] bg-[#fbfbfb] rounded-lg border border-solid border-[#eaeaea]">
                        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                            <MapPinIcon className="w-4 h-4 text-[#7b7f93]" />
                            <div className="relative w-[88px] h-4 mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#7b7f93] text-xs tracking-[-0.24px] leading-[16.8px] whitespace-nowrap">
                              {call.location}
                            </div>
                          </div>
                          <MoreHorizontalIcon className="w-4 h-4 text-[#7b7f93]" />
                        </div>

                        <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                          <div className="inline-flex items-center relative flex-[0_0_auto]">
                            {call.participants.map((participant, pIndex) => (
                              <Avatar
                                key={pIndex}
                                className={`w-6 h-6 ${pIndex > 0 ? "-ml-3" : ""}`}
                              >
                                <AvatarImage
                                  src={participant}
                                  alt="Participant"
                                />
                                <AvatarFallback>P</AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                          <div className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-[#7b7f93] text-xs tracking-[-0.24px] leading-[16.8px] whitespace-nowrap">
                            {call.additionalCount}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Leads Section */}
      <Card className="mx-[19px] h-[531px] mt-[19px] rounded-[20px] overflow-hidden border border-solid border-[#eaeaea] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <CardHeader className="flex flex-col items-start gap-5 px-5 py-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
              <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                Recent Leads
              </h2>
              <p className="w-fit font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope',Helvetica] tracking-[0]">
                Stay Updated On Your Most Recent Lead Activity
              </p>
            </div>

            <Tabs
              defaultValue="this-week"
              className="inline-flex p-0.5 flex-[0_0_auto] bg-[#f6f6f6] rounded-lg items-center"
            >
              <TabsList className="bg-transparent p-0 h-auto">
                <TabsTrigger
                  value="this-week"
                  className="px-4 py-2 bg-white rounded-md text-[#272a34] font-semibold data-[state=active]:bg-white data-[state=active]:text-[#272a34]"
                >
                  This Week
                </TabsTrigger>
                <TabsTrigger
                  value="this-month"
                  className="px-4 py-1.5 text-[#7b7f93] data-[state=active]:bg-white data-[state=active]:text-[#272a34]"
                >
                  This Month
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mb-[-20.00px] p-0">
          <Table>
            <TableHeader className="bg-[#eef1f4]">
              <TableRow className="border-t border-b border-[#d0d5dd]">
                <TableHead className="w-[282px] pl-5 pr-4 py-4 border-r border-[#d0d5dd] font-semibold text-[#3b4c63] text-xs tracking-[0.24px]">
                  NAME
                </TableHead>
                <TableHead className="w-64 p-4 border-r border-[#d0d5dd] font-semibold text-[#3b4c63] text-xs tracking-[0.24px]">
                  CONTACT
                </TableHead>
                <TableHead className="flex-1 p-4 border-r border-[#d0d5dd] font-semibold text-[#3b4c63] text-xs tracking-[0.24px]">
                  COMPANY
                </TableHead>
                <TableHead className="flex-1 p-4 border-r border-[#d0d5dd] font-medium text-[#3b4c63] text-xs tracking-[-0.48px]">
                  STATUS
                </TableHead>
                <TableHead className="flex-1 border-r border-[#d0d5dd]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentLeadsData.map((lead, index) => (
                <TableRow
                  key={index}
                  className="h-[72px] border-b border-[#e9eaec]"
                >
                  <TableCell className="w-[282px] pl-5 pr-4 py-4 border-r border-[#e9eaec]">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-9 h-9">
                        <AvatarImage src={lead.avatar} alt={lead.name} />
                        <AvatarFallback>{lead.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="inline-flex flex-col items-start justify-center gap-0.5">
                        <div className="font-semibold text-[#041824] text-base tracking-[0] leading-5 [font-family:'Manrope',Helvetica]">
                          {lead.name}
                        </div>
                        <div className="inline-flex items-center gap-1">
                          <ClockIcon className="w-4 h-4 text-[#3b4c63]" />
                          <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
                            {lead.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="w-64 p-4 border-r border-[#e9eaec]">
                    <div className="flex flex-col items-start justify-center gap-1">
                      <div className="inline-flex items-center gap-1">
                        <MailIcon className="w-4 h-4 text-[#3b4c63]" />
                        <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
                          {lead.email}
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-1">
                        <PhoneIcon className="w-4 h-4 text-[#3b4c63]" />
                        <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
                          {lead.phone}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="flex-1 p-4 border-r border-[#e9eaec]">
                    <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
                      {lead.company}
                    </span>
                  </TableCell>
                  <TableCell className="flex-1 p-4 border-r border-[#e9eaec]">
                    <Badge
                      className={`inline-flex items-center justify-center gap-1 px-3 py-1 rounded-[100px] ${getStatusBadgeStyles(lead.status.type)}`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-[80px] ${lead.status.type === "closed" ? "bg-[#1b8441]" : lead.status.type === "pending" ? "bg-[#c2c8d0]" : "bg-[#d1a218]"}`}
                      />
                      <span className="font-medium text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
                        {lead.status.label}
                      </span>
                    </Badge>
                  </TableCell>
                  <TableCell className="flex-1 p-4 border-r border-[#e9eaec]">
                    <div className="flex items-center gap-2.5 cursor-pointer">
                      <EyeIcon className="w-4 h-4 text-[#3b4c63]" />
                      <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
                        View
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="absolute w-[calc(100%_-_2px)] left-0 bottom-0.5 h-[65px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />
        </CardContent>
      </Card>
    </div>
  );
};
