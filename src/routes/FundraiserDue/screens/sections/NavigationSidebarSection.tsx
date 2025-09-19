import {
  BellIcon,
  CalendarIcon,
  FolderOpenIcon,
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
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

const mainMenuItems = [
  {
    icon: HomeIcon,
    label: "Home",
    isActive: false,
    badge: null,
  },
  {
    icon: UsersIcon,
    label: "Outreach",
    isActive: false,
    badge: null,
  },
  {
    icon: ShieldIcon,
    label: "Pipeline",
    isActive: false,
    badge: "+3",
  },
  {
    icon: HeartIcon,
    label: "Fundraising Agent",
    isActive: false,
    badge: "+7",
  },
];

const toolsMenuItems = [
  {
    icon: CalendarIcon,
    label: "Calendar",
    isActive: false,
    badge: null,
  },
  {
    icon: ShieldIcon,
    label: "Due Diligence",
    isActive: true,
    badge: null,
  },
  {
    icon: UserSquareIcon,
    label: "Deal Room",
    isActive: false,
    badge: null,
  },
];

const accountMenuItems = [
  {
    icon: BellIcon,
    label: "Notifications",
    isActive: false,
    badge: null,
    hasNotification: true,
  },
  {
    icon: HelpCircleIcon,
    label: "Support",
    isActive: false,
    badge: null,
  },
  {
    icon: SettingsIcon,
    label: "Settings",
    isActive: false,
    badge: null,
  },
];

const adminMenuItems = [
  {
    icon: LayoutIcon,
    label: "Admin View",
    isActive: false,
    badge: null,
  },
  {
    icon: FolderOpenIcon,
    label: "Project Management",
    isActive: false,
    badge: null,
  },
];

export const NavigationSidebarSection = (): JSX.Element => {
  return (
    <nav className="flex flex-col w-full h-full items-start justify-between p-6 relative">
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="relative self-stretch w-full flex-[0_0_auto]"
          alt="Header container"
          src="https://c.animaapp.com/mfr96fgpUpNNmx/img/header-container.svg"
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
                  className={`flex h-11 px-4 py-3 self-stretch w-full items-center relative justify-start h-auto ${
                    item.isActive
                      ? "bg-white border border-[#eaeaea] rounded-xl"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-2 relative flex-1 grow">
                    <item.icon className="relative w-5 h-5" />
                    <span
                      className={`flex-1 text-left relative [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px] ${
                        item.label === "Home" ? "font-semibold" : "font-medium"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  {item.badge && (
                    <Badge className="flex w-6 h-6 items-center justify-center gap-2.5 p-2.5 relative bg-[#17a34a29] rounded text-[#17a34a] text-xs font-medium">
                      {item.badge}
                    </Badge>
                  )}
                </Button>
              ))}

              <img
                className="relative self-stretch w-full h-8"
                alt="Menu item main menu"
                src="https://c.animaapp.com/mfr96fgpUpNNmx/img/menu-item-main-menu.svg"
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
                  className={`flex h-11 px-4 py-3 self-stretch w-full items-center relative justify-start h-auto ${
                    item.isActive
                      ? "bg-white border border-[#eaeaea] rounded-xl"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-2 relative flex-1 grow">
                    <item.icon className="relative w-5 h-5" />
                    <span className="flex-1 text-left font-medium relative [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px]">
                      {item.label}
                    </span>
                  </div>
                </Button>
              ))}

              <img
                className="relative self-stretch w-full h-8"
                alt="Menu item main menu"
                src="https://c.animaapp.com/mfr96fgpUpNNmx/img/menu-item-main-menu.svg"
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
                  className="flex h-11 px-4 py-3 self-stretch w-full items-center relative justify-start h-auto"
                >
                  <div className="flex items-center gap-2 relative flex-1 grow">
                    <item.icon className="relative w-5 h-5" />
                    <span className="flex-1 text-left font-medium relative [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px]">
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
                src="https://c.animaapp.com/mfr96fgpUpNNmx/img/menu-item-main-menu.svg"
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
                  className="flex h-11 px-4 py-3 self-stretch w-full items-center relative justify-start h-auto"
                >
                  <div className="flex items-center gap-2 relative flex-1 grow">
                    <item.icon className="relative w-5 h-5" />
                    <span className="flex-1 text-left font-medium relative [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px]">
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
        className="flex items-center px-2 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-xl border border-solid border-[#eaeaea] h-auto justify-start"
      >
        <div className="flex items-center justify-between relative flex-1 grow">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <Avatar className="w-[46px] h-[46px] border border-neutral-100">
              <AvatarImage
                src="https://c.animaapp.com/mfr96fgpUpNNmx/img/profile-image.png"
                alt="Profile image"
                className="object-cover"
              />
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

          <img
            className="relative w-4 h-4"
            alt="Arrow up"
            src="https://c.animaapp.com/mfr96fgpUpNNmx/img/arrow-up.svg"
          />
        </div>
      </Button>
    </nav>
  );
};
