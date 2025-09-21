import { useState, useEffect } from "react";
import { CampaignCreationSection } from "./sections/CampaignCreationSection";
import { UploadLeadListModalSection } from "./sections/UploadLeadListModalSection";
import { CampaignReviewModalSection } from "./sections/CampaignReviewModalSection";

interface OutreachCreateProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OutreachCreate = ({ isOpen, onClose }: OutreachCreateProps): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);

  // Reset step to 1 when modal is opened
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
    }
  }, [isOpen]);

  const handleClose = () => {
    // Reset step to 1 when closing
    setCurrentStep(1);
    // Call parent's onClose function
    onClose();
  };

  const handleNext = () => {
    if (currentStep < 4) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <CampaignCreationSection 
            onClose={handleClose}
            currentStep={currentStep}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 2:
        return (
          <CampaignCreationSection 
            onClose={handleClose}
            currentStep={currentStep}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 3:
        return (
          <UploadLeadListModalSection 
            onClose={handleClose}
            currentStep={currentStep}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 4:
        return (
          <CampaignReviewModalSection 
            onClose={handleClose}
            currentStep={currentStep}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      default:
        return null;
    }
  };

  // When modal is closed, don't render anything
  if (!isOpen) {
    return <></>;
  }

  return (
    <div className="fixed inset-0 z-50">
      {/* Transparent backdrop that shows whatever is behind */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal content */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-full bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {renderCurrentStep()}
      </div>
    </div>
  );
};
