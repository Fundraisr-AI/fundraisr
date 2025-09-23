import React, { useState, useRef } from "react";
import vector22 from "./vector-22.svg";
import vector23 from "./vector-23.svg";
import vector24 from "./vector-24.svg";
import vector25 from "./vector-25.svg";
import vector26 from "./vector-26.svg";
import loadSvg from "./load.svg";
import { Upload } from "lucide-react";

export const UploadLeadListModalSection = ({ 
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
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState<"upload" | "import">("upload");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleClose = () => {
    onClose();
  };

  const progressSteps = [
    {
      id: 1,
      label: "Configure",
      completed: currentStep > 1,
      active: currentStep === 1,
      icon: currentStep > 1 ? vector23 : undefined,
      number: currentStep > 1 ? undefined : "1"    },
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

  return (
    <div className="w-[800px] h-full bg-white">
      <header className="absolute w-full top-0 left-0 h-[60px] flex justify-end items-center border-b [border-bottom-style:solid] border-[#eaeaea]">
        <button
          className="h-6 w-6 mr-5 flex"
          onClick={handleClose}
          aria-label="Close modal"
        >
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
            onClick={onClose}
          >
            <span className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
              Cancel
            </span>
          </button>

          <button
            className="bg-[#09215e] border-[0.5px] border-solid border-[#fbfbfb] flex w-[84px] h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg hover:bg-[#0a1a4f] transition-colors"
            onClick={onNext}
          >
            <span className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#fbfbfb] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
              {currentStep === 4 ? "Create Campaign" : "Continue"}
            </span>
          </button>
        </div>
      </footer>

      <nav
        className="absolute top-[60px] left-0 w-[800px] h-[66px] flex bg-[#fbfbfb] border-b [border-bottom-style:solid] border-[#eaeaea]"
        aria-label="Campaign creation progress"
      >
        <div className="flex mt-5 h-[26px] ml-6 mr-6 flex-1 relative w-[752px] items-center gap-5">
          {progressSteps.map((step, index) => (
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
                    <span
                      className={`flex items-center justify-center self-stretch mt-[-2.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-center tracking-[-0.22px] leading-[normal] relative text-xs ${
                        step.active ? "text-white" : "text-[#a1a1a1]"
                      }`}
                    >
                      {step.number}
                    </span>
                  )}
                </div>

                <span
                  className={`relative flex items-center justify-center w-fit [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-sm tracking-[-0.25px] leading-[normal] ${
                    step.active || step.completed
                      ? "text-[#05587a]"
                      : "text-[#a1a1a1] [font-family:'Manrope-Medium',Helvetica] font-medium"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {index < progressSteps.length - 1 && (
                <div
                  className={`relative flex-1 grow h-0.5 rounded-[100px] ${
                    index < 2 ? "bg-[#05587a]" : "bg-[#d9d9d9]"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>

      <main className="flex flex-col w-[800px] items-start gap-5 pt-5 pb-0 px-5 absolute top-[126px] left-0">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <h2 className="relative w-fit mt-[-1.00px] font-semibold text-[#111111] text-xl leading-[30px] [font-family:'Manrope',Helvetica] tracking-[0] whitespace-nowrap">
                Lead List
              </h2>
            </div>

            <p className="w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative tracking-[0]">
              Monitor Growth In Customer Engagement Over Time
            </p>
          </div>

          <div
            className="inline-flex items-center p-0.5 relative flex-[0_0_auto] bg-[#f6f6f6] rounded-lg"
            role="tablist"
          >
            <button
              className={`inline-flex items-center justify-center gap-2.5 px-4 py-2 relative flex-[0_0_auto] rounded-md transition-colors ${
                activeTab === "upload" ? "bg-white" : "bg-transparent"
              }`}
              onClick={() => setActiveTab("upload")}
              role="tab"
              aria-selected={activeTab === "upload"}
            >
              <span
                className={`relative w-fit mt-[-0.50px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap ${
                  activeTab === "upload" ? "text-[#272a34]" : "text-[#7b7f93]"
                }`}
              >
                Upload CSV File
              </span>
            </button>

            <button
              className={`inline-flex items-center justify-center gap-2.5 px-4 py-1.5 relative flex-[0_0_auto] rounded-md transition-colors ${
                activeTab === "import" ? "bg-white" : "bg-transparent"
              }`}
              onClick={() => setActiveTab("import")}
              role="tab"
              aria-selected={activeTab === "import"}
            >
              <span
                className={`relative w-fit mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap ${
                  activeTab === "import" ? "text-[#272a34]" : "text-[#7b7f93]"
                }`}
              >
                Import from Google Sheets
              </span>
            </button>
          </div>
        </div>
      </main>

      <section
        className={`flex flex-col w-[762px] h-[301px] items-center justify-center gap-3 p-4 absolute top-[212px] left-[19px] bg-white rounded-[14px] border border-dashed overflow-hidden transition-colors ${
          isDragOver ? "border-[#05587a] bg-[#05587a14]" : "border-[#eaeaea]"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleUploadClick}
        role="button"
        tabIndex={0}
        aria-label="Upload CSV file area"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleUploadClick();
          }
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv"
          onChange={handleFileSelect}
          className="hidden"
          aria-label="Select CSV file"
        />

        <div className="inline-flex flex-col items-center justify-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-6 h-6 rounded-[5px] overflow-hidden">
            <img
              className="absolute w-full h-full top-0 left-0"
              alt="Upload icon"
              src={loadSvg}
            />
          </div>

          <p className="font-normal text-transparent text-base text-center tracking-[0] leading-6 relative w-fit [font-family:'Manrope-Bold',Helvetica] whitespace-nowrap">
            <span className="font-bold text-[#09215e]">Click to upload</span>

            <span className="[font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059]">
              {" "}
              or drag and drop CSV
            </span>
          </p>

          <p className="w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative tracking-[0]">
            Supports Any File Type • Max 10mb Per File
          </p>
        </div>
      </section>
    </div>
  );
};
