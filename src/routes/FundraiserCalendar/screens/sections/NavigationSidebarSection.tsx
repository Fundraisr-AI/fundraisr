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
    icon: "https://c.animaapp.com/mfr7q8re1bUnxi/img/element-3.svg",
    label: "Home",
    fontWeight: "font-semibold",
  },
  {
    icon: "https://c.animaapp.com/mfr7q8re1bUnxi/img/profile-2user.svg",
    label: "Outreach",
    fontWeight: "font-medium",
  },
  {
    icon: "https://c.animaapp.com/mfr7q8re1bUnxi/img/linear---security---shield-check.svg",
    label: "Pipeline",
    fontWeight: "font-medium",
    badge: "+3",
  },
  {
    icon: "https://c.animaapp.com/mfr7q8re1bUnxi/img/linear---hands---hand-heart.svg",
    label: "Fundraising Agent",
    fontWeight: "font-medium",
    badge: "+7",
  },
];

const toolsMenuItems = [
  {
    icon: "https://c.animaapp.com/mfr7q8re1bUnxi/img/tabler-icon-layout-kanban.svg",
    label: "Calendar",
    fontWeight: "font-medium",
    isSelected: true,
  },
  {
    icon: "https://c.animaapp.com/mfr7q8re1bUnxi/img/linear---security---shield-check.svg",
    label: "Due Diligence",
    fontWeight: "font-medium",
  },
  {
    icon: "https://c.animaapp.com/mfr7q8re1bUnxi/img/user-square.svg",
    label: "Deal Room",
    fontWeight: "font-medium",
  },
];

const accountMenuItems = [
  {
    icon: "https://c.animaapp.com/mfr7q8re1bUnxi/img/linear---notifications---bell-.svg",
    label: "Notifications",
    fontWeight: "font-medium",
    hasRedDot: true,
  },
  {
    icon: "https://c.animaapp.com/mfr7q8re1bUnxi/img/linear---essentional--ui---help.svg",
    label: "Support",
    fontWeight: "font-medium",
  },
  {
    icon: "https://c.animaapp.com/mfr7q8re1bUnxi/img/linear---settings--fine-tuning---settings.svg",
    label: "Settings",
    fontWeight: "font-medium",
  },
];

const adminMenuItems = [
  {
    icon: "https://c.animaapp.com/mfr7q8re1bUnxi/img/tabler-icon-layout-kanban.svg",
    label: "Admin View",
    fontWeight: "font-medium",
  },
  {
    iconType: "composite",
    label: "Project Management",
    fontWeight: "font-medium",
  },
];

