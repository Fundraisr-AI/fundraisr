// "use client";

// import React from "react";
// import Image from "next/image";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   BellIcon,
//   CalendarIcon,
//   ChevronUpIcon,
//   HeartIcon,
//   HelpCircleIcon,
//   HomeIcon,
//   SettingsIcon,
//   ShieldIcon,
//   StarIcon,
//   UserSquareIcon,
//   UsersIcon,
// } from "lucide-react";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";

// export const NavigationSection = (): JSX.Element => {
//   const router = useRouter();
//   const pathname = usePathname();

//   const mainMenuItems = [
//     {
//       icon: HomeIcon,
//       label: "Home",
//       isActive: pathname === "/",
//       badge: null,
//       onClick: () => router.push("/"),
//     },
//     {
//       icon: UsersIcon,
//       label: "Outreach",
//       isActive: pathname === "/outreach",
//       badge: null,
//       onClick: () => router.push("/outreach"),
//     },
//     {
//       icon: ShieldIcon,
//       label: "Pipeline",
//       isActive: pathname === "/pipeline",
//       badge: "+3",
//       onClick: () => router.push("/pipeline"),
//     },
//     {
//       icon: HeartIcon,
//       label: "Fundraising Agent",
//       isActive: pathname === "/fundraising-agent",
//       badge: "+7",
//       onClick: () => router.push("/fundraising-agent"),
//     },
//   ];

//   const toolsMenuItems = [
//     {
//       icon: CalendarIcon,
//       label: "Calendar",
//       isActive: pathname === "/calendar",
//       badge: null,
//       onClick: () => router.push("/calendar"),
//     },
//     {
//       icon: ShieldIcon,
//       label: "Due Diligence",
//       isActive: pathname === "/due-diligence",
//       badge: null,
//       onClick: () => router.push("/due-diligence"),
//     },
//     {
//       icon: UserSquareIcon,
//       label: "Deal Room",
//       isActive: pathname === "/deal-room",
//       badge: null,
//       onClick: () => router.push("/deal-room"),
//     },
//   ];

//   const accountMenuItems = [
//     {
//       icon: BellIcon,
//       label: "Notifications",
//       isActive: pathname === "/notifications",
//       hasNotification: true,
//       onClick: () => router.push("/notifications"),
//     },
//     {
//       icon: HelpCircleIcon,
//       label: "Support",
//       isActive: pathname === "/support",
//       hasNotification: false,
//       onClick: () => router.push("/support"),
//     },
//     {
//       icon: SettingsIcon,
//       label: "Settings",
//       isActive: false,
//       hasNotification: false,
//       onClick: () => {},
//     },
//   ];

//   const adminMenuItems = [
//     { icon: StarIcon, label: "Admin View", isActive: false, onClick: () => {} },
//     {
//       icon: null,
//       label: "Project Management",
//       isActive: false,
//       customIcon: true,
//       onClick: () => {},
//     },
//   ];

//   return (
//     <nav className="flex flex-col w-[260px] h-full items-start justify-between p-6 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
//       <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
//         {/* Header Logo */}
//         <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:100ms]">
//           <Image
//             src="https://c.animaapp.com/mfqjua33FHoyZF/img/header-container.svg"
//             alt="Header container"
//             width={260}
//             height={60}
//             className="relative self-stretch w-full flex-[0_0_auto]"
//           />
//         </div>

//         <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
//           {/* MAIN Section */}
//           <Section title="MAIN" items={mainMenuItems} />

//           {/* TOOLS Section */}
//           <Section title="TOOLS" items={toolsMenuItems} />

//           {/* ACCOUNT Section */}
//           <Section title="ACCOUNT" items={accountMenuItems} />

//           {/* ADMIN Section */}
//           <Section title="ADMIN" items={adminMenuItems} />
//         </div>
//       </div>

//       {/* User Profile Section */}
//       <Button
//         variant="outline"
//         className="flex items-center px-2 py-2.5 relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-white rounded-xl border border-solid border-[#eaeaea] h-auto hover:bg-gray-50 transition-colors translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
//       >
//         <div className="flex items-center justify-between relative flex-1 grow">
//           <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
//             <Avatar className="w-[46px] h-[46px] relative mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] border border-solid border-neutral-100">
//               <AvatarFallback>JA</AvatarFallback>
//             </Avatar>

//             <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
//               <div className="relative self-stretch [font-family:'Manrope',Helvetica] font-medium text-[#111111] text-sm tracking-[0] leading-[21px]">
//                 John Alessandro
//               </div>
//               <div className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-[#777777] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
//                 john@fundraiser.com
//               </div>
//             </div>
//           </div>

//           <ChevronUpIcon className="relative w-4 h-4" />
//         </div>
//       </Button>
//     </nav>
//   );
// };

// // Section Component to reduce repetition
// const Section = ({ title, items }: { title: string; items: any[] }) => (
//   <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0">
//     <div className="flex items-center pl-2 pr-4 pt-1 pb-2 relative self-stretch w-full flex-[0_0_auto]">
//       <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
//         {title}
//       </div>
//     </div>

