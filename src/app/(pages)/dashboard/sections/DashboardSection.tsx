"use client";
// import {
//   CalendarIcon,
//   ClockIcon,
//   EditIcon,
//   EyeIcon,
//   FilterIcon,
//   MailIcon,
//   MapPinIcon,
//   MoreHorizontalIcon,
//   PhoneIcon,
//   SearchIcon,
// } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch } from "@/store";
// import {
//   CampaignState,
//   getAllCampaignStatusByUserAsync,
//   getCampaignInvestorTypeDistributionMetricsAsync,
//   selectCampaign,
// } from "@/features/slices/CampaignSlice";
// import {
//   getAllLeadsByUserIdAsync,
//   LeadState,
//   LeadStatus,
//   selectLead,
// } from "@/features/slices/LeadSlice";

// import { WelcomeCard } from "./WelcomeCard";

// export const DashboardSection = (): JSX.Element => {
//   const dispatch = useDispatch<AppDispatch>();
//   const campaigns = useSelector(selectCampaign);
//   const leads = useSelector(selectLead);

//   useEffect(() => {
//     dispatch(getAllCampaignStatusByUserAsync());
//     dispatch(
//       getAllLeadsByUserIdAsync({
//         filters: { status: ["INFORMATION_REQUEST", "INTERESTED"], limit: 5 },
//       })
//     );
//     dispatch(getCampaignInvestorTypeDistributionMetricsAsync());
//   }, []);

//   const remainingBars = Array.from({ length: 72 }, (_, index) => ({
//     width: "w-[1.5px]",
//     height: "h-[26px]",
//     bgColor: "bg-[#50a57c]",
//     marginLeft: index === 71 ? "mr-[-2.50px]" : "",
//   }));

//   const colorMap: Record<string, string> = {
//     "Limited Partners": "bg-[#ccdee0]",
//     "Family Offices": "bg-[#33a4a9]",
//     "Venture Capital": "bg-[#1b8084]",
//     All: "bg-[#999999]", // fallback if needed
//   };

//   const totalsByInvestor = campaigns.campaigns.reduce<Record<string, number>>(
//     (acc, c: any) => {
//       acc[c.investor] = (acc[c.investor] || 0) + 1;
//       return acc;
//     },
//     {}
//   );

//   const total = Object.values(totalsByInvestor).reduce((a, b) => a + b, 0);
//   const marketInsightsData = Object.entries(totalsByInvestor).map(
//     ([investor, count]) => {
//       const percentage = total === 0 ? 0 : (count / total) * 100;
//       return {
//         color: colorMap[investor] || "bg-gray-400", // fallback color
//         label: investor,
//         value: count.toString(), // convert to string if needed
//         percentage: `(${percentage.toFixed(0)}%)`, // round to whole number
//       };
//     }
//   );

//   const marketStatsData = [
//     {
//       color: "bg-[#edb52b]",
//       label: "Total Contacts",
//       value: campaigns.totalLeads,
//     },
//     {
//       color: "bg-[#329369]",
//       label: "Positive Replies",
//       value: campaigns.positiveReplied,
//     },
//     {
//       color: "bg-[#220ea2]",
//       label: "Meetings Scheduled",
//       value: campaigns.meetingsBooked,
//     },
//     {
//       color: "bg-[#933277]",
//       label: "Live Campaigns",
//       value: campaigns.totalActiveCampaigns,
//     },
//   ];

//   // Upcoming calls data
//   const upcomingCallsData = [
//     {
//       day: "Mon",
//       date: "24",
//       title: "Avalanche Daily Meeting",
//       time: "10:30 - 11:00 AM (UTC)",
//       location: "Google Meet",
//       participants: [
//         "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group.png",
//         "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-1.png",
//         "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-2.png",
//         "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-3.png",
//       ],
//       additionalCount: "+6",
//       isActive: true,
//     },
//     {
//       day: "Tue",
//       date: "25",
//       title: "Management Standup",
//       time: "09:20 -10:00 AM (UTC)",
//       location: "Google Meet",
//       participants: [
//         "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-4.png",
//         "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-5.png",
//         "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-6.png",
//         "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-7.png",
//       ],
//       additionalCount: "+4",
//       isActive: false,
//     },
//     {
//       day: "Tue",
//       date: "25",
//       title: "Avalanche Daily Meeting",
//       time: "08:00 -10:00 AM (UTC)",
//       location: "Google Meet",
//       participants: [
//         "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-8.png",
//         "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-9.png",
//         "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-10.png",
//         "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-11.png",
//       ],
//       additionalCount: "+8",
//       isActive: false,
//     },
//     {
//       day: "Wed",
//       date: "26",
//       title: "Meeting with Management Team",
//       time: "09:30 -10:00 AM (UTC)",
//       location: "Google Meet",
//       participants: [
//         "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-12.png",
//         "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-13.png",
//         "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-14.png",
//         "https://c.animaapp.com/mfqjua33FHoyZF/img/mask-group-15.png",
//       ],
//       additionalCount: "+3",
//       isActive: false,
//     },
//   ];

//   const getStatusBadgeStyles = (type: string) => {
//     switch (type) {
//       case "approved":
//       case "closed":
//         return "badge-success";
//       case "completed":
//         return "badge-info";
//       case "in-progress":
//         return "badge-warning";
//       case "draft":
//       case "pending":
//       default:
//         return "badge-neutral";
//     }
//   };

//   const getGeographyFlag = (geography: string) => {
//     const flagMap: Record<string, string> = {
//       "United States": "🇺🇸",
//       USA: "🇺🇸",
//       Canada: "🇨🇦",
//       "United Kingdom": "🇬🇧",
//       UK: "🇬🇧",
//       Germany: "🇩🇪",
//       France: "🇫🇷",
//       Japan: "🇯🇵",
//       Australia: "🇦🇺",
//       Singapore: "🇸🇬",
//       "Hong Kong": "🇭🇰",
//       Switzerland: "🇨🇭",
//       Netherlands: "🇳🇱",
//       Sweden: "🇸🇪",
//       Norway: "🇳🇴",
//       Denmark: "🇩🇰",
//       Finland: "🇫🇮",
//       Ireland: "🇮🇪",
//       Belgium: "🇧🇪",
//       Austria: "🇦🇹",
//       Luxembourg: "🇱🇺",
//       Italy: "🇮🇹",
//       Spain: "🇪🇸",
//       Portugal: "🇵🇹",
//       Europe: "🇪🇺", // European Union flag for Europe
//       Brazil: "🇧🇷",
//       Mexico: "🇲🇽",
//       India: "🇮🇳",
//       China: "🇨🇳",
//       "South Korea": "🇰🇷",
//       Israel: "🇮🇱",
//       UAE: "🇦🇪",
//       "Saudi Arabia": "🇸🇦",
//     };

//     return flagMap[geography] || "🌍";
//   };

//   return (
//     <div className="w-full h-full flex flex-col content-section animate-fade-in-up">
//       {/* Header Section */}
//       <header className="flex mx-6 h-[60px] relative mt-6 items-center justify-between">
//         <div className="flex flex-col items-start gap-1 relative">
//           <h1 className="font-bold text-foreground text-2xl leading-tight tracking-tight">
//             Dashboard
//           </h1>
//           <p className="text-muted-foreground text-sm leading-relaxed">
//             Track Your Fundraising Progress And Investor Engagement
//           </p>
//         </div>

//         <div className="relative">
//           <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4f5059]" />
//           <Input
//             placeholder="Search transactions, campaigns..."
//             className="w-[332px] h-[37px] pl-10 [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-sm tracking-[-0.31px]"
//           />
//         </div>
//       </header>

//       {/* Welcome Card */}
//       <div className="mx-6 relative mt-6">
//         <WelcomeCard
//           name={campaigns.user?.name || ""}
//           fundraisingTarget={campaigns.user?.details?.fundraisingTarget || 0}
//           committedCapital={campaigns.user?.details?.capitalCommitted || 0}
//         />
//       </div>

