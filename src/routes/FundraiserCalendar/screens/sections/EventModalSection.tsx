import React, { useState } from "react";
import { XIcon } from "lucide-react";

interface EventModalSectionProps {
  onClose: () => void;
  editingEvent?: any;
  onCreateEvent: (eventData: any) => void;
  onEditEvent: (eventData: any) => void;
  onDeleteEvent?: (eventId: string) => void;
}

export const EventModalSection = ({ onClose, editingEvent, onCreateEvent, onEditEvent, onDeleteEvent }: EventModalSectionProps): JSX.Element => {
  const [formData, setFormData] = useState({
    eventTitle: "",
    description: "",
    date: "09/14/2025",
    time: "09:00",
    eventType: "Please select",
    location: "",
    attendees: "",
  });

  // Initialize form with editing event data if provided
  React.useEffect(() => {
    if (editingEvent) {
      setFormData({
        eventTitle: editingEvent.eventTitle || "",
        description: editingEvent.description || "",
        date: editingEvent.date || "09/14/2025",
        time: editingEvent.time || "09:00",
        eventType: editingEvent.eventType || "Please select",
        location: editingEvent.location || "",
        attendees: editingEvent.attendees || "",
      });
    }
  }, [editingEvent]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitting event:", formData);
    
    if (editingEvent) {
      onEditEvent(formData);
    } else {
      onCreateEvent(formData);
    }
  };

  const handleCancel = () => {
    console.log("Cancelling event creation");
    onClose();
  };

  const handleDelete = () => {
    if (editingEvent && onDeleteEvent) {
      onDeleteEvent(editingEvent.id);
      onClose();
    }
  };

  return (
    <div className="w-full h-full bg-white">
      <header className="absolute w-full top-0 left-0 h-[60px] flex justify-between items-center border-b border-solid border-[#eaeaea]">
        <h1 className="flex items-center justify-center h-7 w-[127px] ml-5 font-bold text-[#111111] text-xl tracking-[-0.36px] leading-7 whitespace-nowrap">
          {editingEvent ? "Edit Event" : "Create Event"}
        </h1>
        <button
          className="h-6 w-6 mr-5 flex"
          onClick={handleCancel}
          aria-label="Close form"
        >
          <XIcon className="w-4 h-4" />
        </button>
      </header>

      <footer className="absolute w-full left-0 bottom-0 h-[60px] flex border-t border-solid border-[#eaeaea]">
        <div className={`inline-flex mt-2.5 h-10 ${editingEvent ? 'w-[280px] ml-[500px]' : 'w-[194px] ml-[586px]'} relative items-center justify-center gap-3`}>
          {editingEvent && onDeleteEvent && (
            <button
              className="flex w-[84px] border border-solid border-red-300 bg-red-50 h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg hover:bg-red-100 transition-colors"
              onClick={handleDelete}
            >
              <span className="relative w-fit font-medium text-red-600 text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                Delete
              </span>
            </button>
          )}
          <button
            className="flex w-[84px] border border-solid border-[#eaeaea] h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg hover:bg-gray-50 transition-colors"
            onClick={handleCancel}
          >
            <span className="relative w-fit font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
              Cancel
            </span>
          </button>
          <button
            className="inline-flex flex-[0_0_auto] bg-[#09215e] border-[0.5px] border-solid border-[#fbfbfb] h-10 items-center justify-center gap-2 px-3 py-2 relative rounded-lg hover:bg-[#0a1a4f] transition-colors"
            onClick={handleSubmit}
          >
            <span className="relative w-fit font-medium text-[#fbfbfb] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
              {editingEvent ? "Update Event" : "Create Event"}
            </span>
          </button>
        </div>
      </footer>

      <section className="absolute top-[60px] left-0 w-full h-[calc(100%-120px)] overflow-y-auto">
        <div className="flex flex-col w-[760px] items-start gap-5 px-5 py-6">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <label className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
            Event Title
          </label>

          <input
            type="text"
            className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb] [font-family:'Manrope-Regular',Helvetica] font-normal text-base tracking-[-0.29px] leading-[normal] focus:outline-none focus:border-[#09215e] transition-colors"
            placeholder="Enter campaign name"
            value={formData.eventTitle}
            onChange={(e) => handleInputChange("eventTitle", e.target.value)}
          />
        </div>

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <label className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
            Description
          </label>

          <div className="relative self-stretch w-full">
            <textarea
              className="h-[164px] gap-2.5 px-3.5 py-2.5 self-stretch w-full bg-white rounded-lg border-[#dbdbdb] border border-solid [font-family:'Manrope-Regular',Helvetica] font-normal text-base tracking-[-0.29px] leading-[normal] resize-none focus:outline-none focus:border-[#09215e] transition-colors"
              placeholder="Enter Description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-2 relative flex-1 grow">
            <label className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
              Date
            </label>

            <div className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb]">
              <div className="relative w-4 h-4 rounded-[5px] overflow-hidden aspect-[1]">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              <input
                type="date"
                className="flex-1 mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] bg-transparent border-none outline-none"
                value="2025-09-14"
                onChange={(e) => {
                  const date = new Date(e.target.value);
                  const formattedDate = date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  });
                  handleInputChange("date", formattedDate);
                }}
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 relative flex-1 grow">
            <label className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
              Time
            </label>

            <div className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb]">
              <div className="relative w-4 h-4 aspect-[1]">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </div>

              <input
                type="time"
                className="relative flex items-center justify-center flex-1 mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] bg-transparent border-none outline-none"
                value="09:00"
                onChange={(e) => handleInputChange("time", e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <label className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
            Event Type
          </label>

          <div className="relative self-stretch w-full">
            <select
              className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] appearance-none focus:outline-none focus:border-[#09215e] transition-colors"
              value={formData.eventType}
              onChange={(e) => handleInputChange("eventType", e.target.value)}
            >
              <option value="Please select" disabled>
                Please select
              </option>
              <option value="Meeting">Meeting</option>
              <option value="Conference">Conference</option>
              <option value="Workshop">Workshop</option>
              <option value="Webinar">Webinar</option>
              <option value="Social">Social</option>
            </select>

            <div className="absolute right-3.5 top-1/2 transform -translate-y-1/2 w-[18px] h-[18px] pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <label className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
            Location
          </label>

          <input
            type="text"
            className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb] [font-family:'Manrope-Regular',Helvetica] font-normal text-base tracking-[-0.29px] leading-[normal] focus:outline-none focus:border-[#09215e] transition-colors"
            placeholder="Enter location"
            value={formData.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
          />
        </div>

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <label className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]">
            Attendees
          </label>

          <input
            type="text"
            className="flex items-center gap-2.5 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#dbdbdb] [font-family:'Manrope-Regular',Helvetica] font-normal text-base tracking-[-0.29px] leading-[normal] focus:outline-none focus:border-[#09215e] transition-colors"
            placeholder="Enter attendee"
            value={formData.attendees}
            onChange={(e) => handleInputChange("attendees", e.target.value)}
          />
        </div>
        </div>
      </section>
    </div>
  );
};