//     {items.map((item, index) => {
//       const IconComponent = item.icon;
//       return (
//         <Button
//           key={item.label}
//           variant={item.isActive ? "secondary" : "ghost"}
//           onClick={item.onClick}
//           className={`flex h-11 items-center justify-start px-4 py-3 relative self-stretch w-full hover:bg-gray-50 transition-colors ${
//             item.isActive
//               ? "ml-[-1.00px] mr-[-1.00px] bg-white rounded-xl border border-solid border-[#eaeaea]"
//               : ""
//           }`}
//         >
//           <div className="flex items-center gap-2 relative flex-1 grow">
//             {item.customIcon ? (
//               <div className="relative w-5 h-5">
//                 <Image
//                   src="https://c.animaapp.com/mfqjua33FHoyZF/img/squircle.svg"
//                   alt="Squircle"
//                   fill
//                 />
//                 <Image
//                   src="https://c.animaapp.com/mfqjua33FHoyZF/img/union.svg"
//                   alt="Union"
//                   className="absolute w-[38.75%] h-[28.33%] top-[33.75%] left-[31.67%]"
//                   width={20}
//                   height={20}
//                 />
//               </div>
//             ) : (
//               IconComponent && <IconComponent className="relative w-5 h-5" />
//             )}

//             <div
//               className={`flex-1 text-left ${
//                 item.isActive ? "font-semibold" : "font-medium"
//               } [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px]`}
//             >
//               {item.label}
//             </div>
//           </div>

//           {item.badge && (
//             <Badge className="flex w-6 h-6 items-center justify-center gap-2.5 p-2.5 relative bg-[#17a34a29] rounded text-[#17a34a] text-xs font-medium hover:bg-[#17a34a29]">
//               {item.badge}
//             </Badge>
//           )}
//           {item.hasNotification && (
//             <div className="relative w-2 h-2 bg-[#e94235] rounded-[1000px]" />
//           )}
//         </Button>
//       );
//     })}

//     <Separator className="relative self-stretch w-full h-8 bg-transparent" />
//   </div>
// );

"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { sidebarIcons } from "../../assets/icons/sidebarIcons";

