import {
  BellIcon,
  CalendarIcon,
  ChevronUpIcon,
  HeartIcon,
  HelpCircleIcon,
  HomeIcon,
  LayoutIcon,
  SettingsIcon,
  ShieldIcon,
  UserSquareIcon,
  UsersIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

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
      isActive: true,
      badge: "+3",
      onClick: () => navigate("/pipeline"),
    },
    {
      icon: HeartIcon,
      label: "Fundraising Agent",
      isActive: false,
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
      badge: null,
      hasNotification: true,
      onClick: () => navigate("/notifications"),
    },
    {
      icon: HelpCircleIcon,
      label: "Support",
      isActive: false,
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
      iconSrc: "https://c.animaapp.com/mfr8j7rbwvSuXy/img/squircle.svg",
      unionSrc: "https://c.animaapp.com/mfr8j7rbwvSuXy/img/union.svg",
      label: "Project Management",
      isActive: false,
      badge: null,
      onClick: () => {},
    },
  ];

  return (
    <nav className="flex flex-col w-[260px] h-full items-start justify-between p-6">
      <div className="flex flex-col items-start gap-6 w-full">
        <img
          className="w-full"
          alt="Header container"
          src="https://c.animaapp.com/mfr8j7rbwvSuXy/img/header-container.svg"
        />

        <div className="flex flex-col items-start gap-5 w-full">
          <section className="flex flex-col items-end w-full">
            <div className="flex flex-col items-start w-full">
              <header className="flex items-center pl-2 pr-4 pt-1 pb-2 w-full">
                <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px]">
                  MAIN
                </h2>
              </header>

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
                    } transition-colors`}
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
                      <Badge className="bg-[#17a34a29] text-[#17a34a] hover:bg-[#17a34a29] rounded px-2 py-1 text-xs font-medium [font-family:'Inter',Helvetica]">
                        {item.badge}
                      </Badge>
                    )}
                  </Button>
                );
              })}

              <img
                className="w-full h-8"
                alt="Menu item main menu"
                src="https://c.animaapp.com/mfr8j7rbwvSuXy/img/menu-item-main-menu.svg"
              />
            </div>

            <div className="flex flex-col items-start w-full">
              <header className="flex items-center pl-2 pr-4 pt-1 pb-2 w-full">
                <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px]">
                  TOOLS
                </h2>
              </header>

              {toolsMenuItems.map((item) => {
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
                      <div className="flex-1 text-left relative font-medium [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px]">
                        {item.label}
                      </div>
                    </div>
                  </Button>
                );
              })}

              <img
                className="w-full h-8"
                alt="Menu item main menu"
                src="https://c.animaapp.com/mfr8j7rbwvSuXy/img/menu-item-main-menu.svg"
              />
            </div>

            <div className="flex flex-col items-start w-full">
              <header className="flex items-center pl-2 pr-4 pt-1 pb-2 w-full">
                <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px]">
                  ACCOUNT
                </h2>
              </header>

              {accountMenuItems.map((item) => {
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
                      <div className="flex-1 text-left relative font-medium [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px]">
                        {item.label}
                      </div>
                    </div>
                    {item.hasNotification && (
                      <div className="w-2 h-2 bg-[#e94235] rounded-full" />
                    )}
                  </Button>
                );
              })}

              <img
                className="w-full h-8"
                alt="Menu item main menu"
                src="https://c.animaapp.com/mfr8j7rbwvSuXy/img/menu-item-main-menu.svg"
              />
            </div>

            <div className="flex flex-col items-start w-full">
              <header className="flex items-center pl-2 pr-4 pt-1 pb-2 w-full">
                <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px]">
                  ADMIN
                </h2>
              </header>

              {adminMenuItems.map((item) => {
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
                      {IconComponent ? (
                        <IconComponent className="relative w-5 h-5" />
                      ) : (
                        <div className="relative w-5 h-5">
                          <img
                            className="absolute w-[38.75%] h-[28.33%] top-[33.75%] left-[31.67%]"
                            alt="Union"
                            src="https://c.animaapp.com/mfqpait0Qdrcn2/img/union.svg"
                          />
                          <img
                            className="absolute w-full h-full top-0 left-0"
                            alt="Squircle"
                            src="https://c.animaapp.com/mfqpait0Qdrcn2/img/squircle.svg"
                          />
                        </div>
                      )}
                      <div className="flex-1 text-left relative font-medium [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px]">
                        {item.label}
                      </div>
                    </div>
                  </Button>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      <Button
        variant="outline"
        className="flex items-center px-2 py-2.5 w-full bg-white rounded-xl border border-[#eaeaea] h-auto"
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Avatar className="w-[46px] h-[46px] border border-neutral-100">
              <AvatarFallback>JA</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <div className="[font-family:'Manrope',Helvetica] font-medium text-[#111111] text-sm tracking-[0] leading-[21px]">
                John Alessandro
              </div>
              <div className="[font-family:'Manrope',Helvetica] font-medium text-[#777777] text-xs tracking-[0] leading-[18px]">
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
