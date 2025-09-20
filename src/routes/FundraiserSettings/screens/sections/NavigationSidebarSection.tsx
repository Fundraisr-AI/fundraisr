import React from "react";
import { Element3 } from "./Element3";
import { Settings } from "./Settings";
import { UserSquare } from "./UserSquare";
import arrowUp from "./arrow-up.svg";
import headerContainer from "./header-container.svg";
import image from "./image.svg";
import line832 from "./line-83-2.svg";
import line833 from "./line-83-3.svg";
import line83 from "./line-83.svg";
import profile2User from "./profile-2user.svg";
import profileImage from "./profile-image.jpg";
import squircle from "./squircle.svg";
import union from "./union.svg";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector5 from "./vector-5.svg";
import vector6 from "./vector-6.svg";
import vector7 from "./vector-7.svg";
import vector8 from "./vector-8.svg";
import vector9 from "./vector-9.svg";
import vector10 from "./vector-10.svg";
import vector11 from "./vector-11.svg";
import vector12 from "./vector-12.svg";
import vector13 from "./vector-13.svg";
import vector from "./vector.svg";

const navigationSections = [
  {
    title: "MAIN",
    items: [
      {
        id: "home",
        label: "Home",
        icon: <Element3 className="!relative !w-5 !h-5" />,
        isActive: true,
        badge: null,
      },
      {
        id: "outreach",
        label: "Outreach",
        icon: (
          <img
            className="relative w-[20.13px] h-5"
            alt="Profile"
            src={profile2User}
          />
        ),
        isActive: false,
        badge: null,
      },
      {
        id: "pipeline",
        label: "Pipeline",
        icon: (
          <div className="relative w-5 h-5 aspect-[1]">
            <img
              className="absolute w-[75.00%] h-[83.33%] top-[4.58%] left-[8.75%]"
              alt="Vector"
              src={vector}
            />
            <img
              className="absolute w-[20.83%] h-[16.67%] top-[37.92%] left-[35.84%]"
              alt="Vector"
              src={image}
            />
          </div>
        ),
        isActive: false,
        badge: "+3",
      },
      {
        id: "fundraising",
        label: "Fundraising Agent",
        icon: (
          <div className="relative w-5 h-5 aspect-[1]">
            <img
              className="absolute w-[41.67%] h-[31.98%] top-[4.58%] left-[25.41%]"
              alt="Vector"
              src={vector2}
            />
            <img
              className="absolute w-[70.83%] h-[29.17%] top-[54.58%] left-[17.09%]"
              alt="Vector"
              src={vector3}
            />
            <div className="absolute w-[20.00%] h-[40.83%] top-[54.58%] left-[4.58%] rounded-[1.5px] border-[1.5px] border-solid border-[#111111]" />
          </div>
        ),
        isActive: false,
        badge: "+7",
      },
    ],
  },
  {
    title: "TOOLS",
    items: [
      {
        id: "calendar",
        label: "Calendar",
        icon: (
          <div className="relative w-5 h-5">
            <img
              className="absolute w-[66.67%] h-[66.67%] top-[13.54%] left-[13.54%]"
              alt="Vector"
              src={vector4}
            />
          </div>
        ),
        isActive: false,
        badge: null,
      },
      {
        id: "due-diligence",
        label: "Due Diligence",
        icon: (
          <div className="relative w-5 h-5 aspect-[1]">
            <img
              className="absolute w-[75.00%] h-[83.33%] top-[4.58%] left-[8.75%]"
              alt="Vector"
              src={vector5}
            />
            <img
              className="absolute w-[20.83%] h-[16.67%] top-[37.92%] left-[35.84%]"
              alt="Vector"
              src={vector6}
            />
          </div>
        ),
        isActive: false,
        badge: null,
      },
      {
        id: "deal-room",
        label: "Deal Room",
        icon: <UserSquare className="!relative !w-5 !h-5" />,
        isActive: false,
        badge: null,
      },
    ],
  },
  {
    title: "ACCOUNT",
    items: [
      {
        id: "notifications",
        label: "Notifications",
        icon: (
          <div className="relative w-5 h-5 rounded-[5px] overflow-hidden aspect-[1]">
            <img
              className="absolute w-[75.00%] h-[70.83%] top-[4.58%] left-[8.75%]"
              alt="Vector"
              src={vector7}
            />
            <img
              className="absolute w-[37.50%] h-[12.50%] top-[75.42%] left-[27.50%]"
              alt="Vector"
              src={vector8}
            />
          </div>
        ),
        isActive: false,
        badge: null,
        hasNotification: true,
      },
      {
        id: "support",
        label: "Support",
        icon: (
          <div className="relative w-5 h-5 aspect-[1]">
            <div className="absolute w-[90.83%] h-[90.83%] top-[4.58%] left-[4.58%] rounded-[9.08px] border-[1.5px] border-solid border-[#111111]" />
            <div className="absolute w-[40.83%] h-[40.83%] top-[29.58%] left-[29.58%] rounded-[4.08px] border-[1.5px] border-solid border-[#111111]" />
            <img
              className="absolute w-[16.67%] h-[16.67%] top-[18.18%] left-[59.84%]"
              alt="Vector"
              src={vector9}
            />
            <img
              className="absolute w-[16.67%] h-[16.67%] top-[59.85%] left-[18.18%]"
              alt="Vector"
              src={vector10}
            />
            <img
              className="absolute w-[16.67%] h-[16.67%] top-[18.18%] left-[18.18%]"
              alt="Vector"
              src={vector11}
            />
            <img
              className="absolute w-[16.67%] h-[16.67%] top-[59.85%] left-[59.84%]"
              alt="Vector"
              src={vector12}
            />
          </div>
        ),
        isActive: false,
        badge: null,
      },
      {
        id: "settings",
        label: "Settings",
        icon: <Settings className="!relative !w-5 !h-5 !aspect-[1]" />,
        isActive: true,
        badge: null,
      },
    ],
  },
  {
    title: "ADMIN",
    items: [
      {
        id: "admin-view",
        label: "Admin View",
        icon: (
          <div className="relative w-5 h-5">
            <img
              className="absolute w-[66.67%] h-[66.67%] top-[13.54%] left-[13.54%]"
              alt="Vector"
              src={vector13}
            />
          </div>
        ),
        isActive: false,
        badge: null,
      },
      {
        id: "project-management",
        label: "Project Management",
        icon: (
          <div className="relative w-5 h-5">
            <img
              className="absolute w-[38.75%] h-[28.33%] top-[33.75%] left-[31.66%]"
              alt="Union"
              src={union}
            />
            <img
              className="absolute w-full h-full top-0 left-0"
              alt="Squircle"
              src={squircle}
            />
          </div>
        ),
        isActive: false,
        badge: null,
      },
    ],
  },
];

