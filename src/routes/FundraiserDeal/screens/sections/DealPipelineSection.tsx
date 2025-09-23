import { useState } from "react";
import {
  ArrowUpDownIcon,
  ChevronDownIcon,
  FilterIcon,
  SearchIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  CalendarIcon,
  MoreHorizontalIcon,
  PlusIcon,
  MessageSquareIcon,
  EditIcon,
  TrashIcon,
  CopyIcon,
  XIcon,
} from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

// Add Prospect Form Component
interface AddProspectFormProps {
  onClose: (newCard?: any) => void;
}

const AddProspectForm = ({ onClose }: AddProspectFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    emailAddress: "",
    linkedinUrl: "",
    category: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categoryOptions = [
    "Sales Lead",
    "Marketing Lead", 
    "Partnership",
    "Customer",
    "Other",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCategorySelect = (category: string) => {
    handleInputChange("category", category);
    setIsDropdownOpen(false);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Add the new prospect to the first column (Prospect)
    const newCard = {
      id: Date.now() + Math.random() * 1000,
      status: "Prospect",
      statusColor: "#17a34a",
      company: formData.companyName || `${formData.firstName} ${formData.lastName}`,
      contact: `${formData.firstName} ${formData.lastName} • ${formData.companyName || 'Company'}`,
      description: formData.category ? `${formData.category} Lead` : "New Lead",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      contactName: `${formData.firstName} ${formData.lastName}`,
      contactRole: formData.category || "Contact",
      messageCount: "0",
    };
    
    // Call the parent's addCard function
    onClose(newCard);
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      companyName: "",
      emailAddress: "",
      linkedinUrl: "",
      category: "",
    });
    onClose();
  };

  return (
    <div className="w-full h-full bg-white">
      <header className="absolute w-full top-0 left-0 h-[60px] flex justify-between items-center border-b border-solid border-[#eaeaea]">
        <h1 className="flex items-center justify-center h-7 w-[127px] ml-5 font-bold text-[#111111] text-xl tracking-[-0.36px] leading-7 whitespace-nowrap">
          Add Prospect
        </h1>
        <button
          className="h-6 w-6 mr-5 flex"
          onClick={handleCancel}
          aria-label="Close form"
        >
          <XIcon className="w-4 h-4" />
        </button>
      </header>

      <footer className="absolute w-full left-0 bottom-0 h-[60px] flex border-t border-solid border-[#eaeaea]">
        <div className="inline-flex mt-2.5 w-[194px] h-10 ml-[586px] relative items-center justify-center gap-3">
          <button
            className="flex w-[84px] border border-solid border-[#eaeaea] h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg hover:bg-gray-50 transition-colors"
            onClick={handleCancel}
          >
            <span className="relative w-fit font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
              Cancel
            </span>
          </button>
          <button
            className="inline-flex flex-[0_0_auto] bg-[#09215e] border-[0.5px] border-solid border-[#fbfbfb] h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg hover:bg-[#0a1a4f] transition-colors"
            onClick={handleSubmit}
          >
            <span className="relative w-fit font-medium text-[#fbfbfb] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
              Add Prospect
            </span>
          </button>
        </div>
      </footer>

      <section className="flex flex-col w-[798px] items-start gap-5 pt-5 pb-0 px-5 absolute top-[60px] left-0.5">
        <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
            <h2 className="relative w-fit mt-[-1.00px] font-semibold text-[#111111] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
              Add Lead Information
            </h2>
            <p className="w-fit font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative tracking-[0]">
              Fill In The Details Below To Create A New Lead Record
            </p>
          </div>
        </div>
      </section>

      <form className="flex flex-col w-[760px] items-start gap-5 absolute top-[146px] left-5">
        <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-2 relative flex-1 grow">
            <label className="relative flex items-center justify-start self-stretch mt-[-1.00px] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
              First Name
            </label>
            <div className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb] focus-within:border-[#09215e] transition-colors">
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder="Enter first name"
                className="relative flex items-center justify-center w-full mt-[-1.00px] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] bg-transparent border-none outline-none placeholder:text-[#a1a1a1]"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 relative flex-1 grow">
            <label className="relative flex items-center justify-start self-stretch mt-[-1.00px] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
              Last Name
            </label>
            <div className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb] focus-within:border-[#09215e] transition-colors">
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder="Enter last name"
                className="relative flex items-center justify-center w-full mt-[-1.00px] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] bg-transparent border-none outline-none placeholder:text-[#a1a1a1]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <label className="relative flex items-center justify-start self-stretch mt-[-1.00px] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
            Company Name
          </label>
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb] focus-within:border-[#09215e] transition-colors">
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
              placeholder="Enter company name"
              className="relative flex items-center justify-center w-full mt-[-1.00px] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] bg-transparent border-none outline-none placeholder:text-[#a1a1a1]"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <label className="relative flex items-center justify-start self-stretch mt-[-1.00px] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
            Email Address
          </label>
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb] focus-within:border-[#09215e] transition-colors">
            <input
              type="email"
              value={formData.emailAddress}
              onChange={(e) => handleInputChange("emailAddress", e.target.value)}
              placeholder="Enter email address"
              className="relative flex items-center justify-center w-full mt-[-1.00px] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] bg-transparent border-none outline-none placeholder:text-[#a1a1a1]"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <label className="relative flex items-center justify-start self-stretch mt-[-1.00px] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
            Linkedin Profile URL
          </label>
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb] focus-within:border-[#09215e] transition-colors">
            <input
              type="url"
              value={formData.linkedinUrl}
              onChange={(e) => handleInputChange("linkedinUrl", e.target.value)}
              placeholder="https://linkedin.com/in/profile-name"
              className="relative flex items-center justify-center w-full mt-[-1.00px] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] bg-transparent border-none outline-none placeholder:text-[#a1a1a1]"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <label className="relative flex items-center justify-start self-stretch mt-[-1.00px] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
            Category
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2.5 px-3.5 py-2.5 relative w-[760px] bg-white rounded-lg border border-solid border-[#dbdbdb] hover:border-[#09215e] transition-colors"
            >
              <span className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-normal text-base tracking-[-0.29px] leading-[normal] text-left">
                {formData.category || (
                  <span className="text-[#a1a1a1]">Please select</span>
                )}
              </span>
              <div className="relative w-[18px] h-[18px]">
                <div className={`absolute w-[53.03%] h-[32.41%] top-[34.26%] left-[23.48%] transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}>
                  ▼
                </div>
              </div>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-full bg-white border border-solid border-[#dbdbdb] rounded-lg mt-1 shadow-lg z-10">
                {categoryOptions.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleCategorySelect(option)}
                    className="w-full px-3.5 py-2.5 text-left font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

// Edit Card Form Component
interface EditCardFormProps {
  card: any;
  onClose: (updatedCard?: any) => void;
}

const EditCardForm = ({ card, onClose }: EditCardFormProps) => {
  const [formData, setFormData] = useState({
    company: card.company || "",
    contactName: card.contactName || "",
    contactRole: card.contactRole || "",
    description: card.description || "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    const updatedCard = {
      ...card,
      company: formData.company,
      contactName: formData.contactName,
      contactRole: formData.contactRole,
      description: formData.description,
      contact: `${formData.contactName} • ${formData.company}`,
    };
    onClose(updatedCard);
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="w-full h-full bg-white">
      <header className="absolute w-full top-0 left-0 h-[60px] flex justify-between items-center border-b border-solid border-[#eaeaea]">
        <h1 className="flex items-center justify-center h-7 w-[127px] ml-5 font-bold text-[#111111] text-xl tracking-[-0.36px] leading-7 whitespace-nowrap">
          Edit Card
        </h1>
        <button
          className="h-6 w-6 mr-5 flex"
          onClick={handleCancel}
          aria-label="Close form"
        >
          <XIcon className="w-4 h-4" />
        </button>
      </header>

      <footer className="absolute w-full left-0 bottom-0 h-[60px] flex border-t border-solid border-[#eaeaea]">
        <div className="inline-flex mt-2.5 w-[194px] h-10 ml-[586px] relative items-center justify-center gap-3">
          <button
            className="flex w-[84px] border border-solid border-[#eaeaea] h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg hover:bg-gray-50 transition-colors"
            onClick={handleCancel}
          >
            <span className="relative w-fit font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
              Cancel
            </span>
          </button>
          <button
            className="inline-flex flex-[0_0_auto] bg-[#09215e] border-[0.5px] border-solid border-[#fbfbfb] h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg hover:bg-[#0a1a4f] transition-colors"
            onClick={handleSubmit}
          >
            <span className="relative w-fit font-medium text-[#fbfbfb] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
              Save Changes
            </span>
          </button>
        </div>
      </footer>

      <section className="flex flex-col w-[798px] items-start gap-5 pt-5 pb-0 px-5 absolute top-[60px] left-0.5">
        <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
            <h2 className="relative w-fit mt-[-1.00px] font-semibold text-[#111111] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
              Edit Card Information
            </h2>
            <p className="w-fit font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative tracking-[0]">
              Update The Card Details Below
            </p>
          </div>
        </div>
      </section>

      <form className="flex flex-col w-[760px] items-start gap-5 absolute top-[146px] left-5">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <label className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
            Company Name
          </label>
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb] focus-within:border-[#09215e] transition-colors">
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              placeholder="Enter company name"
              className="relative flex items-center justify-center w-full mt-[-1.00px] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] bg-transparent border-none outline-none placeholder:text-[#a1a1a1]"
            />
          </div>
        </div>

        <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-2 relative flex-1 grow">
            <label className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
              Contact Name
            </label>
            <div className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb] focus-within:border-[#09215e] transition-colors">
              <input
                type="text"
                value={formData.contactName}
                onChange={(e) => handleInputChange("contactName", e.target.value)}
                placeholder="Enter contact name"
                className="relative flex items-center justify-center w-full mt-[-1.00px] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] bg-transparent border-none outline-none placeholder:text-[#a1a1a1]"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 relative flex-1 grow">
            <label className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
              Contact Role
            </label>
            <div className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb] focus-within:border-[#09215e] transition-colors">
              <input
                type="text"
                value={formData.contactRole}
                onChange={(e) => handleInputChange("contactRole", e.target.value)}
                placeholder="Enter contact role"
                className="relative flex items-center justify-center w-full mt-[-1.00px] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] bg-transparent border-none outline-none placeholder:text-[#a1a1a1]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <label className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
            Description
          </label>
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb] focus-within:border-[#09215e] transition-colors">
            <input
              type="text"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Enter description"
              className="relative flex items-center justify-center w-full mt-[-1.00px] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] bg-transparent border-none outline-none placeholder:text-[#a1a1a1]"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export const DealPipelineSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("kanban");
  const [draggedCard, setDraggedCard] = useState<any>(null);
  const [showContextMenu, setShowContextMenu] = useState<{card: any, x: number, y: number} | null>(null);
  const [showAddProspectModal, setShowAddProspectModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [cardToEdit, setCardToEdit] = useState<any>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [cardToDelete, setCardToDelete] = useState<any>(null);

  const statsData = [
    {
      value: "84",
      label: "Interested Contacts",
      change: "12%",
      isPositive: true,
      lastPeriod: "65",
      lastPeriodLabel: "last year",
      chartSrc: "https://c.animaapp.com/mfr8j7rbwvSuXy/img/container-1.svg",
    },
    {
      value: "25",
      label: "Meeting Scheduled",
      change: "5%",
      isPositive: true,
      lastPeriod: "20",
      lastPeriodLabel: "last month",
      chartSrc: "https://c.animaapp.com/mfr8j7rbwvSuXy/img/container.svg",
    },
    {
      value: "$180,000",
      label: "Commitments",
      change: "10%",
      isPositive: false,
      lastPeriod: "$200,000",
      lastPeriodLabel: "last month",
      chartSrc: "https://c.animaapp.com/mfr8j7rbwvSuXy/img/container-2.svg",
    },
  ];

  // Kanban data
  const prospectCards = [
    {
      id: 1,
      status: "Prospect",
      statusColor: "#17a34a",
      company: "Truebridgecapital",
      contact: "Ronin Bhasin • Truebridgecapital",
      description: "Lionheart (Mental Health) • Globally",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      contactName: "Ronin Bhasin",
      contactRole: "Contact",
      messageCount: "10",
    },
    {
      id: 2,
      status: "Prospect",
      statusColor: "#17a34a",
      company: "Wavemaker 360",
      contact: "Michelle Wang • Wavemaker 360",
      description: "Neurable • North America • Investor",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
      contactName: "Michelle Wang",
      contactRole: "Contact",
      messageCount: "10",
    },
    {
      id: 3,
      status: "Prospect",
      statusColor: "#17a34a",
      company: "World Bank IFC",
      contact: "Priya Sharma • World Bank IFC",
      description: "Senior Investment Officer",
      date: "30 September 2025",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      contactName: "Priya Sharma",
      contactRole: "Senior Investment Officer",
      messageCount: "10",
    },
  ];

  const noShowCards = [
    {
      id: 1,
      status: "No Show",
      statusColor: "#db5050",
      company: "Cherry",
      contact: "Radja Reischel • Cherry",
      description: "Neurable • Europe, MENA, Asia Pacific",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      contactName: "Radja Reischel",
      contactRole: "Contact",
      messageCount: "10",
    },
    {
      id: 2,
      status: "No Show",
      statusColor: "#db5050",
      company: "Singapore GIC",
      contact: "Alex Tan • Singapore GIC",
      description: "$30M Sovereign Investment",
      date: "21 Oktober 2025",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      contactName: "Alex Tan",
      contactRole: "Vice President",
      messageCount: "10",
    },
    {
      id: 3,
      status: "No Show",
      statusColor: "#db5050",
      company: "Bezos Family Foundation",
      contact: "Lisa Thompson • Bezos Family Foundation",
      description: "$2M Angel Investment",
      date: "09 September 2025",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
      contactName: "Lisa Thompson",
      contactRole: "Investment Advisor",
      messageCount: "10",
    },
    {
      id: 4,
      status: "No Show",
      statusColor: "#db5050",
      company: "AXA Investment Manager",
      contact: "Maria Rodriguez • AXA Investment Manager",
      description: "$12M Insurance Capital",
      date: "16 September 2025",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      contactName: "Maria Rodriguez",
      contactRole: "Head of Alternatives",
      messageCount: "10",
    },
    {
      id: 5,
      status: "No Show",
      statusColor: "#db5050",
      company: "Norway Government Pension Fund",
      contact: "Robert Chen • Norway Government Pension Fund",
      description: "$25M Strategic Investment",
      date: "07 Oktober 2025",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      contactName: "Robert Chen",
      contactRole: "Portfolio Manager",
      messageCount: "10",
    },
  ];

  const meetingScheduledCards = [
    {
      id: 1,
      status: "Meeting Scheduled",
      statusColor: "#1e3a8a",
      company: "CalPERS Investment Office",
      contact: "Sarah Kim • CalPERS Investment Office",
      description: "$15M Institutional Commitment",
      date: "16 September 2025",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      contactName: "Sarah Kim",
      contactRole: "Senior Investment Officer",
      messageCount: "10",
    },
    {
      id: 2,
      status: "Meeting Scheduled",
      statusColor: "#1e3a8a",
      company: "Boeing Pension Trust",
      contact: "Michael Chang • Boeing Pension Trust",
      description: "$6M Corporate Pension",
      date: "23 September 2025",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
      contactName: "Michael Chang",
      contactRole: "Chief Investment Officer",
      messageCount: "10",
    },
    {
      id: 3,
      status: "Meeting Scheduled",
      statusColor: "#1e3a8a",
      company: "Pantheon Ventures",
      contact: "David Park • Pantheon Ventures",
      description: "$20M Fund of Funds",
      date: "05 September 2025",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      contactName: "David Park",
      contactRole: "Managing Director",
      messageCount: "10",
    },
  ];

  const dataroomGrantedCards = [
    {
      id: 1,
      status: "Dataroom Granted",
      statusColor: "#5b21b6",
      company: "Mastercard Ventures",
      contact: "Ryan Mitchell • Mastercard Ventures",
      description: "$9M Strategic Partner",
      date: "12 August 2025",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      contactName: "Ryan Mitchell",
      contactRole: "Senior Principal",
      messageCount: "10",
    },
    {
      id: 2,
      status: "Dataroom Granted",
      statusColor: "#5b21b6",
      company: "Swiss Re Investment Management",
      contact: "Klaus Weber • Swiss Re Investment Management",
      description: "$7M Insurance Investment",
      date: "07 September 2025",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      contactName: "Klaus Weber",
      contactRole: "Portfolio Manager",
      messageCount: "10",
    },
    {
      id: 3,
      status: "Dataroom Granted",
      statusColor: "#5b21b6",
      company: "Walton Family Office",
      contact: "Jennifer Walsh • Walton Family Office",
      description: "$4M Family Office",
      date: "30 August 2025",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
      contactName: "Jennifer Walsh",
      contactRole: "Investment Principal",
      messageCount: "10",
    },
  ];

  const termSheetCards = [
    {
      id: 1,
      status: "Term Sheet",
      statusColor: "#fb923c",
      company: "Goldman Sachs Private Wealth",
      contact: "Diana Lopez • Goldman Sachs Private Wealth",
      description: "$8M Private Wealth",
      date: "02 August 2025",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      contactName: "Diana Lopez",
      contactRole: "Executive Director",
      messageCount: "10",
    },
  ];

  // Initialize kanban data in state
  const [kanbanColumns, setKanbanColumns] = useState([
    {
      title: "Prospect",
      count: 3,
      color: "#17a34a",
      cards: prospectCards,
    },
    {
      title: "No Show",
      count: 5,
      color: "#db5050",
      cards: noShowCards,
    },
    {
      title: "Meeting Scheduled",
      count: 3,
      color: "#1e3a8a",
      cards: meetingScheduledCards,
    },
    {
      title: "Dataroom Granted",
      count: 3,
      color: "#5b21b6",
      cards: dataroomGrantedCards,
    },
    {
      title: "Second Meeting",
      count: 0,
      color: "#f59e0b",
      cards: [],
    },
    {
      title: "Term Sheet",
      count: 1,
      color: "#fb923c",
      cards: termSheetCards,
    },
    {
      title: "Won",
      count: 0,
      color: "#10b981",
      cards: [],
    },
  ]);

  // Interactive functions
  const handleDragStart = (e: React.DragEvent, card: any) => {
    setDraggedCard(card);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, targetColumnIndex: number) => {
    e.preventDefault();
    if (!draggedCard) return;

    // Find source column
    const sourceColumnIndex = kanbanColumns.findIndex(col => 
      col.cards.some(card => card.id === draggedCard.id)
    );

    if (sourceColumnIndex === -1 || sourceColumnIndex === targetColumnIndex) {
      setDraggedCard(null);
      return;
    }

    // Update card status based on target column
    const targetColumn = kanbanColumns[targetColumnIndex];
    const updatedCard = {
      ...draggedCard,
      status: targetColumn.title,
      statusColor: targetColumn.color,
    };

    // Remove from source column and add to target column
    const updatedColumns = kanbanColumns.map((column, index) => {
      if (index === sourceColumnIndex) {
        return {
          ...column,
          cards: column.cards.filter(card => card.id !== draggedCard.id),
          count: column.count - 1,
        };
      }
      if (index === targetColumnIndex) {
        return {
          ...column,
          cards: [...column.cards, updatedCard],
          count: column.count + 1,
        };
      }
      return column;
    });

    // Update the state
    setKanbanColumns(updatedColumns);
    setDraggedCard(null);
  };

  const handleEditCard = (card: any) => {
    setCardToEdit(card);
    setShowEditModal(true);
    setShowContextMenu(null);
  };

  const handleDeleteCard = (card: any) => {
    setCardToDelete(card);
    setShowDeleteModal(true);
    setShowContextMenu(null);
  };

  const handleDuplicateCard = (card: any) => {
    const duplicatedCard = {
      ...card,
      id: Date.now(), // Generate new ID
      company: `${card.company} (Copy)`,
    };
    
    // Find the column and add the duplicated card
    const updatedColumns = kanbanColumns.map(column => {
      if (column.cards.some(c => c.id === card.id)) {
        return {
          ...column,
          cards: [...column.cards, duplicatedCard],
          count: column.count + 1,
        };
      }
      return column;
    });
    
    // Update the state
    setKanbanColumns(updatedColumns);
    setShowContextMenu(null);
  };

  const handleContextMenu = (e: React.MouseEvent, card: any) => {
    e.preventDefault();
    setShowContextMenu({
      card,
      x: e.clientX,
      y: e.clientY,
    });
  };

  const closeContextMenu = () => {
    setShowContextMenu(null);
  };

  const handleAddProspect = () => {
    setShowAddProspectModal(true);
  };

  const handleCloseModal = (newCard?: any) => {
    if (newCard) {
      // Add the new card to the first column (Prospect)
      const updatedColumns = kanbanColumns.map((column, index) => {
        if (index === 0) { // First column is Prospect
          return {
            ...column,
            cards: [...column.cards, newCard],
            count: column.count + 1,
          };
        }
        return column;
      });
      setKanbanColumns(updatedColumns);
    }
    setShowAddProspectModal(false);
  };

  const handleCloseEditModal = (updatedCard?: any) => {
    if (updatedCard && cardToEdit) {
      // Update the card in the kanban columns
      const updatedColumns = kanbanColumns.map(column => ({
        ...column,
        cards: column.cards.map(c => 
          c.id === cardToEdit.id ? { ...c, ...updatedCard } : c
        )
      }));
      setKanbanColumns(updatedColumns);
    }
    setShowEditModal(false);
    setCardToEdit(null);
  };

  const handleConfirmDelete = () => {
    if (cardToDelete) {
      // Find and remove the card
      const updatedColumns = kanbanColumns.map(column => {
        if (column.cards.some(c => c.id === cardToDelete.id)) {
          return {
            ...column,
            cards: column.cards.filter(c => c.id !== cardToDelete.id),
            count: column.count - 1,
          };
        }
        return column;
      });
      
      // Update the state
      setKanbanColumns(updatedColumns);
    }
    setShowDeleteModal(false);
    setCardToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setCardToDelete(null);
  };

  // Notes data
  const notesData = [
    {
      id: 1,
      status: "Prospect",
      statusColor: "#17a34a",
      statusBg: "#17a34a29",
      title: "European Growth Fund",
      description: "European Growth Fund targeting shows strong interest. Schedule follow-up calls with top 5 prospects this week.",
      author: "John Alessandro",
      date: "Sep 14, 2025 at 4:43 PM",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      comments: "10",
    },
    {
      id: 2,
      status: "Meeting Scheduled",
      statusColor: "#1e3a8a",
      statusBg: "#1e3a8a29",
      title: "Follow Up With Major Donors",
      description: "Draft personalized thank you emails for everyone who donated over $1,000 in the last quarter. Mention the spe..",
      author: "John Alessandro",
      date: "Sep 15, 2025, 9:00 AM",
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
      comments: "10",
    },
    {
      id: 3,
      status: "Second Meeting",
      statusColor: "#f59e0b",
      statusBg: "#f59e0b29",
      title: "Update Donor Database",
      description: "Import the list of attendees from the charity walk and update their contact information and donation history.",
      author: "John Alessandro",
      date: "Sept 17, 2025, 3:30 PM",
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      comments: "10",
    },
    {
      id: 4,
      status: "No Show",
      statusColor: "#db5050",
      statusBg: "#db515129",
      title: "New Intern Onboarding",
      description: "Prepare an onboarding plan for our new fundraising intern, starting next Monday. Include an overview of our CRM..",
      author: "John Alessandro",
      date: "Sept 18, 2025, 9:00 AM",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      comments: "10",
    },
    {
      id: 5,
      status: "Term Sheet",
      statusColor: "#fb923c",
      statusBg: "#fb923c29",
      title: "Board Meeting Prep",
      description: "Prepare the Q3 fundraising report and the presentation slides for the upcoming board meeting.",
      author: "John Alessandro",
      date: "Sep 19, 2025, 1:00 PM",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      comments: "10",
    },
    {
      id: 6,
      status: "Won",
      statusColor: "#10b981",
      statusBg: "#10b98129",
      title: "Campaign Performance Analysis",
      description: 'Analyze the performance of the "Summer Giving" campaign. Let\'s identify what worked well and what we can impro..',
      author: "John Alessandro",
      date: "Sep 20, 2025, 2:00 PM",
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
      comments: "10",
    },
    {
      id: 7,
      status: "Dataroom Granted",
      statusColor: "#5b21b6",
      statusBg: "#5b21b629",
      title: "Follow-up On John Smith's Inquiry",
      description: 'John Smith emailed asking for more details about our "Clean Water Initiative." Send him the project report and a lin..',
      author: "John Alessandro",
      date: "Sept 21, 2025, 2:00 PM",
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      comments: "10",
    },
  ];

  // Original calendar data with events
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const calendarWeeks = [
    [
      { day: "31", isOtherMonth: true, isToday: false },
      {
        day: "1",
        isOtherMonth: false,
        isToday: false,
        events: [
          {
            name: "Chantal Thibault",
            status: "Do Not Contact",
            color: "#f00000",
          },
          {
            name: "Chantal Thibault",
            status: "Do Not Contact",
            color: "#0078f0",
          },
        ],
      },
      { day: "2", isOtherMonth: false, isToday: false },
      { day: "3", isOtherMonth: false, isToday: false },
      { day: "4", isOtherMonth: false, isToday: false },
      { day: "5", isOtherMonth: false, isToday: false },
      { day: "6", isOtherMonth: false, isToday: false },
    ],
    [
      { day: "7", isOtherMonth: false, isToday: false },
      { day: "8", isOtherMonth: false, isToday: false },
      {
        day: "9",
        isOtherMonth: false,
        isToday: false,
        events: [
          {
            name: "Chantal Thibault",
            status: "Do Not Contact",
            color: "#f00000",
          },
          {
            name: "Chantal Thibault",
            status: "Do Not Contact",
            color: "#0078f0",
          },
        ],
      },
      { day: "10", isOtherMonth: false, isToday: false },
      { day: "11", isOtherMonth: false, isToday: false },
      { day: "12", isOtherMonth: false, isToday: true },
      { day: "13", isOtherMonth: false, isToday: false },
    ],
    [
      { day: "14", isOtherMonth: false, isToday: false },
      { day: "15", isOtherMonth: false, isToday: false },
      { day: "16", isOtherMonth: false, isToday: false },
      { day: "17", isOtherMonth: false, isToday: false },
      { day: "18", isOtherMonth: false, isToday: false },
      { day: "19", isOtherMonth: false, isToday: false },
      { day: "20", isOtherMonth: false, isToday: false },
    ],
    [
      { day: "21", isOtherMonth: false, isToday: false },
      { day: "22", isOtherMonth: false, isToday: false },
      { day: "23", isOtherMonth: false, isToday: false },
      { day: "24", isOtherMonth: false, isToday: false },
      { day: "25", isOtherMonth: false, isToday: false },
      { day: "26", isOtherMonth: false, isToday: false },
      { day: "27", isOtherMonth: false, isToday: false },
    ],
    [
      { day: "28", isOtherMonth: false, isToday: false },
      { day: "29", isOtherMonth: false, isToday: false },
      { day: "30", isOtherMonth: false, isToday: false },
      { day: "1", isOtherMonth: true, isToday: false },
      { day: "2", isOtherMonth: true, isToday: false },
      { day: "3", isOtherMonth: true, isToday: false },
      { day: "4", isOtherMonth: true, isToday: false },
    ],
  ];

  return (
    <section className="w-full h-full content-section flex flex-col overflow-hidden">
      <header className="flex mx-6 h-[60px] relative mt-6 items-center justify-between">
        <div className="flex flex-col items-start gap-1 relative">
          <h1 className="font-bold text-foreground text-2xl leading-tight tracking-tight">
            Deal Pipeline
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Track And Manage Your Fundraising Opportunities
          </p>
        </div>

        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4f5059]" />
            <Input
              placeholder="Search transactions, campaigns..."
              className="w-[332px] h-[37px] pl-10 [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-sm tracking-[-0.31px]"
            />
          </div>
          <Button className="btn-primary gap-2 px-4 py-2" onClick={handleAddProspect}>
            Add Prospect
          </Button>
        </div>
      </header>

      {/* Stats Section */}
      <section className="flex mx-5 gap-5 mt-6">
        {statsData.map((stat, index) => (
          <Card key={index} className="flex-1 card-elevated">
            <CardContent className="flex flex-col h-[162px] justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <div className="font-bold text-[#111111] text-[32px] tracking-[-0.64px] leading-[35.2px]">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-[#4f5059] text-xs leading-[16.8px]">
                    {stat.label}
                  </div>
                </div>

                <div
                  className={`inline-flex items-center gap-1 px-1.5 py-1 rounded-full ${
                    stat.isPositive ? "bg-green-50" : "bg-red-50"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-3.5 h-3.5 rounded-full ${
                      stat.isPositive ? "bg-green-500" : "bg-red-500"
                    }`}
                >
                  {stat.isPositive ? (
                      <TrendingUpIcon className="w-2 h-2 text-white" />
                  ) : (
                      <TrendingDownIcon className="w-2 h-2 text-white" />
                  )}
                  </div>
                  <span
                    className={`text-xs font-semibold ${
                      stat.isPositive ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div className="flex items-center gap-0.5">
                  <span className="font-semibold text-[#111111] text-xs">
                    {stat.lastPeriod}
                  </span>
                  <span className="text-[#8d8e93] text-xs">
                    {stat.lastPeriodLabel}
                  </span>
                  </div>
                <div className="w-[111px] h-[49px]">
                <img
                    className="w-full h-full object-cover"
                  alt="Chart"
                  src={stat.chartSrc}
                />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Main Content Card */}
      <Card className="mx-[19px] mt-[23px] flex-1 card-elevated">
        <CardContent className="flex flex-col gap-5 p-5 h-full">
          <div className="flex items-center justify-between">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[484px]">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="kanban">Kanban</TabsTrigger>
                <TabsTrigger value="calendar">Calendar</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="inline-flex gap-3 items-center">
              <Button variant="outline" className="gap-2 px-3 py-2">
                <ArrowUpDownIcon className="w-4 h-4 text-muted-foreground" />
                Sort
                <ChevronDownIcon className="w-3 h-3 text-muted-foreground" />
              </Button>
              <Button variant="outline" className="gap-2 px-3 py-2">
                <FilterIcon className="w-4 h-4 text-muted-foreground" />
                Filter
                <ChevronDownIcon className="w-3 h-3 text-muted-foreground" />
              </Button>
            </div>
      </div>

          <div className="flex-1 min-h-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
              <TabsContent value="kanban" className="mt-0 h-full">
                <div className="flex gap-2 h-full overflow-x-auto pb-4 pr-4">
                  {kanbanColumns.map((column, columnIndex) => (
                    <div
                      key={columnIndex}
                      className="flex flex-col flex-1 min-w-[200px] max-w-[280px] h-full bg-muted/30 rounded-2xl border border-border p-3"
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, columnIndex)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: column.color }}
                            />
                            <h3 className="font-semibold text-foreground text-sm">
                              {column.title}
                            </h3>
                          </div>
                          <Badge
                            className="px-2 py-1 text-xs font-semibold rounded-full"
                            style={{
                              backgroundColor: `${column.color}29`,
                              color: column.color,
                            }}
                          >
                            {column.count}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <MoreHorizontalIcon className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 overflow-y-auto flex-1 min-h-0">
                        {column.cards.map((card) => (
                          <Card 
                            key={card.id} 
                            className="p-4 flex-shrink-0 cursor-move hover:shadow-md transition-shadow"
                            draggable
                            onDragStart={(e) => handleDragStart(e, card)}
                            onContextMenu={(e) => handleContextMenu(e, card)}
                          >
                            <CardContent className="p-0">
                              <div className="flex items-center justify-between mb-3">
                                <Badge
                                  className="px-3 py-1 text-xs font-medium rounded-full"
                                  style={{
                                    backgroundColor: `${card.statusColor}29`,
                                    color: card.statusColor,
                                  }}
                                >
                                  {card.status}
                                </Badge>
                                <div className="flex items-center gap-1">
            <Button
                                    variant="ghost" 
                                    size="icon" 
                                    className="h-6 w-6"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleContextMenu(e, card);
                                    }}
                                  >
                                    <MoreHorizontalIcon className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>

                              <div className="mb-3">
                                <h4 className="font-semibold text-foreground text-sm mb-1">
                                  {card.company}
                                </h4>
                                <p className="text-muted-foreground text-xs">
                                  {card.contact}
                                </p>
                              </div>

                              {card.description && (
                                <div className="mb-2">
                                  <p className="text-muted-foreground text-xs">
                                    {card.description}
                                  </p>
                                </div>
                              )}

                              {card.date && (
                                <div className="flex items-center gap-1 mb-3">
                                  <CalendarIcon className="w-3 h-3 text-muted-foreground" />
                                  <span className="text-muted-foreground text-xs">
                                    {card.date}
                </span>
              </div>
                              )}

                              <div className="flex items-center justify-between pt-2 border-t border-border">
                                <div className="flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full overflow-hidden">
                                    <img
                                      src={card.avatar}
                                      alt={card.contactName}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div>
                                    <div className="font-semibold text-foreground text-xs">
                                      {card.contactName}
                                    </div>
                                    <div className="text-muted-foreground text-xs">
                                      {card.contactRole}
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1">
                                  <div className="w-3 h-3">
                                    <svg
                                      className="w-full h-full text-muted-foreground"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                  </div>
                                  <span className="text-muted-foreground text-xs">
                                    {card.messageCount}
                </span>
              </div>
          </div>
                            </CardContent>
                          </Card>
                        ))}
        </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="calendar" className="mt-0 h-full">
                <div className="flex flex-col items-start gap-4 pt-4 pb-0 px-0 h-full border border-solid border-[#eaeaea] rounded-[14px] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-0 relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 pl-1 pr-0 py-0 relative flex-[0_0_auto] rounded-[100px]">
                    <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-2xl tracking-[-0.48px] leading-9 whitespace-nowrap">
                      September 2025
                    </h2>
                  </div>
                </div>

                <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <Button
                      variant="outline"
                          className="inline-flex h-10 items-center gap-2 pl-3 pr-2 py-2 relative flex-[0_0_auto] rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
                    >
                      <span className="text-[#4f5059] relative w-fit [font-family:'Manrope',Helvetica] font-medium text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                        Month View
                      </span>
                      <div className="relative w-4 h-4">
                        <img
                          className="absolute top-px left-0.5 w-3 h-[13px]"
                          alt="Calendar"
                          src="https://c.animaapp.com/mfr8j7rbwvSuXy/img/calendar.png"
                        />
                      </div>
                    </Button>

                    <Button
                      variant="outline"
                          className="inline-flex h-10 items-center gap-3 px-3 py-2 relative flex-[0_0_auto] rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
                    >
                      <span className="text-[#4f5059] relative w-fit [font-family:'Manrope',Helvetica] font-medium text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                        Today
                      </span>
                    </Button>
                  </div>

                  <img
                    className="relative w-px h-6 object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/mfr8j7rbwvSuXy/img/line-2342.svg"
                  />

                  <img
                    className="relative flex-[0_0_auto]"
                    alt="Frame"
                    src="https://c.animaapp.com/mfr8j7rbwvSuXy/img/frame-2147218141.svg"
                  />
                </div>
              </div>

                  <div className="flex flex-col items-start relative self-stretch w-full flex-1 border border-solid border-[#eaeaea]">
                <div className="flex h-12 items-center justify-between relative self-stretch w-full bg-white border-b [border-bottom-style:solid] border-[#eaeaea]">
                  {weekDays.map((day, index) => (
                    <div
                      key={day}
                      className={`flex items-center justify-center gap-2 relative flex-1 self-stretch grow ${index < 6 ? "border-r [border-right-style:solid] border-[#eaeaea]" : ""}`}
                    >
                      <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-sm tracking-[-0.28px] leading-[21px] whitespace-nowrap">
                        {day}
                      </div>
                    </div>
                  ))}
                </div>

                {calendarWeeks.map((week, weekIndex) => (
                  <div
                    key={weekIndex}
                    className="flex h-[154px] items-center justify-between relative self-stretch w-full bg-[#fbfbfb] border-b [border-bottom-style:solid] border-[#eaeaea]"
                  >
                    {week.map((dayData, dayIndex) => (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className={`${dayData.events ? "flex-col items-center pt-3 pb-0 px-3" : "items-start justify-center pt-3 pb-0 px-0"} ${dayIndex < 6 ? "border-r [border-right-style:solid] border-[#eaeaea]" : ""} flex gap-2 relative flex-1 self-stretch grow`}
                      >
                        <div
                          className={`flex w-[26px] h-[26px] items-center justify-center gap-2.5 relative rounded-[100px] ${dayData.isToday ? "bg-[#587cd7]" : ""}`}
                        >
                          <div
                            className={`relative w-8 ml-[-3.00px] mr-[-3.00px] [font-family:'Manrope',Helvetica] font-semibold ${dayData.isOtherMonth ? "text-[#bcbdc2]" : dayData.isToday ? "text-[#fbfbfb]" : "text-[#111111]"} text-sm text-center tracking-[-0.28px] leading-[21px]`}
                          >
                            {dayData.day}
                          </div>
                        </div>

                        {dayData.events &&
                          dayData.events.map((event, eventIndex) => (
                            <div
                              key={eventIndex}
                                  className="flex items-center gap-2 px-2 py-2 relative self-stretch w-full bg-white rounded-md overflow-hidden shadow-[0px_1px_2px_#00000014] mb-1.5"
                            >
                              <div
                                    className="w-1 h-7 rounded-full flex-shrink-0"
                                style={{ backgroundColor: event.color }}
                              />
                                  <div className="flex items-start gap-1 flex-1 min-w-0">
                                <img
                                      className="w-3 h-3 flex-shrink-0 mt-0.5"
                                  alt="Envelope open"
                                  src="https://c.animaapp.com/mfr8j7rbwvSuXy/img/envelopeopen.svg"
                                />
                                    <div className="flex flex-col min-w-0 flex-1">
                                      <div className="[font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-xs tracking-[-0.24px] leading-[16px] truncate">
                                        {event.name}
                                      </div>
                                      <div className="[font-family:'Manrope',Helvetica] font-normal text-[#4f5059] text-[10px] tracking-[0] leading-[14px] truncate">
                                  {event.status}
                                      </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    ))}
                  </div>
                ))}
                  </div>
                </div>
              </TabsContent>

            <TabsContent value="notes" className="mt-0 h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex flex-col gap-1">
                    <h2 className="font-bold text-foreground text-lg leading-6 tracking-[-0.32px]">
                      Pipeline Notes
                    </h2>
                    <p className="text-muted-foreground text-xs leading-[16.8px]">
                      Real-time Market Analysis And Trends
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="relative flex items-center gap-3 px-4 py-2.5 bg-background rounded-lg border border-input input-enhanced max-w-sm">
                      <SearchIcon className="w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search notes, campaigns..."
                        className="border-0 bg-transparent p-0 placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                    <Button className="btn-primary gap-2 px-4 py-2">
                      <PlusIcon className="w-4 h-4" />
                      Add Note
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center p-0.5 bg-[#fbfbfb] rounded-lg border border-solid border-[#eaeaea]">
                    <Button variant="ghost" className="px-4 py-1.5 text-sm font-medium text-[#7b7f93]">
                      Kanban
                    </Button>
                    <Button variant="ghost" className="px-4 py-1.5 text-sm font-medium text-[#7b7f93]">
                      Calendar
                    </Button>
                    <Button variant="secondary" className="px-4 py-2 text-sm font-semibold bg-white rounded-md border border-solid border-[#eaeaea]">
                      Notes
                    </Button>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button variant="outline" className="gap-2 px-3 py-2">
                      <ArrowUpDownIcon className="w-4 h-4 text-muted-foreground" />
                      Sort
                      <ChevronDownIcon className="w-3 h-3 text-muted-foreground" />
                    </Button>
                    <Button variant="outline" className="gap-2 px-3 py-2">
                      <FilterIcon className="w-4 h-4 text-muted-foreground" />
                      Filter
                      <ChevronDownIcon className="w-3 h-3 text-muted-foreground" />
                    </Button>
                    <Button variant="outline" className="gap-2 px-3 py-2">
                      <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                      This Week
                      <ChevronDownIcon className="w-3 h-3 text-muted-foreground" />
                    </Button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
                    {notesData.map((note) => (
                      <Card key={note.id} className="p-4 card-elevated">
                        <CardContent className="p-0">
                          <div className="flex items-center justify-between mb-3">
                            <Badge
                              className="px-3 py-1 text-xs font-medium rounded-full"
                              style={{
                                backgroundColor: note.statusBg,
                                color: note.statusColor,
                              }}
                            >
                              {note.status}
                            </Badge>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <MoreHorizontalIcon className="w-4 h-4" />
                            </Button>
                          </div>

                          <div className="mb-3">
                            <h3 className="font-semibold text-foreground text-sm leading-[16.8px] tracking-[-0.28px] mb-2">
                              {note.title}
                            </h3>
                            <p className="text-muted-foreground text-xs leading-[18px] tracking-[-0.24px]">
                              {note.description}
                            </p>
                          </div>

                          <div className="border-t border-border pt-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full overflow-hidden">
                                  <img
                                    src={note.profileImage}
                                    alt={note.author}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <div className="font-semibold text-foreground text-xs leading-[10px] tracking-[-0.20px]">
                                    {note.author}
                                  </div>
                                  <div className="text-muted-foreground text-xs leading-[8px] tracking-[-0.16px] mt-1">
                                    {note.date}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageSquareIcon className="w-3 h-3 text-muted-foreground" />
                                <span className="text-muted-foreground text-xs font-medium">
                                  {note.comments}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                    <Card className="p-4 border-dashed border-2 border-muted-foreground/20 hover:border-muted-foreground/40 transition-colors cursor-pointer">
                      <CardContent className="p-0 flex flex-col items-center justify-center h-44 text-center">
                        <PlusIcon className="w-6 h-6 text-muted-foreground mb-3" />
                        <span className="font-medium text-muted-foreground">
                          Add Notes
                        </span>
                      </CardContent>
                    </Card>
                  </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
          </div>
        </CardContent>
      </Card>

      {/* Context Menu */}
      {showContextMenu && (
        <div
          className="fixed z-50 bg-white border border-border rounded-lg shadow-lg py-1 min-w-[160px]"
          style={{
            left: showContextMenu.x,
            top: showContextMenu.y,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2"
            onClick={() => handleEditCard(showContextMenu.card)}
          >
            <EditIcon className="w-4 h-4" />
            Edit
          </button>
          <button
            className="w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2"
            onClick={() => handleDuplicateCard(showContextMenu.card)}
          >
            <CopyIcon className="w-4 h-4" />
            Duplicate
          </button>
          <button
            className="w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 text-red-600"
            onClick={() => handleDeleteCard(showContextMenu.card)}
          >
            <TrashIcon className="w-4 h-4" />
            Delete
          </button>
        </div>
      )}

      {/* Click outside to close context menu */}
      {showContextMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeContextMenu}
        />
      )}

      {/* Add Prospect Modal */}
      {showAddProspectModal && (
        <div className="fixed inset-0 z-50">
          {/* Transparent backdrop that shows whatever is behind */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"
            onClick={() => handleCloseModal()}
          />
          
          {/* Modal content */}
          <div 
            className="absolute top-0 right-0 w-[800px] h-full bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <AddProspectForm onClose={handleCloseModal} />
          </div>
        </div>
      )}

      {/* Edit Card Modal */}
      {showEditModal && cardToEdit && (
        <div className="fixed inset-0 z-50">
          {/* Transparent backdrop that shows whatever is behind */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"
            onClick={() => handleCloseEditModal()}
          />
          
          {/* Modal content */}
          <div 
            className="absolute top-0 right-0 w-[800px] h-full bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <EditCardForm card={cardToEdit} onClose={handleCloseEditModal} />
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && cardToDelete && (
        <div className="fixed inset-0 z-50">
          {/* Transparent backdrop that shows whatever is behind */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"
            onClick={handleCancelDelete}
          />
          
          {/* Modal content */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white rounded-lg shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <TrashIcon className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#111111] text-lg">Delete Card</h3>
                <p className="text-[#4f5059] text-sm">This action cannot be undone.</p>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-[#111111] text-sm">
                Are you sure you want to delete <strong>{cardToDelete.company}</strong>?
              </p>
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 text-sm font-medium text-[#4f5059] bg-white border border-[#eaeaea] rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};