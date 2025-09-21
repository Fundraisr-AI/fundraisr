"use client";
import { useState } from "react";
import {
  ArrowUpDownIcon,
  BellIcon,
  ChevronDownIcon,
  FilterIcon,
  MailIcon,
  SettingsIcon,
  SearchIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NotificationDescription {
  company?: string;
  action?: string;
  status?: string;
}

interface Notification {
  id: number;
  title: string;
  description: string | NotificationDescription;
  time: string;
  isUnread: boolean;
  dotColor?: string;
}

export const NotificationSection = (): JSX.Element => {
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  const todayNotifications: Notification[] = [
    {
      id: 1,
      title: "New Investor Interest in Your Deal Room",
      description: "Summit Capital Has Requested Access To Your Pitch Deck",
      time: "12 mins ago",
      isUnread: true,
    },
    {
      id: 2,
      title: "Follow-Up Scheduled with Investor",
      description: "Greenstone Ventures Confirmed A Call For Sep 20, 3:00 Pm.",
      time: "18 mins ago",
      isUnread: true,
    },
    {
      id: 3,
      title: "Pipeline Update",
      description: {
        company: "Anderson Partners",
        action: " Moved To ",
        status: '"active Negotiation".',
      },
      time: "18 mins ago",
      isUnread: true,
    },
  ];

  const yesterdayNotifications: Notification[] = [
    {
      id: 4,
      title: "Due Diligence Request",
      description: {
        company: "Harbor Equity",
        action: " Uploaded A Checklist For Financial Documents.",
      },
      time: "12 mins ago",
      isUnread: false,
    },
    {
      id: 5,
      title: "Follow-Up Scheduled with Investor",
      description: "Greenstone Ventures Confirmed A Call For Sep 20, 3:00 Pm.",
      time: "18 mins ago",
      isUnread: false,
      dotColor: "#308df0",
    },
    {
      id: 6,
      title: "Pipeline Update",
      description: {
        company: "Anderson Partners",
        action: " Moved To ",
        status: '"active Negotiation".',
      },
      time: "18 mins ago",
      isUnread: false,
    },
  ];

  const renderNotificationDescription = (
    description: string | NotificationDescription
  ) => {
    if (typeof description === "string") {
      return (
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      );
    }

    return (
      <p className="text-sm leading-relaxed">
        <span className="font-semibold text-foreground">
          {description.company}
        </span>
        <span className="text-muted-foreground">{description.action}</span>
        {description.status && (
          <span className="font-bold text-foreground">
            {description.status}
          </span>
        )}
      </p>
    );
  };

  const renderNotificationItem = (notification: Notification) => (
    <div
      key={notification.id}
      className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 ${
        notification.isUnread
          ? "bg-card border-border shadow-sm"
          : "bg-muted/30 border-border"
      }`}
    >
      <div
        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
          notification.isUnread ? "bg-blue-100" : "bg-gray-100"
        }`}
      >
        <BellIcon
          className={`w-5 h-5 ${
            notification.isUnread ? "text-blue-600" : "text-gray-500"
          }`}
        />
      </div>

      <div className="flex-1 flex flex-col gap-1 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-foreground text-base leading-6 truncate pr-2">
            {notification.title}
          </h4>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-muted-foreground text-xs">
              {notification.time}
            </span>
            {notification.isUnread && (
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: notification.dotColor || "#e94235",
                }}
              />
            )}
          </div>
        </div>
        {renderNotificationDescription(notification.description)}
      </div>
    </div>
  );

  const renderNotificationSection = (
    title: string,
    notifications: Notification[]
  ) => {
    const filteredNotifications = showUnreadOnly
      ? notifications.filter((n) => n.isUnread)
      : notifications;

    if (filteredNotifications.length === 0) return null;

    return (
      <section className="flex flex-col gap-4">
        <h3 className="font-bold text-muted-foreground text-xs uppercase tracking-wider">
          {title}
        </h3>
        <div className="flex flex-col gap-3">
          {filteredNotifications.map(renderNotificationItem)}
        </div>
      </section>
    );
  };

  return (
    <main className="w-full h-full content-section flex flex-col overflow-hidden">
      <header className="flex mx-6 h-[60px] relative mt-6 items-center justify-between">
        <div className="flex flex-col items-start gap-1 relative">
          <h1 className="font-bold text-foreground text-2xl leading-tight tracking-tight">
            Notifications
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Stay Updated With Your Latest Alerts And Messages
          </p>
        </div>
        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <div className="relative flex items-center gap-3 px-4 py-2.5 bg-background rounded-lg border border-input input-enhanced max-w-sm">
            <SearchIcon className="w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search notifications..."
              className="border-0 bg-transparent p-0 placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <Button className="btn-primary gap-2 px-4 py-2">
            <SettingsIcon className="w-4 h-4" />
            Settings
          </Button>
        </div>
      </header>

      <nav className="flex mx-6 h-10 relative mt-[26px] items-center justify-between">
        <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
          <Button variant="outline" className="gap-2 px-3 py-2">
            <FilterIcon className="w-4 h-4 text-muted-foreground" />
            Filter
            <ChevronDownIcon className="w-3 h-3 text-muted-foreground" />
          </Button>
        </div>

        <div className="inline-flex gap-4 flex-[0_0_auto] items-center relative">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <label
              htmlFor="unread-toggle"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="unread-toggle"
                  className="sr-only"
                  checked={showUnreadOnly}
                  onChange={(e) => setShowUnreadOnly(e.target.checked)}
                />
                <div
                  className={`block w-10 h-6 rounded-full transition-colors duration-200 ${
                    showUnreadOnly ? "bg-primary" : "bg-muted"
                  }`}
                ></div>
                <div
                  className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ${
                    showUnreadOnly ? "translate-x-4" : ""
                  }`}
                ></div>
              </div>
              <span className="ml-3 text-sm font-medium text-foreground">
                Only Show Unread
              </span>
            </label>
          </div>

          <div className="w-px h-6 bg-border" />

          <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
            <Button variant="outline" className="gap-2 px-3 py-2">
              <ArrowUpDownIcon className="w-4 h-4 text-muted-foreground" />
              Sort
              <ChevronDownIcon className="w-3 h-3 text-muted-foreground" />
            </Button>

            <Button variant="outline" className="gap-2 px-3 py-2">
              <MailIcon className="w-4 h-4 text-muted-foreground" />
              Mark all as read
            </Button>
          </div>
        </div>
      </nav>

      <section className="flex flex-col gap-6 mx-[19px] mt-[17px] flex-1 overflow-y-auto">
        {renderNotificationSection("TODAY", todayNotifications)}
        {renderNotificationSection("YESTERDAY", yesterdayNotifications)}
      </section>
    </main>
  );
};
