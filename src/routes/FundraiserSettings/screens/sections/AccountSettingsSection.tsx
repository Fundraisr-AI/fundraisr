import { useState } from "react";
import line85 from "./line-85.svg";
import line86 from "./line-86.svg";

export const AccountSettingsSection = () => {
  const [activeTab, setActiveTab] = useState("Account");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    smartLeadClientId: "",
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    campaignUpdates: true,
    meetingReminders: true,
    systemAlerts: true,
    weeklyDigest: false,
  });

  const [integrationSettings, setIntegrationSettings] = useState({
    "google-sheets": true,
    "zapier": true,
    "slack": true,
    "microsoft-teams": true,
    "microsoft-excel": false,
    "airtable": true,
  });

  const tabs = [
    { id: "Account", label: "Account", width: "w-[142px]" },
    { id: "Notifications", label: "Notifications", width: "w-[140px]" },
    { id: "Integrations", label: "Integrations", width: "w-[140px]" },
    { id: "DataSecurity", label: "Data & Security", width: "w-[157px]" },
  ];

  const accountFields = [
    {
      id: "fullName",
      label: "Full Name",
      placeholder: "Enter full name",
      type: "text",
    },
    {
      id: "email",
      label: "Email Address",
      placeholder: "Enter email address",
      type: "email",
    },
  ];

  const passwordFields = [
    {
      id: "currentPassword",
      label: "Current Password",
      placeholder: "Enter current password",
      type: "password",
    },
    {
      id: "newPassword",
      label: "New Password",
      placeholder: "Enter new password",
      type: "password",
    },
    {
      id: "confirmPassword",
      label: "Confirm New Password",
      placeholder: "Confirm new password",
      type: "password",
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };


  const handleCancel = () => {
    setFormData({
      fullName: "",
      email: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      smartLeadClientId: "",
    });
  };

  const handleManageSmartLead = () => {
    console.log("Managing SmartLead configuration");
  };

  const handleSaveSettings = () => {
    console.log("Saving notification settings:", notificationSettings);
  };

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

  const handleNotificationToggle = (key: keyof typeof notificationSettings) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleIntegrationToggle = (integrationId: string) => {
    setIntegrationSettings((prev) => ({
      ...prev,
      [integrationId]: !prev[integrationId as keyof typeof prev],
    }));
  };

  return (
    <section className="w-full h-full content-section flex flex-col overflow-hidden">
      <header className="flex mx-6 h-[60px] relative mt-6 items-center justify-between">
        <div className="flex flex-col w-[422px] items-start gap-0.5 relative">
          <h1 className="self-stretch mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-xl leading-[30px] relative tracking-[0]">
            Settings
          </h1>

          <p className="relative self-stretch [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-sm tracking-[0] leading-[21px]">
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
              onClick={() => handleTabClick(tab.id)}
              className={`flex ${tab.width} items-center justify-center gap-2.5 px-4 py-2 relative ${
                activeTab === tab.id
                  ? "mt-[-1.00px] ml-[-1.00px] bg-white rounded-md border border-solid border-[#eaeaea]"
                  : "py-1.5"
              }`}
            >
              <span
                className={`relative w-fit ${
                  activeTab === tab.id ? "mt-[-0.50px]" : "mt-[-1.00px]"
                } ${
                  activeTab === tab.id
                    ? "[font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#272a34]"
                    : "[font-family:'Manrope-Medium',Helvetica] font-medium text-[#7b7f93]"
                } text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap`}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </nav>
      </header>

      {/* Account Tab Content */}
      {activeTab === "Account" && (
        <>
          <section className="flex flex-col mx-6 items-start gap-[22px] p-5 mt-6 rounded-[20px] overflow-hidden border border-solid border-[#eaeaea]">
        <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
            <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
              Account Information
            </h2>

            <p className="w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative tracking-[0]">
              Update Your Personal Information And Account Settings
            </p>
          </div>
        </div>

        <div className="inline-flex flex-col items-start gap-8 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
            {accountFields.map((field) => (
              <div
                key={field.id}
                className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]"
              >
                <label
                  htmlFor={field.id}
                  className="relative flex items-center justify-center w-[280px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]"
                >
                  {field.label}
                </label>

                <input
                  id={field.id}
                  type={field.type}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                  placeholder={field.placeholder}
                  className="flex w-[500px] items-center gap-2.5 px-3.5 py-2.5 relative bg-white rounded-lg border border-solid border-[#dbdbdb] [font-family:'Manrope-Regular',Helvetica] font-normal text-base tracking-[-0.29px] leading-[normal] placeholder:text-[#a1a1a1] focus:outline-none focus:border-[#09215e]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-6 p-5 mt-6 rounded-[20px] overflow-hidden flex flex-col items-start gap-[22px] border border-solid border-[#eaeaea]">
        <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
            <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
              Change Password
            </h2>

            <p className="w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative tracking-[0]">
              Update Your Personal Information And Account Settings
            </p>
          </div>
        </div>

        <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
          {passwordFields.map((field) => (
            <div
              key={field.id}
              className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]"
            >
              <label
                htmlFor={field.id}
                className="relative flex items-center justify-center w-[280px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]"
              >
                {field.label}
              </label>

              <input
                id={field.id}
                type={field.type}
                value={formData[field.id as keyof typeof formData]}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                placeholder={field.placeholder}
                className="flex w-[500px] items-center gap-2.5 px-3.5 py-2.5 relative bg-white rounded-lg border border-solid border-[#dbdbdb] [font-family:'Manrope-Regular',Helvetica] font-normal text-base tracking-[-0.29px] leading-[normal] placeholder:text-[#a1a1a1] focus:outline-none focus:border-[#09215e]"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-6 p-5 mt-6 rounded-[20px] overflow-hidden flex flex-col items-start gap-[22px] border border-solid border-[#eaeaea]">
        <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
            <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
              SmartLead Integration
            </h2>

            <p className="w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative tracking-[0]">
              Update Your Personal Information And Account Settings
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-1 relative flex-1 grow">
            <label
              htmlFor="smartLeadClientId"
              className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap"
            >
              SmartLead Client ID
            </label>
            <input
              id="smartLeadClientId"
              type="text"
              value={formData.smartLeadClientId}
              onChange={(e) =>
                handleInputChange("smartLeadClientId", e.target.value)
              }
              placeholder="Enter SmartLead Client ID"
              className="self-stretch h-10 px-3 py-2 relative bg-white rounded-lg border border-solid border-[#eaeaea] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#111111] text-sm tracking-[-0.28px] leading-[19.6px] placeholder:text-[#4f5059] focus:outline-none focus:ring-2 focus:ring-[#09215e] focus:ring-offset-2"
            />
            <p className="self-stretch text-xs leading-[16.8px] relative [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] tracking-[0]">
              Add your SmartLead Client ID to sync your pipeline data and campaigns.
            </p>
          </div>

          <div className="flex flex-col items-start gap-1 relative flex-[0_0_auto]">
            <button
              onClick={handleManageSmartLead}
              className="bg-[#09215e] border-[0.5px] border-solid border-[#fbfbfb] inline-flex h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg hover:bg-[#0a1a4a] transition-colors"
            >
              <span className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#fbfbfb] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                Manage SmartLead Configuration
              </span>
            </button>
          </div>
        </div>
      </section>
        </>
      )}

      {/* Notifications Tab Content */}
      {activeTab === "Notifications" && (
        <section className="mx-6 p-5 mt-6 rounded-[20px] overflow-hidden flex flex-col items-start gap-[22px] border border-solid border-[#eaeaea]">
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
            {/* Appearance Section */}
            <section className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <h3 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                  Appearence
                </h3>

                <div className="flex items-center gap-2 px-4 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-xl border border-solid border-[#eaeaea]">
                  <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                    <h4 className="relative flex items-center justify-start self-stretch mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
                      Theme
                    </h4>

                    <p className="w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative tracking-[0]">
                      Choose Your Preferred Theme Or Use System Preference
                    </p>
                  </div>

                  <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
                    <div className="relative w-3.5 h-3.5 aspect-[1]" aria-label="Light theme icon">
                      <div className="absolute w-[64.29%] h-[64.29%] top-[17.86%] left-[17.86%] rounded-[4.5px] border border-solid border-[#4f5059]" />
                      <div className="absolute w-0 h-[4.17%] top-[4.76%] left-[46.43%] bg-[#4f5059]" />
                      <div className="absolute w-0 h-[4.17%] top-[83.93%] left-[46.43%] bg-[#4f5059]" />
                      <div className="absolute w-0 h-[4.17%] top-[46.43%] left-[83.93%] bg-[#4f5059]" />
                      <div className="absolute w-0 h-[4.17%] top-[46.43%] left-[4.77%] bg-[#4f5059]" />
                      <div className="absolute w-0 h-[2.31%] top-[16.97%] left-[74.25%] bg-[#4f5059]" />
                      <div className="absolute w-0 h-[2.31%] top-[74.25%] left-[16.96%] bg-[#4f5059]" />
                      <div className="absolute w-0 h-[2.31%] top-[74.25%] left-[74.25%] bg-[#4f5059]" />
                      <div className="absolute w-0 h-[2.31%] top-[16.97%] left-[16.96%] bg-[#4f5059]" />
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

                    <div className="relative w-3.5 h-3.5 aspect-[1]" aria-label="Dark theme icon">
                      <div className="absolute w-[83.33%] h-[83.33%] top-[4.76%] left-[4.77%] rounded-full bg-[#4f5059]" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Divider Line */}
            <div className="self-stretch w-full relative h-px ml-[-0.50px] mr-[-0.50px] bg-[#eaeaea]" />

            {/* Notifications Section */}
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
                      onClick={() => handleNotificationToggle(item.key as keyof typeof notificationSettings)}
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
                    <div className="self-stretch w-full relative h-px ml-[-0.50px] mr-[-0.50px] bg-[#eaeaea] mt-5" />
                  )}
                </div>
              ))}
            </section>
          </div>
        </section>
      )}

      {/* Integrations Tab Content */}
      {activeTab === "Integrations" && (
        <section className="mx-6 p-5 mt-6 rounded-[20px] overflow-hidden flex flex-col items-start gap-[22px] border border-solid border-[#eaeaea]">
          <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
              <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                Integrations
              </h2>
              <p className="w-fit text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] tracking-[0]">
                Connect Your Account With External Services
              </p>
            </div>

            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              <button className="flex w-[84px] h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg border border-solid border-[#eaeaea] hover:bg-gray-50 transition-colors">
                <span className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                  Cancel
                </span>
              </button>

              <button className="inline-flex h-10 items-center justify-center gap-2 px-3 py-2 relative flex-[0_0_auto] bg-[#09215e] rounded-lg border-[0.5px] border-solid border-[#fbfbfb] hover:bg-[#0a1a4f] transition-colors">
                <span className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#fbfbfb] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                  Save Integration Settings
                </span>
              </button>
            </div>
          </div>

          <div className="items-start gap-5 self-stretch w-full flex-[0_0_auto] flex relative">
            {[
              {
                id: "google-sheets",
                name: "Google Sheets",
                description: "Sync Campaign Data With Google Sheets",
                enabled: integrationSettings["google-sheets"],
                logo: <div className="w-[52px] h-[52px] bg-[#4285F4] rounded-lg"></div>,
              },
              {
                id: "zapier",
                name: "Zapier",
                description: "Sync Campaign Data With Google Sheets",
                enabled: integrationSettings["zapier"],
                logo: <div className="w-[52px] h-[52px] bg-[#FF4A00] rounded-lg"></div>,
              },
              {
                id: "slack",
                name: "Slack",
                description: "Sync Campaign Data With Google Sheets",
                enabled: integrationSettings["slack"],
                logo: <div className="w-[52px] h-[52px] bg-[#4A154B] rounded-lg"></div>,
              },
            ].map((integration) => (
              <article
                key={integration.id}
                className="flex flex-col items-start gap-5 relative flex-1 grow bg-[#fbfbfb] rounded-xl border border-solid border-[#eaeaea]"
              >
                <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex-col items-start gap-4 pt-4 pb-0 px-4 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="items-start justify-center gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
                      <div className="items-center gap-2 flex-1 grow flex relative">
                        {integration.logo}
                        <h3 className="relative flex-1 [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-black text-base tracking-[-0.32px] leading-6">
                          {integration.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => handleIntegrationToggle(integration.id)}
                        className={`inline-flex items-center ${integration.enabled ? "justify-end" : "justify-start"} p-0.5 relative flex-[0_0_auto] ${integration.enabled ? "bg-[#09215e]" : "bg-[#dedede]"} rounded-[100px] w-8 h-4 transition-colors duration-200 hover:opacity-80`}
                        role="switch"
                        aria-checked={integration.enabled}
                        aria-label={`Toggle ${integration.name} integration`}
                      >
                        <div className="bg-white shadow-[0px_2px_4px_#0000001a] relative w-4 h-4 rounded-lg transition-transform duration-200" />
                      </button>
                    </div>
                    <p className="[font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] relative self-stretch tracking-[0]">
                      {integration.description}
                    </p>
                  </div>
                </div>
                <footer className="items-center justify-end gap-2.5 p-4 self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#eaeaea] flex relative">
                  <button className="mt-[-1.00px] relative w-fit [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#272a34] text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap hover:text-[#09215e] transition-colors">
                    View Integrations
                  </button>
                </footer>
              </article>
            ))}
          </div>

          <div className="items-start gap-5 self-stretch w-full flex-[0_0_auto] flex relative">
            {[
              {
                id: "microsoft-teams",
                name: "Microsoft Teams",
                description: "Sync Campaign Data With Google Sheets",
                enabled: integrationSettings["microsoft-teams"],
                logo: <div className="w-[52px] h-[52px] bg-[#6264A7] rounded-lg"></div>,
              },
              {
                id: "microsoft-excel",
                name: "Microsoft Excel",
                description: "Sync Campaign Data With Google Sheets",
                enabled: integrationSettings["microsoft-excel"],
                logo: <div className="w-[52px] h-[52px] bg-[#217346] rounded-lg"></div>,
              },
              {
                id: "airtable",
                name: "Airtable",
                description: "Sync Campaign Data With Google Sheets",
                enabled: integrationSettings["airtable"],
                logo: <div className="w-[52px] h-[52px] bg-[#18BFFF] rounded-lg"></div>,
              },
            ].map((integration) => (
              <article
                key={integration.id}
                className="flex flex-col items-start gap-5 relative flex-1 grow bg-[#fbfbfb] rounded-xl border border-solid border-[#eaeaea]"
              >
                <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex-col items-start gap-4 pt-4 pb-0 px-4 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="items-start justify-center gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
                      <div className="items-center gap-2 flex-1 grow flex relative">
                        {integration.logo}
                        <h3 className="relative flex-1 [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-black text-base tracking-[-0.32px] leading-6">
                          {integration.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => handleIntegrationToggle(integration.id)}
                        className={`inline-flex items-center ${integration.enabled ? "justify-end" : "justify-start"} p-0.5 relative flex-[0_0_auto] ${integration.enabled ? "bg-[#09215e]" : "bg-[#dedede]"} rounded-[100px] w-8 h-4 transition-colors duration-200 hover:opacity-80`}
                        role="switch"
                        aria-checked={integration.enabled}
                        aria-label={`Toggle ${integration.name} integration`}
                      >
                        <div className="bg-white shadow-[0px_2px_4px_#0000001a] relative w-4 h-4 rounded-lg transition-transform duration-200" />
                      </button>
                    </div>
                    <p className="[font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] relative self-stretch tracking-[0]">
                      {integration.description}
                    </p>
                  </div>
                </div>
                <footer className="items-center justify-end gap-2.5 p-4 self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#eaeaea] flex relative">
                  <button className="mt-[-1.00px] relative w-fit [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#272a34] text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap hover:text-[#09215e] transition-colors">
                    View Integrations
                  </button>
                </footer>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Data & Security Tab Content */}
      {activeTab === "DataSecurity" && (
        <section className="mx-6 p-5 mt-6 rounded-[20px] overflow-hidden flex flex-col items-start gap-[22px] border border-solid border-[#eaeaea]">
          <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
              <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                Data & Security
              </h2>
              <p className="w-fit text-xs leading-[16.8px] whitespace-nowrap relative [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] tracking-[0]">
                Manage Your Data And Security Preferences
              </p>
            </div>

            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              <button className="flex w-[84px] h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg border border-solid border-[#eaeaea] hover:bg-gray-50 transition-colors">
                <span className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                  Cancel
                </span>
              </button>

              <button className="inline-flex flex-[0_0_auto] bg-[#09215e] border-[0.5px] border-solid border-[#fbfbfb] h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg hover:bg-[#0a1a4f] transition-colors">
                <span className="text-[#fbfbfb] relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                  Save Settings
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col w-[760px] gap-8 flex-[0_0_auto] items-start relative">
            {/* Data Export Section */}
            <section className="flex w-[760px] gap-2 flex-[0_0_auto] items-start relative">
              <div className="flex flex-col gap-2 flex-1 grow items-start relative">
                <h3 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                  Data Export
                </h3>

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <p className="w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative mt-[-1.00px] tracking-[0]">
                    Export All Your Data Including Campaigns, Contacts, And Analytics
                  </p>
                </div>
              </div>

              <button className="inline-flex flex-[0_0_auto] bg-[#09215e] border-[0.5px] border-solid border-[#fbfbfb] h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg hover:bg-[#0a1a4f] transition-colors">
                <span className="text-[#fbfbfb] relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                  Export All Data
                </span>
              </button>
            </section>

            {/* Divider */}
            <img
              className="self-stretch w-full relative h-px ml-[-0.50px] mr-[-0.50px] object-cover"
              alt=""
              src={line85}
              role="separator"
            />

            {/* Security Section */}
            <section className="flex flex-col gap-5 self-stretch w-full flex-[0_0_auto] items-start relative">
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <h3 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                  Security
                </h3>

                <div className="inline-flex flex-col gap-4 flex-[0_0_auto] items-start relative">
                  {[
                    {
                      title: "Two-Factor Authentication",
                      description: "Add An Extra Layer Of Security",
                      buttonText: "Enable 2FA",
                      buttonStyle: "border border-solid border-[#eaeaea]",
                      textColor: "text-[#4f5059]",
                    },
                    {
                      title: "Login Sessions",
                      description: "Manage Active Login Sessions",
                      buttonText: "View Sessions",
                      buttonStyle: "border border-solid border-[#eaeaea]",
                      textColor: "text-[#4f5059]",
                    },
                    {
                      title: "Sign Out",
                      description: "Sign Out Of Your Account",
                      buttonText: "Sign Out",
                      buttonStyle: "border border-solid border-[#db5050]",
                      textColor: "text-[#db5050]",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex w-[760px] gap-2 flex-[0_0_auto] items-start relative"
                    >
                      <div className="flex flex-col gap-2 flex-1 grow items-start relative">
                        <h4 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                          {item.title}
                        </h4>

                        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                          <p className="w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative mt-[-1.00px] tracking-[0]">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <button
                        className={`flex w-[84px] h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg ${item.buttonStyle} hover:opacity-80 transition-opacity`}
                      >
                        <span
                          className={`relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium ${item.textColor} text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap`}
                        >
                          {item.buttonText}
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Divider */}
            <img
              className="self-stretch w-full relative h-px ml-[-0.50px] mr-[-0.50px] object-cover"
              alt=""
              src={line86}
              role="separator"
            />

            {/* Danger Zone Section */}
            <section className="inline-flex flex-col gap-2 flex-[0_0_auto] items-start relative">
              <h3 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                Danger Zone
              </h3>

              <div className="flex w-[760px] gap-2 p-5 flex-[0_0_auto] bg-[#db515114] rounded-xl items-start relative">
                <div className="flex flex-col gap-2 flex-1 grow items-start relative">
                  <h4 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#111111] text-sm tracking-[-0.28px] leading-[21px] whitespace-nowrap">
                    Delete Account
                  </h4>

                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <p className="w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative mt-[-1.00px] tracking-[0]">
                      Permanently Delete Your Account And All Associated Data. This Action Cannot Be Undone.
                    </p>
                  </div>
                </div>

                <button className="inline-flex flex-[0_0_auto] bg-[#db5050] border-[0.5px] border-solid border-[#fbfbfb] h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg hover:bg-[#c73e3e] transition-colors">
                  <span className="text-[#fbfbfb] relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                    Delete Account
                  </span>
                </button>
              </div>
            </section>
          </div>
        </section>
      )}

    </section>
  );
};
