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
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";

export const NavigationSidebarSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true); // Start collapsed by default
  const hoverTimeoutRef = useRef<number | null>(null);

  // Auto-collapse after hover timeout (standard SaaS behavior)
  useEffect(() => {
    if (isHovered) {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    } else {
      hoverTimeoutRef.current = setTimeout(() => {
        setIsHovered(false);
      }, 300); // 300ms delay before collapsing
    }

    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [isHovered]);

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
      isActive: true,
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
      onClick: () => navigate("/settings"),
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
      unionSrc: "https://c.animaapp.com/mfqpait0Qdrcn2/img/union.svg",
      label: "Project Management",
      isActive: false,
      badge: null,
      onClick: () => {},
    },
  ];

  const renderMenuItems = (items: any[], showLabels: boolean = true) => {
    return items.map((item) => {
      const IconComponent = item.icon;
      return (
        <div key={item.label} className="relative group">
          <Button
            variant={item.isActive ? "secondary" : "ghost"}
            onClick={item.onClick}
            className={`flex items-center relative w-full transition-all duration-200 ${
              showLabels 
                ? `h-[46px] px-4 py-3 justify-start ${item.isActive ? "ml-[-1.00px] mr-[-1.00px] bg-white rounded-xl border border-solid border-[#eaeaea]" : "h-11"}`
                : "h-[52px] px-4 py-3 justify-center"
            }`}
          >
            <div className={`flex items-center gap-2 relative ${showLabels ? "flex-1 grow" : ""}`}>
              {IconComponent ? (
                <IconComponent className="relative w-6 h-6 flex-shrink-0" />
              ) : (
                <div className="relative w-6 h-6 flex-shrink-0">
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
              {showLabels && (
                <div
                  className={`flex-1 text-left relative ${
                    item.isActive ? "font-semibold" : "font-medium"
                  } [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px]`}
                >
                  {item.label}
                </div>
              )}
            </div>
            {showLabels && item.badge && (
              <Badge className="bg-[#17a34a29] text-[#17a34a] hover:bg-[#17a34a29] rounded px-2 py-1 text-xs font-medium [font-family:'Inter',Helvetica]">
                {item.badge}
              </Badge>
            )}
            {showLabels && item.hasNotification && (
              <div className="w-2 h-2 bg-[#e94235] rounded-full" />
            )}
          </Button>
          {/* Tooltip for collapsed state */}
          {isCollapsed && !isHovered && (
            <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
              {item.label}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <nav 
      className={`flex flex-col h-full items-start justify-between transition-all duration-300 ease-in-out ${
        isCollapsed && !isHovered ? "w-[80px] p-3" : "w-[260px] p-6"
      } bg-[#fbfbfb]`}
      onMouseEnter={() => {
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current);
        }
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        hoverTimeoutRef.current = setTimeout(() => {
          setIsHovered(false);
        }, 300);
      }}
    >
      <div className="flex flex-col items-start gap-6 w-full">
        <div className="relative w-full cursor-pointer">
          <img
            className={`w-full transition-all duration-300 ${
              isCollapsed && !isHovered ? "h-8 w-8 mx-auto" : "h-auto"
            }`}
            alt="Header container"
            src="https://c.animaapp.com/mfr8j7rbwvSuXy/img/header-container.svg"
          />
          {/* Invisible hover area over the arrow */}
          <div 
            className="absolute top-0 right-0 w-8 h-full cursor-pointer"
            onClick={() => setIsCollapsed(!isCollapsed)}
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          />
        </div>

        <div className="flex flex-col items-start gap-5 w-full">
          <section className="flex flex-col items-end w-full">
            <div className="flex flex-col items-start w-full">
              {!(isCollapsed && !isHovered) && (
                <header className="flex items-center pl-2 pr-4 pt-1 pb-2 w-full">
                  <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px]">
                    MAIN
                  </h2>
                </header>
              )}

              {renderMenuItems(mainMenuItems, !(isCollapsed && !isHovered))}

              {!(isCollapsed && !isHovered) && (
                <img
                  className="w-full h-8"
                  alt="Menu item main menu"
                  src="https://c.animaapp.com/mfr8j7rbwvSuXy/img/menu-item-main-menu.svg"
                />
              )}
            </div>

            <div className="flex flex-col items-start w-full">
              {!(isCollapsed && !isHovered) && (
                <header className="flex items-center pl-2 pr-4 pt-1 pb-2 w-full">
                  <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px]">
                    TOOLS
                  </h2>
                </header>
              )}

              {renderMenuItems(toolsMenuItems, !(isCollapsed && !isHovered))}

              {!(isCollapsed && !isHovered) && (
                <img
                  className="w-full h-8"
                  alt="Menu item main menu"
                  src="https://c.animaapp.com/mfr8j7rbwvSuXy/img/menu-item-main-menu.svg"
                />
              )}
            </div>

            <div className="flex flex-col items-start w-full">
              {!(isCollapsed && !isHovered) && (
                <header className="flex items-center pl-2 pr-4 pt-1 pb-2 w-full">
                  <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px]">
                    ACCOUNT
                  </h2>
                </header>
              )}

              {renderMenuItems(accountMenuItems, !(isCollapsed && !isHovered))}

              {!(isCollapsed && !isHovered) && (
                <img
                  className="w-full h-8"
                  alt="Menu item main menu"
                  src="https://c.animaapp.com/mfr8j7rbwvSuXy/img/menu-item-main-menu.svg"
                />
              )}
            </div>

            <div className="flex flex-col items-start w-full">
              {!(isCollapsed && !isHovered) && (
                <header className="flex items-center pl-2 pr-4 pt-1 pb-2 w-full">
                  <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px]">
                    ADMIN
                  </h2>
                </header>
              )}

              {renderMenuItems(adminMenuItems, !(isCollapsed && !isHovered))}
            </div>
          </section>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full">
        {/* Collapse Toggle Button - Now acts as hover trigger */}
        <Button
          variant="ghost"
          onClick={() => setIsCollapsed(!isCollapsed)}
          onMouseEnter={() => {
            if (hoverTimeoutRef.current) {
              clearTimeout(hoverTimeoutRef.current);
            }
            setIsHovered(true);
          }}
          className={`flex items-center justify-center p-2 w-full transition-all duration-200 ${
            isCollapsed && !isHovered ? "px-2" : "px-4"
          }`}
        >
          <div className={`transition-transform duration-200 ${isCollapsed ? "rotate-180" : ""}`}>
            <ChevronUpIcon className="w-4 h-4" />
          </div>
          {(!isCollapsed || isHovered) && (
            <span className={`ml-2 text-sm font-medium transition-opacity duration-200 ${
              isCollapsed && !isHovered ? "opacity-0" : "opacity-100"
            }`}>
              {isCollapsed ? "Expand" : "Collapse"}
            </span>
          )}
        </Button>

        {/* User Profile */}
        <div className="relative group">
          <Button
            variant="outline"
            className={`flex items-center py-2.5 w-full bg-white rounded-xl border border-[#eaeaea] h-auto transition-all duration-200 ${
              isCollapsed && !isHovered ? "px-2 justify-center" : "px-2"
            }`}
          >
            <div className={`flex items-center w-full ${
              isCollapsed && !isHovered ? "justify-center" : "justify-between"
            }`}>
              <div className="flex items-center gap-2">
                <Avatar className={`border border-neutral-100 flex-shrink-0 transition-all duration-200 ${
                  isCollapsed && !isHovered ? "w-8 h-8" : "w-[46px] h-[46px]"
                }`}>
                  <AvatarFallback className={`transition-all duration-200 ${
                    isCollapsed && !isHovered ? "text-xs" : "text-sm"
                  }`}>JA</AvatarFallback>
                </Avatar>
                {(!isCollapsed || isHovered) && (
                  <div className={`flex flex-col items-start transition-opacity duration-200 ${
                    isCollapsed && !isHovered ? "opacity-0" : "opacity-100"
                  }`}>
                    <div className="[font-family:'Manrope',Helvetica] font-medium text-[#111111] text-sm tracking-[0] leading-[21px]">
                      John Alessandro
                    </div>
                    <div className="[font-family:'Manrope',Helvetica] font-medium text-[#777777] text-xs tracking-[0] leading-[18px]">
                      john@fundraiser.com
                    </div>
                  </div>
                )}
              </div>
              {(!isCollapsed || isHovered) && (
                <ChevronUpIcon className={`w-4 h-4 transition-opacity duration-200 ${
                  isCollapsed && !isHovered ? "opacity-0" : "opacity-100"
                }`} />
              )}
            </div>
          </Button>
          {/* Tooltip for collapsed state */}
          {isCollapsed && !isHovered && (
            <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
              John Alessandro
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};