//       {/* Market Insights Section */}
//       <Card className="mx-[19px] flex-1 h-full mt-[18px] rounded-[20px] border border-solid border-[#eaeaea] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
//         <CardContent className="flex flex-col gap-2.5 p-5">
//           <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
//             <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
//               <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
//                 <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
//                   Market Insights
//                 </h2>
//                 <p className="w-fit font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope',Helvetica] tracking-[0]">
//                   Real-time Market Analysis And Trends
//                 </p>
//               </div>

//               <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
//                 <Tabs
//                   defaultValue="investor-type"
//                   className="inline-flex h-10 items-center p-0.5 relative flex-[0_0_auto] bg-[#f6f6f6] rounded-lg"
//                 >
//                   <TabsList className="bg-transparent p-0 h-auto">
//                     <TabsTrigger
//                       value="geography"
//                       className="px-4 py-1.5 text-[#7b7f93] data-[state=active]:bg-transparent data-[state=active]:text-[#7b7f93]"
//                     >
//                       Geography Distribution
//                     </TabsTrigger>
//                     <TabsTrigger
//                       value="investor-type"
//                       className="px-4 py-2 bg-white rounded-md text-[#272a34] font-semibold data-[state=active]:bg-white data-[state=active]:text-[#272a34]"
//                     >
//                       Investor Type Distribution
//                     </TabsTrigger>
//                   </TabsList>
//                 </Tabs>

//                 <Button
//                   variant="outline"
//                   className="h-10 gap-2 pl-3 pr-2 py-2 rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
//                 >
//                   <span className="[font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px]">
//                     Weekly View
//                   </span>
//                   <CalendarIcon className="w-4 h-4" />
//                 </Button>

//                 <Button
//                   variant="outline"
//                   size="icon"
//                   className="w-10 h-10 p-1 rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
//                 >
//                   <MoreHorizontalIcon className="w-6 h-6" />
//                 </Button>
//               </div>
//             </div>

//             <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
//               <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
//                 <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-bold text-[#111111] text-3xl tracking-[-0.60px] leading-[33px] whitespace-nowrap">
//                   {campaigns.totalLeads}
//                 </div>
//                 <Badge className="inline-flex items-center gap-1 pl-1 pr-1.5 py-1 bg-[#17a34a14] text-[#1b8341] rounded-[100px]">
//                   <img
//                     className="relative flex-[0_0_auto]"
//                     alt="Up"
//                     src="https://c.animaapp.com/mfqjua33FHoyZF/img/up.svg"
//                   />
//                   <span className="font-semibold text-xs">4.3%</span>
//                 </Badge>
//               </div>

//               <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
//                 <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
//                   <div className="relative w-[187px] h-[26px] bg-[#b3d4d6] rounded" />
//                   <div className="relative w-[90px] h-[26px] bg-[#67aaad] rounded" />
//                   <div className="relative flex-1 grow h-[26px] bg-[#1b8084] rounded" />
//                 </div>

//                 <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
//                   {marketInsightsData.map((item, index) => (
//                     <div
//                       key={index}
//                       className="flex h-8 items-center gap-4 pt-0 pb-2 px-0 relative self-stretch w-full border-b border-[#eaeaea]"
//                     >
//                       <div className="flex items-center gap-3 relative flex-1 grow">
//                         <div
//                           className={`${item.color} relative w-[13px] h-[5px] rounded-md`}
//                         />
//                         <div className="relative flex-1 mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#192330] text-base tracking-[-0.64px] leading-[22.4px]">
//                           {item.label}
//                         </div>
//                       </div>
//                       <div className="font-semibold text-[#192330] text-sm tracking-[-0.56px] leading-[19.6px] relative w-fit [font-family:'Manrope',Helvetica] whitespace-nowrap">
//                         {item.value}
//                       </div>
//                       <div className="font-medium text-[#4f5059] text-sm tracking-[-0.56px] leading-[19.6px] relative w-fit [font-family:'Manrope',Helvetica] whitespace-nowrap">
//                         {item.percentage}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="flex w-[1100px] items-start gap-[60px] px-3 py-2 relative flex-[0_0_auto] bg-[#f9f9f9] rounded-lg">
//               {marketStatsData.map((stat, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-start justify-end gap-1 relative"
//                 >
//                   <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
//                     <div
//                       className={`${stat.color} relative w-2 h-2 rounded-[100px]`}
//                     />
//                     <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#84858b] text-sm tracking-[-0.28px] leading-[21px] whitespace-nowrap">
//                       {stat.label}
//                     </div>
//                   </div>
//                   <div className="relative w-fit [font-family:'Manrope',Helvetica] font-bold text-[#111111] text-2xl tracking-[-0.48px] leading-9 whitespace-nowrap">
//                     {stat.value}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Bottom Section with Campaign Performance and Upcoming Calls */}
//       <div className="flex mx-5 flex-1 max-h-[606px] relative mt-[22px] items-start gap-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
//         {/* Campaign Performance */}
//         <Card className="flex-col h-[605px] gap-5 px-0 py-5 flex-1 grow flex relative items-start rounded-[20px] overflow-hidden border border-solid border-[#eaeaea]">
//           <CardHeader className="flex flex-col items-start gap-5 px-5 py-0 relative self-stretch w-full flex-[0_0_auto]">
//             <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
//               <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
//                 <h2
//                   className="relative w-fit mt-
// [-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap"
//                 >
//                   Campaign Performance
//                 </h2>
//                 <p className="w-fit font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope',Helvetica] tracking-[0]">
//                   Track Campaign Results With Live Data And Actionable Insights
//                 </p>
//               </div>

//               <Button
//                 variant="outline"
//                 className="h-8 gap-2 pl-3 pr-2 py-2 rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
//               >
//                 <FilterIcon className="w-4 h-4" />
//                 <span className="[font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px]">
//                   Filters
//                 </span>
//               </Button>
//             </div>
//           </CardHeader>

