import {
  BellIcon,
  CalendarIcon,
  ChevronUpIcon,
  HeartIcon,
  HelpCircleIcon,
  HomeIcon,
  SettingsIcon,
  ShieldIcon,
  StarIcon,
  UserSquareIcon,
  UsersIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const SidebarSection = (): JSX.Element => {
  const navigate = useNavigate();

  // Navigation data structure for better maintainability
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
      badge: "+3",
      onClick: () => navigate("/pipeline"),
    },
    {
      icon: HeartIcon,
      label: "Fundraising Agent",
      isActive: true,
      badge: "+7",
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
      hasNotification: true,
      onClick: () => navigate("/notifications"),
    },
    {
      icon: HelpCircleIcon,
      label: "Support",
      isActive: false,
      hasNotification: false,
      onClick: () => navigate("/support"),
    },
    {
      icon: SettingsIcon,
      label: "Settings",
      isActive: false,
      hasNotification: false,
      onClick: () => {},
    },
  ];

  const adminMenuItems = [
    {
      icon: StarIcon,
      label: "Admin View",
      isActive: false,
      onClick: () => {},
    },
    {
      icon: null,
      label: "Project Management",
      isActive: false,
      customIcon: true,
      onClick: () => {},
    },
  ];

  return (
    <nav className="flex flex-col w-[260px] h-full items-start justify-between p-6 relative">
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        {/* Header Logo */}
        <div>
          <img
            className="relative self-stretch w-full flex-[0_0_auto]"
            alt="Header container"
            src="https://c.animaapp.com/mfqjua33FHoyZF/img/header-container.svg"
          />
        </div>

        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          {/* MAIN Section */}
          <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center pl-2 pr-4 pt-1 pb-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  MAIN
                </div>
              </div>

              {mainMenuItems.map((item) => {
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
                    } !transition-colors`}
                  >
                    <div className="flex items-center gap-2 relative flex-1 grow">
                      <IconComponent className="relative w-5 h-5" />
                      <div
                        className={`flex-1 text-left relative ${
                          item.isActive ? "font-semibold" : "font-medium"
                        } [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px]`}
                      >
                        {item.label}
                      </div>
                    </div>
                    {item.badge && (
                      <div className="flex w-6 h-6 items-center justify-center gap-2.5 p-2.5 relative bg-[#17a34a29] rounded text-[#17a34a] text-xs font-medium hover:bg-[#17a34a29]">
                        {item.badge}
                      </div>
                    )}
                  </Button>
                );
              })}

              <Separator className="relative self-stretch w-full h-8 bg-transparent" />
            </div>

            {/* TOOLS Section */}
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center pl-2 pr-4 pt-1 pb-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  TOOLS
                </div>
              </div>

              {toolsMenuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Button
                    key={item.label}
                    variant="ghost"
                    onClick={item.onClick}
                    className="flex h-11 items-center justify-start px-4 py-3 relative self-stretch w-full transition-colors"
                  >
                    <div className="flex items-center gap-2 relative flex-1 grow">
                      <IconComponent className="relative w-5 h-5" />
                      <div className="flex-1 text-left font-medium relative [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px]">
                        {item.label}
                      </div>
                    </div>
                  </Button>
                );
              })}

              <Separator className="relative self-stretch w-full h-8 bg-transparent" />
            </div>

            {/* ACCOUNT Section */}
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center pl-2 pr-4 pt-1 pb-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  ACCOUNT
                </div>
              </div>

              {accountMenuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Button
                    key={item.label}
                    variant="ghost"
                    onClick={item.onClick}
                    className="flex h-11 items-center justify-start px-4 py-3 relative self-stretch w-full transition-colors"
                  >
                    <div className="flex items-center gap-2 relative flex-1 grow">
                      <IconComponent className="relative w-5 h-5" />
                      <div className="flex-1 text-left font-medium relative [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px]">
                        {item.label}
                      </div>
                    </div>
                    {item.hasNotification && (
                      <div className="relative w-2 h-2 bg-[#e94235] rounded-[1000px]" />
                    )}
                  </Button>
                );
              })}

              <Separator className="relative self-stretch w-full h-8 bg-transparent" />
            </div>

            {/* ADMIN Section */}
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center pl-2 pr-4 pt-1 pb-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  ADMIN
                </div>
              </div>

              {adminMenuItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={item.onClick}
                  className="flex h-11 items-center justify-start px-4 py-3 relative self-stretch w-full transition-colors"
                >
                  <div className="flex items-center gap-2 relative flex-1 grow">
                    {item.customIcon ? (
                      <div className="relative w-5 h-5">
                        <img
                          className="absolute w-[38.75%] h-[28.33%] top-[33.75%] left-[31.67%]"
                          alt="Union"
                          src="https://c.animaapp.com/mfqjua33FHoyZF/img/union.svg"
                        />
                        <img
                          className="absolute w-full h-full top-0 left-0"
                          alt="Squircle"
                          src="https://c.animaapp.com/mfqjua33FHoyZF/img/squircle.svg"
                        />
                      </div>
                    ) : (
                      item.icon && <item.icon className="relative w-5 h-5" />
                    )}
                    <div className="flex-1 text-left font-medium relative [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px]">
                      {item.label}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* User Profile Section */}
      <Button
        variant="outline"
        className="flex items-center px-2 py-2.5 relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-white rounded-xl border border-solid border-[#eaeaea] h-auto transition-colors"
      >
        <div className="flex items-center justify-between relative flex-1 grow">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <Avatar className="w-[46px] h-[46px] relative mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] border border-solid border-neutral-100">
              <AvatarFallback>JA</AvatarFallback>
            </Avatar>

            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="relative self-stretch [font-family:'Manrope',Helvetica] font-medium text-[#111111] text-sm tracking-[0] leading-[21px]">
                John Alessandro
              </div>
              <div className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-[#777777] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                john@fundraiser.com
              </div>
            </div>
          </div>

          <ChevronUpIcon className="relative w-4 h-4" />
        </div>
      </Button>
    </nav>
  );
};
