import { useState } from "react";
import logo from "../assets/Logo.svg";
import mainCont from "../assets/main cont.svg";

export const FundraiserOn = (): JSX.Element => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const onboardingSections = [
    {
      id: "basic-info",
      title: "Basic Information",
      description: "Company Information",
      completed: false,
    },
    {
      id: "company-overview",
      title: "Company Overview",
      description: "Company description and basic details",
      completed: false,
    },
    {
      id: "business-details",
      title: "Business Details",
      description: "Industry, competition, team, and partnerships",
      completed: false,
    },
    {
      id: "financial-info",
      title: "Financial Information",
      description: "Funding history, performance, and strategy",
      completed: false,
    },
    {
      id: "team-presentation",
      title: "Team & Presentation",
      description: "Outreach setup and sales assets",
      completed: false,
    },
  ];

  const progressBars = Array(5).fill(null);

  const handleSectionToggle = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const handleSave = () => {
    console.log("Save functionality");
  };

  const handleSubmit = () => {
    console.log("Submit application functionality");
  };

  const handleScheduleCall = () => {
    console.log("Schedule call functionality");
  };

  return (
    <main className="bg-[#fbfbfb] overflow-hidden w-full min-w-[1440px] min-h-[1024px] flex gap-[19px]">
      <aside className="h-[994px] w-[499px] self-center relative ml-5 bg-[#09215e] rounded-[20px] overflow-hidden">
        <img
          className="absolute top-0 left-[calc(50.00%_-_250px)] w-[499px] h-[994px]"
          alt="Background glass effect"
          src={mainCont}
        />

        <img
          className="absolute top-5 left-5 w-40 h-10 aspect-[3.99]"
          alt="Company logo"
          src={logo}
        />

        <div className="inline-flex flex-col h-[100px] items-start gap-1 absolute top-[698px] left-5">
          <h1 className="mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[32px] leading-[48px] relative self-stretch text-white tracking-[0]">
            Welcome, Company Name!
          </h1>

          <p className="[font-family:'Manrope-Regular',Helvetica] font-normal text-base leading-6 relative self-stretch text-white tracking-[0]">
            To The Onboarding Process! Get Funding That
            <br />
            fits Your Business Goals And Needs
          </p>
        </div>

        <section className="flex flex-col w-[459px] items-start justify-center gap-4 p-5 absolute top-[830px] left-5 bg-white rounded-2xl">
          <div className="relative h-[46px] w-[46px] bg-[#09215e] rounded-full flex items-center justify-center">
            <span className="text-white text-lg font-semibold">CN</span>
          </div>

          <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-1 relative flex-1 grow">
              <h3 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#111111] text-sm tracking-[-0.28px] leading-[21px] whitespace-nowrap">
                Need help with your onboarding?
              </h3>

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <p className="w-fit mt-[-1.00px] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] tracking-[0]">
                  Our Experts Guide You Through Every Step.
                </p>
              </div>
            </div>

            <button
              className="inline-flex h-10 items-center justify-center gap-2 px-3 py-2 relative flex-[0_0_auto] bg-[#09215e] rounded-lg border-[0.5px] border-solid border-[#fbfbfb] hover:bg-[#0a2666] transition-colors"
              onClick={handleScheduleCall}
              aria-label="Schedule a call with our experts"
            >
              <svg className="relative w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>

              <span className="text-white relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                Schedule Call
              </span>
            </button>
          </div>
        </section>
      </aside>

      <section className="mt-3 -mb-px -mr-px flex-1 flex flex-col bg-white rounded-[20px_0px_0px_0px] overflow-hidden border border-solid border-[#eaeaea]">
        <header className="flex ml-[-441px] h-[53px] w-[422px] self-center relative mt-5 flex-col items-start gap-0.5">
          <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-xl tracking-[0] leading-[30px]">
            Complete Your Startup Onboarding
          </h2>

          <p className="self-stretch text-sm leading-[21px] relative [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] tracking-[0]">
            Fill Out All Sections To Complete Your Funding Application
          </p>
        </header>

        <div className="flex -ml-0.5 h-[444px] w-[861px] self-center relative mt-5 flex-col items-start gap-4">
          {onboardingSections.map((section) => (
            <article
              key={section.id}
              className="flex flex-col items-start justify-center gap-5 p-4 relative self-stretch w-full flex-[0_0_auto] rounded-2xl border border-solid border-[#eaeaea]"
            >
              <button
                className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto] cursor-pointer hover:bg-gray-50 transition-colors rounded-lg p-2 -m-2"
                onClick={() => handleSectionToggle(section.id)}
                aria-expanded={expandedSection === section.id}
                aria-controls={`${section.id}-content`}
              >
                <div className="relative w-6 h-6 overflow-hidden">
                  <div className="w-full h-full bg-[#09215e] rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col h-11 items-start justify-center gap-0.5 relative flex-1 grow">
                  <h3 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                    {section.title}
                  </h3>

                  <p className="relative self-stretch [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px]">
                    {section.description}
                  </p>
                </div>

                <div className="relative w-[18px] h-[18px]" aria-hidden="true">
                  <svg className="absolute top-[calc(50.00%_-_3px)] left-[calc(50.00%_-_5px)] w-2.5 h-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {expandedSection === section.id && (
                <div
                  id={`${section.id}-content`}
                  className="w-full p-4 bg-gray-50 rounded-lg"
                  role="region"
                  aria-labelledby={`${section.id}-heading`}
                >
                  <p className="text-sm text-gray-600">
                    Content for {section.title} section would go here.
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>

        <footer className="flex ml-[23px] w-[861px] h-[147px] relative mt-[302px] flex-col items-start justify-center gap-4 p-5 rounded-2xl border border-solid border-[#eaeaea]">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <h3 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
              Overall Progress
            </h3>

            <div className="inline-flex flex-[0_0_auto] items-center justify-center gap-2 relative rounded-lg">
              <span className="mt-[-1.00px] text-[#a1a1a1] relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                0%
              </span>
            </div>
          </div>

          <div
            className="flex h-2 items-center gap-2 relative self-stretch w-full"
            role="progressbar"
            aria-valuenow={0}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {progressBars.map((_, index) => (
              <div
                key={index}
                className="relative flex-1 self-stretch grow bg-[#dbdbdb] rounded-[100px]"
              />
            ))}
          </div>

          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
              <h4 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                Complete All Sections
              </h4>

              <p className="w-fit text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] tracking-[0]">
                Fill Out All Accordion Sections To Submit
              </p>
            </div>

            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <button
                className="flex w-[70px] h-10 px-4 py-2 border border-solid border-[#eaeaea] items-center justify-center gap-2 relative rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                onClick={handleSave}
                disabled
              >
                <span className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#a1a1a1] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                  Save
                </span>
              </button>

              <button
                className="inline-flex h-10 px-4 py-2 flex-[0_0_auto] border border-solid border-[#eaeaea] items-center justify-center gap-2 relative rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                onClick={handleSubmit}
                disabled
              >
                <span className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#a1a1a1] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                  Submit Application
                </span>
              </button>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
};
