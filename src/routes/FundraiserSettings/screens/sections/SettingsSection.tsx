import React, { useState } from "react";
import line852 from "./line-85-2.svg";
import line85 from "./line-85.svg";
import vector14 from "./vector-14.svg";
import vector15 from "./vector-15.svg";
import vector16 from "./vector-16.svg";
import vector17 from "./vector-17.svg";
import vector18 from "./vector-18.svg";
import vector19 from "./vector-19.svg";
import vector20 from "./vector-20.svg";
import vector21 from "./vector-21.svg";
import vector22 from "./vector-22.svg";

export const SettingsSection = () => {
  const [activeTab, setActiveTab] = useState("Notifications");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    campaignUpdates: true,
    meetingReminders: true,
    systemAlerts: true,
    weeklyDigest: false,
  });

  const tabs = [
    { id: "Account", label: "Account" },
    { id: "Notifications", label: "Notifications" },
    { id: "Integrations", label: "Integrations" },
    { id: "Data & Security", label: "Data & Scurity" },
  ];

  const notificationItems = [
    {
      key: "emailNotifications",
      title: "Email Notifications",
      description: "Receive Notifications Via Email",
    },
    {
      key: "pushNotifications",
      title: "Push Notifications",
      description: "Receive Browser Push Notifications",
    },
    {
      key: "campaignUpdates",
      title: "Campaign Updates",
      description: "Notifications About Campaign Performance",
    },
    {
      key: "meetingReminders",
      title: "Meeting Reminders",
      description: "Reminders For Upcoming Meetings",
    },
    {
      key: "systemAlerts",
      title: "System Alerts",
      description: "Important System Notifications",
    },
    {
      key: "weeklyDigest",
      title: "Weekly Digest",
      description: "Weekly Summary Of Your Activity",
    },
  ];

  const handleNotificationToggle = (key: string) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSaveSettings = () => {
    console.log("Saving notification settings:", notificationSettings);
  };

  const handleCancel = () => {
    console.log("Cancelling changes");
  };

  return (
    <div className="absolute w-[calc(100%_-_258px)] top-3 left-[259px] h-[1013px] gap-[21px] bg-white rounded-[20px_0px_0px_0px] flex flex-col overflow-hidden border border-solid border-[#eaeaea]">
      <header className="flex ml-5 w-[1140px] h-[53px] relative mt-5 items-center justify-between">
        <div className="flex flex-col w-[422px] items-start gap-0.5 relative">
          <h1 className="self-stretch mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-xl leading-[30px] relative tracking-[0]">
            Settings
          </h1>

          <p className="self-stretch text-sm leading-[21px] relative [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] tracking-[0]">
            Manage Your Account Preferences And Integrations
          </p>
        </div>

        <nav
          className="inline-flex items-center p-0.5 relative flex-[0_0_auto] mr-[-1.00px] bg-[#fbfbfb] rounded-lg border border-solid border-[#eaeaea]"
          role="tablist"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center gap-2.5 px-4 py-1.5 relative ${
                activeTab === tab.id
                  ? "w-[142px] py-2 mt-[-1.00px] bg-white rounded-md border border-solid border-[#eaeaea]"
                  : "w-[140px]"
              } ${tab.id === "Data & Security" ? "w-[157px]" : ""}`}
            >
              <span
                className={`relative w-fit ${
                  activeTab === tab.id ? "mt-[-0.50px]" : "mt-[-1.00px]"
                } text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap ${
                  activeTab === tab.id
                    ? "[font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#272a34]"
                    : "[font-family:'Manrope-Medium',Helvetica] font-medium text-[#7b7f93]"
                }`}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </nav>
      </header>

      <main className="ml-[19px] w-[1142px] h-[717px] relative items-start gap-[22px] p-5 rounded-[20px] flex flex-col overflow-hidden border border-solid border-[#eaeaea]">
        <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
            <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
              Notification Preferences
            </h2>

            <p className="w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative tracking-[0]">
              Configure How And When You Receive Notifications
            </p>
          </div>

          <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
            <button
              onClick={handleCancel}
              className="flex w-[84px] h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg border border-solid border-[#eaeaea] hover:bg-gray-50 transition-colors"
            >
              <span className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                Cancel
              </span>
            </button>

            <button
              onClick={handleSaveSettings}
              className="inline-flex h-10 items-center justify-center gap-2 px-3 py-2 relative flex-[0_0_auto] bg-[#09215e] rounded-lg border-[0.5px] border-solid border-[#fbfbfb] hover:bg-[#0a1a4f] transition-colors"
            >
              <span className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#fbfbfb] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                Save Notification Settings
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col w-[760px] items-start gap-8 relative flex-[0_0_auto]">
          <section className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                Appearence
              </h3>

              <div className="flex items-center gap-2 px-4 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-xl border border-solid border-[#eaeaea]">
                <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                  <h4 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
                    Theme
                  </h4>

                  <p className="w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative tracking-[0]">
                    Choose Your Preferred Theme Or Use System Preference
                  </p>
                </div>

                <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
                  <div
                    className="relative w-3.5 h-3.5 aspect-[1]"
                    aria-label="Light theme icon"
                  >
                    <div className="absolute w-[64.29%] h-[64.29%] top-[17.86%] left-[17.86%] rounded-[4.5px] border border-solid border-[#4f5059]" />

                    <img
                      className="absolute w-0 h-[4.17%] top-[4.76%] left-[46.43%]"
                      alt=""
                      src={vector15}
                    />

                    <img
                      className="absolute w-0 h-[4.17%] top-[83.93%] left-[46.43%]"
                      alt=""
                      src={vector16}
                    />

                    <img
                      className="absolute w-0 h-[4.17%] top-[46.43%] left-[83.93%]"
                      alt=""
                      src={vector17}
                    />

                    <img
                      className="absolute w-0 h-[4.17%] top-[46.43%] left-[4.77%]"
                      alt=""
                      src={vector18}
                    />

                    <img
                      className="absolute w-0 h-[2.31%] top-[16.97%] left-[74.25%]"
                      alt=""
                      src={vector19}
                    />

                    <img
                      className="absolute w-0 h-[2.31%] top-[74.25%] left-[16.96%]"
                      alt=""
                      src={vector20}
                    />

                    <img
                      className="absolute w-0 h-[2.31%] top-[74.25%] left-[74.25%]"
                      alt=""
                      src={vector21}
                    />

                    <img
                      className="absolute w-0 h-[2.31%] top-[16.97%] left-[16.96%]"
                      alt=""
                      src={vector22}
                    />
                  </div>

                  <span className="w-fit mt-[-1.00px] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] tracking-[0]">
                    Light
                  </span>
                </div>

                <button
                  onClick={() => setIsDarkTheme(!isDarkTheme)}
                  className="inline-flex items-start p-0.5 relative flex-[0_0_auto] bg-[#dedede] rounded-[100px] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  role="switch"
                  aria-checked={isDarkTheme}
                  aria-label="Toggle dark theme"
                >
                  <div
                    className={`bg-white shadow-[0px_2px_4px_#0000001a] relative w-4 h-4 rounded-lg transition-transform ${isDarkTheme ? "translate-x-4" : ""}`}
                  />
                  <div className="relative w-4 h-4 rounded-lg" />
                </button>

                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <span className="w-fit mt-[-1.00px] text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] tracking-[0]">
                    Dark
                  </span>

                  <div
                    className="relative w-3.5 h-3.5 aspect-[1]"
                    aria-label="Dark theme icon"
                  >
                    <img
                      className="absolute w-[83.33%] h-[83.33%] top-[4.76%] left-[4.77%]"
                      alt=""
                      src={vector14}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <img
            className="self-stretch w-full relative h-px ml-[-0.50px] mr-[-0.50px] object-cover"
            alt=""
            src={line85}
          />

          <section className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <h3 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
              Notifications
            </h3>

            {notificationItems.map((item, index) => (
              <div key={item.key}>
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                    <h4 className="relative self-stretch mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-black text-base tracking-[-0.32px] leading-6">
                      {item.title}
                    </h4>

                    <p className="self-stretch text-xs leading-[16.8px] relative [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] tracking-[0]">
                      {item.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleNotificationToggle(item.key)}
                    className={`inline-flex items-start p-0.5 relative flex-[0_0_auto] rounded-[100px] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      notificationSettings[item.key as keyof typeof notificationSettings]
                        ? "bg-[#09215e]"
                        : "bg-[#dedede]"
                    }`}
                    role="switch"
                    aria-checked={notificationSettings[item.key as keyof typeof notificationSettings]}
                    aria-label={`Toggle ${item.title}`}
                  >
                    <div
                      className={`relative w-4 h-4 rounded-lg transition-transform ${
                        notificationSettings[item.key as keyof typeof notificationSettings]
                          ? ""
                          : "bg-white shadow-[0px_2px_4px_#0000001a]"
                      }`}
                    />
                    <div
                      className={`relative w-4 h-4 rounded-lg transition-transform ${
                        notificationSettings[item.key as keyof typeof notificationSettings]
                          ? "bg-white shadow-[0px_2px_4px_#0000001a]"
                          : ""
                      }`}
                    />
                  </button>
                </div>

                {index === 1 && (
                  <img
                    className="self-stretch w-full relative h-px ml-[-0.50px] mr-[-0.50px] object-cover mt-5"
                    alt=""
                    src={line852}
                  />
                )}
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};