//           <CardContent className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mb-[-20.00px] p-0">
//             <Table>
//               <TableHeader className="bg-[#eef1f4]">
//                 <TableRow className="border-t border-b border-[#d0d5dd]">
//                   <TableHead className="w-[220px] pl-5 pr-4 py-4 border-r border-[#d0d5dd] font-semibold text-[#3b4c63] text-xs tracking-[0.24px]">
//                     CAMPAIGN TITLE
//                   </TableHead>
//                   <TableHead className="w-[140px] p-4 border-r border-[#d0d5dd] font-semibold text-[#3b4c63] text-xs tracking-[0.24px]">
//                     GEOGRAPHY
//                   </TableHead>
//                   <TableHead className="w-[105px] p-4 border-r border-[#d0d5dd] font-semibold text-[#3b4c63] text-xs tracking-[0.24px]">
//                     LEAD LIST
//                   </TableHead>
//                   <TableHead className="w-[100px] p-4 border-r border-[#d0d5dd] font-medium text-[#3b4c63] text-xs tracking-[-0.48px]">
//                     COPY
//                   </TableHead>
//                   <TableHead className="w-[145px] p-4 border-r border-[#d0d5dd] font-medium text-[#3b4c63] text-xs tracking-[-0.48px]">
//                     STATUS
//                   </TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {campaigns.campaigns.map(
//                   (campaign: CampaignState, index: number) => (
//                     <TableRow
//                       key={index}
//                       className="h-[72px] border-b border-[#e9eaec]"
//                     >
//                       <TableCell className="w-[220px] pl-5 pr-4 py-4 border-r border-[#e9eaec]">
//                         <div className="flex items-center gap-2">
//                           <img
//                             className="relative flex-[0_0_auto]"
//                             alt="Frame"
//                             src="https://c.animaapp.com/mfqjua33FHoyZF/img/frame-1171275486.svg"
//                           />
//                           <div className="inline-flex flex-col items-start justify-center">
//                             <div className="font-semibold text-[#192330] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
//                               {campaign.name}
//                             </div>
//                           </div>
//                         </div>
//                       </TableCell>
//                       <TableCell className="w-[140px] p-4 border-r border-[#e9eaec]">
//                         <div className="flex items-center gap-2">
//                           <span className="text-lg">
//                             {getGeographyFlag(campaign.geography as string)}
//                           </span>
//                           <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
//                             {campaign.geography}
//                           </span>
//                         </div>
//                       </TableCell>
//                       <TableCell className="w-[105px] p-4 border-r border-[#e9eaec]">
//                         <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
//                           {campaign.investor}
//                         </span>
//                       </TableCell>
//                       <TableCell className="w-[100px] p-4 border-r border-[#e9eaec]">
//                         <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
//                           {campaign.copy}
//                         </span>
//                       </TableCell>
//                       <TableCell className="w-[145px] p-4 border-r border-[#e9eaec]">
//                         <Badge
//                           className={`inline-flex items-center justify-center gap-1 px-3 py-1 rounded-[100px] ${getStatusBadgeStyles(campaign.status || "")}`}
//                         >
//                           <div
//                             className={`w-1.5 h-1.5 rounded-[80px] ${campaign.status === "approved" || campaign.status === "closed" ? "bg-[#1B8441]" : campaign.status === "draft" || campaign.status === "pending" ? "bg-[#C3C8D0]" : campaign.status === "completed" ? "bg-[#D11818]" : campaign.status === "in-progress" ? "bg-[#D1A318]" : "bg-[#d1a218]"}`}
//                           />
//                           <span className="font-medium text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
//                             {campaign.status}
//                           </span>
//                         </Badge>
//                       </TableCell>
//                     </TableRow>
//                   )
//                 )}
//               </TableBody>
//             </Table>
//             <div className="absolute w-[calc(100%_-_2px)] left-0 bottom-0.5 h-[65px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />
//           </CardContent>
//         </Card>

//         {/* Upcoming Calls */}
//         <Card className="w-[428px] gap-2.5 p-5 rounded-[20px] overflow-hidden border border-solid border-[#eaeaea]">
//           <CardContent className="flex flex-col items-start gap-5 relative flex-1 grow p-0">
//             <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
//               <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
//                 <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
//                   Upcoming Calls
//                 </h2>
//                 <p className="w-fit font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope',Helvetica] tracking-[0]">
//                   Stay On Top Of Scheduled Meetings And Client Calls
//                 </p>
//               </div>

//               <Button className="h-8 px-3 py-1 bg-white rounded-lg border-[0.5px] border-solid border-[#09215e] text-[#09215e]">
//                 <span className="[font-family:'Manrope',Helvetica] font-medium text-xs tracking-[-0.24px] leading-[18px]">
//                   Add Event
//                 </span>
//               </Button>
//             </div>

//             <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
//               <Tabs
//                 defaultValue="ongoing"
//                 className="flex p-0.5 self-stretch w-full flex-[0_0_auto] bg-[#f6f6f6] rounded-lg items-center"
//               >
//                 <TabsList className="bg-transparent p-0 h-auto w-full">
//                   <TabsTrigger
//                     value="ongoing"
//                     className="flex-1 px-4 py-2 bg-white rounded-md text-[#272a34] font-semibold data-[state=active]:bg-white data-[state=active]:text-[#272a34]"
//                   >
//                     On Going
//                   </TabsTrigger>
//                   <TabsTrigger
//                     value="finished"
//                     className="flex-1 px-4 py-1.5 text-[#7b7f93] data-[state=active]:bg-white data-[state=active]:text-[#272a34]"
//                   >
//                     Finished
//                   </TabsTrigger>
//                   <TabsTrigger
//                     value="cancelled"
//                     className="flex-1 px-4 py-1.5 text-[#7b7f93] data-[state=active]:bg-white data-[state=active]:text-[#272a34]"
//                   >
//                     Cancelled
//                   </TabsTrigger>
//                 </TabsList>
//               </Tabs>

//               <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
//                 {upcomingCallsData.map((call, index) => (
//                   <Card
//                     key={index}
//                     className={`relative self-stretch w-full h-[103px] rounded-[10px] overflow-hidden border border-solid ${call.isActive ? "border-[#4e7fe3]" : "border-[#eaeaea]"}`}
//                   >
//                     <CardContent className="p-0 relative h-full">
//                       <div className="inline-flex flex-col items-center justify-center gap-2 pl-0 pr-3 py-0 absolute top-[15px] left-[15px] border-r border-[#eaeaea]">
//                         <div
//                           className={`w-[60px] text-center relative mt-[-0.50px] [font-family:'Manrope',Helvetica] text-sm tracking-[-0.28px] leading-[19.6px] ${call.isActive ? "font-semibold text-[#272a34]" : "font-normal text-[#272a34b2]"}`}
//                         >
//                           {call.day}
//                         </div>
//                         <div
//                           className={`relative self-stretch [font-family:'Manrope',Helvetica] text-3xl text-center tracking-[0] leading-[normal] ${call.isActive ? "font-semibold text-[#111111]" : "font-normal text-[#030512b2]"}`}
//                         >
//                           {call.date}
//                         </div>
//                       </div>

//                       <div className="inline-flex flex-col items-start gap-2 absolute top-[calc(50.00%_-_32px)] left-[104px]">
//                         <div className="relative mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#272a34] text-sm tracking-[-0.28px] leading-[19.6px]">
//                           {call.title}
//                         </div>
//                         <div className="relative [font-family:'Manrope',Helvetica] font-medium text-[#7b7f93] text-xs tracking-[-0.24px] leading-[16.8px] whitespace-nowrap">
//                           {call.time}
//                         </div>
//                       </div>

//                       <div className="flex flex-col w-[142px] items-start justify-center gap-3 p-2 absolute top-[calc(50.00%_-_36px)] left-[235px] bg-[#fbfbfb] rounded-lg border border-solid border-[#eaeaea]">
//                         <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
//                           <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
//                             <MapPinIcon className="w-4 h-4 text-[#7b7f93]" />
//                             <div className="relative w-[88px] h-4 mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#7b7f93] text-xs tracking-[-0.24px] leading-[16.8px] whitespace-nowrap">
//                               {call.location}
//                             </div>
//                           </div>
//                           <MoreHorizontalIcon className="w-4 h-4 text-[#7b7f93]" />
//                         </div>

//                         <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
//                           <div className="inline-flex items-center relative flex-[0_0_auto]">
//                             {call.participants.map((participant, pIndex) => (
//                               <Avatar
//                                 key={pIndex}
//                                 className={`w-6 h-6 ${pIndex > 0 ? "-ml-3" : ""}`}
//                               >
//                                 <AvatarImage
//                                   src={participant}
//                                   alt="Participant"
//                                 />
//                                 <AvatarFallback>P</AvatarFallback>
//                               </Avatar>
//                             ))}
//                           </div>
//                           <div className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-[#7b7f93] text-xs tracking-[-0.24px] leading-[16.8px] whitespace-nowrap">
//                             {call.additionalCount}
//                           </div>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Recent Leads Section */}
//       <Card className="mx-[19px] h-[531px] mt-[19px] rounded-[20px] overflow-hidden border border-solid border-[#eaeaea] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
//         <CardHeader className="flex flex-col items-start gap-5 px-5 py-5 relative self-stretch w-full flex-[0_0_auto]">
//           <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
//             <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
//               <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
//                 Recent Leads
//               </h2>
//               <p className="w-fit font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope',Helvetica] tracking-[0]">
//                 Stay Updated On Your Most Recent Lead Activity
//               </p>
//             </div>

