"use client";

import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const NavigationSection = (): JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();

  const mainMenuItems = [
    {
      icon: HomeIcon,
      label: "Home",
      isActive: pathname === "/",
      badge: null,
      onClick: () => router.push("/"),
    },
    {
      icon: UsersIcon,
      label: "Outreach",
      isActive: pathname === "/outreach",
      badge: null,
      onClick: () => router.push("/outreach"),
    },
    {
      icon: ShieldIcon,
      label: "Pipeline",
      isActive: pathname === "/pipeline",
      badge: "+3",
      onClick: () => router.push("/pipeline"),
    },
    {
      icon: HeartIcon,
      label: "Fundraising Agent",
      isActive: pathname === "/fundraising-agent",
      badge: "+7",
      onClick: () => router.push("/fundraising-agent"),
    },
  ];

  const toolsMenuItems = [
    {
      icon: CalendarIcon,
      label: "Calendar",
      isActive: pathname === "/calendar",
      badge: null,
      onClick: () => router.push("/calendar"),
    },
    {
      icon: ShieldIcon,
      label: "Due Diligence",
      isActive: pathname === "/due-diligence",
      badge: null,
      onClick: () => router.push("/due-diligence"),
    },
    {
      icon: UserSquareIcon,
      label: "Deal Room",
      isActive: pathname === "/deal-room",
      badge: null,
      onClick: () => router.push("/deal-room"),
    },
  ];

  const accountMenuItems = [
    {
      icon: BellIcon,
      label: "Notifications",
      isActive: pathname === "/notifications",
      hasNotification: true,
      onClick: () => router.push("/notifications"),
    },
    {
      icon: HelpCircleIcon,
      label: "Support",
      isActive: pathname === "/support",
      hasNotification: false,
      onClick: () => router.push("/support"),
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
    { icon: StarIcon, label: "Admin View", isActive: false, onClick: () => {} },
    {
      icon: null,
      label: "Project Management",
      isActive: false,
      customIcon: true,
      onClick: () => {},
    },
  ];

  return (
    <nav className="flex flex-col w-[260px] h-full items-start justify-between p-6 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        {/* Header Logo */}
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:100ms]">
          <Image
            src="https://c.animaapp.com/mfqjua33FHoyZF/img/header-container.svg"
            alt="Header container"
            width={260}
            height={60}
            className="relative self-stretch w-full flex-[0_0_auto]"
          />
        </div>

        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          {/* MAIN Section */}
          <Section title="MAIN" items={mainMenuItems} />

          {/* TOOLS Section */}
          <Section title="TOOLS" items={toolsMenuItems} />

          {/* ACCOUNT Section */}
          <Section title="ACCOUNT" items={accountMenuItems} />

          {/* ADMIN Section */}
          <Section title="ADMIN" items={adminMenuItems} />
        </div>
      </div>

      {/* User Profile Section */}
      <Button
        variant="outline"
        className="flex items-center px-2 py-2.5 relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-white rounded-xl border border-solid border-[#eaeaea] h-auto hover:bg-gray-50 transition-colors translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
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

// Section Component to reduce repetition
const Section = ({ title, items }: { title: string; items: any[] }) => (
  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0">
    <div className="flex items-center pl-2 pr-4 pt-1 pb-2 relative self-stretch w-full flex-[0_0_auto]">
      <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
        {title}
      </div>
    </div>

    {items.map((item, index) => {
      const IconComponent = item.icon;
      return (
        <Button
          key={item.label}
          variant={item.isActive ? "secondary" : "ghost"}
          onClick={item.onClick}
          className={`flex h-11 items-center justify-start px-4 py-3 relative self-stretch w-full hover:bg-gray-50 transition-colors ${
            item.isActive
              ? "ml-[-1.00px] mr-[-1.00px] bg-white rounded-xl border border-solid border-[#eaeaea]"
              : ""
          }`}
        >
          <div className="flex items-center gap-2 relative flex-1 grow">
            {item.customIcon ? (
              <div className="relative w-5 h-5">
                <Image
                  src="https://c.animaapp.com/mfqjua33FHoyZF/img/squircle.svg"
                  alt="Squircle"
                  fill
                />
                <Image
                  src="https://c.animaapp.com/mfqjua33FHoyZF/img/union.svg"
                  alt="Union"
                  className="absolute w-[38.75%] h-[28.33%] top-[33.75%] left-[31.67%]"
                  width={20}
                  height={20}
                />
              </div>
            ) : (
              IconComponent && <IconComponent className="relative w-5 h-5" />
            )}

            <div
              className={`flex-1 text-left ${
                item.isActive ? "font-semibold" : "font-medium"
              } [font-family:'Manrope',Helvetica] text-[#111111] text-sm tracking-[0] leading-[21px]`}
            >
              {item.label}
            </div>
          </div>

          {item.badge && (
            <Badge className="flex w-6 h-6 items-center justify-center gap-2.5 p-2.5 relative bg-[#17a34a29] rounded text-[#17a34a] text-xs font-medium hover:bg-[#17a34a29]">
              {item.badge}
            </Badge>
          )}
          {item.hasNotification && (
            <div className="relative w-2 h-2 bg-[#e94235] rounded-[1000px]" />
          )}
        </Button>
      );
    })}

    <Separator className="relative self-stretch w-full h-8 bg-transparent" />
  </div>
);
