"use client";
import {
  CalendarIcon,
  ChevronDownIcon,
  FilterIcon,
  SearchIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CampaignState,
  getCampaignMetricsByUserAsync,
  selectCampaign,
} from "@/features/slices/CampaignSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { useEffect } from "react";

export const DashboardSection = (): JSX.Element => {
  const chartLabels = [
    "Jan-Feb",
    "Mar-Apr",
    "May-Jun",
    "Jul-Aug",
    "Sep-Oct",
    "Nov-Dec",
  ];
  const yAxisLabels = ["250", "150", "50", "0"];

  const topPerformers = [
    {
      name: "Tech Venture Outreach Q4",
      category: "Venture Capital",
      meetings: "8 meetings",
      rate: "12.0%",
      rank: "2",
      rankBg: "bg-[#d2d0d0] border-[#a5a5a5]",
      rankText: "text-[#111111]",
      image: "https://c.animaapp.com/mfqpait0Qdrcn2/img/group.png",
    },
    {
      name: "European Growth Fund",
      category: "Growth Equity",
      meetings: "5 meetings",
      rate: "8.0%",
      rank: "3",
      rankBg: "bg-[#c78110] border-[#976b22]",
      rankText: "text-[#f6c26f]",
      image: "https://c.animaapp.com/mfqpait0Qdrcn2/img/group-1.png",
    },
  ];

  const campaignData = [
    {
      name: "InsuretechNy- MENA based LPs",
      owner: "David",
      sent: "250",
      replyRate: "45",
      positive: "4",
      positiveRate: "42.9%",
      status: "COMPLETED",
      lastSync: "04/09/2025",
    },
    {
      name: "AI Seed Round 4",
      owner: "David",
      sent: "250",
      replyRate: "45",
      positive: "0",
      positiveRate: "18.5%",
      status: "COMPLETED",
      lastSync: "04/09/2025",
    },
    {
      name: "AI Seed Round 4",
      owner: "David",
      sent: "250",
      replyRate: "45",
      positive: "3",
      positiveRate: "0.0%",
      status: "COMPLETED",
      lastSync: "04/09/2025",
    },
    {
      name: "AI Seed Round 4",
      owner: "David",
      sent: "250",
      replyRate: "45",
      positive: "2",
      positiveRate: "42.9%",
      status: "COMPLETED",
      lastSync: "04/09/2025",
    },
    {
      name: "AI Seed Round 4",
      owner: "David",
      sent: "250",
      replyRate: "45",
      positive: "1",
      positiveRate: "24.5%",
      status: "COMPLETED",
      lastSync: "04/09/2025",
    },
    {
      name: "AI Seed Round 4",
      owner: "David",
      sent: "250",
      replyRate: "45",
      positive: "4",
      positiveRate: "75%",
      status: "COMPLETED",
      lastSync: "04/09/2025",
    },
  ];

  const campaign = useSelector(selectCampaign);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCampaignMetricsByUserAsync());
  }, []);

  const metricCards = [
    {
      value: campaign?.totalActiveCampaigns,
      label: "Active Campaigns",
      gradient:
        "bg-[linear-gradient(142deg,rgba(1,28,39,1)_0%,rgba(5,102,141,1)_100%)]",
    },
    {
      value: campaign?.totalLeads,
      label: "Total Prospects",
      gradient:
        "bg-[linear-gradient(36deg,rgba(32,33,81,1)_0%,rgba(137,139,232,1)_100%)]",
    },
    {
      value: campaign?.positiveReplied,
      label: "Positive Replies",
      gradient:
        "bg-[linear-gradient(38deg,rgba(75,24,2,1)_0%,rgba(252,129,74,1)_100%)]",
    },
  ];

  return (
    <main className="flex flex-col bg-white rounded-[20px_0px_0px_0px] overflow-hidden border-t border-l border-[#eaeaea] p-5 gap-5">
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <h1 className="font-semibold text-[#111111] text-xl leading-[30px] [font-family:'Manrope',Helvetica] tracking-[0]">
            Capital Campaigns
          </h1>
          <p className="text-sm leading-[21px] [font-family:'Manrope',Helvetica] font-normal text-[#4f5059] tracking-[0]">
            Track Your Fundraising Progress And Investor Engagement
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4f5059]" />
            <Input
              placeholder="Search transaction, campaigns..."
              className="w-[332px] h-[37px] pl-10 [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-sm tracking-[-0.31px]"
            />
          </div>
          <Button className="h-10 bg-[#09215e] text-[#fbfbfb] text-xs [font-family:'Manrope',Helvetica] font-medium tracking-[-0.24px] border-[0.5px] border-[#fbfbfb]">
            Create Campaign
          </Button>
        </div>
      </header>

      <section className="grid grid-cols-3 gap-5 max-h-[132px]">
        {metricCards.map((card, index) => (
          <Card
            key={index}
            className={`${card.gradient} border-0 text-white overflow-hidden relative`}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-0.5">
                  <div className="text-6xl font-bold tracking-[-1.20px] leading-[66px] [font-family:'Manrope',Helvetica]">
                    {card.value}
                  </div>
                  <div className="text-base font-medium text-[#eaeaea] leading-[22.4px] [font-family:'Manrope',Helvetica]">
                    {card.label}
                  </div>
                </div>
              </div>
              <div className="absolute top-[-76px] right-[-50px] w-[189px] h-[205px]">
                <div className="absolute top-0 left-[17px] w-[122px] h-[122px] rounded-[60.79px] bg-[linear-gradient(200deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.7)_100%)]" />
                <div className="absolute top-[66px] left-[17px] w-[122px] h-[122px] rounded-[60.79px] rotate-[70.24deg] bg-[linear-gradient(200deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.7)_100%)]" />
                <div className="absolute top-[60px] left-[45px] w-[122px] h-[122px] rounded-[60.79px] rotate-[60.00deg] bg-[linear-gradient(200deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.7)_100%)]" />
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid grid-cols-3 gap-5 h-[320px]">
        <Card className="col-span-2 border-[#eaeaea]">
          <CardHeader className="pb-0">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <CardTitle className="text-lg font-semibold text-[#111111] tracking-[-0.36px] [font-family:'Manrope',Helvetica]">
                  Positive Reply Volume
                </CardTitle>
                <p className="text-xs text-[#4f5059] [font-family:'Manrope',Helvetica]">
                  Monitor Growth In Customer Engagement Over Time
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="h-10 gap-2 border-[#d9dadb]"
              >
                <span className="text-xs font-medium text-[#4f5059] [font-family:'Manrope',Helvetica] tracking-[-0.24px]">
                  Yearly View
                </span>
                <CalendarIcon className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="relative pt-4 pb-6">
            <div className="relative w-full h-[200px]">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-8 w-8 flex flex-col justify-between items-end">
                {yAxisLabels.map((label, index) => (
                  <div
                    key={index}
                    className="text-xs font-medium text-[#767e84] text-right tracking-[-0.18px] [font-family:'Manrope',Helvetica]"
                  >
                    {label}
                  </div>
                ))}
              </div>

              {/* Chart area */}
              <div className="absolute left-10 right-0 top-0 bottom-8">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="w-full h-px bg-[#e5e7eb]" />
                  ))}
                </div>

                {/* Chart bars */}
                <img
                  className="absolute inset-0 w-full h-full object-contain"
                  alt="Chart"
                  src="https://c.animaapp.com/mfqpait0Qdrcn2/img/chart.svg"
                />
              </div>

              {/* X-axis labels */}
              <div className="absolute left-10 right-0 bottom-0 h-8 flex items-center justify-between">
                {chartLabels.map((label, index) => (
                  <div
                    key={index}
                    className="text-xs font-medium text-[#767e84] tracking-[-0.18px] [font-family:'Manrope',Helvetica]"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#eaeaea]">
          <CardHeader className="pb-0">
            <div className="flex flex-col gap-0.5">
              <CardTitle className="text-lg font-semibold text-[#111111] tracking-[-0.36px] [font-family:'Manrope',Helvetica]">
                Positive Replies
              </CardTitle>
              <p className="text-xs text-[#4f5059] [font-family:'Manrope',Helvetica]">
                See How Prospects Engage Through Decks And Meetings
              </p>
            </div>
          </CardHeader>
          <CardContent className="relative">
            <div className="absolute top-[20px] left-9 w-40 h-40 bg-[url(https://c.animaapp.com/mfqpait0Qdrcn2/img/ellipse-2055.svg)] bg-[100%_100%]">
              <img
                className="absolute top-[111px] left-[35px] w-[111px] h-[49px]"
                alt="Ellipse"
                src="https://c.animaapp.com/mfqpait0Qdrcn2/img/ellipse-2052.svg"
              />
              <img
                className="absolute top-px left-0 w-20 h-[143px]"
                alt="Ellipse"
                src="https://c.animaapp.com/mfqpait0Qdrcn2/img/ellipse-2053.svg"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-0.5">
                <div className="text-xl font-bold text-[#111111] tracking-[-0.30px] [font-family:'Manrope',Helvetica]">
                  +23%
                </div>
                <div className="text-xs font-medium text-[#acb8c2] text-center tracking-[-0.18px] [font-family:'Manrope',Helvetica]">
                  Increased from last year
                </div>
              </div>
            </div>
            <div className="absolute top-[55px] left-5 flex gap-[61px]">
              <div className="flex items-center justify-center w-[38px] h-[38px] bg-white rounded-full border border-[#e0e0e0] shadow-lg">
                <span className="text-xs font-semibold text-[#080808] [font-family:'Manrope',Helvetica] tracking-[-0.36px]">
                  40%
                </span>
              </div>
              <div className="flex items-center justify-center w-[38px] h-[38px] bg-white rounded-full border border-[#e0e0e0] shadow-lg mt-[102px]">
                <span className="text-xs font-semibold text-[#080808] [font-family:'Manrope',Helvetica] tracking-[-0.36px]">
                  26%
                </span>
              </div>
            </div>
            <div className="absolute top-[43px] right-5 flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#fc814a] rounded-sm" />
                  <span className="text-sm font-medium text-[#84858b] tracking-[-0.28px] [font-family:'Manrope',Helvetica]">
                    Deck Request
                  </span>
                </div>
                <div className="text-xl font-bold text-[#111111] tracking-[-0.40px] [font-family:'Manrope',Helvetica]">
                  320
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#05668d] rounded-sm" />
                  <span className="text-sm font-medium text-[#84858b] tracking-[-0.28px] [font-family:'Manrope',Helvetica]">
                    Meeting Request
                  </span>
                </div>
                <div className="text-xl font-bold text-[#111111] tracking-[-0.40px] [font-family:'Manrope',Helvetica]">
                  180
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid grid-cols-2 gap-5 h-[232px]">
        <Card className="border-[#eaeaea]">
          <CardHeader className="pb-0">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <CardTitle className="text-lg font-semibold text-[#111111] tracking-[-0.36px] [font-family:'Manrope',Helvetica]">
                  Campaign Overview
                </CardTitle>
                <p className="text-xs text-[#4f5059] [font-family:'Manrope',Helvetica]">
                  Summary Of Active Campaigns And Key Performance Metrics
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="h-8 gap-2 border-[#d9dadb]"
              >
                <FilterIcon className="w-4 h-4" />
                <span className="text-xs font-medium text-[#4f5059] [font-family:'Manrope',Helvetica] tracking-[-0.24px]">
                  Filters
                </span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              <div className="flex items-end gap-0.5">
                <span className="text-3xl font-bold text-[#111111] tracking-[-0.60px] [font-family:'Manrope',Helvetica]">
                  {campaign?.totalActiveCampaigns}
                </span>
                <span className="text-xs text-[#4f5059] [font-family:'Manrope',Helvetica]">
                  Active Campaigns
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-[#f8f8f8] rounded-lg">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#4a8bfc] rounded-full" />
                    <span className="text-sm font-medium text-[#84858b] tracking-[-0.28px] [font-family:'Manrope',Helvetica]">
                      Total Prospects
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xl font-bold text-[#111111] tracking-[-0.40px] [font-family:'Manrope',Helvetica]">
                      {campaign.totalLeads}
                    </span>
                    <img
                      alt="Badge"
                      src="https://c.animaapp.com/mfqpait0Qdrcn2/img/badge-1.svg"
                    />
                  </div>
                </div>
                <div className="w-px h-9 bg-[#e9eaec]" />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#974afc] rounded-full" />
                    <span className="text-sm font-medium text-[#84858b] tracking-[-0.28px] [font-family:'Manrope',Helvetica]">
                      Positive Response Rate
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xl font-bold text-[#111111] tracking-[-0.40px] [font-family:'Manrope',Helvetica]">
                      {campaign.positiveReplied}
                    </span>
                    <img
                      alt="Badge"
                      src="https://c.animaapp.com/mfqpait0Qdrcn2/img/badge-1.svg"
                    />
                  </div>
                </div>
                <div className="w-px h-9 bg-[#e9eaec]" />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#fc4af0] rounded-full" />
                    <span className="text-sm font-medium text-[#84858b] tracking-[-0.28px] [font-family:'Manrope',Helvetica]">
                      Meetings Booked
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xl font-bold text-[#111111] tracking-[-0.40px] [font-family:'Manrope',Helvetica]">
                      {campaign.meetingsBooked}
                    </span>
                    <img
                      alt="Badge"
                      src="https://c.animaapp.com/mfqpait0Qdrcn2/img/badge.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#eaeaea]">
          <CardHeader className="pb-0">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-[#111111] tracking-[-0.36px] [font-family:'Manrope',Helvetica]">
                Top Performers
              </CardTitle>
              <Tabs
                defaultValue="week"
                className="bg-[#f6f6f6] rounded-lg p-0.5"
              >
                <TabsList className="bg-transparent p-0 h-auto">
                  <TabsTrigger
                    value="week"
                    className="bg-white rounded-md px-4 py-2 text-sm font-semibold text-[#272a34] tracking-[-0.28px] [font-family:'Manrope',Helvetica]"
                  >
                    This Week
                  </TabsTrigger>
                  <TabsTrigger
                    value="month"
                    className="px-4 py-1.5 text-sm font-medium text-[#7b7f93] tracking-[-0.28px] [font-family:'Manrope',Helvetica]"
                  >
                    This Month
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            {/* Top Performer - Healthcare Focused */}
            <div className="flex flex-col items-center mb-4">
              <div className="relative mb-2">
                <img
                  className="w-[52px] h-[52px]"
                  alt="Group"
                  src="https://c.animaapp.com/mfqpait0Qdrcn2/img/group-1171275502.png"
                />
                <div className="absolute -top-2 -right-1 w-[25px] h-[23px]">
                  <div className="bg-[#e6c334] border-[#a29250] w-[23px] h-[23px] rounded-full border flex items-center justify-center">
                    <span className="text-sm font-bold text-[#4c3e07] [font-family:'Manrope',Helvetica] tracking-[-0.28px]">
                      1
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg px-4 py-3 border border-[#ececec] shadow-sm text-center w-full max-w-[280px]">
                <div className="text-base font-semibold text-[#111111] tracking-[-0.32px] [font-family:'Manrope',Helvetica] mb-1">
                  Healthcare Focused
                </div>
                <div className="text-xs text-[#84858b] tracking-[-0.24px] [font-family:'Manrope',Helvetica] mb-2">
                  Healthcare Innovation
                </div>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-xs font-semibold text-[#111111] tracking-[-0.24px] [font-family:'Manrope',Helvetica]">
                    12 meetings
                  </span>
                  <span className="text-[11px] font-semibold text-[#1b8341] [font-family:'Manrope',Helvetica]">
                    15.0%
                  </span>
                </div>
              </div>
            </div>

            {/* Other Performers */}
            <div className="flex flex-col gap-2">
              {topPerformers.map((performer, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="relative">
                      <img
                        className="w-7 h-7"
                        alt="Group"
                        src={performer.image}
                      />
                      <div className="absolute -top-1 -right-1 w-[20px] h-[20px]">
                        <div
                          className={`${performer.rankBg} w-[20px] h-[20px] rounded-full border flex items-center justify-center`}
                        >
                          <span
                            className={`text-xs font-bold ${performer.rankText} [font-family:'Manrope',Helvetica] tracking-[-0.28px]`}
                          >
                            {performer.rank}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="text-sm font-medium text-[#111111] tracking-[-0.28px] [font-family:'Manrope',Helvetica] truncate">
                        {performer.name}
                      </div>
                      <div className="text-xs text-[#84858b] tracking-[-0.24px] [font-family:'Manrope',Helvetica]">
                        {performer.category}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[11px] font-medium text-[#84858b] tracking-[-0.22px] [font-family:'Manrope',Helvetica]">
                      {performer.meetings}
                    </div>
                    <div className="text-[11px] font-semibold text-[#1b8341] [font-family:'Manrope',Helvetica]">
                      {performer.rate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <Card className="border-[#eaeaea]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <CardTitle className="text-base font-semibold text-[#111111] tracking-[-0.32px] [font-family:'Manrope',Helvetica]">
                Campaign Results
              </CardTitle>
              <p className="text-xs text-[#4f5059] [font-family:'Manrope',Helvetica]">
                See How Each Campaign Performed Across Key Engagement Metrics
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="h-10 gap-2 border-[#d9dadb]">
                <span className="text-xs font-medium text-[#84858b] tracking-[-0.03px] [font-family:'Manrope',Helvetica]">
                  Status:{" "}
                </span>
                <span className="text-xs font-semibold text-[#4f5059] tracking-[-0.03px] [font-family:'Manrope',Helvetica]">
                  All
                </span>
                <ChevronDownIcon className="w-[18px] h-[18px]" />
              </Button>
              <Tabs
                defaultValue="week"
                className="bg-[#f6f6f6] rounded-lg p-0.5"
              >
                <TabsList className="bg-transparent p-0 h-auto">
                  <TabsTrigger
                    value="week"
                    className="bg-white rounded-md px-4 py-2 text-sm font-semibold text-[#272a34] tracking-[-0.28px] [font-family:'Manrope',Helvetica]"
                  >
                    This Week
                  </TabsTrigger>
                  <TabsTrigger
                    value="month"
                    className="px-4 py-1.5 text-sm font-medium text-[#7b7f93] tracking-[-0.28px] [font-family:'Manrope',Helvetica]"
                  >
                    This Month
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 relative">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#eef1f4] border-[#d0d5dd]">
                <TableHead className="w-[352px] font-semibold text-[#3b4c63] text-xs tracking-[0.24px] [font-family:'Manrope',Helvetica]">
                  CAMPAIGN
                </TableHead>
                <TableHead className="w-[120px] font-semibold text-[#3b4c63] text-xs tracking-[0.24px] [font-family:'Manrope',Helvetica]">
                  SENT
                </TableHead>
                <TableHead className="w-[120px] font-medium text-[#3b4c63] text-xs tracking-[-0.48px] [font-family:'Geist',Helvetica]">
                  REPLY RATE
                </TableHead>
                <TableHead className="w-[110px] font-medium text-[#3b4c63] text-xs tracking-[-0.48px] [font-family:'Geist',Helvetica]">
                  POSITIVE
                </TableHead>
                <TableHead className="w-[125px] font-medium text-[#3b4c63] text-xs tracking-[-0.48px] [font-family:'Geist',Helvetica]">
                  POSITIVE RATE
                </TableHead>
                <TableHead className="w-[146px] font-medium text-[#3b4c63] text-xs tracking-[-0.48px] [font-family:'Geist',Helvetica]">
                  STATUS
                </TableHead>
                <TableHead className="font-medium text-[#3b4c63] text-xs tracking-[-0.48px] [font-family:'Geist',Helvetica]">
                  LAST SYNC
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaign.campaigns.map((campaign: CampaignState, index) => (
                <TableRow key={index} className="h-[72px] border-[#e9eaec]">
                  <TableCell className="w-[352px]">
                    <div className="flex flex-col gap-0.5">
                      <div className="font-semibold text-[#041824] text-base [font-family:'Manrope',Helvetica]">
                        {campaign.name}
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 relative">
                          <div className="absolute w-[45.83%] h-[45.83%] top-[2.08%] left-[27.08%] rounded-[3.67px] border border-[#4f5059]" />
                          <div className="absolute w-[70.83%] h-[45.83%] top-[47.92%] left-[14.58%] rounded-[5.67px/3.67px] border border-[#4f5059]" />
                        </div>
                        <span className="text-sm text-[#3b4c63] tracking-[-0.56px] [font-family:'Manrope',Helvetica]">
                          {campaign.owner}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-[#3b4c63] tracking-[-0.56px] [font-family:'Manrope',Helvetica]">
                    {campaign.sent}
                  </TableCell>
                  <TableCell className="text-sm text-[#3b4c63] tracking-[-0.56px] [font-family:'Manrope',Helvetica]">
                    {campaign.replyRate}
                  </TableCell>
                  <TableCell className="text-sm text-[#1b8441] tracking-[-0.56px] [font-family:'Manrope',Helvetica]">
                    {campaign.positive}
                  </TableCell>
                  <TableCell className="text-sm text-[#1b8441] tracking-[-0.56px] [font-family:'Manrope',Helvetica]">
                    {campaign.positiveRate}
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-[#e1ebfd] text-[#1b3e84] hover:bg-[#e1ebfd] rounded-full px-3 py-1 text-sm font-medium tracking-[-0.56px] [font-family:'Manrope',Helvetica]">
                      {campaign.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-[#3b4c63] tracking-[-0.56px] [font-family:'Manrope',Helvetica]">
                    {campaign.lastSync}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="absolute w-full left-0 bottom-0.5 h-[65px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />
        </CardContent>
      </Card>
    </main>
  );
};