const userProfile = {
  name: "John Alessandro",
  email: "john@fundraiser.com",
  avatar: profileImage,
};

export const NavigationSidebarSection = (): JSX.Element => {
  return (
    <nav
      className="flex flex-col w-[260px] h-full items-start justify-between p-6 absolute top-0 left-0"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <header>
          <img
            className="relative self-stretch w-full flex-[0_0_auto]"
            alt="Header container"
            src={headerContainer}
          />
        </header>

        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          {navigationSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]"
            >
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center pl-2 pr-4 pt-1 pb-2 relative self-stretch w-full flex-[0_0_auto]">
                  <h2 className="relative w-fit [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#84858b] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                    {section.title}
                  </h2>
                  <div className="relative w-6 h-6" />
                </div>

                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center px-4 py-3 relative self-stretch w-full ${
                      item.isActive
                        ? "h-[46px] ml-[-1.00px] mr-[-1.00px] rounded-xl bg-white border border-solid border-[#eaeaea]"
                        : "h-11"
                    }`}
                  >
                    <div className="flex items-center gap-2 relative flex-1 grow mt-[-0.50px] mb-[-0.50px]">
                      {item.icon}
                      <span
                        className={`flex-1 relative mt-[-1.00px] text-[#111111] text-sm tracking-[0] leading-[21px] ${
                          item.isActive
                            ? "[font-family:'Manrope-SemiBold',Helvetica] font-semibold"
                            : "[font-family:'Manrope-Medium',Helvetica] font-medium"
                        } ${item.id === "project-management" ? "w-fit mr-[-10.00px] whitespace-nowrap" : ""}`}
                      >
                        {item.label}
                      </span>
                    </div>

                    {item.badge && (
                      <div className="flex w-6 h-6 items-center justify-center gap-2.5 p-2.5 relative mt-[-2.00px] bg-[#17a34a29] rounded">
                        <div className="relative w-5 mt-[-7.50px] mb-[-6.50px] ml-[-8.00px] mr-[-8.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#17a34a] text-xs text-center tracking-[0] leading-[18px]">
                          {item.badge}
                        </div>
                      </div>
                    )}

                    {item.hasNotification && (
                      <div className="relative w-2 h-2 bg-[#e94235] rounded-[1000px] aspect-[1]" />
                    )}

                    {!item.badge && !item.hasNotification && !item.isActive && (
                      <div className="flex w-[26px] h-[26px] items-center justify-center gap-2.5 p-2.5 relative mt-[-3.00px] mb-[-3.00px] mr-[-1.00px] bg-white rounded border border-solid border-neutral-100 opacity-0">
                        <div className="relative w-5 mt-[-7.50px] mb-[-4.50px] ml-[-8.00px] mr-[-6.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#111111] text-xs text-center tracking-[0] leading-[18px]">
                          42
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {sectionIndex < navigationSections.length - 1 && (
                  <div className="flex h-8 items-center justify-around px-4 py-3 relative self-stretch w-full">
                    <img
                      className="flex-1 grow relative h-px ml-[-0.50px] mr-[-0.50px] object-cover"
                      alt="Line"
                      src={
                        sectionIndex === 0
                          ? line83
                          : sectionIndex === 1
                            ? line832
                            : line833
                      }
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center px-2 py-2.5 relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-white rounded-xl border border-solid border-[#eaeaea]">
        <div className="flex items-center justify-between relative flex-1 grow">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <div className="flex flex-col w-[46px] h-[46px] items-center justify-center gap-2.5 relative mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] bg-white rounded-[40px] overflow-hidden border border-solid border-neutral-100">
              <img
                className="relative w-11 h-11 object-cover"
                alt={`${userProfile.name} profile image`}
                src={userProfile.avatar}
              />
            </div>

            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[0] leading-[21px]">
                {userProfile.name}
              </div>

              <div className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#777777] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                {userProfile.email}
              </div>
            </div>
          </div>

          <button type="button" aria-label="User menu">
            <img className="relative w-4 h-4" alt="Arrow up" src={arrowUp} />
          </button>
        </div>
      </div>
    </nav>
  );
};
