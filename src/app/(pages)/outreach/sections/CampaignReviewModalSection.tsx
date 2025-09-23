import React, { useState } from "react";
import vector22 from "./vector-22.svg";
import vector23 from "./vector-23.svg";
import vector24 from "./vector-24.svg";
import vector25 from "./vector-25.svg";
import vector26 from "./vector-26.svg";
import vector27 from "./vector-27.svg";
import vector28 from "./vector-28.svg";

interface CampaignReviewModalSectionProps {
  onClose: () => void;
  currentStep: number;
  onNext: () => void;
  onPrevious: () => void;
}

export const CampaignReviewModalSection = ({ onClose, currentStep, onNext, onPrevious }: CampaignReviewModalSectionProps): JSX.Element => {
  const [isCreating, setIsCreating] = useState(false);

  const progressSteps = [
    {
      id: 1,
      label: "Configure",
      icon: vector23,
      completed: true,
    },
    {
      id: 2,
      label: "Draft Email",
      icon: vector23,
      completed: true,
    },
    {
      id: 3,
      label: "Upload Lead List",
      icon: vector23,
      completed: true,
    },
    {
      id: 4,
      label: "Review",
      icon: null,
      completed: false,
      current: true,
      number: "4",
    },
  ];

  const reviewSections = [
    {
      id: 1,
      title: "Configure Campaign",
      icon: vector26,
      description: "Campaign configuration details and settings.",
    },
    {
      id: 2,
      title: "Email Sequence",
      icon: vector27,
      description: "Email content and sequence configuration.",
    },
    {
      id: 3,
      title: "Upload Lead List",
      icon: vector28,
      description: "Lead list upload and management settings.",
    },
  ];

  const handleCancel = () => {
    onClose();
  };

  const handleCreate = () => {
    setIsCreating(true);
    // Handle create campaign action
    setTimeout(() => {
      setIsCreating(false);
      onClose();
    }, 2000);
  };

  const handleEdit = (sectionId: number) => {
    // Handle edit section action - go back to that step
    if (sectionId === 1) {
      onPrevious();
    } else if (sectionId === 2) {
      onPrevious();
    } else if (sectionId === 3) {
      onPrevious();
    }
  };

  return (
    <div
      className="absolute top-0 right-0.5 w-[801px] h-[1029px] bg-white"
      role="dialog"
      aria-labelledby="modal-title"
      aria-modal="true"
    >
      <header className="absolute w-full top-0 left-0 h-[60px] flex justify-end items-center border-b [border-bottom-style:solid] border-[#eaeaea]">
        <button
          className="h-6 w-6 mr-5 flex"
          aria-label="Close modal"
          onClick={handleCancel}
        >
          <img className="mt-1.5 w-3 h-3 ml-1.5" alt="" src={vector22} />
        </button>
      </header>

      <footer className="absolute w-full left-0 bottom-0 h-[60px] flex border-t [border-top-style:solid] border-[#eaeaea]">
        <div className="inline-flex mt-2.5 w-[180px] h-10 ml-[600px] relative items-center gap-3">
          <button
            className="flex w-[84px] justify-center border border-solid border-[#eaeaea] h-10 items-center gap-2 px-3 py-2 relative rounded-lg hover:bg-gray-50 transition-colors"
            onClick={handleCancel}
            disabled={isCreating}
          >
            <span className="text-[#4f5059] relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
              Cancel
            </span>
          </button>

          <button
            className="flex w-[84px] justify-center bg-[#09215e] border-[0.5px] border-solid border-[#fbfbfb] h-10 items-center gap-2 px-3 py-2 relative rounded-lg hover:bg-[#0a1a4f] transition-colors disabled:opacity-50"
            onClick={handleCreate}
            disabled={isCreating}
          >
            <span className="text-[#fbfbfb] relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
              {isCreating ? "Creating..." : "Create"}
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
                  className={`flex flex-col w-[26px] h-[26px] items-center justify-center gap-2.5 p-1.5 relative rounded-[100px] border border-solid ${
                    step.current
                      ? "bg-[#05587a]"
                      : "bg-[#05587a14] border-[#05587a]"
                  }`}
                >
                  {step.current ? (
                    <span className="flex items-center justify-center self-stretch mt-[-2.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-white text-center tracking-[-0.22px] leading-[normal] relative text-xs">
                      {step.id}
                    </span>
                  ) : (
                    <div className="relative w-[10.31px] h-[7.48px] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px]">
                      <img
                        className="absolute w-full h-full top-0 left-0"
                        alt=""
                        src={step.icon}
                      />
                    </div>
                  )}
                </div>

                <span className="relative flex items-center justify-center w-fit [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#05587a] text-sm tracking-[-0.25px] leading-[normal]">
                  {step.label}
                </span>
              </div>

              {index < progressSteps.length - 1 && (
                <div className="relative flex-1 grow h-0.5 bg-[#05587a] rounded-[100px]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>

      <main className="flex flex-col w-[800px] items-start gap-5 pt-5 pb-0 px-5 absolute top-[126px] left-0">
        <div className="flex items-center gap-3 flex-[0_0_auto] relative self-stretch w-full">
          <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <h2 className="relative w-fit mt-[-1.00px] font-semibold text-[#111111] text-xl leading-[30px] [font-family:'Manrope',Helvetica] tracking-[0] whitespace-nowrap">
                Review
              </h2>
            </div>

            <p className="w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative tracking-[0]">
              Review Your Campaign Details Below
            </p>
          </div>
        </div>
      </main>

      <section
        className="absolute top-[212px] left-5 w-[761px] space-y-3"
        aria-label="Campaign review sections"
      >
        {reviewSections.map((section, index) => (
          <article
            key={section.id}
            className="flex flex-col w-full items-start gap-5 p-3 rounded-[20px] border border-solid border-[#eaeaea]"
            style={{ top: `${92 * index}px` }}
          >
            <div className="flex flex-col items-start justify-center gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <div className="relative w-5 h-5 aspect-[1] bg-[#0A7A34] rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>

                  <h3 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                    {section.title}
                  </h3>
                </div>

                <button
                  className="inline-flex h-8 items-center justify-center gap-2 px-3 py-2 relative flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#eaeaea] hover:bg-gray-50 transition-colors"
                  onClick={() => handleEdit(section.id)}
                  aria-label={`Edit ${section.title}`}
                >
                  <span className="relative w-fit mt-[-2.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                    Edit
                  </span>
                </button>
              </div>

              <p className="relative self-stretch [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px]">
                {section.description}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