//             <Tabs
//               defaultValue="this-week"
//               className="inline-flex p-0.5 flex-[0_0_auto] bg-[#f6f6f6] rounded-lg items-center"
//             >
//               <TabsList className="bg-transparent p-0 h-auto">
//                 <TabsTrigger
//                   value="this-week"
//                   className="px-4 py-2 bg-white rounded-md text-[#272a34] font-semibold data-[state=active]:bg-white data-[state=active]:text-[#272a34]"
//                 >
//                   This Week
//                 </TabsTrigger>
//                 <TabsTrigger
//                   value="this-month"
//                   className="px-4 py-1.5 text-[#7b7f93] data-[state=active]:bg-white data-[state=active]:text-[#272a34]"
//                 >
//                   This Month
//                 </TabsTrigger>
//               </TabsList>
//             </Tabs>
//           </div>
//         </CardHeader>

//         <CardContent className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mb-[-20.00px] p-0">
//           <Table>
//             <TableHeader className="bg-[#eef1f4]">
//               <TableRow className="border-t border-b border-[#d0d5dd]">
//                 <TableHead className="w-[282px] pl-5 pr-4 py-4 border-r border-[#d0d5dd] font-semibold text-[#3b4c63] text-xs tracking-[0.24px]">
//                   NAME
//                 </TableHead>
//                 <TableHead className="w-64 p-4 border-r border-[#d0d5dd] font-semibold text-[#3b4c63] text-xs tracking-[0.24px]">
//                   CONTACT
//                 </TableHead>
//                 <TableHead className="flex-1 p-4 border-r border-[#d0d5dd] font-semibold text-[#3b4c63] text-xs tracking-[0.24px]">
//                   COMPANY
//                 </TableHead>
//                 <TableHead className="flex-1 p-4 border-r border-[#d0d5dd] font-medium text-[#3b4c63] text-xs tracking-[-0.48px]">
//                   STATUS
//                 </TableHead>
//                 <TableHead className="flex-1 border-r border-[#d0d5dd]"></TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {leads.leads.map((lead: LeadState, index: number) => (
//                 <TableRow
//                   key={index}
//                   className="h-[72px] border-b border-[#e9eaec]"
//                 >
//                   <TableCell className="w-[282px] pl-5 pr-4 py-4 border-r border-[#e9eaec]">
//                     <div className="flex items-center gap-2">
//                       <Avatar className="w-9 h-9">
//                         <AvatarImage
//                           src={""}
//                           alt={lead.firstname + " " + lead.lastname}
//                         />
//                         <AvatarFallback>
//                           {lead.firstname.charAt(0) + lead.lastname.charAt(0)}
//                         </AvatarFallback>
//                       </Avatar>
//                       <div className="inline-flex flex-col items-start justify-center gap-0.5">
//                         <div className="font-semibold text-[#041824] text-base tracking-[0] leading-5 [font-family:'Manrope',Helvetica]">
//                           {lead.firstname + " " + lead.lastname}
//                         </div>
//                         <div className="inline-flex items-center gap-1">
//                           <ClockIcon className="w-4 h-4 text-[#3b4c63]" />
//                           <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
//                             {new Date(lead.createdAt).toLocaleDateString(
//                               "en-US",
//                               {
//                                 year: "numeric",
//                                 month: "short",
//                                 day: "numeric",
//                                 hour: "numeric",
//                                 minute: "numeric",
//                                 hour12: true,
//                               }
//                             )}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </TableCell>
//                   <TableCell className="w-64 p-4 border-r border-[#e9eaec]">
//                     <div className="flex flex-col items-start justify-center gap-1">
//                       <div className="inline-flex items-center gap-1">
//                         <MailIcon className="w-4 h-4 text-[#3b4c63]" />
//                         <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
//                           {lead.email}
//                         </span>
//                       </div>
//                       {lead.phoneNumber ? (
//                         <div className="inline-flex items-center gap-1">
//                           <PhoneIcon className="w-4 h-4 text-[#3b4c63]" />
//                           <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
//                             {lead.phoneNumber}
//                           </span>
//                         </div>
//                       ) : (
//                         <></>
//                       )}
//                     </div>
//                   </TableCell>
//                   <TableCell className="flex-1 p-4 border-r border-[#e9eaec]">
//                     <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
//                       {lead.companyName}
//                     </span>
//                   </TableCell>
//                   <TableCell className="flex-1 p-4 border-r border-[#e9eaec]">
//                     <Badge
//                       className={`inline-flex items-center justify-center gap-1 px-3 py-1 rounded-[100px] ${getStatusBadgeStyles(lead.status as string)}`}
//                     >
//                       <div
//                         className={`w-1.5 h-1.5 rounded-[80px] ${lead.status === LeadStatus.DO_NOT_CONTACT || LeadStatus.NOT_INTERESTED ? "bg-[#1b8441]" : lead.status === LeadStatus.INFORMATION_REQUEST || LeadStatus.MEETING_REQUESTED ? "bg-[#c2c8d0]" : "bg-[#d1a218]"}`}
//                       />
//                       <span className="font-medium text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
//                         {lead.status}
//                       </span>
//                     </Badge>
//                   </TableCell>
//                   <TableCell className="flex-1 p-4 border-r border-[#e9eaec]">
//                     <div className="flex items-center gap-2.5 cursor-pointer">
//                       <EyeIcon className="w-4 h-4 text-[#3b4c63]" />
//                       <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope',Helvetica]">
//                         View
//                       </span>
//                     </div>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//           <div className="absolute w-[calc(100%_-_2px)] left-0 bottom-0.5 h-[65px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

"use client";
import { useEffect, useState } from "react";
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
import { WelcomeCard } from "./WelcomeCard";
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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import {
  CampaignState,
  getAllCampaignStatusByUserAsync,
  getCampaignInvestorTypeDistributionMetricsAsync,
  selectCampaign,
} from "@/features/slices/CampaignSlice";
import {
  getAllLeadsByUserIdAsync,
  LeadState,
  LeadStatus,
  selectLead,
} from "@/features/slices/LeadSlice";

