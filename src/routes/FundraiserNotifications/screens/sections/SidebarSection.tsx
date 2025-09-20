import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import {
  HomeIcon,
  UsersIcon,
  BarChart3Icon,
  ShieldIcon,
  CalendarIcon,
  UserSquareIcon,
  BellIcon,
  HelpCircleIcon,
  SettingsIcon,
  LayoutIcon,
  ChevronUpIcon,
} from "lucide-react";

export const SidebarSection = (): JSX.Element => {
  const navigate = useNavigate();

  const mainMenuItems = [
    {
      label: "Home",
      icon: HomeIcon,
      isActive: false,
      onClick: () => navigate("/"),
    },
    {
      label: "Outreach",
      icon: UsersIcon,
      isActive: false,
      onClick: () => navigate("/outreach"),
    },
    {
      label: "Pipeline",
      icon: BarChart3Icon,
      isActive: false,
      onClick: () => navigate("/pipeline"),
      badge: "+3",
    },
    {
      label: "Fundraising Agent",
      icon: ShieldIcon,
      isActive: false,
      onClick: () => navigate("/fundraising-agent"),
      badge: "+7",
    },
  ];

  const toolsMenuItems = [
    {
      label: "Calendar",
      icon: CalendarIcon,
      isActive: false,
      onClick: () => navigate("/calendar"),
    },
    {
      label: "Due Diligence",
      icon: UserSquareIcon,
      isActive: false,
      onClick: () => navigate("/due-diligence"),
    },
    {
      label: "Deal Room",
      icon: LayoutIcon,
      isActive: false,
      onClick: () => navigate("/deal-room"),
    },
  ];

  const accountMenuItems = [
    {
      label: "Notifications",
      icon: BellIcon,
      isActive: true,
      onClick: () => navigate("/notifications"),
      hasNotification: true,
    },
    {
      label: "Support",
      icon: HelpCircleIcon,
      isActive: false,
      onClick: () => navigate("/support"),
    },
    {
      label: "Settings",
      icon: SettingsIcon,
      isActive: false,
      onClick: () => navigate("/settings"),
    },
  ];

  const adminMenuItems = [
    {
      label: "Admin View",
      icon: LayoutIcon,
      isActive: false,
      onClick: () => {},
    },
    {
      label: "Project Management",
      icon: LayoutIcon,
      isActive: false,
      onClick: () => {},
    },
  ];

  const renderMenuItem = (item: any) => {
    const IconComponent = item.icon;
    return (
      <Button
        key={item.label}
        variant={item.isActive ? "secondary" : "ghost"}
        onClick={item.onClick}
        className={`flex h-[46px] items-center justify-start px-4 py-3 relative self-stretch w-full ${
          item.isActive
            ? "ml-[-1.00px] mr-[-1.00px] bg-white rounded-xl border border-solid border-[#eaeaea]"
            : "h-11"
        } transition-colors`}
      >
        <div className="flex items-center gap-2 relative flex-1 grow">
          <IconComponent className="relative w-5 h-5" />
          <div className={`flex-1 text-left relative ${
            item.isActive ? "font-semibold" : "font-medium"
          } [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px]`}>
            {item.label}
          </div>
        </div>
        {item.badge && (
          <Badge className="bg-[#17a34a29] text-[#17a34a] hover:bg-[#17a34a29] rounded px-2 py-1 text-xs font-medium [font-family:'Inter',Helvetica]">
            {item.badge.count}
          </Badge>
        )}
        {item.hasNotification && (
          <div className="relative w-2 h-2 bg-[#e94235] rounded-[1000px]" />
        )}
      </Button>
    );
  };

  return (
    <nav className="flex flex-col w-[260px] h-full items-start justify-between p-6 relative bg-white border-r border-border">
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <header className="w-full">
          <img
            className="w-full h-auto"
            alt="Fundraisr Logo"
            src="https://c.animaapp.com/mfr8j7rbwvSuXy/img/header-container.svg"
          />
        </header>

        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          {/* MAIN Section */}
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center pl-2 pr-4 pt-1 pb-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                MAIN
              </div>
            </div>
            {mainMenuItems.map(renderMenuItem)}
            
            <img
              className="w-full h-8"
              alt="Menu separator"
              src="https://c.animaapp.com/mfr8j7rbwvSuXy/img/menu-item-main-menu.svg"
            />
          </div>

          {/* TOOLS Section */}
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center pl-2 pr-4 pt-1 pb-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                TOOLS
              </div>
            </div>
            {toolsMenuItems.map(renderMenuItem)}
            
            <img
              className="w-full h-8"
              alt="Menu separator"
              src="https://c.animaapp.com/mfr8j7rbwvSuXy/img/menu-item-main-menu.svg"
            />
          </div>

          {/* ACCOUNT Section */}
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center pl-2 pr-4 pt-1 pb-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                ACCOUNT
              </div>
            </div>
            {accountMenuItems.map(renderMenuItem)}
            
            <img
              className="w-full h-8"
              alt="Menu separator"
              src="https://c.animaapp.com/mfr8j7rbwvSuXy/img/menu-item-main-menu.svg"
            />
          </div>

          {/* ADMIN Section */}
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center pl-2 pr-4 pt-1 pb-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                ADMIN
              </div>
            </div>
            {adminMenuItems.map(renderMenuItem)}
          </div>
        </div>
      </div>

      {/* User Profile Section */}
      <div className="flex items-center px-2 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-xl border border-solid border-[#eaeaea]">
        <div className="flex items-center justify-between relative flex-1 grow">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <Avatar className="h-11 w-11 border">
              <AvatarFallback>JA</AvatarFallback>
            </Avatar>
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="relative [font-family:'Manrope',Helvetica] font-medium text-[#111111] text-sm tracking-[0] leading-[21px]">
                John Alessandro
              </div>
              <div className="relative [font-family:'Manrope',Helvetica] font-medium text-[#777777] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                john@fundraiser.com
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="w-4 h-4">
            <ChevronUpIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