export const NavigationSidebarSection = (): JSX.Element => {
  return (
    <nav className="flex flex-col w-full h-full items-start justify-between p-6">
      <div className="flex flex-col items-start gap-6 w-full">
        <img
          className="w-full"
          alt="Header container"
          src="https://c.animaapp.com/mfr7q8re1bUnxi/img/header-container.svg"
        />

        <div className="flex flex-col items-start gap-5 w-full">
          <div className="flex flex-col items-end w-full">
            <div className="flex flex-col items-start w-full">
              <div className="flex items-center pl-2 pr-4 pt-1 pb-2 w-full">
                <div className="[font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  MAIN
                </div>
              </div>

              {mainMenuItems.map((item, index) => (
                <Button
                  key={`main-${index}`}
                  variant="ghost"
                  className="flex h-11 items-center justify-start px-4 py-3 w-full rounded-xl hover:bg-gray-50"
                >
                  <div className="flex items-center gap-2 flex-1">
                    <img className="w-5 h-5" alt={item.label} src={item.icon} />
                    <div
                      className={`flex-1 ${item.fontWeight} [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px] text-left`}
                    >
                      {item.label}
                    </div>
                  </div>
                  {item.badge && (
                    <Badge className="bg-[#17a34a29] text-[#17a34a] hover:bg-[#17a34a29] text-xs font-medium px-2 py-1 rounded">
                      {item.badge}
                    </Badge>
                  )}
                </Button>
              ))}

              <img
                className="w-full h-8"
                alt="Menu item main menu"
                src="https://c.animaapp.com/mfr7q8re1bUnxi/img/menu-item-main-menu.svg"
              />
            </div>

            <div className="flex flex-col items-start w-full">
              <div className="flex items-center pl-2 pr-4 pt-1 pb-2 w-full">
                <div className="[font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  TOOLS
                </div>
              </div>

              {toolsMenuItems.map((item, index) => (
                <Button
                  key={`tools-${index}`}
                  variant="ghost"
                  className={`flex h-11 items-center justify-start px-4 py-3 w-full rounded-xl hover:bg-gray-50 ${
                    item.isSelected
                      ? "border border-solid border-[#eaeaea]"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-2 flex-1">
                    <img className="w-5 h-5" alt={item.label} src={item.icon} />
                    <div
                      className={`flex-1 ${item.fontWeight} [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px] text-left`}
                    >
                      {item.label}
                    </div>
                  </div>
                </Button>
              ))}

              <img
                className="w-full h-8"
                alt="Menu item main menu"
                src="https://c.animaapp.com/mfr7q8re1bUnxi/img/menu-item-main-menu.svg"
              />
            </div>

            <div className="flex flex-col items-start w-full">
              <div className="flex items-center pl-2 pr-4 pt-1 pb-2 w-full">
                <div className="[font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  ACCOUNT
                </div>
              </div>

              {accountMenuItems.map((item, index) => (
                <Button
                  key={`account-${index}`}
                  variant="ghost"
                  className="flex h-11 items-center justify-start px-4 py-3 w-full rounded-xl hover:bg-gray-50"
                >
                  <div className="flex items-center gap-2 flex-1">
                    <img className="w-5 h-5" alt={item.label} src={item.icon} />
                    <div
                      className={`flex-1 ${item.fontWeight} [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px] text-left`}
                    >
                      {item.label}
                    </div>
                  </div>
                  {item.hasRedDot && (
                    <div className="w-2 h-2 bg-[#e94235] rounded-full" />
                  )}
                </Button>
              ))}

              <img
                className="w-full h-8"
                alt="Menu item main menu"
                src="https://c.animaapp.com/mfr7q8re1bUnxi/img/menu-item-main-menu.svg"
              />
            </div>

            <div className="flex flex-col items-start w-full">
              <div className="flex items-center pl-2 pr-4 pt-1 pb-2 w-full">
                <div className="[font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  ADMIN
                </div>
              </div>

              {adminMenuItems.map((item, index) => (
                <Button
                  key={`admin-${index}`}
                  variant="ghost"
                  className="flex h-11 items-center justify-start px-4 py-3 w-full rounded-xl hover:bg-gray-50"
                >
                  <div className="flex items-center gap-2 flex-1">
                    {item.iconType === "composite" ? (
                      <div className="relative w-5 h-5">
                        <img
                          className="absolute w-[38.75%] h-[28.33%] top-[33.75%] left-[31.67%]"
                          alt="Union"
                          src="https://c.animaapp.com/mfr7q8re1bUnxi/img/union.svg"
                        />
                        <img
                          className="absolute w-full h-full top-0 left-0"
                          alt="Squircle"
                          src="https://c.animaapp.com/mfr7q8re1bUnxi/img/squircle.svg"
                        />
                      </div>
                    ) : (
                      <img
                        className="w-5 h-5"
                        alt={item.label}
                        src={item.icon}
                      />
                    )}
                    <div
                      className={`flex-1 ${item.fontWeight} [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px] text-left`}
                    >
                      {item.label}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Button
        variant="ghost"
        className="flex items-center px-2 py-2.5 w-full h-auto bg-white rounded-xl border border-solid border-[#eaeaea] hover:bg-gray-50"
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Avatar className="w-[46px] h-[46px] border border-solid border-neutral-100">
              <AvatarImage
                src="https://c.animaapp.com/mfr7q8re1bUnxi/img/profile-image.png"
                alt="Profile image"
                className="object-cover"
              />
              <AvatarFallback>JA</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <div className="[font-family:'Manrope',Helvetica] font-medium text-[#111111] text-sm tracking-[0] leading-[21px]">
                John Alessandro
              </div>
              <div className="[font-family:'Manrope',Helvetica] font-medium text-[#777777] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                john@fundraiser.com
              </div>
            </div>
          </div>
          <img
            className="w-4 h-4"
            alt="Arrow up"
            src="https://c.animaapp.com/mfr7q8re1bUnxi/img/arrow-up.svg"
          />
        </div>
      </Button>
    </nav>
  );
};
