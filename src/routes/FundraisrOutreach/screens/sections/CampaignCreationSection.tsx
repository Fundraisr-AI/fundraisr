import React, { useState } from "react";
import vector22 from "./vector-22.svg";
import vector23 from "./vector-23.svg";
import Upload from "./Upload.svg";
import image3 from "./image-3.svg";
import line23403 from "./line-2340-3.svg";
import {
  Bold,
  Italic,
  Underline,
  Striketrough,
  Link,
  OrderedList,
  BulletedList,
  AlignRight,
  Justify,
  Quote,
} from "./toolbar-icons";

export const CampaignCreationSection = ({ 
  onClose, 
  currentStep, 
  onNext, 
  onPrevious 
}: { 
  onClose: () => void;
  currentStep: number;
  onNext: () => void;
  onPrevious: () => void;
}): JSX.Element => {
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


  // Email editor state
  const [subjectLine, setSubjectLine] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [distributionStrategy, setDistributionStrategy] = useState("");
  const [abTestEnabled, setAbTestEnabled] = useState(false);
  const [followUpEnabled, setFollowUpEnabled] = useState(false);
  const [abTestVariants, setAbTestVariants] = useState([
    { id: 1, name: "Variant A", subject: "", content: "" },
    { id: 2, name: "Variant B", subject: "", content: "" }
  ]);

  const stepData = [
    { 
      id: 1, 
      label: "Configure", 
      completed: currentStep > 1,
      active: currentStep === 1,
      icon: currentStep > 1 ? vector23 : undefined,
      number: currentStep > 1 ? undefined : "1",
    },
    { 
      id: 2, 
      label: "Draft Email", 
      completed: currentStep > 2,
      active: currentStep === 2,
      icon: currentStep > 2 ? vector23 : undefined,
      number: currentStep > 2 ? undefined : "2",
    },
    { 
      id: 3, 
      label: "Upload Lead List", 
      completed: currentStep > 3,
      active: currentStep === 3,
      icon: currentStep > 3 ? vector23 : undefined,
      number: currentStep > 3 ? undefined : "3",
    },
    { 
      id: 4, 
      label: "Review", 
      completed: currentStep > 4,
      active: currentStep === 4,
      icon: currentStep > 4 ? vector23 : undefined,
      number: currentStep > 4 ? undefined : "4",
    },
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

  const toolbarButtons = [
    { component: Bold, group: "formatting" },
    { component: Italic, group: "formatting" },
    { component: Underline, group: "formatting" },
    { component: Striketrough, group: "formatting" },
    { component: Link, group: "link" },
    { component: OrderedList, group: "lists" },
    { component: BulletedList, group: "lists" },
    { component: AlignRight, group: "alignment" },
    { component: AlignRight, group: "alignment" },
    { component: AlignRight, group: "alignment" },
    { component: Justify, group: "alignment" },
    { component: Quote, group: "quote" },
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


  const handleSubjectLineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubjectLine(e.target.value);
  };

  const handleEmailBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEmailBody(e.target.value);
  };

  const handleDistributionStrategyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDistributionStrategy(e.target.value);
  };

  const toggleAbTest = () => {
    setAbTestEnabled(!abTestEnabled);
  };

  const toggleFollowUp = () => {
    setFollowUpEnabled(!followUpEnabled);
  };

  const addAbTestVariant = () => {
    const newVariant = {
      id: abTestVariants.length + 1,
      name: `Variant ${String.fromCharCode(65 + abTestVariants.length)}`,
      subject: "",
      content: ""
    };
    setAbTestVariants([...abTestVariants, newVariant]);
  };

  const renderToolbarButton = (button: (typeof toolbarButtons)[0], index: number) => {
    const ButtonComponent = button.component;
    return (
      <div
        key={index}
        className="inline-flex h-7 items-center justify-center gap-2 px-1.5 py-0 relative flex-[0_0_auto] rounded overflow-hidden hover:bg-gray-100 transition-colors"
      >
        <ButtonComponent className="!relative !w-4 !h-4" />
      </div>
    );
  };

  const renderToolbarGroup = (buttons: typeof toolbarButtons, groupName: string) => {
    const groupButtons = buttons.filter((button) => button.group === groupName);
    return (
      <div className="inline-flex items-start gap-0.5 relative flex-[0_0_auto]">
        {groupButtons.map((button, index) => renderToolbarButton(button, index))}
      </div>
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
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
                      src={Upload}
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
          </>
        );
      case 2:
        return (
          <>
            {/* Subject Line */}
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <label
                htmlFor="subject-line"
                className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]"
              >
                Subject Line
              </label>
              <input
                id="subject-line"
                type="text"
                value={subjectLine}
                onChange={handleSubjectLineChange}
                placeholder="Enter subject line"
                className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb] [font-family:'Manrope-Regular',Helvetica] font-normal text-base tracking-[-0.29px] leading-[normal] placeholder:text-[#a1a1a1] focus:outline-none focus:border-[#05587a] focus:ring-1 focus:ring-[#05587a]"
              />
            </div>

            {/* Email Body */}
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <label
                htmlFor="email-body"
                className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]"
              >
                Email Body
              </label>
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div
                  className="flex items-center gap-[9px] px-2 py-1.5 relative self-stretch w-full flex-[0_0_auto] bg-bgsoft rounded-[4px_4px_0px_0px] border border-solid border-[#dbdbdb]"
                  role="toolbar"
                  aria-label="Text formatting toolbar"
                >
                  {renderToolbarGroup(toolbarButtons, "formatting")}
                  <div className="relative w-px h-5 bg-[#d3dae3]" />
                  {renderToolbarGroup(toolbarButtons, "link")}
                  <div className="relative w-px h-5 bg-[#d3dae3]" />
                  {renderToolbarGroup(toolbarButtons, "lists")}
                  <div className="relative w-px h-5 bg-[#d3dae3]" />
                  {renderToolbarGroup(toolbarButtons, "alignment")}
                  <div className="relative w-px h-5 bg-[#d3dae3]" />
                  {renderToolbarGroup(toolbarButtons, "quote")}
                </div>
                <div className="relative flex h-[223px] items-start gap-2.5 px-3.5 py-2.5 self-stretch w-full bg-white rounded-[0px_0px_8px_8px] border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-l [border-left-style:solid] border-[#dbdbdb]">
                  <textarea
                    id="email-body"
                    value={emailBody}
                    onChange={handleEmailBodyChange}
                    placeholder="Enter email body"
                    className="relative flex items-start justify-start w-full h-full mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-base tracking-[-0.29px] leading-[normal] placeholder:text-[#a1a1a1] bg-transparent border-none outline-none resize-none"
                  />
                  <div className="absolute right-1.5 bottom-1 w-2 h-2">
                    <div className="absolute h-full top-0 right-0 w-2 flex bg-gray-200">
                      <img
                        className="mt-[1.6px] w-[6.35px] h-[6.35px] ml-[1.6px]"
                        alt="Resize handle"
                        src={image3}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* A/B Test Section */}
            <div className="items-start gap-5 p-4 self-stretch w-full flex-[0_0_auto] bg-[#f3f4f5] rounded-[20px] flex flex-col relative">
              <div className="flex flex-col items-start justify-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <button
                    className={`inline-flex items-start p-0.5 relative flex-[0_0_auto] rounded-[100px] focus:outline-none focus:ring-2 focus:ring-[#05587a] transition-all duration-200 ease-in-out ${
                      abTestEnabled ? "bg-[#05587a]" : "bg-[#dedede]"
                    }`}
                    onClick={toggleAbTest}
                    aria-pressed={abTestEnabled}
                    aria-label="Toggle A/B test"
                  >
                    <div
                      className={`relative w-4 h-4 ${abTestEnabled ? "bg-white" : "bg-transparent"} rounded-lg shadow-[0px_2px_4px_#0000001a] transition-all duration-200 ease-in-out`}
                    />
                    <div className="relative w-4 h-4 rounded-lg" />
                  </button>
                  <h3 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                    Create A/B Test
                  </h3>
                </div>
                <p className="self-stretch [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] relative tracking-[0]">
                  Send Multiple Variations Of Your Email And Measure Which One Performs Best
                </p>
              </div>
              <img
                className="relative self-stretch w-full h-px"
                alt="Divider line"
                src={line23403}
              />
              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <h4 className="relative w-fit [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                    A/B Test Variants
                  </h4>
                  <button 
                    className="inline-flex h-8 items-center justify-center gap-2 px-3 py-2 relative flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#eaeaea] hover:bg-gray-50 transition-colors"
                    onClick={addAbTestVariant}
                    aria-label="Add A/B test variant"
                  >
                    <span className="relative w-fit mt-[-2.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                      +
                    </span>
                    <span className="relative w-fit mt-[-2.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                      Add Variant
                    </span>
                  </button>
                </div>
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <label
                    htmlFor="distribution-strategy"
                    className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]"
                  >
                    Distribution Strategy
                  </label>
                  <div className="relative self-stretch w-full">
                    <select
                      id="distribution-strategy"
                      value={distributionStrategy}
                      onChange={handleDistributionStrategyChange}
                      className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb] [font-family:'Manrope-Regular',Helvetica] font-normal text-base tracking-[-0.29px] leading-[normal] appearance-none focus:outline-none focus:border-[#05587a] focus:ring-1 focus:ring-[#05587a]"
                    >
                      <option value="">Please select</option>
                      <option value="equal">Equal Distribution</option>
                      <option value="weighted">Weighted Distribution</option>
                      <option value="winner">Winner Takes All</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 transform -translate-y-1/2 w-[18px] h-[18px] pointer-events-none">
                      <img
                        className="absolute w-[53.03%] h-[32.41%] top-[34.26%] left-[23.48%]"
                        alt="Dropdown arrow"
                        src={Upload}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow-up Section */}
            <div className="flex items-start justify-around gap-[185px] p-4 relative self-stretch w-full flex-[0_0_auto] bg-[#f3f4f5] rounded-[20px]">
              <div className="flex flex-col items-start justify-center gap-1.5 relative flex-1 grow">
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <button
                    className={`inline-flex items-start p-0.5 relative flex-[0_0_auto] rounded-[100px] focus:outline-none focus:ring-2 focus:ring-[#05587a] transition-all duration-200 ease-in-out ${
                      followUpEnabled ? "bg-[#05587a]" : "bg-[#dedede]"
                    }`}
                    onClick={toggleFollowUp}
                    aria-pressed={followUpEnabled}
                    aria-label="Toggle follow-up email"
                  >
                    <div
                      className={`relative w-4 h-4 ${followUpEnabled ? "bg-white" : "bg-transparent"} rounded-lg shadow-[0px_2px_4px_#0000001a] transition-all duration-200 ease-in-out`}
                    />
                    <div className="relative w-4 h-4 rounded-lg" />
                  </button>
                  <h3 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                    Add Follow-up
                  </h3>
                </div>
                <p className="self-stretch [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] relative tracking-[0]">
                  Send An Additional Email If No Response Is Received
                </p>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <h3 className="text-lg font-semibold text-[#111111]">Upload Lead List</h3>
            <p className="text-sm text-[#4f5059]">Upload your CSV file with lead information.</p>
            <div className="w-full h-32 border-2 border-dashed border-[#dbdbdb] rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-[#4f5059] mb-2">Drag and drop your CSV file here</p>
                <button className="bg-[#09215e] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#0a2668] transition-colors">
                  Choose File
                </button>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <h3 className="text-lg font-semibold text-[#111111]">Review Campaign</h3>
            <p className="text-sm text-[#4f5059]">Review your campaign details before creating.</p>
            <div className="w-full bg-[#f8f9fa] rounded-lg p-4 space-y-3">
              <div className="flex justify-between">
                <span className="font-medium text-[#111111]">Campaign Name:</span>
                <span className="text-[#4f5059]">{formData.campaignName || "Not specified"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-[#111111]">Number of Leads:</span>
                <span className="text-[#4f5059]">{formData.numberOfLeads || "Not specified"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-[#111111]">Location:</span>
                <span className="text-[#4f5059]">{formData.location || "Not specified"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-[#111111]">Investor Type:</span>
                <span className="text-[#4f5059]">{formData.investorType || "Not specified"}</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-[800px] h-full bg-white relative overflow-hidden">
      <header className="absolute w-full top-0 left-0 h-[60px] flex justify-end items-center border-b [border-bottom-style:solid] border-[#eaeaea]">
        <button className="h-6 w-6 mr-5 flex" aria-label="Close" onClick={onClose}>
          <img className="mt-1.5 w-3 h-3 ml-1.5" alt="Close" src={vector22} />
        </button>
      </header>

      <footer className="absolute w-full left-0 bottom-0 h-[60px] flex border-t [border-top-style:solid] border-[#eaeaea]">
        <div className="inline-flex mt-2.5 w-[280px] h-10 ml-[500px] relative items-center gap-3">
          {currentStep > 1 && (
            <button
              className="border border-solid border-[#eaeaea] flex w-[84px] h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg hover:bg-gray-50 transition-colors"
              onClick={onPrevious}
            >
              <span className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                Previous
              </span>
            </button>
          )}
          
          <button
            className="border border-solid border-[#eaeaea] flex w-[84px] h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => {
              handleCancel();
              onClose();
            }}
          >
            <span className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
              Cancel
            </span>
          </button>

          <button
            className="bg-[#09215e] border-[0.5px] border-solid border-[#fbfbfb] flex w-[84px] h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg hover:bg-[#0a2668] transition-colors"
            onClick={onNext}
          >
            <span className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#fbfbfb] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
              {currentStep === 4 ? "Create Campaign" : "Continue"}
            </span>
          </button>
        </div>
      </footer>

      <main className="flex flex-col w-[760px] items-start gap-5 absolute top-[212px] left-5">
        {renderStepContent()}
      </main>

      <nav
        className="absolute top-[60px] left-0 w-[800px] h-[66px] flex bg-[#fbfbfb] border-b [border-bottom-style:solid] border-[#eaeaea]"
        aria-label="Campaign creation steps"
      >
        <div className="flex mt-5 h-[26px] ml-6 mr-6 flex-1 relative w-[752px] items-center gap-5">
          {stepData.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <div
                  className={`flex flex-col w-[26px] h-[26px] items-center justify-center gap-2.5 p-1.5 relative rounded-[100px] ${
                    step.active
                      ? "bg-[#05587a]"
                      : step.completed
                        ? "bg-[#05587a14] border border-solid border-[#05587a]"
                        : "bg-[#e9e9e9]"
                  }`}
                >
                  {step.icon ? (
                    <div className="relative w-[10.31px] h-[7.48px] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px]">
                      <img
                        className="absolute w-full h-full top-0 left-0"
                        alt={`${step.label} icon`}
                        src={step.icon}
                      />
                    </div>
                  ) : (
                    <div
                      className={`flex items-center justify-center self-stretch mt-[-2.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-center tracking-[-0.22px] leading-[normal] relative text-xs ${
                        step.active ? "text-white" : "text-[#a1a1a1]"
                      }`}
                    >
                      {step.number}
                    </div>
                  )}
                </div>

                <div
                  className={`relative flex items-center justify-center w-fit [font-family:'Manrope-SemiBold',Helvetica] text-sm tracking-[-0.25px] leading-[normal] ${
                    step.active || step.completed
                      ? "font-semibold text-[#05587a]"
                      : "[font-family:'Manrope-Medium',Helvetica] font-medium text-[#a1a1a1]"
                  }`}
                >
                  {step.label}
                </div>
              </div>

              {index < stepData.length - 1 && (
                <div
                  className={`relative flex-1 grow h-0.5 rounded-[100px] ${
                    index < currentStep - 1 ? "bg-[#05587a]" : "bg-[#d9d9d9]"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>

      <section className="flex flex-col w-[798px] items-start gap-5 pt-5 pb-0 px-5 absolute top-[126px] left-0.5">
        <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <h2 className="font-semibold text-[#111111] text-xl leading-[30px] [font-family:'Manrope',Helvetica] tracking-[0]">
                {currentStep === 1 && "Configure Campaign"}
                {currentStep === 2 && "Email Sequences"}
                {currentStep === 3 && "Upload Lead List"}
                {currentStep === 4 && "Review Campaign"}
              </h2>
              {currentStep === 2 && (
                <div className="inline-flex items-center justify-center gap-1 px-3 py-1 relative flex-[0_0_auto] bg-[#efefef] rounded-[100px]">
                  <div className="relative w-1.5 h-1.5 bg-[#c2c8d0] rounded-full" />
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                    Initial Email
                  </span>
                </div>
              )}
            </div>

            <p className="w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative tracking-[0]">
              {currentStep === 1 && "Monitor Growth In Customer Engagement Over Time"}
              {currentStep === 2 && "Create your email template for this campaign"}
              {currentStep === 3 && "Upload your CSV file with lead information"}
              {currentStep === 4 && "Review your campaign details before creating"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
