import { ChevronUpIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const SidebarSection = (): JSX.Element => {
  const navigate = useNavigate();

  const mainMenuItems = [
    {
      icon: "https://c.animaapp.com/mfr6q2vwdnm9gO/img/element-3.svg",
      label: "Home",
      isActive: false,
      badge: null,
      fontWeight: "font-semibold",
      onClick: () => navigate("/"),
    },
    {
      icon: "https://c.animaapp.com/mfr6q2vwdnm9gO/img/profile-2user.svg",
      label: "Outreach",
      isActive: false,
      badge: null,
      fontWeight: "font-medium",
      onClick: () => navigate("/outreach"),
    },
    {
      icon: "https://c.animaapp.com/mfr6q2vwdnm9gO/img/linear---security---shield-check.svg",
      label: "Pipeline",
      isActive: false,
      badge: "+3",
      fontWeight: "font-medium",
      onClick: () => navigate("/pipeline"),
    },
    {
      icon: "https://c.animaapp.com/mfr6q2vwdnm9gO/img/linear---hands---hand-heart.svg",
      label: "Fundraising Agent",
      isActive: true,
      badge: "+7",
      fontWeight: "font-medium",
      onClick: () => navigate("/fundraising-agent"),
    },
  ];

  const toolsMenuItems = [
    {
      icon: "https://c.animaapp.com/mfr6q2vwdnm9gO/img/tabler-icon-layout-kanban.svg",
      label: "Calendar",
      isActive: false,
      badge: null,
      fontWeight: "font-medium",
      onClick: () => navigate("/calendar"),
    },
    {
      icon: "https://c.animaapp.com/mfr6q2vwdnm9gO/img/linear---security---shield-check.svg",
      label: "Due Diligence",
      isActive: false,
      badge: null,
      fontWeight: "font-medium",
      onClick: () => {},
    },
    {
      icon: "https://c.animaapp.com/mfr6q2vwdnm9gO/img/user-square.svg",
      label: "Deal Room",
      isActive: false,
      badge: null,
      fontWeight: "font-medium",
      onClick: () => {},
    },
  ];

  const accountMenuItems = [
    {
      icon: "https://c.animaapp.com/mfr6q2vwdnm9gO/img/linear---notifications---bell-.svg",
      label: "Notifications",
      isActive: false,
      badge: null,
      hasRedDot: true,
      fontWeight: "font-medium",
      onClick: () => {},
    },
    {
      icon: "https://c.animaapp.com/mfr6q2vwdnm9gO/img/linear---essentional--ui---help.svg",
      label: "Support",
      isActive: false,
      badge: null,
      fontWeight: "font-medium",
      onClick: () => {},
    },
    {
      icon: "https://c.animaapp.com/mfr6q2vwdnm9gO/img/linear---settings--fine-tuning---settings.svg",
      label: "Settings",
      isActive: false,
      badge: null,
      fontWeight: "font-medium",
      onClick: () => {},
    },
  ];

  const adminMenuItems = [
    {
      icon: "https://c.animaapp.com/mfr6q2vwdnm9gO/img/tabler-icon-layout-kanban.svg",
      label: "Admin View",
      isActive: false,
      badge: null,
      fontWeight: "font-medium",
      onClick: () => {},
    },
    {
      icon: null,
      label: "Project Management",
      isActive: false,
      badge: null,
      hasCustomIcon: true,
      fontWeight: "font-medium",
      onClick: () => {},
    },
  ];

  return (
    <nav className="flex flex-col w-[260px] h-full items-start justify-between p-6 relative">
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="relative self-stretch w-full flex-[0_0_auto]"
          alt="Header container"
          src="https://c.animaapp.com/mfr6q2vwdnm9gO/img/header-container.svg"
        />

        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center pl-2 pr-4 pt-1 pb-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  MAIN
                </div>
                <div className="relative w-6 h-6" />
              </div>

              {mainMenuItems.map((item, index) => (
                <Button
                  key={`main-${index}`}
                  variant="ghost"
                  onClick={item.onClick}
                  className={`flex h-11 items-center px-4 py-3 relative self-stretch w-full justify-start gap-2 ${
                    item.isActive
                      ? "bg-white rounded-xl border border-solid border-[#eaeaea]"
                      : ""
                  } h-auto`}
                >
                  <img
                    className="relative w-5 h-5"
                    alt={item.label}
                    src={item.icon}
                  />
                  <div
                    className={`flex-1 ${item.fontWeight} relative mt-[-1.00px] [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px] text-left`}
                  >
                    {item.label}
                  </div>
                  {item.badge && (
                    <Badge className="flex w-6 h-6 items-center justify-center gap-2.5 p-2.5 relative mt-[-2.00px] mb-[-2.00px] bg-[#17a34a29] rounded text-[#17a34a] text-xs font-medium">
                      {item.badge}
                    </Badge>
                  )}
                </Button>
              ))}

              <img
                className="relative self-stretch w-full h-8"
                alt="Menu item main menu"
                src="https://c.animaapp.com/mfr6q2vwdnm9gO/img/menu-item-main-menu.svg"
              />
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center pl-2 pr-4 pt-1 pb-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  TOOLS
                </div>
                <div className="relative w-6 h-6" />
              </div>

              {toolsMenuItems.map((item, index) => (
                <Button
                  key={`tools-${index}`}
                  variant="ghost"
                  onClick={item.onClick}
                  className="flex h-11 items-center px-4 py-3 relative self-stretch w-full justify-start gap-2 h-auto"
                >
                  <img
                    className="relative w-5 h-5"
                    alt={item.label}
                    src={item.icon}
                  />
                  <div
                    className={`flex-1 ${item.fontWeight} relative mt-[-1.00px] [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px] text-left`}
                  >
                    {item.label}
                  </div>
                </Button>
              ))}

              <img
                className="relative self-stretch w-full h-8"
                alt="Menu item main menu"
                src="https://c.animaapp.com/mfr6q2vwdnm9gO/img/menu-item-main-menu.svg"
              />
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center pl-2 pr-4 pt-1 pb-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  ACCOUNT
                </div>
                <div className="relative w-6 h-6" />
              </div>

              {accountMenuItems.map((item, index) => (
                <Button
                  key={`account-${index}`}
                  variant="ghost"
                  onClick={item.onClick}
                  className="flex h-11 items-center px-4 py-3 relative self-stretch w-full justify-start gap-2 h-auto"
                >
                  <img
                    className="relative w-5 h-5"
                    alt={item.label}
                    src={item.icon}
                  />
                  <div
                    className={`flex-1 ${item.fontWeight} relative mt-[-1.00px] [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px] text-left`}
                  >
                    {item.label}
                  </div>
                  {item.hasRedDot && (
                    <div className="relative w-2 h-2 bg-[#e94235] rounded-[1000px]" />
                  )}
                </Button>
              ))}

              <img
                className="relative self-stretch w-full h-8"
                alt="Menu item main menu"
                src="https://c.animaapp.com/mfr6q2vwdnm9gO/img/menu-item-main-menu.svg"
              />
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center pl-2 pr-4 pt-1 pb-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  ADMIN
                </div>
                <div className="relative w-6 h-6" />
              </div>

              {adminMenuItems.map((item, index) => (
                <Button
                  key={`admin-${index}`}
                  variant="ghost"
                  onClick={item.onClick}
                  className="flex h-11 items-center px-4 py-3 relative self-stretch w-full justify-start gap-2 h-auto"
                >
                  {item.hasCustomIcon ? (
                    <div className="relative w-5 h-5">
                      <img
                        className="absolute w-[38.75%] h-[28.33%] top-[33.75%] left-[31.67%]"
                        alt="Union"
                        src="https://c.animaapp.com/mfr6q2vwdnm9gO/img/union.svg"
                      />
                      <img
                        className="absolute w-full h-full top-0 left-0"
                        alt="Squircle"
                        src="https://c.animaapp.com/mfr6q2vwdnm9gO/img/squircle.svg"
                      />
                    </div>
                  ) : (
                    <img
                      className="relative w-5 h-5"
                      alt={item.label}
                      src={item.icon}
                    />
                  )}
                  <div
                    className={`${item.hasCustomIcon ? "w-fit mr-[-10.00px] whitespace-nowrap" : "flex-1"} ${item.fontWeight} relative mt-[-1.00px] [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px] text-left`}
                  >
                    {item.label}
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Button
        variant="ghost"
        className="flex items-center px-2 py-2.5 relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-white rounded-xl border border-solid border-[#eaeaea] justify-between h-auto"
      >
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <Avatar className="w-[46px] h-[46px] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] border border-solid border-neutral-100">
            <AvatarImage
              src="https://c.animaapp.com/mfr6q2vwdnm9gO/img/profile-image.png"
              alt="Profile image"
              className="w-11 h-11 object-cover"
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
        <ChevronUpIcon className="w-4 h-4" />
      </Button>
    </nav>
  );
};