export const DashboardSection = (): JSX.Element => {
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: [] as string[],
    geography: [] as string[],
  });
  const [isViewDropdownOpen, setIsViewDropdownOpen] = useState(false);
  const [selectedView, setSelectedView] = useState("Weekly View");
  const [activeInsightsTab, setActiveInsightsTab] = useState("investor-type");
  const [isLeadsFilterOpen, setIsLeadsFilterOpen] = useState(false);
  const [leadsFilters, setLeadsFilters] = useState({
    sortOrder: "newest", // "newest" or "oldest"
    categories: [] as string[],
  });
  const [isCampaignLoading, setIsCampaignLoading] = useState(true);
  const [isLeadsLoading, setIsLeadsLoading] = useState(true);
  const [isInvestorTypeLoading, setIsInvestorTypeLoading] = useState(false);
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [isEmailReplyPopupOpen, setIsEmailReplyPopupOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const campaigns = useSelector(selectCampaign);
  const leads = useSelector(selectLead);

  const getGeographyFlag = (geography: string) => {
    const flagMap: Record<string, string> = {
      "United States": "🇺🇸",
      USA: "🇺🇸",
      Canada: "🇨🇦",
      "United Kingdom": "🇬🇧",
      UK: "🇬🇧",
      Germany: "🇩🇪",
      France: "🇫🇷",
      Japan: "🇯🇵",
      Australia: "🇦🇺",
      Singapore: "🇸🇬",
      "Hong Kong": "🇭🇰",
      Switzerland: "🇨🇭",
      Netherlands: "🇳🇱",
      Sweden: "🇸🇪",
      Norway: "🇳🇴",
      Denmark: "🇩🇰",
      Finland: "🇫🇮",
      Ireland: "🇮🇪",
      Belgium: "🇧🇪",
      Austria: "🇦🇹",
      Luxembourg: "🇱🇺",
      Italy: "🇮🇹",
      Spain: "🇪🇸",
      Portugal: "🇵🇹",
      Europe: "🇪🇺", // European Union flag for Europe
      Brazil: "🇧🇷",
      Mexico: "🇲🇽",
      India: "🇮🇳",
      China: "🇨🇳",
      "South Korea": "🇰🇷",
      Israel: "🇮🇱",
      UAE: "🇦🇪",
      "Saudi Arabia": "🇸🇦",
    };

    return flagMap[geography] || "🌍";
  };

  useEffect(() => {
    setIsCampaignLoading(true);
    setIsLeadsLoading(true);
    dispatch(getAllCampaignStatusByUserAsync({}));
    dispatch(
      getAllLeadsByUserIdAsync({
        filters: {
          status: ["INFORMATION_REQUEST", "INTERESTED"],
          limit: 5,
        },
      })
    );
    dispatch(getCampaignInvestorTypeDistributionMetricsAsync());
  }, []);

  useEffect(() => {
    setIsLeadsLoading(false);
  }, [leads.leads]);

  useEffect(() => {
    setIsCampaignLoading(false);
  }, [campaigns.campaigns]);

  const applyCampaignsFilters = () => {
    setIsFilterPopupOpen(false);
    setIsCampaignLoading(true);
    dispatch(getAllCampaignStatusByUserAsync(filters));
  };

  const applyLeadsFilters = () => {
    setIsLeadsFilterOpen(false);
    setIsLeadsLoading(true);
    dispatch(
      getAllLeadsByUserIdAsync({
        filters: {
          status: leadsFilters.categories,
          sort: leadsFilters.sortOrder === "newest" ? "asc" : "desc",
        },
      })
    );
  };

  const statusOptions = [
    "Draft",
    "Approved",
    "Active",
    "Paused",
    "Completed",
    "Stopped",
  ];
  const geographyOptions = [
    "Global",
    "United States",
    "Europe",
    "Asia",
    "Latin America",
    "Oceania",
  ];
  const viewOptions = [
    "Weekly View",
    "Monthly View",
    "Quarterly View",
    "Yearly View",
  ];

  const handleFilterToggle = (type: "status" | "geography", value: string) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value],
    }));
  };

  const clearFilters = () => {
    setFilters({ status: [], geography: [] });
  };

  const handleLeadsCategoryToggle = (category: string) => {
    setLeadsFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const clearLeadsFilters = () => {
    setLeadsFilters({ sortOrder: "newest", categories: [] });
  };

  const leadCategories = [
    "INFORMATION_REQUEST",
    "INTERESTED",
    "MEETING_BOOKED",
    "FOLLOW_UP",
  ];

  const handleViewEmailReply = (lead: any) => {
    // Add dummy email reply to the lead
    const leadWithReply = {
      ...lead,
      emailReply:
        lead.name === "Leslie Alexander"
          ? "Thank you for reaching out! I'm very interested in learning more about your fund. Could we schedule a call next week to discuss potential investment opportunities?"
          : lead.name === "Carmen Gottlieb"
            ? "Hi there, I appreciate your email. We're currently evaluating new partnerships. I'd like to review your investment thesis - could you send over your deck?"
            : lead.name === "Sam Bauch"
              ? "Thanks for the introduction. Your fund's focus on healthcare innovation aligns well with our portfolio strategy. Let's set up a meeting to explore synergies."
              : "Hello, I received your outreach about investment opportunities. We're interested but would need to see more details about your track record and current portfolio.",
    };

    setSelectedLead(leadWithReply);
    setIsEmailReplyPopupOpen(true);
  };

  const remainingBars = Array.from({ length: 72 }, (_, index) => ({
    width: "w-[1.5px]",
    height: "h-[26px]",
    bgColor: "bg-[#50a57c]",
    marginLeft: index === 71 ? "mr-[-2.50px]" : "",
  }));

  // Market insights data - dynamically calculated from campaigns
  const colorMap: Record<string, string> = {
    "Limited Partners": "bg-[#ccdee0]",
    "Family Offices": "bg-[#33a4a9]",
    "Venture Capital": "bg-[#1b8084]",
    "Pension Funds": "bg-[#ccdee0]",
    "Family Office": "bg-[#33a4a9]",
    All: "bg-[#999999]", // fallback if needed
  };

  const geographyColorMap: Record<string, string> = {
    "United States": "bg-[#002868]",
    USA: "bg-[#002868]",
    Europe: "bg-[#003399]",
    Asia: "bg-[#de2910]",
    "Latin America": "bg-[#009639]",
    Oceania: "bg-[#012169]",
    Global: "bg-[#6b7280]",
  };

  // Calculate investor type distribution from campaigns
  const totalsByInvestor = campaigns.campaigns.reduce<Record<string, number>>(
    (acc, c: any) => {
      acc[c.investor] = (acc[c.investor] || 0) + 1;
      return acc;
    },
    {}
  );

  const investorTotal = Object.values(totalsByInvestor).reduce(
    (a, b) => a + b,
    0
  );
  const investorTypeData = Object.entries(totalsByInvestor).map(
    ([investor, count]) => {
      const percentage =
        investorTotal === 0 ? 0 : (count / investorTotal) * 100;
      return {
        color: colorMap[investor] || "bg-gray-400", // fallback color
        label: investor,
        value: count.toString(),
        percentage: `(${percentage.toFixed(0)}%)`,
        width: `${percentage.toFixed(0)}%`,
      };
    }
  );

  // Calculate geography distribution from campaigns
  const totalsByGeography = campaigns.campaigns.reduce<Record<string, number>>(
    (acc, c: any) => {
      acc[c.geography] = (acc[c.geography] || 0) + 1;
      return acc;
    },
    {}
  );

  const geographyTotal = Object.values(totalsByGeography).reduce(
    (a, b) => a + b,
    0
  );
  const geographyData = Object.entries(totalsByGeography).map(
    ([geography, count]) => {
      const percentage =
        geographyTotal === 0 ? 0 : (count / geographyTotal) * 100;
      return {
        color: geographyColorMap[geography] || "bg-gray-400", // fallback color
        label: geography,
        value: count.toString(),
        percentage: `(${percentage.toFixed(0)}%)`,
        width: `${percentage.toFixed(0)}%`,
      };
    }
  );

  const currentInsightsData =
    activeInsightsTab === "geography" ? geographyData : investorTypeData;

  // Calculate total value for dynamic display
  const totalValue = currentInsightsData.reduce((sum, item) => {
    const numericValue = parseInt(item.value.replace(/,/g, ""));
    return sum + (isNaN(numericValue) ? 0 : numericValue);
  }, 0);
  const formattedTotalValue = totalValue.toLocaleString();

  // Calculate dynamic height based on number of items
  const baseHeight = 280; // Base height for header, total, bars, and stats
  const itemHeight = 32; // Height per data item (8 items + 2 padding)
  const dynamicHeight = baseHeight + currentInsightsData.length * itemHeight;
  const maxHeight = Math.min(dynamicHeight, 500); // Cap at 500px

  const marketStatsData = [
    {
      color: "bg-[#edb52b]",
      label: "Total Contacts",
      value: campaigns.totalLeads || 0,
    },
    {
      color: "bg-[#329369]",
      label: "Positive Replies",
      value: campaigns.positiveReplied || 0,
    },
    {
      color: "bg-[#220ea2]",
      label: "Meetings Scheduled",
      value: campaigns.meetingsBooked || 0,
    },
    {
      color: "bg-[#933277]",
      label: "Live Campaigns",
      value: campaigns.totalActiveCampaigns || 0,
    },
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
      status: { type: "information-request", label: "Information Request" },
    },
    {
      name: "Carmen Gottlieb",
      avatar: "https://c.animaapp.com/mfqjua33FHoyZF/img/rectangle-2.png",
      date: "2024-01-15",
      email: "lesliealex@mail.com",
      phone: "1-566-581-9703 x039",
      company: "TechVentures Capital",
      status: { type: "meeting-booked", label: "Meeting Booked" },
    },
    {
      name: "Sam Bauch",
      avatar: "https://c.animaapp.com/mfqjua33FHoyZF/img/rectangle-2-1.png",
      date: "2024-01-15",
      email: "lesliealex@mail.com",
      phone: "1-566-581-9703 x039",
      company: "TechVentures Capital",
      status: { type: "meeting-booked", label: "Meeting Booked" },
    },
    {
      name: "Gwendolyn Schulist",
      avatar: "https://c.animaapp.com/mfqjua33FHoyZF/img/rectangle-2-2.png",
      date: "2024-01-15",
      email: "lesliealex@mail.com",
      phone: "1-566-581-9703 x039",
      company: "TechVentures Capital",
      status: { type: "follow-up", label: "Follow Up" },
    },
    {
      name: "Candice Becker",
      avatar: "https://c.animaapp.com/mfqjua33FHoyZF/img/rectangle-1-1.png",
      date: "2024-01-15",
      email: "lesliealex@mail.com",
      phone: "1-566-581-9703 x039",
      company: "TechVentures Capital",
      status: { type: "information-request", label: "Information Request" },
    },
    {
      name: "Aubrey Kuhn",
      avatar: "https://c.animaapp.com/mfqjua33FHoyZF/img/rectangle-1-2.png",
      date: "2024-01-15",
      email: "lesliealex@mail.com",
      phone: "1-566-581-9703 x039",
      company: "TechVentures Capital",
      status: { type: "follow-up", label: "Follow Up" },
    },
  ];

  const getStatusBadgeStyles = (type: string) => {
    switch (type) {
      // Recent Leads categories (blue gradients)
      case LeadStatus.INFORMATION_REQUEST:
        return "bg-[#3B82F6]/[0.16] text-[#1E40AF] hover:bg-[#3B82F6]/[0.16] hover:text-[#1E40AF]"; // Blue
      case LeadStatus.MEETING_BOOKED:
        return "bg-[#1D4ED8]/[0.16] text-[#1E3A8A] hover:bg-[#1D4ED8]/[0.16] hover:text-[#1E3A8A]"; // Darker blue
      case LeadStatus.NO_COMMENTS:
        return "bg-[#60A5FA]/[0.16] text-[#2563EB] hover:bg-[#60A5FA]/[0.16] hover:text-[#2563EB]"; // Light blue

      // // Campaign Performance statuses (original colors)
      // case LeadStatus.APPROVED:
      //   return "bg-[#ECF8F1] text-[#1B8441] hover:bg-[#ECF8F1] hover:text-[#1B8441]";
      // case LeadStatus.COMPLETED:
      //   return "bg-[#D11818]/[0.16] text-[#D11818] hover:bg-[#D11818]/[0.16] hover:text-[#D11818]";
      // case LeadStatus.IN_PROGRESS:
      //   return "bg-[#D1A318]/[0.16] text-[#D1A318] hover:bg-[#D1A318]/[0.16] hover:text-[#D1A318]";
      // case LeadStatus.DRAFT:
      //   return "bg-[#EFEFEF] text-[#3B4C63] hover:bg-[#EFEFEF] hover:text-[#3B4C63]";
      default:
        return "bg-[#EFEFEF] text-[#3B4C63] hover:bg-[#EFEFEF] hover:text-[#3B4C63]";
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
            className="w-[332px] h-[37px] pl-10 [font-family:'Manrope'] font-medium text-[#4f5059] text-sm tracking-[-0.31px]"
          />
        </div>
      </header>

      {/* Welcome Card */}
      <div className="mx-6 relative mt-6">
        <WelcomeCard
          name={campaigns.user?.name || ""}
          fundraisingTarget={campaigns.user?.details?.fundraisingTarget || 0}
          committedCapital={campaigns.user?.details?.capitalCommitted || 0}
        />
      </div>

      {/* Market Insights Section */}
      <Card
        className="mx-[19px] flex-1 mt-[18px] rounded-[20px] border border-solid border-[#eaeaea] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
        style={{ height: `${maxHeight}px` }}
      >
        <CardContent className="flex flex-col gap-2.5 p-5">
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
                <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope'] font-semibold text-[#111111] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
                  Market Insights
                </h2>
                <p className="w-fit font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope'] tracking-[0]">
                  Real-time Market Analysis And Trends
                </p>
              </div>

              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <Tabs
                  value={activeInsightsTab}
                  onValueChange={setActiveInsightsTab}
                  className="inline-flex h-10 items-center p-0.5 relative flex-[0_0_auto] bg-[#f6f6f6] rounded-lg"
                >
                  <TabsList className="bg-transparent p-0 h-auto">
                    <TabsTrigger
                      value="geography"
                      className="px-4 py-2 text-[#7b7f93] data-[state=active]:bg-white data-[state=active]:text-[#272a34] data-[state=active]:font-semibold data-[state=active]:rounded-md"
                    >
                      Geography Distribution
                    </TabsTrigger>
                    <TabsTrigger
                      value="investor-type"
                      className="px-4 py-2 text-[#7b7f93] data-[state=active]:bg-white data-[state=active]:text-[#272a34] data-[state=active]:font-semibold data-[state=active]:rounded-md"
                    >
                      Investor Type Distribution
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="relative">
                  <Button
                    variant="outline"
                    className="h-10 gap-2 pl-3 pr-2 py-2 rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
                    onClick={() => setIsViewDropdownOpen(!isViewDropdownOpen)}
                  >
                    <span className="[font-family:'Manrope'] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px]">
                      {selectedView}
                    </span>
                    <CalendarIcon className="w-4 h-4" />
                  </Button>

                  {/* View Period Dropdown */}
                  {isViewDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-[#eaeaea] py-2 w-40 z-50">
                      {viewOptions.map((view) => (
                        <button
                          key={view}
                          className="w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors"
                          onClick={() => {
                            setSelectedView(view);
                            setIsViewDropdownOpen(false);
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
            </div>

            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope'] font-bold text-[#111111] text-3xl tracking-[-0.60px] leading-[33px] whitespace-nowrap">
                  {formattedTotalValue}
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
                  {currentInsightsData.slice(0, 3).map((item, index) => (
                    <div
                      key={index}
                      className={`relative h-[26px] ${item.color} rounded`}
                      style={{
                        width: `${Math.max(parseInt(item.width.replace("%", "")) * 4, 60)}px`,
                      }}
                    />
                  ))}
                </div>

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  {currentInsightsData.map((item, index) => (
                    <div
                      key={index}
                      className="flex h-8 items-center gap-4 pt-0 pb-2 px-0 relative self-stretch w-full border-b border-[#eaeaea]"
                    >
                      <div className="flex items-center gap-3 relative flex-1 grow">
                        <div
                          className={`${item.color} relative rounded-md`}
                          style={{
                            width: `${Math.max(parseInt(item.width.replace("%", "")), 8)}px`,
                            height: "5px",
                            minWidth: "8px",
                          }}
                        />
                        <div className="relative flex-1 mt-[-1.00px] [font-family:'Manrope'] font-semibold text-[#192330] text-base tracking-[-0.64px] leading-[22.4px]">
                          {item.label}
                        </div>
                      </div>
                      <div className="font-semibold text-[#192330] text-sm tracking-[-0.56px] leading-[19.6px] relative w-fit [font-family:'Manrope'] whitespace-nowrap">
                        {item.value}
                      </div>
                      <div className="font-medium text-[#4f5059] text-sm tracking-[-0.56px] leading-[19.6px] relative w-fit [font-family:'Manrope'] whitespace-nowrap">
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
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope'] font-medium text-[#84858b] text-sm tracking-[-0.28px] leading-[21px] whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                  <div className="relative w-fit [font-family:'Manrope'] font-bold text-[#111111] text-2xl tracking-[-0.48px] leading-9 whitespace-nowrap">
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
[-1.00px] [font-family:'Manrope'] font-semibold text-[#111111] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap"
                >
                  Campaign Performance
                </h2>
                <p className="w-fit font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope'] tracking-[0]">
                  Track Campaign Results With Live Data And Actionable Insights
                </p>
              </div>

              <div className="relative">
                <Button
                  variant="outline"
                  className="h-8 gap-2 pl-3 pr-2 py-2 rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
                  onClick={() => setIsFilterPopupOpen(!isFilterPopupOpen)}
                >
                  <FilterIcon className="w-4 h-4" />
                  <span className="[font-family:'Manrope'] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px]">
                    Filters
                  </span>
                </Button>

                {/* Filter Dropdown */}
                {isFilterPopupOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-[#eaeaea] p-4 w-80 z-50">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-[#111111] [font-family:'Manrope']">
                        Filter Campaigns
                      </h3>
                      <button
                        onClick={() => setIsFilterPopupOpen(false)}
                        className="text-[#4f5059] hover:text-[#111111] transition-colors text-sm"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-4">
                      {/* Status Filter */}
                      <div>
                        <label className="block text-xs font-medium text-[#111111] mb-2 [font-family:'Manrope']">
                          Status
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {statusOptions.map((status) => (
                            <label
                              key={status}
                              className="flex items-center gap-2 p-2 bg-white rounded border border-[#dbdbdb] hover:border-[#05587a] transition-colors cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                checked={filters.status.includes(status)}
                                onChange={() =>
                                  handleFilterToggle("status", status)
                                }
                                className="w-3 h-3 text-[#05587a] bg-white border-[#dbdbdb] rounded focus:ring-[#05587a] focus:ring-1"
                              />
                              <span className="[font-family:'Manrope'] font-normal text-[#111111] text-xs">
                                {status}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Geography Filter */}
                      <div>
                        <label className="block text-xs font-medium text-[#111111] mb-2 [font-family:'Manrope']">
                          Geography
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {geographyOptions.map((geography) => (
                            <label
                              key={geography}
                              className="flex items-center gap-2 p-2 bg-white rounded border border-[#dbdbdb] hover:border-[#05587a] transition-colors cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                checked={filters.geography.includes(geography)}
                                onChange={() =>
                                  handleFilterToggle("geography", geography)
                                }
                                className="w-3 h-3 text-[#05587a] bg-white border-[#dbdbdb] rounded focus:ring-[#05587a] focus:ring-1"
                              />
                              <span className="[font-family:'Manrope'] font-normal text-[#111111] text-xs">
                                {geography}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={clearFilters}
                      >
                        Clear
                      </Button>
                      <Button size="sm" onClick={() => applyCampaignsFilters()}>
                        Apply
                      </Button>
                    </div>
                  </div>
                )}
              </div>
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
                {isCampaignLoading ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center">
                      Loading...
                    </TableCell>
                  </TableRow>
                ) : (
                  campaigns.campaigns.map((campaign: CampaignState, index) => (
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
                            <div className="font-semibold text-[#192330] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope']">
                              {campaign.name}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="w-[140px] p-4 border-r border-[#e9eaec]">
                        <div className="flex items-center gap-2">
                          {/* <img
                          className="relative w-5 h-[15px]"
                          alt="Flag"
                          src={campaign.geography}
                        /> */}
                          <span>
                            {getGeographyFlag(
                              (campaign.geography || "").toString()
                            )}
                          </span>
                          <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope']">
                            {campaign.geography}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="w-[105px] p-4 border-r border-[#e9eaec]">
                        <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope']">
                          {campaign.leadList}
                        </span>
                      </TableCell>
                      <TableCell className="w-[100px] p-4 border-r border-[#e9eaec]">
                        <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope']">
                          {campaign.copy}
                        </span>
                      </TableCell>
                      <TableCell className="w-[145px] p-4 border-r border-[#e9eaec]">
                        <Badge
                          className={`inline-flex items-center justify-center gap-1 px-3 py-1 rounded-[100px] ${getStatusBadgeStyles(campaign.status || "")}`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-[80px] ${
                              campaign.status === "approved"
                                ? "bg-[#1B8441]"
                                : campaign.status === "completed"
                                  ? "bg-[#D11818]"
                                  : campaign.status === "in-progress"
                                    ? "bg-[#D1A318]"
                                    : campaign.status === "draft"
                                      ? "bg-[#C3C8D0]"
                                      : "bg-[#d1a218]"
                            }`}
                          />
                          <span className="font-medium text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope']">
                            {campaign.status}
                          </span>
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                )}
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
                <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope'] font-semibold text-[#111111] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
                  Upcoming Calls
                </h2>
                <p className="w-fit font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope'] tracking-[0]">
                  Stay On Top Of Scheduled Meetings And Client Calls
                </p>
              </div>

              <Button className="h-8 px-3 py-1 bg-white rounded-lg border-[0.5px] border-solid border-[#09215e] text-[#09215e]">
                <span className="[font-family:'Manrope'] font-medium text-xs tracking-[-0.24px] leading-[18px]">
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
                          className={`w-[60px] text-center relative mt-[-0.50px] [font-family:'Manrope'] text-sm tracking-[-0.28px] leading-[19.6px] ${call.isActive ? "font-semibold text-[#272a34]" : "font-normal text-[#272a34b2]"}`}
                        >
                          {call.day}
                        </div>
                        <div
                          className={`relative self-stretch [font-family:'Manrope'] text-3xl text-center tracking-[0] leading-[normal] ${call.isActive ? "font-semibold text-[#111111]" : "font-normal text-[#030512b2]"}`}
                        >
                          {call.date}
                        </div>
                      </div>

                      <div className="inline-flex flex-col items-start gap-2 absolute top-[calc(50.00%_-_32px)] left-[104px]">
                        <div className="relative mt-[-1.00px] [font-family:'Manrope'] font-medium text-[#272a34] text-sm tracking-[-0.28px] leading-[19.6px]">
                          {call.title}
                        </div>
                        <div className="relative [font-family:'Manrope'] font-medium text-[#7b7f93] text-xs tracking-[-0.24px] leading-[16.8px] whitespace-nowrap">
                          {call.time}
                        </div>
                      </div>

                      <div className="flex flex-col w-[142px] items-start justify-center gap-3 p-2 absolute top-[calc(50.00%_-_36px)] left-[235px] bg-[#fbfbfb] rounded-lg border border-solid border-[#eaeaea]">
                        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                            <MapPinIcon className="w-4 h-4 text-[#7b7f93]" />
                            <div className="relative w-[88px] h-4 mt-[-1.00px] [font-family:'Manrope'] font-medium text-[#7b7f93] text-xs tracking-[-0.24px] leading-[16.8px] whitespace-nowrap">
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
                          <div className="relative w-fit [font-family:'Manrope'] font-medium text-[#7b7f93] text-xs tracking-[-0.24px] leading-[16.8px] whitespace-nowrap">
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
              <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope'] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                Recent Leads
              </h2>
              <p className="w-fit font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope'] tracking-[0]">
                Stay Updated On Your Most Recent Lead Activity
              </p>
            </div>

            <div className="relative">
              <Button
                variant="outline"
                className="h-8 gap-2 pl-3 pr-2 py-2 rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
                onClick={() => setIsLeadsFilterOpen(!isLeadsFilterOpen)}
              >
                <FilterIcon className="w-4 h-4" />
                <span className="[font-family:'Manrope'] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px]">
                  Filters
                </span>
              </Button>

              {/* Leads Filter Dropdown */}
              {isLeadsFilterOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-[#eaeaea] p-4 w-64 z-50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-[#111111] [font-family:'Manrope']">
                      Filter Leads
                    </h3>
                    <button
                      onClick={() => setIsLeadsFilterOpen(false)}
                      className="text-[#4f5059] hover:text-[#111111] transition-colors text-sm"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-4">
                    {/* Sort Order */}
                    <div>
                      <label className="block text-xs font-medium text-[#111111] mb-2 [font-family:'Manrope']">
                        Sort by Date
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="sortOrder"
                            value="newest"
                            checked={leadsFilters.sortOrder === "newest"}
                            onChange={(e) =>
                              setLeadsFilters((prev) => ({
                                ...prev,
                                sortOrder: e.target.value,
                              }))
                            }
                            className="w-3 h-3 text-[#05587a] border-[#dbdbdb] focus:ring-[#05587a]"
                          />
                          <span className="[font-family:'Manrope'] font-normal text-[#111111] text-xs">
                            Newest First
                          </span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="sortOrder"
                            value="oldest"
                            checked={leadsFilters.sortOrder === "oldest"}
                            onChange={(e) =>
                              setLeadsFilters((prev) => ({
                                ...prev,
                                sortOrder: e.target.value,
                              }))
                            }
                            className="w-3 h-3 text-[#05587a] border-[#dbdbdb] focus:ring-[#05587a]"
                          />
                          <span className="[font-family:'Manrope'] font-normal text-[#111111] text-xs">
                            Oldest First
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Category Filter */}
                    <div>
                      <label className="block text-xs font-medium text-[#111111] mb-2 [font-family:'Manrope']">
                        Category
                      </label>
                      <div className="space-y-2">
                        {leadCategories.map((category) => (
                          <label
                            key={category}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={leadsFilters.categories.includes(
                                category
                              )}
                              onChange={() =>
                                handleLeadsCategoryToggle(category)
                              }
                              className="w-3 h-3 text-[#05587a] bg-white border-[#dbdbdb] rounded focus:ring-[#05587a] focus:ring-1"
                            />
                            <span className="[font-family:'Manrope'] font-normal text-[#111111] text-xs">
                              {category}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearLeadsFilters}
                    >
                      Clear
                    </Button>
                    <Button size="sm" onClick={() => applyLeadsFilters()}>
                      Apply
                    </Button>
                  </div>
                </div>
              )}
            </div>
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
                  CATEGORY
                </TableHead>
                <TableHead className="flex-1 p-4 border-r border-[#d0d5dd] font-medium text-[#3b4c63] text-xs tracking-[-0.48px]">
                  EMAIL REPLY
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLeadsLoading ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : leads?.leads?.length > 0 ? (
                leads?.leads?.map((lead: LeadState, index: number) => (
                  <TableRow
                    key={index}
                    className="h-[72px] border-b border-[#e9eaec]"
                  >
                    <TableCell className="w-[282px] pl-5 pr-4 py-4 border-r border-[#e9eaec]">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-9 h-9">
                          <AvatarImage
                            src={""}
                            alt={lead.firstname + " " + lead.lastname}
                          />
                          <AvatarFallback>
                            {lead.firstname.charAt(0) + lead.lastname.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="inline-flex flex-col items-start justify-center gap-0.5">
                          <div className="font-semibold text-[#041824] text-base tracking-[0] leading-5 [font-family:'Manrope']">
                            {lead.firstname + " " + lead.lastname}
                          </div>
                          <div className="inline-flex items-center gap-1">
                            <ClockIcon className="w-4 h-4 text-[#3b4c63]" />
                            <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope']">
                              {new Date(lead.createdAt).toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  hour12: true,
                                }
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="w-64 p-4 border-r border-[#e9eaec]">
                      <div className="flex flex-col items-start justify-center gap-1">
                        <div className="inline-flex items-center gap-1">
                          <MailIcon className="w-4 h-4 text-[#3b4c63]" />
                          <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope']">
                            {lead.email}
                          </span>
                        </div>
                        {lead.phoneNumber && (
                          <div className="inline-flex items-center gap-1">
                            <PhoneIcon className="w-4 h-4 text-[#3b4c63]" />
                            <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope']">
                              {lead.phoneNumber}
                            </span>
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="flex-1 p-4 border-r border-[#e9eaec]">
                      <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope']">
                        {lead.companyName}
                      </span>
                    </TableCell>
                    <TableCell className="flex-1 p-4 border-r border-[#e9eaec]">
                      <Badge
                        className={`inline-flex items-center justify-center gap-1 px-3 py-1 rounded-[100px] ${getStatusBadgeStyles(lead.status)}`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-[80px] ${
                            lead.status === LeadStatus.INFORMATION_REQUEST
                              ? "bg-[#1E40AF]"
                              : lead.status === LeadStatus.MEETING_BOOKED
                                ? "bg-[#1E3A8A]"
                                : lead.status === LeadStatus.NO_COMMENTS
                                  ? "bg-[#2563EB]"
                                  : "bg-[#c2c8d0]"
                          }`}
                        />
                        <span className="font-medium text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope']">
                          {lead.status}
                        </span>
                      </Badge>
                    </TableCell>
                    <TableCell className="flex-1 p-4 border-r border-[#e9eaec]">
                      <div
                        className="flex items-center gap-2.5 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                        onClick={() => handleViewEmailReply(lead)}
                      >
                        <EyeIcon className="w-4 h-4 text-[#3b4c63]" />
                        <span className="font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] [font-family:'Manrope']">
                          View
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">
                    No leads found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <div className="absolute w-[calc(100%_-_2px)] left-0 bottom-0.5 h-[65px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />
        </CardContent>
      </Card>

      {/* Email Reply Popup */}
      {isEmailReplyPopupOpen && selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setIsEmailReplyPopupOpen(false)}
          />
          <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl z-10 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-[#111111] [font-family:'Manrope']">
                Email Reply Details
              </h3>
              <button
                onClick={() => setIsEmailReplyPopupOpen(false)}
                className="text-[#4f5059] hover:text-[#111111] transition-colors text-lg"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 p-4 bg-[#f8f9fa] rounded-lg">
                <div>
                  <label className="block text-sm font-medium text-[#111111] mb-1 [font-family:'Manrope']">
                    Name
                  </label>
                  <p className="text-sm text-[#4f5059] [font-family:'Manrope']">
                    {selectedLead.name}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111111] mb-1 [font-family:'Manrope']">
                    Email
                  </label>
                  <p className="text-sm text-[#4f5059] [font-family:'Manrope']">
                    {selectedLead.email}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111111] mb-1 [font-family:'Manrope']">
                    Phone
                  </label>
                  <p className="text-sm text-[#4f5059] [font-family:'Manrope']">
                    {selectedLead.phone}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111111] mb-1 [font-family:'Manrope']">
                    Company
                  </label>
                  <p className="text-sm text-[#4f5059] [font-family:'Manrope']">
                    {selectedLead.company}
                  </p>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-[#111111] mb-1 [font-family:'Manrope']">
                    Category
                  </label>
                  <Badge
                    className={`${getStatusBadgeStyles(selectedLead.status.type)} inline-flex items-center gap-1 px-3 py-1`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        selectedLead.status.type === "information-request"
                          ? "bg-[#1E40AF]"
                          : selectedLead.status.type === "meeting-booked"
                            ? "bg-[#1E3A8A]"
                            : selectedLead.status.type === "follow-up"
                              ? "bg-[#2563EB]"
                              : "bg-[#c2c8d0]"
                      }`}
                    />
                    <span className="font-medium text-sm [font-family:'Manrope']">
                      {selectedLead.status.label}
                    </span>
                  </Badge>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#111111] mb-3 [font-family:'Manrope']">
                  Email Reply
                </label>
                <div className="p-4 bg-white border border-[#eaeaea] rounded-lg">
                  <p className="text-sm text-[#111111] leading-relaxed [font-family:'Manrope']">
                    {selectedLead.emailReply}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button onClick={() => setIsEmailReplyPopupOpen(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
