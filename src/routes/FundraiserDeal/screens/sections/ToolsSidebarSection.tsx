import {
  BellIcon,
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
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const ToolsSidebarSection = (): JSX.Element => {
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
      onClick: () => {},
    },
  ];

  const toolsMenuItems = [
    {
      icon: LayoutIcon,
      label: "Calendar",
      isActive: false,
      badge: null,
      onClick: () => {},
    },
    {
      icon: ShieldIcon,
      label: "Due Diligence",
      isActive: false,
      badge: null,
      onClick: () => {},
    },
    {
      icon: UserSquareIcon,
      label: "Deal Room",
      isActive: false,
      badge: null,
      onClick: () => {},
    },
  ];

  const accountMenuItems = [
    {
      icon: BellIcon,
      label: "Notifications",
      isActive: false,
      badge: null,
      hasNotification: true,
      onClick: () => {},
    },
    {
      icon: HelpCircleIcon,
      label: "Support",
      isActive: false,
      badge: null,
      onClick: () => {},
    },
    {
      icon: SettingsIcon,
      label: "Settings",
      isActive: false,
      badge: null,
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
      icon: null,
      label: "Project Management",
      isActive: false,
      badge: null,
      customIcon: true,
      onClick: () => {},
    },
  ];

  return (
    <nav className="flex flex-col w-[260px] h-full items-start justify-between p-6 relative">
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="relative self-stretch w-full flex-[0_0_auto]"
          alt="Header container"
          src="https://c.animaapp.com/mfqq16bpFQlNkn/img/header-container.svg"
        />

        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <section className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <header className="flex items-center pl-2 pr-4 pt-1 pb-2 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  MAIN
                </h2>
              </header>

              {mainMenuItems.map((item, index) => (
                <Button
                  key={`main-${index}`}
                  variant="ghost"
                  onClick={item.onClick}
                  className={`flex h-11 px-4 py-3 self-stretch w-full items-center relative justify-start h-auto ${
                    item.isActive
                      ? "ml-[-1.00px] mr-[-1.00px] bg-white rounded-xl border border-solid border-[#eaeaea]"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-2 relative flex-1 grow mt-[-0.50px] mb-[-0.50px]">
                    <item.icon className="relative w-5 h-5" />
                    <span
                      className={`flex-1 relative mt-[-1.00px] [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px] text-left ${
                        item.isActive ? "font-medium" : "font-medium"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  {item.badge && (
                    <Badge className="flex w-6 h-6 items-center justify-center gap-2.5 p-2.5 relative mt-[-2.00px] bg-[#17a34a29] rounded text-[#17a34a] text-xs font-medium">
                      {item.badge}
                    </Badge>
                  )}
                </Button>
              ))}

              <img
                className="relative self-stretch w-full h-8"
                alt="Menu item main menu"
                src="https://c.animaapp.com/mfqq16bpFQlNkn/img/menu-item-main-menu.svg"
              />
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <header className="flex items-center pl-2 pr-4 pt-1 pb-2 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  TOOLS
                </h2>
              </header>

              {toolsMenuItems.map((item, index) => (
                <Button
                  key={`tools-${index}`}
                  variant="ghost"
                  onClick={item.onClick}
                  className="flex h-11 px-4 py-3 self-stretch w-full items-center relative justify-start h-auto"
                >
                  <div className="flex items-center gap-2 relative flex-1 grow mt-[-0.50px] mb-[-0.50px]">
                    <item.icon className="relative w-5 h-5" />
                    <span className="flex-1 font-medium relative mt-[-1.00px] [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px] text-left">
                      {item.label}
                    </span>
                  </div>
                </Button>
              ))}

              <img
                className="relative self-stretch w-full h-8"
                alt="Menu item main menu"
                src="https://c.animaapp.com/mfqq16bpFQlNkn/img/menu-item-main-menu.svg"
              />
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <header className="flex items-center pl-2 pr-4 pt-1 pb-2 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  ACCOUNT
                </h2>
              </header>

              {accountMenuItems.map((item, index) => (
                <Button
                  key={`account-${index}`}
                  variant="ghost"
                  onClick={item.onClick}
                  className="flex h-11 px-4 py-3 self-stretch w-full items-center relative justify-start h-auto"
                >
                  <div className="flex items-center gap-2 relative flex-1 grow mt-[-0.50px] mb-[-0.50px]">
                    <item.icon className="relative w-5 h-5" />
                    <span className="flex-1 font-medium relative mt-[-1.00px] [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px] text-left">
                      {item.label}
                    </span>
                  </div>
                  {item.hasNotification && (
                    <div className="relative w-2 h-2 bg-[#e94235] rounded-[1000px]" />
                  )}
                </Button>
              ))}

              <img
                className="relative self-stretch w-full h-8"
                alt="Menu item main menu"
                src="https://c.animaapp.com/mfqq16bpFQlNkn/img/menu-item-main-menu.svg"
              />
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <header className="flex items-center pl-2 pr-4 pt-1 pb-2 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  ADMIN
                </h2>
              </header>

              {adminMenuItems.map((item, index) => (
                <Button
                  key={`admin-${index}`}
                  variant="ghost"
                  onClick={item.onClick}
                  className="flex h-11 px-4 py-3 self-stretch w-full items-center relative justify-start h-auto"
                >
                  <div className="flex items-center gap-2 relative flex-1 grow mt-[-0.50px] mb-[-0.50px]">
                    {item.customIcon ? (
                      <div className="relative w-5 h-5">
                        <img
                          className="absolute w-[38.75%] h-[28.33%] top-[33.75%] left-[31.67%]"
                          alt="Union"
                          src="https://c.animaapp.com/mfqq16bpFQlNkn/img/union.svg"
                        />
                        <img
                          className="absolute w-full h-full top-0 left-0"
                          alt="Squircle"
                          src="https://c.animaapp.com/mfqq16bpFQlNkn/img/squircle.svg"
                        />
                      </div>
                    ) : (
                      <item.icon className="relative w-5 h-5" />
                    )}
                    <span
                      className={`font-medium relative mt-[-1.00px] [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px] text-left ${
                        item.customIcon
                          ? "w-fit mr-[-10.00px] whitespace-nowrap"
                          : "flex-1"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                </Button>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Button
        variant="ghost"
        className="flex items-center px-2 py-2.5 relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-white rounded-xl border border-solid border-[#eaeaea] h-auto justify-start"
      >
        <div className="flex items-center justify-between relative flex-1 grow">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <Avatar className="flex flex-col w-[46px] h-[46px] items-center justify-center gap-2.5 relative mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] bg-white rounded-[40px] overflow-hidden border border-solid border-neutral-100">
              <AvatarImage
                className="relative w-11 h-11 object-cover"
                alt="Profile image"
                src="https://c.animaapp.com/mfqq16bpFQlNkn/img/profile-image.png"
              />
              <AvatarFallback>JA</AvatarFallback>
            </Avatar>

            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#111111] text-sm tracking-[0] leading-[21px]">
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
