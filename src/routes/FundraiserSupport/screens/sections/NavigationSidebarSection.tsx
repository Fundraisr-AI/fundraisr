import {
  BellIcon,
  CalendarIcon,
  ChevronUpIcon,
  HeartIcon,
  HelpCircleIcon,
  HomeIcon,
  LayoutIcon,
  MailIcon,
  SettingsIcon,
  ShieldIcon,
  UserSquareIcon,
  UsersIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

export const NavigationSidebarSection = (): JSX.Element => {
  const navigate = useNavigate();

  const mainMenuItems = [
    {
      icon: HomeIcon,
      label: "Home",
      isActive: false,
      badge: null,
      onClick: () => navigate("/"),
    },
    {
      icon: UsersIcon,
      label: "Outreach",
      isActive: false,
      badge: null,
      onClick: () => navigate("/outreach"),
    },
    {
      icon: ShieldIcon,
      label: "Pipeline",
      isActive: false,
      badge: { count: "+3", color: "bg-[#17a34a29] text-[#17a34a]" },
      onClick: () => navigate("/pipeline"),
    },
    {
      icon: HeartIcon,
      label: "Fundraising Agent",
      isActive: false,
      badge: { count: "+7", color: "bg-[#17a34a29] text-[#17a34a]" },
      onClick: () => navigate("/fundraising-agent"),
    },
  ];

  const toolsMenuItems = [
    {
      icon: CalendarIcon,
      label: "Calendar",
      isActive: false,
      badge: null,
      onClick: () => navigate("/calendar"),
    },
    {
      icon: ShieldIcon,
      label: "Due Diligence",
      isActive: false,
      badge: null,
      onClick: () => navigate("/due-diligence"),
    },
    {
      icon: UserSquareIcon,
      label: "Deal Room",
      isActive: false,
      badge: null,
      onClick: () => navigate("/deal-room"),
    },
  ];

  const accountMenuItems = [
    {
      icon: BellIcon,
      label: "Notifications",
      isActive: false,
      badge: null,
      hasNotification: true,
      onClick: () => navigate("/notifications"),
    },
    {
      icon: HelpCircleIcon,
      label: "Support",
      isActive: true,
      badge: null,
      hasNotification: false,
      onClick: () => navigate("/support"),
    },
    {
      icon: SettingsIcon,
      label: "Settings",
      isActive: false,
      badge: null,
      hasNotification: false,
      onClick: () => {},
    },
  ];

  const adminMenuItems = [
    {
      icon: LayoutIcon,
      label: "Admin View",
      isActive: false,
      badge: null,
      onClick: () => {},
    },
    {
      icon: MailIcon,
      label: "Project Management",
      isActive: false,
      badge: null,
      customIcon: true,
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
    <nav className="flex flex-col w-[260px] h-full items-start justify-between p-6 relative">
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="w-full"
          alt="Header container"
          src="https://c.animaapp.com/mfqpait0Qdrcn2/img/header-container.svg"
        />

        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          {/* MAIN Section */}
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="text-muted-foreground text-xs font-semibold uppercase mb-2 px-4">
              MAIN
            </div>
            {mainMenuItems.map(renderMenuItem)}
            <img
              className="relative self-stretch w-full h-8 bg-transparent"
              alt="Menu separator"
              src="https://c.animaapp.com/mfqpait0Qdrcn2/img/menu-item-main-menu.svg"
            />
          </div>

          {/* TOOLS Section */}
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="text-muted-foreground text-xs font-semibold uppercase mb-2 px-4">
              TOOLS
            </div>
            {toolsMenuItems.map(renderMenuItem)}
            <img
              className="relative self-stretch w-full h-8 bg-transparent"
              alt="Menu separator"
              src="https://c.animaapp.com/mfqpait0Qdrcn2/img/menu-item-main-menu.svg"
            />
          </div>

          {/* ACCOUNT Section */}
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="text-muted-foreground text-xs font-semibold uppercase mb-2 px-4">
              ACCOUNT
            </div>
            {accountMenuItems.map(renderMenuItem)}
            <img
              className="relative self-stretch w-full h-8 bg-transparent"
              alt="Menu separator"
              src="https://c.animaapp.com/mfqpait0Qdrcn2/img/menu-item-main-menu.svg"
            />
          </div>

          {/* ADMIN Section */}
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="text-muted-foreground text-xs font-semibold uppercase mb-2 px-4">
              ADMIN
            </div>
            {adminMenuItems.map(renderMenuItem)}
          </div>
        </div>
      </div>

      {/* User Profile Section */}
      <Button
        variant="ghost"
        className="flex items-center px-2 py-2.5 w-full bg-white rounded-xl border border-solid border-[#eaeaea] h-auto"
      >
        <div className="flex items-center justify-between w-full">
          <div className="inline-flex items-center gap-2">
            <Avatar className="w-[46px] h-[46px] border border-solid border-neutral-100">
              <AvatarFallback>JA</AvatarFallback>
            </Avatar>

            <div className="inline-flex flex-col items-start">
              <div className="[font-family:'Manrope',Helvetica] font-medium text-[#111111] text-sm tracking-[0] leading-[21px]">
                John Alessandro
              </div>
              <div className="[font-family:'Manrope',Helvetica] font-medium text-[#777777] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                john@fundraiser.com
              </div>
            </div>
          </div>

          <ChevronUpIcon className="w-4 h-4" />
        </div>
      </Button>
    </nav>
  );
};
