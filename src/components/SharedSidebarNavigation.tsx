import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
} from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { sidebarIcons } from "../assets/icons/sidebarIcons";

export const SharedSidebarNavigation = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true); // Start collapsed by default
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const hoverTimeoutRef = useRef<number | null>(null);
  const profileRef = useRef<HTMLDivElement>(null);

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

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    if (isProfileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileOpen]);

  const handleLogout = () => {
    // Clear any stored authentication data
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    // Navigate to login page or home
    navigate('/login');
  };

  const mainMenuItems = [
    {
      iconSrc: sidebarIcons.home,
      label: "Home",
      path: "/",
      badge: null,
      onClick: () => navigate("/"),
    },
    {
      iconSrc: sidebarIcons.outreach,
      label: "Outreach",
      path: "/outreach",
      badge: null,
      onClick: () => navigate("/outreach"),
    },
    {
      iconSrc: sidebarIcons.pipeline,
      label: "Pipeline",
      path: "/pipeline",
      badge: "+3",
      onClick: () => navigate("/pipeline"),
    },
    {
      iconSrc: sidebarIcons.fundraising,
      label: "Fundraising Agent",
      path: "/fundraising-agent",
      badge: "+7",
      onClick: () => navigate("/fundraising-agent"),
    },
  ];

  const toolsMenuItems = [
    {
      iconSrc: sidebarIcons.calendar,
      label: "Calendar",
      path: "/calendar",
      badge: null,
      onClick: () => navigate("/calendar"),
    },
    {
      iconSrc: sidebarIcons.dueDiligence,
      label: "Due Diligence",
      path: "/due-diligence",
      badge: null,
      onClick: () => navigate("/due-diligence"),
    },
    {
      iconSrc: sidebarIcons.dealRoom,
      label: "Deal Room",
      path: "/deal-room",
      badge: null,
      onClick: () => navigate("/deal-room"),
    },
  ];

  const accountMenuItems = [
    {
      iconSrc: sidebarIcons.notifications,
      label: "Notifications",
      path: "/notifications",
      badge: null,
      hasNotification: true,
      onClick: () => navigate("/notifications"),
    },
    {
      iconSrc: sidebarIcons.support,
      label: "Support",
      path: "/support",
      badge: null,
      hasNotification: false,
      onClick: () => navigate("/support"),
    },
    {
      iconSrc: sidebarIcons.settings,
      label: "Settings",
      path: "/settings",
      badge: null,
      hasNotification: false,
      onClick: () => navigate("/settings"),
    },
  ];

  const adminMenuItems = [
    {
      iconSrc: sidebarIcons.projectManagement,
      label: "Admin View",
      path: "/admin",
      badge: null,
      onClick: () => {},
    },
    {
      iconSrc: sidebarIcons.admin,
      label: "Project Management",
      path: "/project-management",
      badge: null,
      onClick: () => {},
    },
  ];

  const renderMenuItems = (items: any[], showLabels: boolean = true) => {
    return items.map((item) => {
      const IconComponent = item.icon;
      const isActive = location.pathname === item.path;
      
      return (
        <div key={item.label} className="relative group">
          <Button
            variant={isActive ? "secondary" : "ghost"}
            onClick={item.onClick}
            className={`flex items-center relative w-full transition-all duration-200 ${
              showLabels 
                ? `h-[46px] px-4 py-3 justify-start ${isActive ? "ml-[-1.00px] mr-[-1.00px] bg-white rounded-xl border border-solid border-[#eaeaea]" : "h-11"}`
                : "h-[52px] px-4 py-3 justify-center"
            }`}
          >
            <div className={`flex items-center gap-2 relative ${showLabels ? "flex-1 grow" : ""}`}>
              {item.iconSrc ? (
                <img src={item.iconSrc} alt={item.label} className="relative w-6 h-6 flex-shrink-0" />
              ) : IconComponent ? (
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
                    isActive ? "font-manrope-semibold" : "font-manrope-medium"
                  } text-[#111111] text-sm tracking-[0]`}
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
            alt="Fundraisr Logo"
            src={isCollapsed && !isHovered ? sidebarIcons.collapsedLogo : sidebarIcons.logo}
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
                  <h2 className="font-manrope-semibold text-[#84858b] text-xs tracking-[0]">
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
                  <h2 className="font-manrope-semibold text-[#84858b] text-xs tracking-[0]">
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
                  <h2 className="font-manrope-semibold text-[#84858b] text-xs tracking-[0]">
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
                  <h2 className="font-manrope-semibold text-[#84858b] text-xs tracking-[0]">
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
        {/* Collapse Toggle Button */}
        <Button
          variant="ghost"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`flex items-center justify-center p-2 w-full transition-all duration-200 ${
            isCollapsed && !isHovered ? "px-2" : "px-4"
          }`}
        >
          <div className={`transition-transform duration-200 ${isCollapsed ? "rotate-180" : ""}`}>
            <img src={sidebarIcons.arrow} alt="Collapse/Expand" className="w-4 h-4" />
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
        <div className="relative group" ref={profileRef}>
          <Button
            variant="outline"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className={`flex items-center py-2.5 w-full bg-white rounded-xl border border-[#eaeaea] h-auto transition-all duration-200 hover:bg-gray-50 ${
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
                    <div className="font-manrope-medium text-[#111111] text-sm tracking-[0]">
                      John Alessandro
                    </div>
                    <div className="font-manrope-medium text-[#777777] text-xs tracking-[0]">
                      john@fundraiser.com
                    </div>
                  </div>
                )}
              </div>
              {(!isCollapsed || isHovered) && (
                <div className={`w-4 h-4 transition-all duration-200 ${
                  isCollapsed && !isHovered ? "opacity-0" : "opacity-100"
                } ${isProfileOpen ? "rotate-180" : ""}`}>
                  ▼
                </div>
              )}
            </div>
          </Button>
          
          {/* Tooltip for collapsed state */}
          {isCollapsed && !isHovered && (
            <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
              John Alessandro
            </div>
          )}

          {/* Profile Dropdown Menu - Always show when profile is open */}
          {isProfileOpen && (
            <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-lg border border-[#eaeaea] shadow-lg z-50">
              <div className="py-1">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full px-3 py-2 text-sm text-[#db5050] hover:bg-red-50 transition-colors"
                >
                  <span className="font-manrope-medium">Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
