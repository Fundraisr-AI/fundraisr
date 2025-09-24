import { useState } from "react";
import {
  CalendarIcon,
  ClockIcon,
  MessageSquareIcon,
  RefreshCwIcon,
  SearchIcon,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";
import { EventModalSection } from "./EventModalSection.tsx";

export const CalendarSection = (): JSX.Element => {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<any>(null);
  const [createdEvents, setCreatedEvents] = useState<any[]>([]);
  const weekDays = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

  // Event management functions
  const handleCreateEvent = (eventData: any) => {
    const newEvent = {
      id: Date.now().toString(),
      ...eventData,
      createdAt: new Date().toISOString(),
    };
    setCreatedEvents(prev => [...prev, newEvent]);
    setIsEventModalOpen(false);
    setEditingEvent(null);
  };

  const handleEditEvent = (eventData: any) => {
    setCreatedEvents(prev => prev.map(event => 
      event.id === editingEvent.id ? { ...event, ...eventData } : event
    ));
    setIsEventModalOpen(false);
    setEditingEvent(null);
  };

  const handleDeleteEvent = (eventId: string) => {
    setCreatedEvents(prev => prev.filter(event => event.id !== eventId));
  };

  const openEditModal = (event: any) => {
    setEditingEvent(event);
    setIsEventModalOpen(true);
  };

  const openCreateModal = () => {
    setEditingEvent(null);
    setIsEventModalOpen(true);
  };

  // Helper function to get events for a specific date
  const getEventsForDate = (date: string) => {
    return createdEvents.filter(event => event.date === date);
  };

  const calendarDates = [
    { date: "31", isCurrentMonth: false, isSelected: false },
    { date: "1", isCurrentMonth: true, isSelected: false },
    { date: "2", isCurrentMonth: true, isSelected: false },
    { date: "3", isCurrentMonth: true, isSelected: false },
    { date: "4", isCurrentMonth: true, isSelected: false },
    { date: "5", isCurrentMonth: true, isSelected: false },
    { date: "6", isCurrentMonth: true, isSelected: false },
    { date: "7", isCurrentMonth: true, isSelected: false },
    { date: "8", isCurrentMonth: true, isSelected: false },
    { date: "9", isCurrentMonth: true, isSelected: false },
    { date: "10", isCurrentMonth: true, isSelected: false },
    { date: "11", isCurrentMonth: true, isSelected: false },
    { date: "12", isCurrentMonth: true, isSelected: true },
    { date: "13", isCurrentMonth: true, isSelected: false },
    { date: "14", isCurrentMonth: true, isSelected: false },
    { date: "15", isCurrentMonth: true, isSelected: false },
    { date: "16", isCurrentMonth: true, isSelected: false },
    { date: "17", isCurrentMonth: true, isSelected: false },
    { date: "18", isCurrentMonth: true, isSelected: false },
    { date: "19", isCurrentMonth: true, isSelected: false },
    { date: "20", isCurrentMonth: true, isSelected: false },
    { date: "21", isCurrentMonth: true, isSelected: false },
    { date: "22", isCurrentMonth: true, isSelected: false },
    { date: "23", isCurrentMonth: true, isSelected: false },
    { date: "24", isCurrentMonth: true, isSelected: false },
    { date: "25", isCurrentMonth: true, isSelected: false },
    { date: "26", isCurrentMonth: true, isSelected: false },
    { date: "27", isCurrentMonth: true, isSelected: false },
    { date: "28", isCurrentMonth: true, isSelected: false },
    { date: "29", isCurrentMonth: true, isSelected: false },
    { date: "30", isCurrentMonth: true, isSelected: false },
    { date: "1", isCurrentMonth: false, isSelected: false },
    { date: "2", isCurrentMonth: false, isSelected: false },
    { date: "3", isCurrentMonth: false, isSelected: false },
    { date: "4", isCurrentMonth: false, isSelected: false },
  ];

  const weeklyDays = [
    { day: "SU", date: "07" },
    { day: "MO", date: "08" },
    { day: "TU", date: "09" },
    { day: "WE", date: "10" },
    { day: "TH", date: "11" },
    { day: "FR", date: "12" },
    { day: "ST", date: "13" },
  ];

  const timeSlots = [
    "09 am",
    "10 am",
    "11 am",
    "12 am",
    "1 pm",
    "2 pm",
    "3 pm",
    "4 pm",
    "5 pm",
    "6 pm",
  ];

  const events = [
    {
      time: "09 am",
      day: 0,
      name: "Chantal Thibault",
      type: "Do Not Contact",
      color: "#f00000",
    },
    {
      time: "10 am",
      day: 1,
      name: "Chantal Thibault",
      type: "Do Not Contact",
      color: "#0078f0",
    },
    {
      time: "11 am",
      day: 3,
      name: "Chantal Thibault",
      type: "Do Not Contact",
      color: "#f00000",
    },
  ];

  const attendees = [
    {
      src: "https://c.animaapp.com/mfr7q8re1bUnxi/img/photo-by-griffin-wooldridge.png",
      alt: "Photo by griffin",
    },
    {
      src: "https://c.animaapp.com/mfr7q8re1bUnxi/img/photo-by-griffin-wooldridge-1.png",
      alt: "Photo by griffin",
    },
    {
      src: "https://c.animaapp.com/mfr7q8re1bUnxi/img/photo-by-griffin-wooldridge-2.png",
      alt: "Photo by griffin",
    },
    {
      src: "https://c.animaapp.com/mfr7q8re1bUnxi/img/photo-by-griffin-wooldridge-3.png",
      alt: "Photo by griffin",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-6 content-section relative">
      <header className="flex mx-6 h-[60px] mt-6 items-center justify-between">
        <div className="flex flex-col items-start gap-1">
          <h1 className="font-bold text-foreground text-2xl leading-tight tracking-tight">
            Calendar
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Email Reply Dates And Lead Interactions
          </p>
        </div>

        <div className="inline-flex items-center gap-4 flex-[0_0_auto]">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4f5059]" />
            <Input
              placeholder="Search..."
              className="w-[332px] h-[37px] pl-10 [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-sm tracking-[-0.31px]"
            />
          </div>

          <Button variant="outline" className="gap-2 px-4 py-2">
            <RefreshCwIcon className="w-4 h-4" />
            Sync Calendar
          </Button>

          <Button 
            className="btn-primary gap-2 px-4 py-2"
            onClick={openCreateModal}
          >
            Add Event
          </Button>
        </div>
      </header>

      <main className="mx-[19px] h-[896px] items-start gap-[22px] p-5 rounded-[20px] flex overflow-hidden border border-solid border-[#eaeaea]">
        <aside className="inline-flex flex-col items-start gap-[22px] flex-[0_0_auto]">
          <Card className="w-[356px] pt-4 pb-0 px-0 mt-[-1.00px] ml-[-1.00px] mr-[-1.00px] rounded-[14px] overflow-hidden border border-solid border-[#eaeaea]">
            <CardContent className="p-0">
              <div className="flex items-center justify-between px-4 py-0 w-full flex-[0_0_auto]">
                <img
                  className="w-10 h-10"
                  alt="Date"
                  src="https://c.animaapp.com/mfr7q8re1bUnxi/img/date.svg"
                />

                <div className="inline-flex gap-2 flex-[0_0_auto] items-center">
                  <div className="inline-flex items-center gap-2 pl-1 pr-0 py-0 flex-[0_0_auto] rounded-[100px]">
                    <div className="w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-2xl tracking-[-0.48px] leading-9 whitespace-nowrap">
                      September 2025
                    </div>
                  </div>
                </div>

                <img
                  className="w-10 h-10"
                  alt="Date"
                  src="https://c.animaapp.com/mfr7q8re1bUnxi/img/date-1.svg"
                />
              </div>

              <div className="flex flex-col items-start w-full flex-[0_0_auto]">
                <div className="flex h-12 items-center justify-between w-full bg-white">
                  {weekDays.map((day, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center gap-2 flex-1 grow border-0 border-none"
                    >
                      <div className="w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-sm tracking-[-0.28px] leading-[21px] whitespace-nowrap">
                        {day}
                      </div>
                    </div>
                  ))}
                </div>

                {Array.from({ length: 6 }, (_, weekIndex) => (
                  <div
                    key={weekIndex}
                    className="flex h-[60px] items-start justify-between w-full"
                  >
                    {Array.from({ length: 7 }, (_, dayIndex) => {
                      const dateIndex = weekIndex * 7 + dayIndex;
                      const dateData = calendarDates[dateIndex];

                      if (!dateData) return null;

                      const dateEvents = getEventsForDate(dateData.date);
                      
                      return (
                        <div
                          key={dayIndex}
                          className="flex flex-col items-center justify-start gap-1 flex-1 grow border-0 border-none h-[60px] p-1 cursor-pointer hover:bg-gray-50 transition-colors"
                          onClick={() => {
                            if (dateData.isCurrentMonth && dateEvents.length === 0) {
                              // Set the selected date for the new event
                              const newEventData = {
                                eventTitle: "",
                                description: "",
                                date: dateData.date,
                                time: "09:00",
                                eventType: "Please select",
                                location: "",
                                attendees: "",
                              };
                              setEditingEvent({ ...newEventData, id: null });
                              setIsEventModalOpen(true);
                            }
                          }}
                        >
                          {/* Date Number */}
                          {dateData.isSelected ? (
                            <div className="flex w-6 h-6 items-center justify-center gap-2.5 bg-[#587cd7] rounded-[100px]">
                              <div className="w-6 [font-family:'Manrope',Helvetica] font-semibold text-[#fbfbfb] text-xs text-center tracking-[-0.28px] leading-[21px]">
                                {dateData.date}
                              </div>
                            </div>
                          ) : (
                            <div
                              className={`w-6 h-6 flex items-center justify-center [font-family:'Manrope',Helvetica] font-semibold text-xs text-center tracking-[-0.28px] leading-[21px] ${
                                dateData.isCurrentMonth
                                  ? "text-[#111111]"
                                  : "text-[#e9423566]"
                              }`}
                            >
                              {dateData.date}
                            </div>
                          )}
                          
                          {/* Events */}
                          {dateEvents.length > 0 && (
                            <div className="flex flex-col gap-0.5 w-full">
                              {dateEvents.slice(0, 2).map((event) => (
                                <div
                                  key={event.id}
                                  className="w-full h-2 bg-[#09215e] rounded text-white text-[8px] px-1 overflow-hidden cursor-pointer hover:bg-[#0a1a4f] transition-colors"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    openEditModal(event);
                                  }}
                                  title={`${event.eventTitle} - ${event.time}`}
                                >
                                  <span className="truncate block text-[8px] leading-2">
                                    {event.eventTitle}
                                  </span>
                                </div>
                              ))}
                              {dateEvents.length > 2 && (
                                <div className="w-full h-2 bg-gray-400 rounded text-white text-[8px] px-1 text-center">
                                  +{dateEvents.length - 2}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="w-[356px] h-[280px] p-4 mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-white rounded-[14px] overflow-hidden border border-solid border-[#eaeaea]">
            <CardContent className="p-0 space-y-4 h-full flex flex-col justify-between">
              <div className="flex flex-col items-start gap-3 w-full flex-[0_0_auto]">
                <div className="flex items-center justify-between w-full flex-[0_0_auto]">
                  <div className="flex-1 mt-[-1.00px] [font-family:'Manrope',Helvetica] font-bold text-[#111111] text-xl tracking-[-0.40px] leading-[24.0px]">
                    Design Sync
                  </div>

                  <Badge className="inline-flex items-center justify-center gap-1 px-3 py-1 flex-[0_0_auto] bg-[#db515129] rounded-[100px] text-[#db5050] hover:bg-[#db515129]">
                    <img
                      className="w-4 h-4"
                      alt="Linear time alarm"
                      src="https://c.animaapp.com/mfr7q8re1bUnxi/img/linear---time---alarm.svg"
                    />
                    <span className="w-fit [font-family:'Manrope',Helvetica] font-medium text-xs tracking-[-0.24px] leading-3 whitespace-nowrap">
                      10 min before
                    </span>
                  </Badge>
                </div>

                <div className="flex flex-col items-start gap-1 w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-1 w-full flex-[0_0_auto]">
                    <CalendarIcon className="w-4 h-4 text-[#4f5059]" />
                    <div className="w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                      Friday, September 26, 2025
                    </div>
                  </div>

                  <div className="flex items-center gap-1 w-full flex-[0_0_auto]">
                    <ClockIcon className="w-4 h-4 text-[#4f5059]" />
                    <div className="w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                      1 hour (1:30 PM - 2:30 PM)
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-1 w-full flex-[0_0_auto]">
                <div className="mt-[-1.00px] [font-family:'Manrope',Helvetica] font-bold text-[#111111] text-sm tracking-[-0.28px] leading-[16.8px]">
                  About this event
                </div>

                <div className="flex flex-col items-start justify-center gap-2 w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-1 w-full flex-[0_0_auto]">
                    <div className="flex items-center justify-center flex-1 mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#84858b] text-[10px] tracking-[0] leading-[14px]">
                      Lorem ipsum dolor sit amet consectetur. Et in aliquet
                      tincidunt bibendum eros velit porta faucibus. Eros
                      faucibus integer neque aliquet mi sapien. Pretium dolor et
                      consequat viverra iaculis est.
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="w-full h-px"
                alt="Line"
                src="https://c.animaapp.com/mfr7q8re1bUnxi/img/line-3.svg"
              />

              <div className="flex items-center justify-between w-full flex-[0_0_auto]">
                <div className="inline-flex items-center flex-[0_0_auto]">
                  {attendees.map((attendee, index) => (
                    <Avatar
                      key={index}
                      className={`w-[25px] h-[25px] ${index > 0 ? "-ml-1.5" : ""} border border-solid border-white`}
                    >
                      <AvatarImage
                        src={attendee.src}
                        alt={attendee.alt}
                        className="w-[25px] h-[25px] object-cover"
                      />
                      <AvatarFallback className="bg-[#d9d9d9]" />
                    </Avatar>
                  ))}

                  <div className="-ml-1.5 bg-[#d6d6d6] w-[25px] h-[25px] rounded-[100px] overflow-hidden border border-solid border-white flex items-center justify-center">
                    <div className="[font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                      +3
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 flex-[0_0_auto]">
                  <MessageSquareIcon className="w-3 h-3 text-[#84858b]" />
                  <div className="w-fit [font-family:'Manrope',Helvetica] font-medium text-[#84858b] text-[10px] tracking-[-0.20px] leading-[10px] whitespace-nowrap">
                    10
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>

        <Card className="flex flex-col h-[892px] items-start gap-4 pt-4 pb-0 px-0 flex-1 grow mt-[-1.00px] mb-[-35.00px] rounded-[14px] overflow-hidden border border-solid border-[#eaeaea]">
          <CardContent className="p-0 w-full h-full">
            <div className="flex items-center justify-between px-4 py-0 w-full flex-[0_0_auto]">
              <div className="flex items-center gap-2 flex-1 grow">
                <div className="flex flex-col w-14 justify-center p-0.5 rounded-md overflow-hidden border border-solid border-[#eaeaea] items-center">
                  <div className="flex items-center justify-center gap-2.5 w-full flex-[0_0_auto] bg-[#f1f1f1] rounded">
                    <div className="flex-1 mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-neutral-400 text-sm text-center tracking-[-0.28px] leading-[21px]">
                      SEP
                    </div>
                  </div>

                  <div className="w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-xl tracking-[-0.40px] leading-[30px] whitespace-nowrap">
                    12
                  </div>
                </div>

                <div className="flex flex-col w-[247px] items-start mr-[-2.00px]">
                  <div className="w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-2xl tracking-[-0.48px] leading-9 whitespace-nowrap">
                    September, 2025
                  </div>

                  <div className="flex gap-2 w-full flex-[0_0_auto] items-center">
                    <div className="w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#4f5059] text-sm tracking-[-0.28px] leading-[21px] whitespace-nowrap">
                      Friday
                    </div>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-4 flex-[0_0_auto]">
                <div className="inline-flex items-center gap-3 flex-[0_0_auto]">
                  <Button
                    variant="outline"
                    className="h-10 gap-3 px-3 py-2 rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
                  >
                    <span className="text-[#4f5059] [font-family:'Manrope',Helvetica] font-medium text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                      Today
                    </span>
                  </Button>

                  <ToggleGroup
                    type="single"
                    defaultValue="week"
                    className="inline-flex items-center p-0.5 flex-[0_0_auto] bg-[#f6f6f6] rounded-lg"
                  >
                    <ToggleGroupItem
                      value="day"
                      className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 flex-[0_0_auto] data-[state=on]:bg-white data-[state=on]:rounded-md"
                    >
                      <div className="w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#7b7f93] text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap data-[state=on]:text-[#272a34] data-[state=on]:font-semibold">
                        Day
                      </div>
                    </ToggleGroupItem>

                    <ToggleGroupItem
                      value="week"
                      className="inline-flex items-center justify-center gap-2.5 px-4 py-2 flex-[0_0_auto] data-[state=on]:bg-white data-[state=on]:rounded-md"
                    >
                      <div className="w-fit mt-[-0.50px] [font-family:'Manrope',Helvetica] font-medium text-[#7b7f93] text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap data-[state=on]:text-[#272a34] data-[state=on]:font-semibold">
                        Week
                      </div>
                    </ToggleGroupItem>

                    <ToggleGroupItem
                      value="month"
                      className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 flex-[0_0_auto] data-[state=on]:bg-white data-[state=on]:rounded-md"
                    >
                      <div className="w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#7b7f93] text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap data-[state=on]:text-[#272a34] data-[state=on]:font-semibold">
                        Month
                      </div>
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>

                <img
                  className="w-px h-6 object-cover"
                  alt="Line"
                  src="https://c.animaapp.com/mfr7q8re1bUnxi/img/line-2342.svg"
                />

                <img
                  className="flex-[0_0_auto]"
                  alt="Frame"
                  src="https://c.animaapp.com/mfr7q8re1bUnxi/img/frame-2147218141.svg"
                />
              </div>
            </div>

            <div className="flex flex-col items-start w-full flex-[0_0_auto] border border-solid border-[#eaeaea]">
              <div className="flex h-12 items-center justify-between w-full bg-white border-b [border-bottom-style:solid] border-[#eaeaea]">
                <div className="flex w-16 items-center justify-center gap-2 border-r [border-right-style:solid] border-[#eaeaea]">
                  <div className="w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-sm tracking-[-0.28px] leading-[21px] whitespace-nowrap">
                    TIME
                  </div>
                </div>

                {weeklyDays.map((day, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center gap-2 flex-1 grow ${index < weeklyDays.length - 1 ? "border-r [border-right-style:solid] border-[#eaeaea]" : ""}`}
                  >
                    <div className="w-fit [font-family:'Manrope',Helvetica] font-semibold text-sm tracking-[-0.28px] leading-[21px] whitespace-nowrap">
                      <span className="text-[#bdbec2] tracking-[-0.04px]">
                        {day.day}
                      </span>
                      <span className="text-[#111111] tracking-[-0.04px]">
                        {" "}
                        {day.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {timeSlots.map((time, timeIndex) => (
                <div
                  key={timeIndex}
                  className="flex h-[77px] items-center justify-between w-full bg-[#fbfbfb] border-b [border-bottom-style:solid] border-[#eaeaea]"
                >
                  <div className="flex w-16 items-center justify-center gap-2 border-r [border-right-style:solid] border-[#eaeaea]">
                    <div className="w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#bcbdc2] text-sm text-center tracking-[-0.28px] leading-[21px] whitespace-nowrap">
                      {time}
                    </div>
                  </div>

                  {weeklyDays.map((_, dayIndex) => {
                    const event = events.find(
                      (e) => e.time === time && e.day === dayIndex,
                    );

                    return (
                      <div
                        key={dayIndex}
                        className={`flex-1 grow ${dayIndex < weeklyDays.length - 1 ? "border-r [border-right-style:solid] border-[#eaeaea]" : ""}`}
                      >
                        {event && (
                          <div className="flex flex-col items-center gap-2 pt-3 pb-0 px-3">
                            <div 
                              className="flex items-center gap-2 px-2 py-1 relative bg-white rounded-md overflow-hidden shadow-[0px_1px_2px_#00000014]"
                              role="listitem"
                              aria-label={`Contact: ${event.name}, Status: ${event.type}`}
                            >
                              <div
                                className="relative w-1 h-7 bg-[#f00000] rounded-[100px]"
                                aria-hidden="true"
                              />
                              <div className="relative w-[110px] h-8 mr-[-8.00px]">
                                <div className="absolute top-0 left-4 w-[90px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-xs tracking-[-0.24px] leading-[18px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                                  {event.name}
                                </div>
                                <div className="absolute top-1 left-0 w-3 h-3 aspect-[1]">
                                  <img
                                    className="absolute w-[81.25%] h-[75.00%] top-[9.37%] left-[9.38%]"
                                    alt="Email icon"
                                    src="https://c.animaapp.com/mfr7q8re1bUnxi/img/envelopeopen.svg"
                                  />
                                </div>
                                <div className="absolute top-[18px] left-px [font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-[10px] tracking-[0] leading-[14.0px] whitespace-nowrap">
                                  {event.type}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Modal Overlay */}
      {isEventModalOpen && (
        <div className="fixed inset-0 z-50">
          {/* Transparent backdrop that shows whatever is behind */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"
            onClick={() => setIsEventModalOpen(false)}
          />
          
          {/* Modal content */}
          <div 
            className="absolute top-0 right-0 w-[800px] h-full bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <EventModalSection 
              onClose={() => setIsEventModalOpen(false)}
              editingEvent={editingEvent}
              onCreateEvent={handleCreateEvent}
              onEditEvent={handleEditEvent}
              onDeleteEvent={handleDeleteEvent}
            />
          </div>
        </div>
      )}
    </div>
  );
};
