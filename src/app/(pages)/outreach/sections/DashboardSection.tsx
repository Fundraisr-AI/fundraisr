"use client";

import { useState, useEffect } from "react";
import {
  CalendarIcon,
  ChevronDownIcon,
  FilterIcon,
  SearchIcon,
} from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
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
import { OutreachCreate } from "./OutreachCreate";
import {
  CampaignState,
  getCampaignMetricsByUserAsync,
  selectCampaign,
} from "../../../../features/slices/CampaignSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../store";

export const DashboardSection = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReplyViewDropdownOpen, setIsReplyViewDropdownOpen] = useState(false);
  const [selectedReplyView, setSelectedReplyView] = useState("Yearly View");

  const campaign = useSelector(selectCampaign);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCampaignMetricsByUserAsync());
  }, []);

  const handleCreateCampaign = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const replyViewOptions = [
    "Daily View",
    "Weekly View",
    "Monthly View",
    "Quarterly View",
    "Yearly View",
  ];

  // Dynamic data based on selected view
  const getReplyVolumeData = () => {
    const today = new Date("2025-09-24");

    switch (selectedReplyView) {
      case "Daily View":
        return {
          labels: Array.from({ length: 7 }, (_, i) => {
            const date = new Date(today);
            date.setDate(date.getDate() - (6 - i));
            return date.toLocaleDateString("en-US", { weekday: "short" });
          }),
          data: [12, 19, 15, 27, 22, 35, 28], // Daily replies
          gradient:
            "bg-[linear-gradient(180deg,#0A7A34_0%,rgba(10,122,52,0.2)_100%)]", // Darkest green gradient
          color: "#0A7A34",
        };
      case "Weekly View":
        return {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
          data: [85, 120, 95, 140],
          gradient:
            "bg-[linear-gradient(180deg,#1B8341_0%,rgba(27,131,65,0.2)_100%)]", // Dark green gradient
          color: "#1B8341",
        };
      case "Monthly View":
        return {
          labels: ["Jun", "Jul", "Aug", "Sep"],
          data: [320, 450, 380, 520],
          gradient:
            "bg-[linear-gradient(180deg,#329369_0%,rgba(50,147,105,0.2)_100%)]", // Medium green gradient
          color: "#329369",
        };
      case "Quarterly View":
        return {
          labels: ["Q1 2025", "Q2 2025", "Q3 2025", "Q4 2025"],
          data: [1200, 1450, 1680, 1320],
          gradient:
            "bg-[linear-gradient(180deg,#22C55E_0%,rgba(34,197,94,0.2)_100%)]", // Light green gradient
          color: "#22C55E",
        };
      case "Yearly View":
      default:
        return {
          labels: ["2022", "2023", "2024", "2025"],
          data: [4200, 5800, 6200, 5650],
          gradient:
            "bg-[linear-gradient(180deg,#4ADE80_0%,rgba(74,222,128,0.2)_100%)]", // Lightest green gradient
          color: "#4ADE80",
        };
    }
  };

  const currentReplyData = getReplyVolumeData();

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

  // Dynamic Y-axis based on data range
  const getYAxisLabels = () => {
    const maxValue = Math.max(...currentReplyData.data);
    const step = Math.ceil(maxValue / 4);
    return [
      (step * 4).toString(),
      (step * 3).toString(),
      (step * 2).toString(),
      step.toString(),
      "0",
    ];
  };

  const yAxisLabels = getYAxisLabels();

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

  return (
    <div className="relative">
      <main className="flex flex-col bg-white rounded-[20px_0px_0px_0px] overflow-hidden border-t border-l border-[#eaeaea] p-5 gap-5">
        <header className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <h1 className="font-semibold text-[#111111] text-xl leading-[30px] [font-family:'Manrope'] tracking-[0]">
              Capital Campaigns
            </h1>
            <p className="text-sm leading-[21px] [font-family:'Manrope'] font-normal text-[#4f5059] tracking-[0]">
              Track Your Fundraising Progress And Investor Engagement
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4f5059]" />
              <Input
                placeholder="Search transactions, campaigns..."
                className="w-[332px] h-[37px] pl-10 [font-family:'Manrope'] font-medium text-[#4f5059] text-sm tracking-[-0.31px]"
              />
            </div>
            <Button
              onClick={handleCreateCampaign}
              className="h-10 bg-[#09215e] text-[#fbfbfb] text-xs [font-family:'Manrope'] font-medium tracking-[-0.24px] border-[0.5px] border-[#fbfbfb] hover:bg-[#0a2668] transition-colors"
            >
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
                    <div className="text-6xl font-bold tracking-[-1.20px] leading-[66px] [font-family:'Manrope']">
                      {card.value}
                    </div>
                    <div className="text-base font-medium text-[#eaeaea] leading-[22.4px] [font-family:'Manrope']">
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
                  <CardTitle className="text-lg font-semibold text-[#111111] tracking-[-0.36px] [font-family:'Manrope']">
                    Positive Reply Volume
                  </CardTitle>
                  <p className="text-xs text-[#4f5059] [font-family:'Manrope']">
                    Monitor Growth In Customer Engagement Over Time
                  </p>
                </div>
                <div className="relative">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-10 gap-2 border-[#d9dadb]"
                    onClick={() =>
                      setIsReplyViewDropdownOpen(!isReplyViewDropdownOpen)
                    }
                  >
                    <span className="text-xs font-medium text-[#4f5059] [font-family:'Manrope'] tracking-[-0.24px]">
                      {selectedReplyView}
                    </span>
                    <CalendarIcon className="w-4 h-4" />
                  </Button>

                  {/* Reply View Dropdown */}
                  {isReplyViewDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-[#eaeaea] py-2 w-40 z-50">
                      {replyViewOptions.map((view) => (
                        <button
                          key={view}
                          className="w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors"
                          onClick={() => {
                            setSelectedReplyView(view);
                            setIsReplyViewDropdownOpen(false);
                          }}
                        >
                          <span className="[font-family:'Manrope'] font-normal text-[#111111] text-xs">
                            {view}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative pt-4 pb-6">
              <div className="relative w-full h-[200px]">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-8 w-8 flex flex-col justify-between items-end">
                  {["250", "150", "50", "0"].map((label, index) => (
                    <div
                      key={index}
                      className="text-xs font-medium text-[#767e84] text-right tracking-[-0.18px] [font-family:'Manrope']"
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

                  {/* Chart */}
                  <img
                    className="absolute inset-0 w-full h-full object-contain"
                    alt="Chart"
                    src="https://c.animaapp.com/mfqpait0Qdrcn2/img/chart.svg"
                  />
                </div>

                {/* X-axis labels */}
                <div className="absolute left-10 right-0 bottom-0 h-8 flex items-center justify-between">
                  {[
                    "Jan-Feb",
                    "Mar-Apr",
                    "May-Jun",
                    "Jul-Aug",
                    "Sep-Oct",
                    "Nov-Dec",
                  ].map((label, index) => (
                    <div
                      key={index}
                      className="text-xs font-medium text-[#767e84] tracking-[-0.18px] [font-family:'Manrope']"
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
                <CardTitle className="text-lg font-semibold text-[#111111] tracking-[-0.36px] [font-family:'Manrope']">
                  Positive Replies
                </CardTitle>
                <p className="text-xs text-[#4f5059] [font-family:'Manrope']">
                  See How Prospects Engage Through Decks And Meetings
                </p>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="absolute top-[20px] left-9 w-40 h-40 rounded-full">
                {/* Proper Donut Chart using conic-gradient */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(
                    #fc814a 0% 40%,
                    #05668d 40% 66%,
                    #f1f1ef 66% 100%
                  )`,
                  }}
                />
                {/* Inner white circle creates the donut hole */}
                <div className="absolute inset-6 bg-white rounded-full flex flex-col items-center justify-center">
                  <div className="text-lg font-bold text-[#111111] [font-family:'Manrope'] tracking-[-0.30px]">
                    +23%
                  </div>
                  <div className="text-xs font-medium text-[#acb8c2] [font-family:'Manrope'] tracking-[-0.18px] text-center">
                    Increased from last year
                  </div>
                </div>
              </div>
              {/* Percentage labels positioned on arc midpoints */}
              {(() => {
                const centerX = 80; // Center of the 160px donut chart
                const centerY = 80;
                const radius = 60; // Outer radius of donut
                const offset = 20; // Distance from arc edge

                // Chart data segments
                const segments = [
                  { value: 40, percentage: "40%", color: "#fc814a" }, // Orange segment
                  { value: 26, percentage: "26%", color: "#05668d" }, // Blue segment
                ];

                let currentAngle = 0; // Start from top (0 degrees)

                return segments.map((segment, index) => {
                  // Calculate midpoint angle for this segment
                  const startAngle = currentAngle;
                  const endAngle =
                    currentAngle + (segment.value / 100) * 2 * Math.PI;
                  const labelAngle =
                    startAngle + (segment.value / 100) * Math.PI; // Midpoint angle

                  // Convert to Cartesian coordinates
                  // Note: CSS conic-gradient starts at 0° (top), so we adjust by -π/2
                  const adjustedAngle = labelAngle - Math.PI / 2;
                  const x =
                    centerX + (radius + offset) * Math.cos(adjustedAngle);
                  const y =
                    centerY + (radius + offset) * Math.sin(adjustedAngle);

                  // Update current angle for next segment
                  currentAngle = endAngle;

                  return (
                    <div
                      key={index}
                      className="absolute w-[38px] h-[38px] bg-white rounded-full border border-[#EEEEEB] flex items-center justify-center"
                      style={{
                        left: `${x - 19}px`, // Center the 38px badge
                        top: `${y - 19}px`,
                        boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
                      }}
                    >
                      <span className="text-xs font-bold text-[#111111] [font-family:'Manrope'] tracking-[-0.36px]">
                        {segment.percentage}
                      </span>
                    </div>
                  );
                });
              })()}
              <div className="absolute top-[43px] right-5 flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#fc814a] rounded-md" />
                    <span className="text-sm font-medium text-[#84858b] tracking-[-0.28px] [font-family:'Manrope']">
                      Deck Request
                    </span>
                  </div>
                  <div className="text-xl font-bold text-[#111111] tracking-[-0.40px] [font-family:'Manrope']">
                    320
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#05668d] rounded-md" />
                    <span className="text-sm font-medium text-[#84858b] tracking-[-0.28px] [font-family:'Manrope']">
                      Meeting Request
                    </span>
                  </div>
                  <div className="text-xl font-bold text-[#111111] tracking-[-0.40px] [font-family:'Manrope']">
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
                  <CardTitle className="text-lg font-semibold text-[#111111] tracking-[-0.36px] [font-family:'Manrope']">
                    Campaign Overview
                  </CardTitle>
                  <p className="text-xs text-[#4f5059] [font-family:'Manrope']">
                    Summary Of Active Campaigns And Key Performance Metrics
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 gap-2 border-[#d9dadb]"
                >
                  <FilterIcon className="w-4 h-4" />
                  <span className="text-xs font-medium text-[#4f5059] [font-family:'Manrope'] tracking-[-0.24px]">
                    Filters
                  </span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                <div className="flex items-end gap-0.5">
                  <span className="text-3xl font-bold text-[#111111] tracking-[-0.60px] [font-family:'Manrope']">
                    {campaign.totalActiveCampaigns}
                  </span>
                  <span className="text-xs text-[#4f5059] [font-family:'Manrope']">
                    Active Campaigns
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#f8f8f8] rounded-lg">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#4a8bfc] rounded-full" />
                      <span className="text-sm font-medium text-[#84858b] tracking-[-0.28px] [font-family:'Manrope']">
                        Total Prospects
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xl font-bold text-[#111111] tracking-[-0.40px] [font-family:'Manrope']">
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
                      <span className="text-sm font-medium text-[#84858b] tracking-[-0.28px] [font-family:'Manrope']">
                        Positive Response Rate
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xl font-bold text-[#111111] tracking-[-0.40px] [font-family:'Manrope']">
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
                      <span className="text-sm font-medium text-[#84858b] tracking-[-0.28px] [font-family:'Manrope']">
                        Meetings Booked
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xl font-bold text-[#111111] tracking-[-0.40px] [font-family:'Manrope']">
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
                <CardTitle className="text-lg font-semibold text-[#111111] tracking-[-0.36px] [font-family:'Manrope']">
                  Top Performers
                </CardTitle>
                <Tabs
                  defaultValue="week"
                  className="bg-[#f6f6f6] rounded-lg p-0.5"
                >
                  <TabsList className="bg-transparent p-0 h-auto">
                    <TabsTrigger
                      value="week"
                      className="bg-white rounded-md px-4 py-2 text-sm font-semibold text-[#272a34] tracking-[-0.28px] [font-family:'Manrope']"
                    >
                      This Week
                    </TabsTrigger>
                    <TabsTrigger
                      value="month"
                      className="px-4 py-1.5 text-sm font-medium text-[#7b7f93] tracking-[-0.28px] [font-family:'Manrope']"
                    >
                      This Month
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex gap-3">
                {/* Left side - Main performer (Healthcare Focused) - positioned higher */}
                <div className="flex flex-col items-center flex-1 pt-2">
                  <div className="relative mb-2">
                    <img
                      className="w-[52px] h-[52px]"
                      alt="Group"
                      src="https://c.animaapp.com/mfqpait0Qdrcn2/img/group-1171275502.png"
                    />
                    <div className="absolute -top-2 -right-1 w-[25px] h-[23px]">
                      <div className="bg-[#e6c334] border-[#a29250] w-[23px] h-[23px] rounded-full border flex items-center justify-center">
                        <span className="text-sm font-bold text-[#4c3e07] [font-family:'Manrope'] tracking-[-0.28px]">
                          1
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-3 border border-[#ececec] shadow-sm text-center w-full max-w-[176px]">
                    <div className="text-base font-semibold text-[#111111] tracking-[-0.32px] [font-family:'Manrope'] mb-1">
                      Healthcare Focused
                    </div>
                    <div className="text-xs text-[#84858b] tracking-[-0.24px] [font-family:'Manrope'] mb-2">
                      Healthcare Innovation
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-xs font-semibold text-[#111111] tracking-[-0.24px] [font-family:'Manrope']">
                        12 meetings
                      </span>
                      <span className="text-[11px] font-semibold text-[#1b8341] [font-family:'Manrope']">
                        15.0%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right side - Other performers positioned closer to left and flush right */}
                <div className="flex flex-col gap-3 w-[420px] justify-start">
                  {topPerformers.map((performer, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#ececec] shadow-sm w-full h-[100px]"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="relative">
                          <img
                            className="w-[28px] h-[28px]"
                            alt="Group"
                            src={performer.image}
                          />
                        </div>

                        <div className="flex-1">
                          <div className="text-sm font-medium text-[#111111] tracking-[-0.28px] [font-family:'Manrope']">
                            {performer.name}
                          </div>
                          <div className="text-xs text-[#84858b] tracking-[-0.24px] [font-family:'Manrope']">
                            {performer.category}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-[11px] font-medium text-[#84858b] tracking-[-0.22px] [font-family:'Manrope']">
                            {performer.meetings}
                          </div>
                          <div className="text-[11px] font-semibold text-[#1b8341] [font-family:'Manrope']">
                            {performer.rate}
                          </div>
                        </div>

                        {/* Rank badge moved to the right side */}
                        <div className="w-[23px] h-[23px]">
                          <div
                            className={`${performer.rankBg} w-[23px] h-[23px] rounded-full border flex items-center justify-center`}
                          >
                            <span
                              className={`text-xs font-bold ${performer.rankText} [font-family:'Manrope'] tracking-[-0.28px]`}
                            >
                              {performer.rank}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Spacing after Campaign Overview section */}
        <div className="mt-6"></div>

        {/* Spacing between sections */}
        <div className="mt-8"></div>

        <Card className="border-[#eaeaea]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <CardTitle className="text-base font-semibold text-[#111111] tracking-[-0.32px] [font-family:'Manrope']">
                  Campaign Results
                </CardTitle>
                <p className="text-xs text-[#4f5059] [font-family:'Manrope']">
                  See How Each Campaign Performed Across Key Engagement Metrics
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  className="h-10 gap-2 border-[#d9dadb]"
                >
                  <span className="text-xs font-medium text-[#84858b] tracking-[-0.03px] [font-family:'Manrope']">
                    Status:{" "}
                  </span>
                  <span className="text-xs font-semibold text-[#4f5059] tracking-[-0.03px] [font-family:'Manrope']">
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
                      className="bg-white rounded-md px-4 py-2 text-sm font-semibold text-[#272a34] tracking-[-0.28px] [font-family:'Manrope']"
                    >
                      This Week
                    </TabsTrigger>
                    <TabsTrigger
                      value="month"
                      className="px-4 py-1.5 text-sm font-medium text-[#7b7f93] tracking-[-0.28px] [font-family:'Manrope']"
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
                  <TableHead className="w-[352px] font-semibold text-[#3b4c63] text-xs tracking-[0.24px] [font-family:'Manrope']">
                    CAMPAIGN
                  </TableHead>
                  <TableHead className="w-[120px] font-semibold text-[#3b4c63] text-xs tracking-[0.24px] [font-family:'Manrope']">
                    SENT
                  </TableHead>
                  <TableHead className="w-[120px] font-medium text-[#3b4c63] text-xs tracking-[-0.48px] [font-family:'Manrope']">
                    REPLY RATE
                  </TableHead>
                  <TableHead className="w-[110px] font-medium text-[#3b4c63] text-xs tracking-[-0.48px] [font-family:'Manrope']">
                    POSITIVE
                  </TableHead>
                  <TableHead className="w-[125px] font-medium text-[#3b4c63] text-xs tracking-[-0.48px] [font-family:'Manrope']">
                    POSITIVE RATE
                  </TableHead>
                  <TableHead className="w-[146px] font-medium text-[#3b4c63] text-xs tracking-[-0.48px] [font-family:'Manrope']">
                    STATUS
                  </TableHead>
                  <TableHead className="font-medium text-[#3b4c63] text-xs tracking-[-0.48px] [font-family:'Manrope']">
                    LAST SYNC
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaign.campaigns.map(
                  (campaignItem: CampaignState, index) => (
                    <TableRow key={index} className="h-[72px] border-[#e9eaec]">
                      <TableCell className="w-[352px]">
                        <div className="flex flex-col gap-0.5">
                          <div className="font-semibold text-[#041824] text-base [font-family:'Manrope']">
                            {campaignItem.name}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-[#3b4c63] tracking-[-0.56px] [font-family:'Manrope']">
                        {""}
                      </TableCell>
                      <TableCell className="text-sm text-[#3b4c63] tracking-[-0.56px] [font-family:'Manrope']">
                        {campaignItem.replyRate}
                      </TableCell>
                      <TableCell className="text-sm text-[#1b8441] tracking-[-0.56px] [font-family:'Manrope']">
                        {campaignItem.positive}
                      </TableCell>
                      <TableCell className="text-sm text-[#1b8441] tracking-[-0.56px] [font-family:'Manrope']">
                        {campaignItem.positiveReplied}
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-[#e1ebfd] text-[#1b3e84] hover:bg-[#e1ebfd] rounded-full px-3 py-1 text-sm font-medium tracking-[-0.56px] [font-family:'Manrope']">
                          {campaignItem.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-[#3b4c63] tracking-[-0.56px] [font-family:'Manrope']">
                        {""}
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
            <div className="absolute w-full left-0 bottom-0.5 h-[65px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />
          </CardContent>
        </Card>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50">
          <OutreachCreate isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
};