export function NavigationSection(): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();

  const [isHovered, setIsHovered] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Auto-collapse hover timeout
  useEffect(() => {
    if (!isHovered) {
      hoverTimeoutRef.current = setTimeout(() => setIsHovered(false), 300);
    }
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, [isHovered]);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };
    if (isProfileOpen)
      document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isProfileOpen]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    router.push("/login");
  };

  const mainMenuItems = [
    { iconSrc: sidebarIcons.home, label: "Home", path: "/" },
    { iconSrc: sidebarIcons.outreach, label: "Outreach", path: "/outreach" },
    {
      iconSrc: sidebarIcons.pipeline,
      label: "Pipeline",
      path: "/pipeline",
      badge: "+3",
    },
    {
      iconSrc: sidebarIcons.fundraising,
      label: "Fundraising Agent",
      path: "/fundraising-agent",
      badge: "+7",
    },
  ];

  const toolsMenuItems = [
    { iconSrc: sidebarIcons.calendar, label: "Calendar", path: "/calendar" },
    {
      iconSrc: sidebarIcons.dueDiligence,
      label: "Due Diligence",
      path: "/due-diligence",
    },
    { iconSrc: sidebarIcons.dealRoom, label: "Deal Room", path: "/deal-room" },
  ];

  const accountMenuItems = [
    {
      iconSrc: sidebarIcons.notifications,
      label: "Notifications",
      path: "/notifications",
      hasNotification: true,
    },
    { iconSrc: sidebarIcons.support, label: "Support", path: "/support" },
    { iconSrc: sidebarIcons.settings, label: "Settings", path: "/settings" },
  ];

  const adminMenuItems = [
    {
      iconSrc: sidebarIcons.projectManagement,
      label: "Admin View",
      path: "/admin",
    },
    {
      iconSrc: sidebarIcons.admin,
      label: "Project Management",
      path: "/project-management",
    },
  ];

  const renderMenuItems = (items: any[], showLabels = true) =>
    items.map((item) => {
      const isActive = pathname === item.path;
      return (
        <div key={item.label} className="relative group">
          <Button
            variant={isActive ? "secondary" : "ghost"}
            onClick={() => router.push(item.path)}
            className={`flex items-center w-full transition-all duration-200 ${
              showLabels
                ? `h-[46px] px-4 py-3 justify-start ${
                    isActive
                      ? "ml-[-1px] mr-[-1px] bg-white rounded-xl border border-solid border-[#eaeaea]"
                      : "h-11"
                  }`
                : "h-[52px] px-4 py-3 justify-center"
            }`}
          >
            <div
              className={`flex items-center gap-2 ${showLabels ? "flex-1" : ""}`}
            >
              {item.iconSrc && (
                <Image
                  src={item.iconSrc}
                  alt={item.label}
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
              )}
              {showLabels && (
                <div
                  className={`flex-1 text-left ${
                    isActive ? "font-manrope-semibold" : "font-manrope-medium"
                  } text-[#111111] text-sm`}
                >
                  {item.label}
                </div>
              )}
            </div>
            {showLabels && item.badge && (
              <Badge className="bg-[#17a34a29] text-[#17a34a] rounded px-2 py-1 text-xs font-medium">
                {item.badge}
              </Badge>
            )}
            {showLabels && item.hasNotification && (
              <div className="w-2 h-2 bg-[#e94235] rounded-full" />
            )}
          </Button>
          {isCollapsed && !isHovered && (
            <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
              {item.label}
            </div>
          )}
        </div>
      );
    });

  return (
    <nav
      className={`flex flex-col h-full justify-between transition-all duration-300 ${
        isCollapsed && !isHovered ? "w-[80px] p-3" : "w-[260px] p-6"
      } bg-[#fbfbfb]`}
      onMouseEnter={() => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        hoverTimeoutRef.current = setTimeout(() => setIsHovered(false), 300);
      }}
    >
      <div className="flex flex-col gap-6 w-full">
        <div className="relative w-full cursor-pointer">
          <Image
            src={
              isCollapsed && !isHovered
                ? sidebarIcons.collapsedLogo
                : sidebarIcons.logo
            }
            alt="Logo"
            width={160}
            height={40}
            className={`transition-all duration-300 ${isCollapsed && !isHovered ? "h-8 w-8 mx-auto" : ""}`}
          />
          <div
            className="absolute top-0 right-0 w-8 h-full cursor-pointer"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-5 w-full">
          <section className="flex flex-col w-full">
            {!isCollapsed && !isHovered && (
              <header className="pl-2 pr-4 pt-1 pb-2">
                <h2 className="font-manrope-semibold text-[#84858b] text-xs">
                  MAIN
                </h2>
              </header>
            )}
            {renderMenuItems(mainMenuItems, !(isCollapsed && !isHovered))}
          </section>

          <section>
            {!isCollapsed && !isHovered && (
              <header className="pl-2 pr-4 pt-1 pb-2">
                <h2 className="font-manrope-semibold text-[#84858b] text-xs">
                  TOOLS
                </h2>
              </header>
            )}
            {renderMenuItems(toolsMenuItems, !(isCollapsed && !isHovered))}
          </section>

          <section>
            {!isCollapsed && !isHovered && (
              <header className="pl-2 pr-4 pt-1 pb-2">
                <h2 className="font-manrope-semibold text-[#84858b] text-xs">
                  ACCOUNT
                </h2>
              </header>
            )}
            {renderMenuItems(accountMenuItems, !(isCollapsed && !isHovered))}
          </section>

          <section>
            {!isCollapsed && !isHovered && (
              <header className="pl-2 pr-4 pt-1 pb-2">
                <h2 className="font-manrope-semibold text-[#84858b] text-xs">
                  ADMIN
                </h2>
              </header>
            )}
            {renderMenuItems(adminMenuItems, !(isCollapsed && !isHovered))}
          </section>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-2 w-full">
        <Button
          variant="ghost"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center justify-center p-2 w-full"
        >
          <div
            className={`transition-transform ${isCollapsed ? "rotate-180" : ""}`}
          >
            <Image
              src={sidebarIcons.arrow}
              alt="Toggle"
              width={16}
              height={16}
            />
          </div>
          {(!isCollapsed || isHovered) && (
            <span className="ml-2 text-sm font-medium">
              {isCollapsed ? "Expand" : "Collapse"}
            </span>
          )}
        </Button>

        {/* User Profile */}
        <div className="relative group" ref={profileRef}>
          <Button
            variant="outline"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className={`flex items-center py-2.5 w-full bg-white rounded-xl border border-[#eaeaea] ${
              isCollapsed && !isHovered
                ? "justify-center"
                : "justify-between px-2"
            }`}
          >
            <div
              className={`flex items-center w-full ${isCollapsed && !isHovered ? "justify-center" : "justify-between"}`}
            >
              <div className="flex items-center gap-2">
                <Avatar
                  className={
                    isCollapsed && !isHovered ? "w-8 h-8" : "w-[46px] h-[46px]"
                  }
                >
                  <AvatarFallback
                    className={
                      isCollapsed && !isHovered ? "text-xs" : "text-sm"
                    }
                  >
                    JA
                  </AvatarFallback>
                </Avatar>
                {(!isCollapsed || isHovered) && (
                  <div className="flex flex-col items-start">
                    <div className="font-manrope-medium text-[#111111] text-sm">
                      John Alessandro
                    </div>
                    <div className="font-manrope-medium text-[#777777] text-xs">
                      john@fundraiser.com
                    </div>
                  </div>
                )}
              </div>
              {(!isCollapsed || isHovered) && (
                <div className={`w-4 h-4 ${isProfileOpen ? "rotate-180" : ""}`}>
                  ▼
                </div>
              )}
            </div>
          </Button>

          {isCollapsed && !isHovered && (
            <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-50">
              John Alessandro
            </div>
          )}

          {isProfileOpen && (
            <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-lg border border-[#eaeaea] shadow-lg z-50">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-[#db5050] hover:bg-red-50"
              >
                <span className="font-manrope-medium">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
