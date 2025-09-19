import {
  CalendarIcon,
  ClockIcon,
  MessageSquareIcon,
  RefreshCwIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";

export const CalendarSection = (): JSX.Element => {
  const weekDays = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

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
    <div className="w-full h-full flex flex-col gap-[23px] bg-white rounded-[20px_0px_0px_0px] overflow-hidden border border-solid border-[#eaeaea] relative">
      <header className="flex ml-5 w-[1140px] h-[53px] mt-5 items-center justify-between">
        <div className="flex flex-col w-[422px] items-start gap-0.5">
          <h1 className="mt-[-1.00px] font-semibold text-[#111111] text-xl leading-[30px] [font-family:'Manrope',Helvetica] tracking-[0]">
            CalendarIcon
          </h1>
          <p className="font-normal text-[#4f5059] text-sm leading-[21px] [font-family:'Manrope',Helvetica] tracking-[0]">
            Email Reply Dates And Lead Interactions
          </p>
        </div>

        <div className="inline-flex items-center gap-4 flex-[0_0_auto]">
          <div className="relative w-[332px] h-[37px] bg-white rounded-lg overflow-hidden border border-solid border-[#eaeaea]">
            <div className="relative top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_156px)] w-[88px] flex gap-2.5">
              <SearchIcon className="w-5 h-5 text-[#4f5059]" />
              <div className="w-14 h-5 [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-sm tracking-[-0.31px] leading-5 whitespace-nowrap">
                SearchIcon...
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            className="h-10 gap-3 px-3 py-2 rounded-lg border-[0.5px] border-solid border-[#d9dadb] bg-white"
          >
            <RefreshCwIcon className="w-4 h-4" />
            <span className="[font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
              Sync CalendarIcon
            </span>
          </Button>

          <Button className="h-10 gap-2 px-3 py-2 bg-[#09215e] rounded-lg border-[0.5px] border-solid border-[#fbfbfb] text-[#fbfbfb] hover:bg-[#09215e]/90">
            <span className="[font-family:'Manrope',Helvetica] font-medium text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
              Add Event
            </span>
          </Button>
        </div>
      </header>

      <main className="ml-[19px] w-[1142px] h-[896px] items-start gap-[22px] p-5 rounded-[20px] flex overflow-hidden border border-solid border-[#eaeaea]">
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
                    className="flex h-[45px] items-center justify-between w-full"
                  >
                    {Array.from({ length: 7 }, (_, dayIndex) => {
                      const dateIndex = weekIndex * 7 + dayIndex;
                      const dateData = calendarDates[dateIndex];

                      if (!dateData) return null;

                      return (
                        <div
                          key={dayIndex}
                          className="flex items-center justify-center gap-2 flex-1 grow border-0 border-none"
                        >
                          {dateData.isSelected ? (
                            <div className="flex w-8 h-8 items-center justify-center gap-2.5 bg-[#587cd7] rounded-[100px]">
                              <div className="w-8 [font-family:'Manrope',Helvetica] font-semibold text-[#fbfbfb] text-sm text-center tracking-[-0.28px] leading-[21px]">
                                {dateData.date}
                              </div>
                            </div>
                          ) : (
                            <div
                              className={`w-8 [font-family:'Manrope',Helvetica] font-semibold text-sm text-center tracking-[-0.28px] leading-[21px] ${
                                dateData.isCurrentMonth
                                  ? "text-[#111111]"
                                  : "text-[#e9423566]"
                              }`}
                            >
                              {dateData.date}
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

          <Card className="p-4 w-full mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-white rounded-[14px] overflow-hidden border border-solid border-[#eaeaea]">
            <CardContent className="p-0 space-y-4">
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
                            <div className="flex items-center gap-2 px-2 py-1 w-full flex-[0_0_auto] bg-white rounded-md overflow-hidden shadow-[0px_1px_2px_#00000014]">
                              <div
                                className="w-1 h-7 rounded-[100px]"
                                style={{ backgroundColor: event.color }}
                              />
                              <div className="w-[110px] h-8 mr-[-8.00px] relative">
                                <div className="absolute top-0 left-4 w-[90px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-xs tracking-[-0.24px] leading-[18px]">
                                  {event.name}
                                </div>
                                <img
                                  className="absolute top-1 left-0 w-3 h-3"
                                  alt="Envelope open"
                                  src="https://c.animaapp.com/mfr7q8re1bUnxi/img/envelopeopen.svg"
                                />
                                <div className="absolute top-[18px] left-px [font-family:'Manrope',Helvetica] font-normal text-[#4f5059] text-[10px] tracking-[0] leading-[14px] whitespace-nowrap">
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
    </div>
  );
};
