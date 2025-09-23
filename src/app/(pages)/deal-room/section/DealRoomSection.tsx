"use client";
import {
  ArrowUpDownIcon,
  CalendarIcon,
  ChevronDownIcon,
  FilterIcon,
  MoreHorizontalIcon,
  SearchIcon,
  UploadIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import {
  fetchDocuments,
  uploadDocument,
} from "@/features/slices/documentSlice";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const getFileTypeIcon = (fileType: string) => {
  switch (fileType?.toLowerCase()) {
    case "xlsx":
    case "xls":
    case "csv":
      return "📊";
    case "pdf":
      return "📄";
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "svg":
    case "webp":
      return "🖼️";
    case "doc":
    case "docx":
      return "📝";
    case "txt":
      return "📄";
    case "zip":
    case "rar":
    case "7z":
      return "📦";
    case "mp4":
    case "avi":
    case "mov":
      return "🎥";
    case "mp3":
    case "wav":
    case "flac":
      return "🎵";
    default:
      return "📄";
  }
};

const getFileTypeColor = (fileType: string) => {
  switch (fileType?.toLowerCase()) {
    case "xlsx":
    case "xls":
    case "csv":
      return "bg-[#17a34a29] text-[#17a34a]";
    case "pdf":
      return "bg-[#5b21b629] text-[#5b21b6]";
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "svg":
    case "webp":
      return "bg-[#f59e0b29] text-[#f59e0b]";
    case "doc":
    case "docx":
      return "bg-[#2563eb29] text-[#2563eb]";
    case "txt":
      return "bg-gray-100 text-gray-600";
    case "zip":
    case "rar":
    case "7z":
      return "bg-[#7c3aed29] text-[#7c3aed]";
    case "mp4":
    case "avi":
    case "mov":
      return "bg-[#dc262629] text-[#dc2626]";
    case "mp3":
    case "wav":
    case "flac":
      return "bg-[#059e6729] text-[#059669]";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export const DealRoomSection = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { documents, isLoading, isUploading, error } = useSelector(
    (state: RootState) => state.documents
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    dispatch(fetchDocuments());
  }, [dispatch]);

  const uploadFile = async (file: File) => {
    try {
      await dispatch(uploadDocument(file)).unwrap();
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload file. Please try again.");
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach(uploadFile);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files) {
      Array.from(files).forEach(uploadFile);
    }
  };

  return (
    <section className="flex-1 flex flex-col bg-white rounded-[20px_0px_0px_0px] overflow-hidden border border-solid border-[#eaeaea]">
      <header className="flex mx-5 h-[53px] relative mt-5 items-center justify-between">
        <div className="flex flex-col w-[422px] items-start gap-0.5 relative">
          <h1 className="self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-xl leading-[30px] relative tracking-[0]">
            Deal Room
          </h1>

          <p className="self-stretch relative [font-family:'Manrope',Helvetica] font-normal text-[#4f5059] text-sm tracking-[0] leading-[21px]">
            Track And Manage Your Fundraising Opportunities
          </p>
        </div>

        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <div className="relative w-[332px] h-[37px] bg-white rounded-lg overflow-hidden border border-solid border-[#eaeaea]">
            <div className="relative top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_156px)] w-[117px] flex gap-2.5">
              <SearchIcon className="w-5 h-5 text-[#4f5059]" />
              <input
                type="search"
                placeholder="Search files..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[85px] h-5 [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-sm tracking-[-0.31px] leading-5 bg-transparent border-none outline-none"
              />
            </div>
          </div>
        </div>
      </header>

      <Card className="mx-[19px] mt-5 p-5 border border-solid border-[#eaeaea] rounded-[20px]">
        <CardContent className="p-0 space-y-5">
          <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
              <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                Attached Files
              </h2>

              <p className="w-fit [font-family:'Manrope',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative tracking-[0]">
                Files And Assets That Have Been Attached To This Project
              </p>
            </div>
          </div>

          <div
            className={`flex flex-col items-center gap-6 px-8 py-12 relative self-stretch w-full flex-[0_0_auto] bg-[#fbfbfb] rounded-2xl overflow-hidden border border-dashed border-[#4f5059] transition-colors ${
              isUploading
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer hover:bg-gray-50"
            }`}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() =>
              !isUploading && document.getElementById("file-upload")?.click()
            }
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (!isUploading && (e.key === "Enter" || e.key === " ")) {
                document.getElementById("file-upload")?.click();
              }
            }}
            aria-label="Drop files here or click to upload"
          >
            <div className="flex flex-col w-full max-w-[274px] items-center gap-4 relative flex-[0_0_auto]">
              <UploadIcon className="w-8 h-8 text-[#4f5059]" />

              <div className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-base text-center tracking-[-0.32px] leading-6">
                  {isUploading
                    ? "Uploading..."
                    : "Drop File Here or Click To Upload"}
                </p>

                <p className="w-fit whitespace-nowrap relative [font-family:'Manrope',Helvetica] font-normal text-[#4f5059] text-sm tracking-[0] leading-[21px]">
                  Supports Any File Type • Max 10mb Per File
                </p>
              </div>
            </div>

            <Button
              type="button"
              disabled={isUploading}
              className="inline-flex h-10 items-center justify-center gap-2 px-3 py-2 relative bg-[#09215e] rounded-lg hover:bg-[#0a1a4a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={(e) => {
                e.stopPropagation();
                if (!isUploading) {
                  document.getElementById("file-upload")?.click();
                }
              }}
            >
              <UploadIcon className="w-[18px] h-[18px] text-white" />
              <span className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-white text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                {isUploading ? "Uploading..." : "Browse Files"}
              </span>
            </Button>

            <input
              id="file-upload"
              type="file"
              multiple
              disabled={isUploading}
              onChange={handleFileUpload}
              className="hidden"
              accept="*/*"
              aria-label="Upload files"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="mx-[19px] mt-[22px] mb-5 p-5 border border-solid border-[#eaeaea] rounded-[20px] flex-1">
        <CardContent className="p-0 h-full flex flex-col space-y-5">
          <div className="justify-between self-stretch w-full flex-[0_0_auto] flex relative items-center">
            <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
              <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                Attached Files
              </h2>

              <p className="w-fit [font-family:'Manrope',Helvetica] font-normal text-[#4f5059] text-xs leading-[16.8px] whitespace-nowrap relative tracking-[0]">
                Files And Assets That Have Been Attached To This Project
              </p>
            </div>

            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
              <div className="relative w-[332px] h-[37px] bg-white rounded-lg overflow-hidden border border-solid border-[#eaeaea]">
                <div className="relative top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_156px)] w-[117px] flex gap-2.5">
                  <SearchIcon className="w-5 h-5 text-[#4f5059]" />
                  <input
                    type="search"
                    placeholder="Search files..."
                    className="w-[85px] h-5 [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-sm tracking-[-0.31px] leading-5 bg-transparent border-none outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="justify-between self-stretch w-full flex-[0_0_auto] flex relative items-center">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="inline-flex items-center p-0.5 relative flex-[0_0_auto] bg-[#fbfbfb] rounded-lg border border-solid border-[#eaeaea]"
            >
              <TabsList className="bg-transparent p-0 h-auto">
                <TabsTrigger
                  value="all"
                  className="flex w-[159px] items-center justify-center gap-2.5 px-4 py-2 relative rounded-md data-[state=active]:bg-white data-[state=active]:border data-[state=active]:border-[#eaeaea] data-[state=active]:font-semibold data-[state=active]:text-[#272a34] [font-family:'Manrope',Helvetica] font-medium text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap"
                >
                  All Files
                </TabsTrigger>

                <TabsTrigger
                  value="your"
                  className="flex w-[156px] items-center justify-center gap-2.5 px-4 py-1.5 relative data-[state=active]:font-semibold data-[state=active]:text-[#272a34] [font-family:'Manrope',Helvetica] font-medium text-[#7b7f93] text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap"
                >
                  Your Files
                </TabsTrigger>

                <TabsTrigger
                  value="shared"
                  className="flex w-[157px] items-center justify-center gap-2.5 px-4 py-1.5 relative data-[state=active]:font-semibold data-[state=active]:text-[#272a34] [font-family:'Manrope',Helvetica] font-medium text-[#7b7f93] text-sm tracking-[-0.28px] leading-[19.6px] whitespace-nowrap"
                >
                  Shared Files
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="inline-flex h-10 items-center gap-3 px-3 py-2 relative flex-[0_0_auto] rounded-lg border-[0.5px] border-solid border-[#d9dadb] hover:bg-gray-50 transition-colors"
                  >
                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <ArrowUpDownIcon className="relative w-4 h-4 text-[#4f5059]" />
                      <span className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                        Sort
                      </span>
                    </div>
                    <ChevronDownIcon className="relative w-3 h-3 text-[#4f5059]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Name A-Z</DropdownMenuItem>
                  <DropdownMenuItem>Name Z-A</DropdownMenuItem>
                  <DropdownMenuItem>Date Modified</DropdownMenuItem>
                  <DropdownMenuItem>File Size</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="inline-flex h-10 items-center gap-3 px-3 py-2 relative flex-[0_0_auto] rounded-lg border-[0.5px] border-solid border-[#d9dadb] hover:bg-gray-50 transition-colors"
                  >
                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <FilterIcon className="relative w-4 h-4 text-[#4f5059]" />
                      <span className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                        Filter
                      </span>
                    </div>
                    <ChevronDownIcon className="relative w-3 h-3 text-[#4f5059]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>All File Types</DropdownMenuItem>
                  <DropdownMenuItem>Documents</DropdownMenuItem>
                  <DropdownMenuItem>Images</DropdownMenuItem>
                  <DropdownMenuItem>Spreadsheets</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="inline-flex h-10 items-center gap-3 px-3 py-2 relative flex-[0_0_auto] rounded-lg border-[0.5px] border-solid border-[#d9dadb] hover:bg-gray-50 transition-colors"
                  >
                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <CalendarIcon className="relative w-4 h-4 text-[#4f5059]" />
                      <span className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                        This Week
                      </span>
                    </div>
                    <ChevronDownIcon className="relative w-3 h-3 text-[#4f5059]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Today</DropdownMenuItem>
                  <DropdownMenuItem>This Week</DropdownMenuItem>
                  <DropdownMenuItem>This Month</DropdownMenuItem>
                  <DropdownMenuItem>All Time</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="flex flex-col w-full items-start relative flex-1 overflow-hidden">
            <div className="flex h-11 items-center relative self-stretch w-full bg-[#eef1f4]">
              <div className="relative self-stretch w-[57.5px] flex items-center justify-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  aria-label="Select all files"
                />
              </div>

              <div className="flex items-center gap-3 px-4 py-0 relative flex-1 self-stretch grow border border-solid border-[#d0d5dd]">
                <span className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#3b4c63] text-xs tracking-[0.24px] leading-[18px] whitespace-nowrap">
                  FILE NAME
                </span>
              </div>

              <div className="flex w-[137px] items-center gap-2.5 px-4 py-0 relative self-stretch border border-solid border-[#d0d5dd]">
                <span className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#3b4c63] text-xs tracking-[0.24px] leading-[18px] whitespace-nowrap">
                  FILE SIZE
                </span>
              </div>

              <div className="flex w-[137px] items-center gap-2.5 px-4 py-0 relative self-stretch border border-solid border-[#d0d5dd]">
                <span className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#3b4c63] text-xs tracking-[0.24px] leading-[18px] whitespace-nowrap">
                  DATE UPLOADED
                </span>
              </div>

              <div className="flex w-[137px] items-center gap-2.5 px-4 py-0 relative self-stretch border border-solid border-[#d0d5dd]">
                <span className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#3b4c63] text-xs tracking-[0.24px] leading-[18px] whitespace-nowrap">
                  SHARED
                </span>
              </div>

              <div className="flex w-[238px] items-center gap-3 px-4 py-0 relative self-stretch border border-solid border-[#d0d5dd]">
                <span className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-[#3b4c63] text-xs tracking-[0.24px] leading-[18px] whitespace-nowrap">
                  UPLOADED BY
                </span>
              </div>

              <div className="w-[59px] border border-solid border-[#d0d5dd] relative self-stretch" />
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="text-[#4f5059]">Loading documents...</div>
              </div>
            ) : documents.length === 0 ? (
              <div className="flex items-center justify-center py-8">
                <div className="text-[#4f5059]">No documents uploaded yet.</div>
              </div>
            ) : (
              documents.map((file) => (
                <div
                  key={file.id}
                  className="flex h-[72px] items-center relative self-stretch w-full hover:bg-gray-50 transition-colors"
                >
                  <div className="relative self-stretch w-[57.5px] flex items-center justify-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      aria-label={`Select ${file?.name}`}
                    />
                  </div>

                  <div className="flex items-center gap-3 px-4 py-0 relative flex-1 self-stretch grow border border-solid border-[#e9eaec]">
                    <div
                      className={`flex w-10 h-10 items-center justify-center gap-2.5 px-1.5 py-1 relative rounded-[100px] overflow-hidden text-xl ${getFileTypeColor(file?.fileType)}`}
                    >
                      {getFileTypeIcon(file?.fileType)}
                    </div>

                    <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
                      <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#041824] text-base tracking-[0] leading-5 whitespace-nowrap">
                        {file?.name}
                      </div>

                      <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] whitespace-nowrap">
                          {file?.size}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-[137px] items-center gap-2.5 px-4 py-2.5 relative self-stretch border border-solid border-[#e9eaec]">
                    <div className="[font-family:'Manrope',Helvetica] font-normal text-[#3b4c63] text-sm tracking-[-0.56px] leading-[19.6px] relative w-fit whitespace-nowrap">
                      {file?.size}
                    </div>
                  </div>

                  <div className="flex w-[137px] items-center gap-2.5 px-4 py-2.5 relative self-stretch border border-solid border-[#e9eaec]">
                    <div className="[font-family:'Manrope',Helvetica] font-normal text-[#777777] text-sm tracking-[-0.56px] leading-[19.6px] relative w-fit whitespace-nowrap">
                      {file?.dateUploaded}
                    </div>
                  </div>

                  <div className="flex w-[137px] items-center gap-2.5 px-4 py-2.5 relative self-stretch border border-solid border-[#e9eaec]">
                    <div className="[font-family:'Manrope',Helvetica] font-normal text-[#777777] text-sm tracking-[-0.56px] leading-[19.6px] relative w-fit whitespace-nowrap">
                      {file?.shared}
                    </div>
                  </div>

                  <div className="flex w-[238px] items-center gap-3 px-4 py-0 relative self-stretch border border-solid border-[#e9eaec]">
                    <Avatar className="w-10 h-10">
                      <AvatarImage
                        src={file?.uploadedBy?.avatar}
                        alt={`${file.uploadedBy?.name} profile`}
                        className="object-cover"
                      />
                      <AvatarFallback>
                        {file?.uploadedBy?.name
                          .split(" ")
                          .map((n: string) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
                      <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#111111] text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                        {file?.uploadedBy?.name}
                      </div>

                      <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                        <div className="mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-[#777777] text-xs tracking-[0] leading-[18px] relative w-fit whitespace-nowrap">
                          {file?.uploadedBy?.email}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[57.5px] relative self-stretch flex items-center justify-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0 h-auto w-auto"
                        >
                          <MoreHorizontalIcon className="w-[18px] h-[18px] text-[#4f5059]" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Download</DropdownMenuItem>
                        <DropdownMenuItem>Share</DropdownMenuItem>
                        <DropdownMenuItem>Rename</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
