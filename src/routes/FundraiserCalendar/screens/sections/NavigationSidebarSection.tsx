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
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";

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
      isActive: true,
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
      onClick: () => navigate("/support"),
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

  const renderMenuItem = (item: any, index: number) => (
    <Button
      key={index}
      variant="ghost"
      onClick={item.onClick}
      className={`flex h-11 items-center justify-between px-4 py-3 w-full transition-colors ${
        item.isActive
          ? "bg-white rounded-xl border border-solid border-[#eaeaea]"
          : ""
      }`}
    >
      <div className="flex items-center gap-2 flex-1">
        {item.customIcon ? (
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
        ) : item.icon ? (
          <item.icon className="w-5 h-5" />
        ) : null}
        <span
          className={`flex-1 text-left ${item.isActive ? "font-medium" : "font-medium"} [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px]`}
        >
          {item.label}
        </span>
      </div>
      {item.badge && (
        <div
          className={`flex w-6 h-6 items-center justify-center gap-2.5 p-2.5 ${item.badge.color} rounded`}
        >
          <div className="relative w-5 mt-[-7.50px] mb-[-6.50px] ml-[-8.00px] mr-[-8.00px] [font-family:'Inter',Helvetica] font-medium text-xs text-center tracking-[0] leading-[18px]">
            {item.badge.count}
          </div>
        </div>
      )}
      {item.hasNotification && (
        <div className="w-2 h-2 bg-[#e94235] rounded-[1000px]" />
      )}
    </Button>
  );

  return (
    <nav className="flex flex-col w-[260px] h-full items-start justify-between p-6 relative">
      <div className="flex flex-col items-start gap-6 w-full">
        <img
          className="w-full"
          alt="Header container"
          src="https://c.animaapp.com/mfqpait0Qdrcn2/img/header-container.svg"
        />

        <div className="flex flex-col items-start gap-5 w-full">
          <section className="flex flex-col items-end w-full">
            <div className="flex flex-col items-start w-full">
              <div className="flex items-center pl-2 pr-4 pt-1 pb-2 w-full">
                <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  MAIN
                </h2>
              </div>

              {mainMenuItems.map((item, index) => renderMenuItem(item, index))}

              <img
                className="w-full h-8"
                alt="Menu item main menu"
                src="https://c.animaapp.com/mfqpait0Qdrcn2/img/menu-item-main-menu.svg"
              />
            </div>

            <div className="flex flex-col items-start w-full">
              <div className="flex items-center pl-2 pr-4 pt-1 pb-2 w-full">
                <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  TOOLS
                </h2>
              </div>

              {toolsMenuItems.map((item, index) => renderMenuItem(item, index))}

              <img
                className="w-full h-8"
                alt="Menu item main menu"
                src="https://c.animaapp.com/mfqpait0Qdrcn2/img/menu-item-main-menu.svg"
              />
            </div>

            <div className="flex flex-col items-start w-full">
              <div className="flex items-center pl-2 pr-4 pt-1 pb-2 w-full">
                <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  ACCOUNT
                </h2>
              </div>

              {accountMenuItems.map((item, index) =>
                renderMenuItem(item, index),
              )}

              <img
                className="w-full h-8"
                alt="Menu item main menu"
                src="https://c.animaapp.com/mfqpait0Qdrcn2/img/menu-item-main-menu.svg"
              />
            </div>

            <div className="flex flex-col items-start w-full">
              <div className="flex items-center pl-2 pr-4 pt-1 pb-2 w-full">
                <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  ADMIN
                </h2>
              </div>

              {adminMenuItems.map((item, index) => renderMenuItem(item, index))}
            </div>
          </section>
        </div>
      </div>

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