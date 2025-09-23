import React from "react";
import background from "./background.png";
import calendar from "./calendar.png";
import chart from "./chart.svg";
import ellipse2052 from "./ellipse-2052.svg";
import ellipse2053 from "./ellipse-2053.svg";
import image1 from "./image.svg";
import line2 from "./line-2.svg";
import line2336 from "./line-2336.svg";
import line2338 from "./line-2338.svg";
import line2339 from "./line-2339.svg";
import line23402 from "./line-2340-2.svg";
import line2340 from "./line-2340.svg";
import line2341 from "./line-2341.svg";
import line23422 from "./line-2342-2.svg";
import line23423 from "./line-2342-3.svg";
import line2342 from "./line-2342.svg";
import line from "./line.svg";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector5 from "./vector-5.svg";
import vector6 from "./vector-6.svg";
import vector7 from "./vector-7.svg";
import vectorStroke2 from "./vector-stroke-2.svg";
import vectorStroke3 from "./vector-stroke-3.svg";
import vectorStroke from "./vector-stroke.svg";
import vector from "./vector.svg";

export const CampaignOverviewSection = () => {
  const statsCards = [
    {
      id: 1,
      title: "424",
      subtitle: "Active Campaigns",
      bgGradient: "linear-gradient(100deg,rgba(1,28,39,1) 0%,rgba(5,102,141,1) 100%)",
      textColor: "white",
      subtitleColor: "#eaeaea",
      hasDecorations: true
    },
    {
      id: 2,
      title: "732",
      subtitle: "Total Prospects",
      bgColor: "white",
      textColor: "#111111",
      subtitleColor: "#4f5059",
      hasChart: true,
      changePercent: "-4.3%",
      changeType: "negative",
      chartImage: line
    },
    {
      id: 3,
      title: "265",
      subtitle: "Positive Replies",
      bgColor: "white",
      textColor: "#111111",
      subtitleColor: "#4f5059",
      hasChart: true,
      changePercent: "+6.7%",
      changeType: "positive",
      chartImage: line2
    }
  ];

  const chartLabels = ["Jan-Feb", "Mar-Apr", "May-Jun", "Jul-Aug", "Sep-Oct", "Nov-Dec"];
  const chartYLabels = ["250", "150", "50", "0"];

  const campaignMetrics = [
    {
      id: 1,
      label: "Total Outreach",
      value: "320",
      color: "#4a8bfc",
      changeType: "positive"
    },
    {
      id: 2,
      label: "Response Rate",
      value: "11.1%",
      color: "#974afc",
      changeType: "positive"
    },
    {
      id: 3,
      label: "Meetings Booked",
      value: "320",
      color: "#fc4af0",
      changeType: "negative"
    }
  ];

  const topPerformers = [
    {
      id: 1,
      name: "Tech Venture Outreach Q4",
      category: "Venture Capital",
      meetings: "8 meetings",
      rate: "12.0%",
      rank: 2,
      rankColor: "#d2d0d0",
      rankBorder: "#a5a5a5",
      rankTextColor: "#111111"
    },
    {
      id: 2,
      name: "European Growth Fund",
      category: "Growth Equity",
      meetings: "5 meetings",
      rate: "8.0%",
      rank: 3,
      rankColor: "#c78110",
      rankBorder: "#976b22",
      rankTextColor: "#f6c26f"
    },
    {
      id: 3,
      name: "Healthcare Focused",
      category: "Healthcare Innovation",
      meetings: "12 meetings",
      rate: "15.0%",
      rank: 1,
      rankColor: "#e6c334",
      rankBorder: "#a29250",
      rankTextColor: "#4c3e07",
      isHighlighted: true
    }
  ];

  const campaignResults = [
    {
      id: 1,
      name: "InsuretechNy- MENA based LPs",
      owner: "David",
      sent: 250,
      replies: 180,
      replyRate: 45,
      positive: 4,
      positiveRate: "42.9%",
      status: "COMPLETED",
      lastSync: "04/09/2025"
    },
    {
      id: 2,
      name: "AI Seed Round 4",
      owner: "David",
      sent: 250,
      replies: 180,
      replyRate: 45,
      positive: 0,
      positiveRate: "18.5%",
      status: "COMPLETED",
      lastSync: "04/09/2025"
    },
    {
      id: 3,
      name: "AI Seed Round 4",
      owner: "David",
      sent: 250,
      replies: 180,
      replyRate: 45,
      positive: 3,
      positiveRate: "0.0%",
      status: "COMPLETED",
      lastSync: "04/09/2025"
    },
    {
      id: 4,
      name: "AI Seed Round 4",
      owner: "David",
      sent: 250,
      replies: 180,
      replyRate: 45,
      positive: 2,
      positiveRate: "42.9%",
      status: "COMPLETED",
      lastSync: "04/09/2025"
    },
    {
      id: 5,
      name: "AI Seed Round 4",
      owner: "David",
      sent: 250,
      replies: 180,
      replyRate: 45,
      positive: 1,
      positiveRate: "24.5%",
      status: "COMPLETED",
      lastSync: "04/09/2025"
    },
    {
      id: 6,
      name: "AI Seed Round 4",
      owner: "David",
      sent: 250,
      replies: 180,
      replyRate: 45,
      positive: 4,
      positiveRate: "75%",
      status: "COMPLETED",
      lastSync: "04/09/2025"
    }
  ];

  return (
    <main className="absolute w-[calc(100%_-_254px)] h-[calc(100%_-_7px)] top-2 left-[255px] flex flex-col bg-white rounded-[20px_0px_0px_0px] overflow-hidden border-t [border-top-style:solid] border-l [border-left-style:solid] border-[#eaeaea]">
      <header className="flex ml-5 w-[1140px] h-[53px] relative mt-5 items-center justify-between">
        <div className="flex flex-col w-[422px] items-start gap-0.5 relative">
          <h1 className="self-stretch mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-xl leading-[30px] relative tracking-[0]">
            Capital Campaigns
          </h1>
          <p className="self-stretch [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-sm leading-[21px] relative tracking-[0]">
            Track Your Fundraising Progress And Investor Engagement
          </p>
        </div>
        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <div className="relative w-[332px] h-[37px] bg-white rounded-lg overflow-hidden border border-solid border-[#eaeaea]">
            <div className="relative top-2 left-2.5 w-[238px] flex gap-2.5">
              <div className="w-5 h-5 relative aspect-[1]">
                <img
                  className="absolute w-[84.64%] h-[84.64%] top-[8.33%] left-[8.33%]"
                  alt="Search"
                  src={vector}
                />
              </div>
              <input
                type="search"
                placeholder="Search transaction, campaigns..."
                className="w-[206px] h-5 [font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-sm tracking-[-0.31px] leading-5 bg-transparent border-none outline-none"
              />
            </div>
          </div>
          <button className="inline-flex h-10 items-center gap-2 px-3 py-2 relative flex-[0_0_auto] bg-[#09215e] rounded-lg border-[0.5px] border-solid border-[#fbfbfb] hover:bg-[#0a2668] transition-colors">
            <span className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#fbfbfb] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
              Create Campaign
            </span>
          </button>
        </div>
      </header>
      <section className="flex ml-5 mr-[22px] flex-1 max-h-[132px] relative mt-5 w-[1144px] items-start gap-5">
        {statsCards.map((card) => (
          <article key={card.id} className={`relative flex-1 grow h-[132px] rounded-[20px] overflow-hidden ${card.bgColor ? `bg-${card.bgColor}` : ''} ${card.bgGradient ? `bg-[${card.bgGradient}]` : ''} ${card.bgColor === 'white' ? 'border border-solid border-[#eaeaea]' : ''}`}>
            <div className="flex w-[367px] items-center gap-5 p-4 relative">
              <div className="flex items-center gap-4 relative flex-1 grow">
                <div className="inline-flex flex-col items-start gap-0.5 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className={`relative w-fit mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-${card.id === 1 ? '6xl' : '[32px]'} tracking-${card.id === 1 ? '[-1.20px]' : '[-0.64px]'} leading-${card.id === 1 ? '[66.0px]' : '[35.2px]'} whitespace-nowrap`} style={{ color: card.textColor }}>
                      {card.title}
                    </div>
                  </div>
                  <div className={`w-fit [font-family:'Manrope-${card.id === 1 ? 'Medium' : 'Regular'}',Helvetica] font-${card.id === 1 ? 'medium' : 'normal'} text-${card.id === 1 ? 'base' : 'xs'} leading-${card.id === 1 ? '[22.4px]' : '[16.8px]'} whitespace-nowrap relative tracking-[0]`} style={{ color: card.subtitleColor }}>
                    {card.subtitle}
                  </div>
                </div>
                {card.hasDecorations && (
                  <div className="absolute top-[-76px] left-[267px] w-[189px] h-[205px]">
                    <div className="absolute top-0 left-[17px] w-[122px] h-[122px] rounded-[60.79px] bg-[linear-gradient(200deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />
                    <div className="absolute top-[66px] left-[17px] w-[122px] h-[122px] rounded-[60.79px] rotate-[70.24deg] bg-[linear-gradient(200deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />
                    <div className="absolute top-[60px] left-[45px] w-[122px] h-[122px] rounded-[60.79px] rotate-[60.00deg] bg-[linear-gradient(200deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />
                  </div>
                )}
              </div>
            </div>
            {card.hasChart && (
              <>
                <div className="inline-flex items-center gap-2.5 absolute top-[94px] left-4">
                  <div className="w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#8d8e93] text-xs leading-[16.8px] whitespace-nowrap relative tracking-[0]">
                    compared to last week
                  </div>
                  <div className={`pl-1 pr-1.5 py-1 ${card.changeType === 'positive' ? 'bg-[#17a34a14]' : 'bg-[#a3171714]'} inline-flex items-center gap-1 relative flex-[0_0_auto] rounded-[100px]`}>
                    <div className={`inline-flex items-center gap-2.5 relative flex-[0_0_auto] rounded-[100px] ${card.changeType === 'positive' ? 'bg-[#50db83]' : 'bg-[#db5050]'}`}>
                      <div className={`relative w-3.5 h-3.5 aspect-[1] ${card.changeType === 'negative' ? 'rotate-[-180.00deg]' : ''}`}>
                        <img
                          className={`absolute w-[50.00%] h-[58.33%] top-[17.26%] left-[21.43%] ${card.changeType === 'negative' ? 'rotate-[180.00deg]' : ''}`}
                          alt="Trend arrow"
                          src={card.changeType === 'positive' ? vector3 : vector2}
                        />
                      </div>
                    </div>
                    <div className={`relative w-fit mt-[-0.50px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-xs text-center tracking-[0] leading-[13.2px] whitespace-nowrap ${card.changeType === 'positive' ? 'text-[#1b8341]' : 'text-[#831b1b]'}`}>
                      {card.changePercent}
                    </div>
                  </div>
                </div>
                <div className={`absolute ${card.id === 2 ? 'top-[65px] left-[226px] w-[124px] h-[51px]' : 'left-[242px] bottom-4 w-[111px] h-[49px] flex bg-[url(/image.png)] bg-[100%_100%]'}`}>
                  {card.id === 2 && (
                    <img
                      className="absolute w-[calc(100%_+_5px)] h-[calc(100%_+_67px)] top-0 left-0"
                      alt="Chart background"
                      src={background}
                    />
                  )}
                  <img
                    className={`${card.id === 2 ? 'absolute w-[calc(100%_+_5px)] h-[calc(100%_-_10px)] top-1.5 left-0 object-cover' : 'mt-[-1.0px] ml-[-1.0px] mr-[1.0px] flex-1 mb-[1.0px] w-[113px] object-cover'}`}
                    alt="Chart line"
                    src={card.chartImage}
                  />
                </div>
              </>
            )}
          </article>
        ))}
      </section>
      <section className="flex -ml-0.5 h-[276px] w-[1144px] self-center relative mt-5 items-start gap-5">
        <article className="flex-1 grow h-[278px] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] relative rounded-[20px] overflow-hidden border border-solid border-[#eaeaea]">
          <div className="flex flex-col w-[694px] items-start gap-5 px-5 py-0 absolute top-5 left-0">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
                <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
                  Positive Reply Volume
                </h2>
                <p className="w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative tracking-[0]">
                  Monitor Growth In Customer Engagement Over Time
                </p>
              </div>
              <button className="inline-flex h-10 items-center gap-2 pl-3 pr-2 py-2 relative flex-[0_0_auto] rounded-lg border-[0.5px] border-solid border-[#d9dadb] hover:bg-gray-50 transition-colors">
                <span className="w-fit font-medium text-[#4f5059] whitespace-nowrap relative [font-family:'Manrope-Medium',Helvetica] text-xs tracking-[-0.24px] leading-[18px]">
                  Yearly View
                </span>
                <div className="relative w-4 h-4">
                  <img
                    className="absolute w-3 h-[13px] top-px left-0.5"
                    alt="Calendar"
                    src={calendar}
                  />
                </div>
              </button>
            </div>
          </div>
          <div className="absolute left-5 bottom-[19px] w-[654px] h-[173px]">
            <div className="flex w-[calc(100%_-_40px)] items-center gap-4 absolute top-[157px] left-10">
              {chartLabels.map((label, index) => (
                <div key={index} className="relative flex-1 mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#767e84] text-xs text-center tracking-[-0.18px] leading-[14.4px]">
                  {label}
                </div>
              ))}
            </div>
            <div className="flex flex-col w-8 h-[155px] items-end justify-between absolute left-0 bottom-[18px]">
              {chartYLabels.map((label, index) => (
                <div key={index} className={`${index === 0 ? 'w-fit mt-[-1.00px]' : 'relative w-fit'} [font-family:'Manrope-Medium',Helvetica] font-medium text-[#767e84] text-right tracking-[-0.18px] leading-[14.4px] whitespace-nowrap text-xs`}>
                  {label}
                </div>
              ))}
            </div>
            <div className="flex flex-col w-[614px] items-center justify-end gap-[46px] absolute left-10 bottom-6">
              <img
                className="relative self-stretch w-full h-px mt-[-1.00px] object-cover"
                alt="Grid line"
                src={line2340}
              />
              <img
                className="relative self-stretch w-full h-px object-cover"
                alt="Grid line"
                src={line2339}
              />
              <img
                className="relative self-stretch w-full h-px object-cover"
                alt="Grid line"
                src={line2338}
              />
              <img
                className="relative self-stretch w-full h-px object-cover"
                alt="Grid line"
                src={line2336}
              />
            </div>
            <img
              className="absolute h-[calc(100%_-_48px)] top-[23px] left-[calc(50.00%_-_257px)] w-[584px]"
              alt="Chart"
              src={chart}
            />
          </div>
        </article>
        <article className="w-[428px] h-[278px] mt-[-1.00px] mb-[-1.00px] mr-[-1.00px] relative rounded-[20px] overflow-hidden border border-solid border-[#eaeaea]">
          <div className="flex flex-col w-[386px] h-[46px] items-start gap-5 absolute top-5 left-5">
            <div className="flex items-center justify-around gap-[77px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
                <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
                  Positive Replies
                </h2>
                <p className="w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative tracking-[0]">
                  See How Prospects Engage Through Decks And Meetings
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-[86px] left-9 w-40 h-40">
            {/* Donut Chart - Orange segment (40%) */}
            <div className="absolute inset-0 rounded-full border-8 border-[#fc814a] border-r-transparent transform rotate-[-90deg]"></div>
            {/* Blue segment (26%) */}
            <div className="absolute inset-0 rounded-full border-8 border-transparent border-r-[#05668d] transform rotate-[54deg]"></div>
            {/* Remaining segment (34%) */}
            <div className="absolute inset-0 rounded-full border-8 border-transparent border-r-[#e5e7eb] transform rotate-[126deg]"></div>
          </div>
          <div className="absolute top-[121px] left-5 w-[137px] h-[140px] flex gap-[61px]">
            <div className="flex w-[38px] h-[38px] relative items-center justify-center gap-1 px-3 py-2 bg-dark-tertiarytr120 rounded-[100000px] border border-solid border-dark-tertiarytr90 shadow-[0px_2.32px_4.4px_#00000005,0px_5.59px_10.57px_#00000007,0px_10.52px_19.91px_#00000009,0px_18.76px_35.51px_#0000000b,0px_35.09px_66.43px_#0000000d,0px_84px_159px_#00000012]">
              <div className="relative w-fit ml-[-6.00px] mr-[-6.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#080808] text-xs text-center tracking-[-0.36px] leading-[14px] whitespace-nowrap">
                40%
              </div>
            </div>
            <div className="flex mt-[102px] w-[38px] h-[38px] relative items-center justify-center gap-1 px-3 py-2 bg-dark-tertiarytr120 rounded-[100000px] border border-solid border-dark-tertiarytr90 shadow-[0px_2.32px_4.4px_#00000005,0px_5.59px_10.57px_#00000007,0px_10.52px_19.91px_#00000009,0px_18.76px_35.51px_#0000000b,0px_35.09px_66.43px_#0000000d,0px_84px_159px_#00000012]">
              <div className="relative w-fit ml-[-5.50px] mr-[-5.50px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#080808] text-xs text-center tracking-[-0.36px] leading-[14px] whitespace-nowrap">
                26%
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[129px] items-start gap-5 absolute top-[109px] left-[235px]">
            <div className="flex w-[109px] items-start gap-1 flex-col relative flex-[0_0_auto]">
              <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-3 h-3 bg-[#fc814a] rounded-sm aspect-[1]" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#84858b] text-sm tracking-[-0.28px] leading-[21px] whitespace-nowrap">
                  Deck Request
                </div>
              </div>
              <div className="relative self-stretch [font-family:'Manrope-Bold',Helvetica] font-bold text-[#111111] text-xl tracking-[-0.40px] leading-[22.0px]">
                320
              </div>
            </div>
            <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="w-3 h-3 bg-[#05668d] rounded-sm relative aspect-[1]" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#84858b] text-sm tracking-[-0.28px] leading-[21px] whitespace-nowrap">
                  Meeting Request
                </div>
              </div>
              <div className="relative self-stretch [font-family:'Manrope-Bold',Helvetica] font-bold text-[#111111] text-xl tracking-[-0.40px] leading-[22.0px]">
                180
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className="flex -ml-0.5 h-[232px] w-[1144px] self-center relative mt-5 items-start gap-5">
        <article className="flex-1 grow h-[234px] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] relative rounded-[20px] overflow-hidden border border-solid border-[#eaeaea]">
          <div className="flex flex-col w-[calc(100%_-_2px)] items-start gap-5 px-5 py-0 absolute top-5 left-0">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
                <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
                  Campaign Overview
                </h2>
                <p className="w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative tracking-[0]">
                  Summary Of Active Campaigns And Key Performance Metrics
                </p>
              </div>
              <button className="inline-flex h-8 items-center gap-2 pl-3 pr-2 py-2 relative flex-[0_0_auto] rounded-lg border-[0.5px] border-solid border-[#d9dadb] hover:bg-gray-50 transition-colors">
                <div className="relative w-4 h-4 aspect-[1]">
                  <img
                    className="absolute w-[81.24%] h-[75.00%] top-[15.62%] left-[9.39%]"
                    alt="Filter"
                    src={vector4}
                  />
                </div>
                <span className="w-fit mt-[-1.50px] mb-[-0.50px] font-medium text-[#4f5059] whitespace-nowrap relative [font-family:'Manrope-Medium',Helvetica] text-xs tracking-[-0.24px] leading-[18px]">
                  Filters
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col w-[calc(100%_-_2px)] items-start gap-5 px-5 py-0 absolute top-[86px] left-0">
            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              {campaignMetrics.map((metric) => (
                <div key={metric.id} className="flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                  <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-3 h-3 rounded-sm aspect-[1]" style={{ backgroundColor: metric.color }} />
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#84858b] text-sm tracking-[-0.28px] leading-[21px] whitespace-nowrap">
                      {metric.label}
                    </div>
                  </div>
                  <div className="relative self-stretch [font-family:'Manrope-Bold',Helvetica] font-bold text-[#111111] text-xl tracking-[-0.40px] leading-[22.0px]">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-[calc(100%_-_2px)] items-start gap-5 px-5 py-0 absolute top-[146px] left-0">
            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              {topPerformers.map((performer) => (
                <div key={performer.id} className={`flex flex-col items-start gap-1 relative flex-[0_0_auto] ${performer.isHighlighted ? 'bg-[#f8f9fa] p-2 rounded-lg' : ''}`}>
                  <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div 
                      className="relative w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ 
                        backgroundColor: performer.rankColor,
                        border: `1px solid ${performer.rankBorder}`
                      }}
                    >
                      <div className="relative w-fit [font-family:'Manrope-Bold',Helvetica] font-bold text-xs text-center tracking-[-0.24px] leading-[14px] whitespace-nowrap" style={{ color: performer.rankTextColor }}>
                        {performer.rank}
                      </div>
                    </div>
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.28px] leading-[21px] whitespace-nowrap">
                      {performer.name}
                    </div>
                  </div>
                  <div className="relative self-stretch [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px]">
                    {performer.category}
                  </div>
                  <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                      {performer.meetings}
                    </div>
                    <div className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#17a34a] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                      {performer.rate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>
      <section className="flex -ml-0.5 h-[400px] w-[1144px] self-center relative mt-5 items-start gap-5">
        <article className="flex-1 grow h-[402px] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] relative rounded-[20px] overflow-hidden border border-solid border-[#eaeaea]">
          <div className="flex flex-col w-[calc(100%_-_2px)] items-start gap-5 px-5 py-0 absolute top-5 left-0">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
                <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
                  Campaign Results
                </h2>
                <p className="w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative tracking-[0]">
                  Detailed Performance Metrics For Each Campaign
                </p>
              </div>
              <button className="inline-flex h-8 items-center gap-2 pl-3 pr-2 py-2 relative flex-[0_0_auto] rounded-lg border-[0.5px] border-solid border-[#d9dadb] hover:bg-gray-50 transition-colors">
                <div className="relative w-4 h-4 aspect-[1]">
                  <img
                    className="absolute w-[81.24%] h-[75.00%] top-[15.62%] left-[9.39%]"
                    alt="Filter"
                    src={vector4}
                  />
                </div>
                <span className="w-fit mt-[-1.50px] mb-[-0.50px] font-medium text-[#4f5059] whitespace-nowrap relative [font-family:'Manrope-Medium',Helvetica] text-xs tracking-[-0.24px] leading-[18px]">
                  Filters
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col w-[calc(100%_-_2px)] items-start gap-5 px-5 py-0 absolute top-[86px] left-0">
            <div className="flex flex-col w-full items-start gap-3 relative self-stretch flex-[0_0_auto]">
              {campaignResults.map((result) => (
                <div key={result.id} className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto] p-3 bg-[#f8f9fa] rounded-lg">
                  <div className="flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-sm tracking-[-0.28px] leading-[21px] whitespace-nowrap">
                      {result.name}
                    </div>
                    <div className="relative w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                      Owner: {result.owner}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                      Sent: {result.sent}
                    </div>
                    <div className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                      Replies: {result.replies}
                    </div>
                    <div className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#17a34a] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                      Rate: {result.replyRate}%
                    </div>
                  </div>
                  <div className="flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                      Positive: {result.positive}
                    </div>
                    <div className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#17a34a] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                      {result.positiveRate}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                      {result.status}
                    </div>
                    <div className="relative w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                      {result.lastSync}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};
