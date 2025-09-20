import React, { useState } from "react";
import vector22 from "./vector-22.svg";
import vector23 from "./vector-23.svg";
import vector24 from "./vector-24.svg";

export const CampaignCreationSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    campaignName: "",
    numberOfLeads: "",
    location: "",
    investorType: "",
  });

  const [dropdownStates, setDropdownStates] = useState({
    location: false,
    investorType: false,
  });

  const stepData = [
    { number: 1, label: "Configure", active: true },
    { number: 2, label: "Draft Email", active: false },
    { number: 3, label: "Upload Lead List", active: false },
    { number: 4, label: "Review", active: false },
  ];

  const locationOptions = [
    "New York, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Houston, TX",
    "Phoenix, AZ",
  ];

  const investorTypeOptions = [
    "Angel Investor",
    "Venture Capital",
    "Private Equity",
    "Institutional Investor",
    "Individual Investor",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDropdownToggle = (dropdown: string) => {
    setDropdownStates((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown as keyof typeof prev],
    }));
  };

  const handleOptionSelect = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setDropdownStates((prev) => ({
      ...prev,
      [field]: false,
    }));
  };

  const handleCancel = () => {
    setFormData({
      campaignName: "",
      numberOfLeads: "",
      location: "",
      investorType: "",
    });
  };

  const handleContinue = () => {
    console.log("Form data:", formData);
  };

  return (
    <div className="absolute top-px right-0 w-[800px] h-[1024px] bg-white">
      <header className="absolute w-full top-0 left-0 h-[60px] flex justify-between items-center border-b [border-bottom-style:solid] border-[#eaeaea]">
        <h1 className="flex items-center justify-center h-7 w-[164px] ml-5 [font-family:'Manrope-Bold',Helvetica] font-bold text-[#111111] text-xl tracking-[-0.36px] leading-7 whitespace-nowrap">
          Create Campaign
        </h1>

        <button className="h-6 w-6 mr-5 flex" aria-label="Close">
          <img className="mt-1.5 w-3 h-3 ml-1.5" alt="Close" src={vector22} />
        </button>
      </header>

      <footer className="absolute w-full left-0 bottom-0 h-[60px] flex border-t [border-top-style:solid] border-[#eaeaea]">
        <div className="inline-flex mt-2.5 w-[180px] h-10 ml-[600px] relative items-center gap-3">
          <button
            className="border border-solid border-[#eaeaea] flex w-[84px] h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg hover:bg-gray-50 transition-colors"
            onClick={handleCancel}
          >
            <span className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
              Cancel
            </span>
          </button>

          <button
            className="bg-[#09215e] border-[0.5px] border-solid border-[#fbfbfb] flex w-[84px] h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg hover:bg-[#0a2668] transition-colors"
            onClick={handleContinue}
          >
            <span className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#fbfbfb] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
              Continue
            </span>
          </button>
        </div>
      </footer>

      <main className="flex flex-col w-[760px] items-start gap-5 absolute top-[212px] left-5">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <label className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
            Campaign Name
          </label>

          <input
            type="text"
            value={formData.campaignName}
            onChange={(e) => handleInputChange("campaignName", e.target.value)}
            placeholder="Enter campaign name"
            className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb] [font-family:'Manrope-Regular',Helvetica] font-normal text-base tracking-[-0.29px] leading-[normal] placeholder:text-[#a1a1a1] focus:outline-none focus:border-[#05587a] transition-colors"
          />
        </div>

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <label className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
            Number of Leads
          </label>

          <input
            type="number"
            value={formData.numberOfLeads}
            onChange={(e) => handleInputChange("numberOfLeads", e.target.value)}
            placeholder="Enter leads"
            className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb] [font-family:'Manrope-Regular',Helvetica] font-normal text-base tracking-[-0.29px] leading-[normal] placeholder:text-[#a1a1a1] focus:outline-none focus:border-[#05587a] transition-colors"
          />
        </div>

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <label className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
            Location
          </label>

          <div className="relative">
            <button
              type="button"
              onClick={() => handleDropdownToggle("location")}
              className="flex items-center gap-2.5 px-3.5 py-2.5 relative w-[760px] bg-white rounded-lg border border-solid border-[#dbdbdb] focus:outline-none focus:border-[#05587a] transition-colors"
            >
              <span className="relative flex items-center justify-center flex-1 mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-base tracking-[-0.29px] leading-[normal] text-left">
                {formData.location || "Please select"}
              </span>

              <div className="relative w-[18px] h-[18px]">
                <img
                  className="absolute w-[53.03%] h-[32.41%] top-[34.26%] left-[23.48%]"
                  alt="Dropdown arrow"
                  src={vector23}
                />
              </div>
            </button>

            {dropdownStates.location && (
              <div className="absolute top-full left-0 w-full bg-white border border-solid border-[#dbdbdb] rounded-lg mt-1 shadow-lg z-10">
                {locationOptions.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleOptionSelect("location", option)}
                    className="w-full px-3.5 py-2.5 text-left [font-family:'Manrope-Regular',Helvetica] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <label className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
            Investor Type
          </label>

          <div className="relative">
            <button
              type="button"
              onClick={() => handleDropdownToggle("investorType")}
              className="flex items-center gap-2.5 px-3.5 py-2.5 relative w-[760px] bg-white rounded-lg border border-solid border-[#dbdbdb] focus:outline-none focus:border-[#05587a] transition-colors"
            >
              <span className="relative flex items-center justify-center flex-1 mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-base tracking-[-0.29px] leading-[normal] text-left">
                {formData.investorType || "Please select"}
              </span>

              <div className="relative w-[18px] h-[18px]">
                <img
                  className="absolute w-[53.03%] h-[32.41%] top-[34.26%] left-[23.48%]"
                  alt="Dropdown arrow"
                  src={vector24}
                />
              </div>
            </button>

            {dropdownStates.investorType && (
              <div className="absolute top-full left-0 w-full bg-white border border-solid border-[#dbdbdb] rounded-lg mt-1 shadow-lg z-10">
                {investorTypeOptions.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleOptionSelect("investorType", option)}
                    className="w-full px-3.5 py-2.5 text-left [font-family:'Manrope-Regular',Helvetica] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <nav
        className="absolute top-[60px] left-0 w-[800px] h-[66px] flex bg-[#fbfbfb] border-b [border-bottom-style:solid] border-[#eaeaea]"
        aria-label="Campaign creation steps"
      >
        <div className="flex mt-5 h-[26px] ml-6 mr-6 flex-1 relative w-[752px] items-center gap-5">
          {stepData.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <div
                  className={`flex flex-col w-[26px] h-[26px] items-center justify-center gap-2.5 p-1.5 relative rounded-[100px] ${
                    step.active ? "bg-[#05587a]" : "bg-[#e9e9e9]"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center self-stretch mt-[-2.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-center tracking-[-0.22px] leading-[normal] relative text-xs ${
                      step.active ? "text-[#fbfbfb]" : "text-[#a1a1a1]"
                    }`}
                  >
                    {step.number}
                  </div>
                </div>

                <div
                  className={`relative flex items-center justify-center w-fit [font-family:'Manrope-SemiBold',Helvetica] text-sm tracking-[-0.25px] leading-[normal] ${
                    step.active
                      ? "font-semibold text-[#05587a]"
                      : "[font-family:'Manrope-Medium',Helvetica] font-medium text-[#a1a1a1]"
                  }`}
                >
                  {step.label}
                </div>
              </div>

              {index < stepData.length - 1 && (
                <div className="relative flex-1 grow h-0.5 bg-[#d9d9d9] rounded-[100px]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>

      <section className="flex flex-col w-[798px] items-start gap-5 pt-5 pb-0 px-5 absolute top-[126px] left-0.5">
        <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
            <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
              Configure Campaign
            </h2>

            <p className="w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative tracking-[0]">
              Monitor Growth In Customer Engagement Over Time
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
