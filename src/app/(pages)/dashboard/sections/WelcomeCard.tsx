// import image from "./image.svg";
// import line116 from "./line-116.svg";
// import vector from "./vector.svg";
// import { Button } from "@/components/ui/button";

// interface WelcomeCardProps {
//   name: string;
//   fundraisingTarget: number;
//   committedCapital: number;
// }

// export const WelcomeCard = ({
//   name,
//   fundraisingTarget,
//   committedCapital,
// }: WelcomeCardProps): JSX.Element => {
//   // Data for the chart bars
//   const chartBars = Array.from({ length: 72 }, (_, index) => index);

//   // Calculate dynamic values
//   const percentage = Math.round((committedCapital / fundraisingTarget) * 100);
//   const remaining = fundraisingTarget - committedCapital;

//   return (
//     <div className="flex w-full max-w-none items-start gap-10 p-5 relative bg-[#FBFBFB] rounded-[20px] overflow-hidden border border-solid border-[#EBEBEB]">
//       <div className="flex flex-col w-[500px] items-start gap-4 relative">
//         <div className="relative w-[66px] h-16">
//           <div className="absolute top-0 left-0 w-16 h-16 bg-[#e5effa] rounded-xl aspect-[1]" />

//           <div className="absolute top-[calc(50.00%_-_24px)] left-[calc(50.00%_-_18px)] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-[48px] whitespace-nowrap">
//             👋
//           </div>
//         </div>

//         <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
//           <div className="self-stretch mt-[-1.00px] text-[#4f5059] text-sm leading-[19.6px] relative [font-family:'Manrope-SemiBold',Helvetica] font-semibold tracking-[0]">
//             {new Date().toLocaleDateString("en-US", {
//               weekday: "long",
//               month: "long",
//               day: "numeric",
//             })}
//           </div>

//           <div className="w-fit text-[#111111] text-[26px] leading-[39px] whitespace-nowrap relative [font-family:'Manrope-SemiBold',Helvetica] font-semibold tracking-[0]">
//             {(() => {
//               const hour = new Date().getHours();
//               if (hour >= 5 && hour < 12) {
//                 return `Good morning, ${name}`;
//               } else if (hour >= 12 && hour < 17) {
//                 return `Good afternoon, ${name}`;
//               } else {
//                 return `Good evening, ${name}`;
//               }
//             })()}
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col items-start gap-4 relative flex-1 grow">
//         <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
//           <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
//             <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
//               <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
//                 Fundraising Target
//               </div>
//             </div>

//             <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
//               <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#111111] text-3xl tracking-[-0.60px] leading-[45px] whitespace-nowrap">
//                 ${fundraisingTarget?.toLocaleString()}
//               </div>

//               <div className="relative w-6 h-6 aspect-[1]">
//                 <img
//                   className="absolute w-[78.12%] h-[78.13%] top-[9.37%] left-[12.50%]"
//                   alt="Vector"
//                   src={vector}
//                 />
//               </div>
//             </div>
//           </div>

//           <Button
//             variant="outline"
//             className="h-8 px-3 py-2 rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
//           >
//             <span className="[font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px]">
//               See all
//             </span>
//           </Button>
//         </div>

//         <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
//           <div className="relative w-[75%] h-[95px]">
//             <div className="absolute top-0 left-0 w-full h-[26px] bg-[#888ae8] border border-solid" />

//             <img
//               className="absolute top-[26px] left-0 w-0.5 h-[69px]"
//               alt="Line"
//               src={line116}
//             />

//             <div className="flex w-[197px] left-[17px] flex-col items-start justify-center gap-0.5 absolute top-[38px]">
//               <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
//                 ${committedCapital?.toLocaleString()}
//               </div>

//               <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
//                 <div className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
//                   Capital Committed
//                 </div>

//                 <div className="inline-flex h-5 items-center justify-center gap-2.5 px-1 py-0.5 relative flex-[0_0_auto] bg-[#b3bdbf29] rounded">
//                   <div className="relative w-fit mt-[-1.50px] mb-[-0.50px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#848986] text-xs text-center tracking-[0] leading-[18px] whitespace-nowrap">
//                     {percentage}%
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="relative w-[25%] h-[95px]">
//             <div className="flex w-full items-start gap-[1.5px] absolute top-0 left-0">
//               {chartBars.map((_, index) => (
//                 <div
//                   key={index}
//                   className="relative w-[1.5px] h-[26px] bg-[#50a57c]"
//                 />
//               ))}
//             </div>

//             <img
//               className="absolute top-[26px] left-0 w-0.5 h-[69px]"
//               alt="Line"
//               src={image}
//             />

//             <div className="inline-flex left-3 flex-col items-start justify-center gap-0.5 absolute top-[38px]">
//               <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
//                 ${remaining.toLocaleString()}
//               </div>

//               <div className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
//                 Remaining
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import { Edit3 } from "lucide-react";
import image from "./image.svg";
import line116 from "./line-116.svg";
import vector from "./vector.svg";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { selectUser } from "@/features/slices/UserSlice";
import { selectCampaign } from "@/features/slices/CampaignSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import UserDao from "@/dao/UserDao";
import UserDetailsImpl from "@/features/logic/UserDetailsImpl";
import prisma from "@/lib/prisma";

interface WelcomeCardProps {
  name: string;
  fundraisingTarget: number;
  committedCapital: number;
}

export const WelcomeCard = ({
  name,
  fundraisingTarget,
  committedCapital,
}: WelcomeCardProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectUser);
  const campaigns = useSelector(selectCampaign);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [fundraisingData, setFundraisingData] = useState({
    target: fundraisingTarget,
    committed: committedCapital,
    remaining: fundraisingTarget - committedCapital,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const percentage = (fundraisingData.committed / fundraisingData.target) * 100;
  const isOverTarget = percentage > 100;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Update fundraising data when props change
  useEffect(() => {
    setFundraisingData({
      target: fundraisingTarget,
      committed: committedCapital,
      remaining: fundraisingTarget - committedCapital,
    });
  }, [fundraisingTarget, committedCapital]);

  const handleSave = async () => {
    try {
      setIsSaving(true);

      const response = await fetch('/api/user-details', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fundraisingTarget: fundraisingData.target,
          capitalCommitted: fundraisingData.committed,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        // Close the modal on successful save
        setIsEditModalOpen(false);
        // Update the remaining amount
        setFundraisingData(prev => ({
          ...prev,
          remaining: prev.target - prev.committed,
        }));
      } else {
        const error = await response.json();
        console.error('Failed to save user details:', error);
        // You could add a toast notification here if you have one implemented
        alert('Failed to save changes. Please try again.');
      }
    } catch (error) {
      console.error('Error saving user details:', error);
      alert('Failed to save changes. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  // Data for the chart bars
  const chartBars = Array.from({ length: 72 }, (_, index) => index);

  return (
    <>
      <div className="flex w-full max-w-none items-start gap-10 p-5 relative bg-[#FBFBFB] rounded-[20px] overflow-hidden border border-solid border-[#EBEBEB]">
        <div className="flex flex-col w-[500px] items-start gap-4 relative">
          <div className="relative w-[66px] h-16">
            <div className="absolute top-0 left-0 w-16 h-16 bg-[#e5effa] rounded-xl aspect-[1]" />
            <div className="absolute top-[calc(50.00%_-_24px)] left-[calc(50.00%_-_18px)] [font-family:'Manrope'] font-semibold text-black text-[32px] tracking-[0] leading-[48px] whitespace-nowrap">
              👋
            </div>
          </div>

          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="self-stretch mt-[-1.00px] text-[#4f5059] text-sm leading-[19.6px] relative [font-family:'Manrope'] font-semibold tracking-[0]">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="w-fit text-[#111111] text-[26px] leading-[39px] whitespace-nowrap relative [font-family:'Manrope'] font-semibold tracking-[0]">
              {(() => {
                const hour = new Date().getHours();
                if (hour >= 5 && hour < 12) {
                  return `Good morning, ${name}`;
                } else if (hour >= 12 && hour < 17) {
                  return `Good afternoon, ${name}`;
                } else {
                  return `Good evening, ${name}`;
                }
              })()}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 relative flex-1 grow">
          <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start justify-center gap-0.5 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope'] font-medium text-[#4f5059] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                  Fundraising Target
                </div>
              </div>

              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope'] font-bold text-[#111111] text-3xl tracking-[-0.60px] leading-[45px] whitespace-nowrap">
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 border-2 border-gray-300 border-t-[#09215e] rounded-full animate-spin"></div>
                      <span className="text-gray-400 text-xl">Loading...</span>
                    </div>
                  ) : (
                    formatCurrency(fundraisingData.target)
                  )}
                </div>

                {!isLoading && (
                  <button
                    onClick={() => setIsEditModalOpen(true)}
                    className="relative w-6 h-6 aspect-[1] hover:bg-gray-100 rounded-md transition-colors flex items-center justify-center"
                  >
                    <Edit3 className="w-4 h-4 text-[#4f5059] hover:text-[#111111]" />
                  </button>
                )}
              </div>
            </div>

            <Button
              variant="outline"
              className="h-8 px-3 py-2 rounded-lg border-[0.5px] border-solid border-[#d9dadb]"
            >
              <span className="[font-family:'Manrope'] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px]">
                See all
              </span>
            </Button>
          </div>

          <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-[75%] h-[95px]">
              <div className="absolute top-0 left-0 w-full h-[26px] bg-[#888ae8] border border-solid" />
              <img
                className="absolute top-[26px] left-0 w-0.5 h-[69px]"
                alt="Line"
                src={line116}
              />

              <div className="flex w-[197px] left-[17px] flex-col items-start justify-center gap-0.5 absolute top-[38px]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope'] font-bold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-gray-300 border-t-[#09215e] rounded-full animate-spin"></div>
                  ) : (
                    formatCurrency(fundraisingData.committed)
                  )}
                </div>

                <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit [font-family:'Manrope'] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                    Capital Committed
                  </div>

                  {!isLoading && (
                    <div
                      className={`inline-flex h-5 items-center justify-center gap-2.5 px-1 py-0.5 relative flex-[0_0_auto] rounded ${
                        isOverTarget ? "bg-green-100" : "bg-purple-100"
                      }`}
                    >
                      <div
                        className={`relative w-fit mt-[-1.50px] mb-[-0.50px] [font-family:'Manrope'] font-semibold text-xs text-center tracking-[0] leading-[18px] whitespace-nowrap ${
                          isOverTarget ? "text-green-800" : "text-purple-800"
                        }`}
                      >
                        {percentage.toFixed(1)}%
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="relative w-[25%] h-[95px]">
              <div className="flex w-full items-start gap-[1.5px] absolute top-0 left-0">
                {chartBars.map((_, index) => (
                  <div
                    key={index}
                    className="relative w-[1.5px] h-[26px] bg-[#50a57c]"
                  />
                ))}
              </div>

              <img
                className="absolute top-[26px] left-0 w-0.5 h-[69px]"
                alt="Line"
                src={image}
              />

              <div className="inline-flex left-3 flex-col items-start justify-center gap-0.5 absolute top-[38px]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope'] font-bold text-[#111111] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-gray-300 border-t-[#09215e] rounded-full animate-spin"></div>
                  ) : (
                    formatCurrency(fundraisingData.remaining)
                  )}
                </div>

                <div className="relative w-fit [font-family:'Manrope'] font-medium text-[#4f5059] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
                  Remaining
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Fundraising Target Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => !isSaving && setIsEditModalOpen(false)}
          />
          <div className="relative bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-[#111111] [font-family:'Manrope'] mb-4">
              Edit Fundraising Target
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#111111] [font-family:'Manrope'] mb-2">
                  Fundraising Target
                </label>
                <input
                  type="number"
                  value={fundraisingData.target}
                  onChange={(e) =>
                    setFundraisingData((prev) => ({
                      ...prev,
                      target: parseInt(e.target.value) || 0,
                    }))
                  }
                  disabled={isSaving}
                  className="w-full px-3 py-2 border border-[#dbdbdb] rounded-lg [font-family:'Manrope'] focus:outline-none focus:border-[#05587a] disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="250000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#111111] [font-family:'Manrope'] mb-2">
                  Capital Committed
                </label>
                <input
                  type="number"
                  value={fundraisingData.committed}
                  onChange={(e) =>
                    setFundraisingData((prev) => ({
                      ...prev,
                      committed: parseInt(e.target.value) || 0,
                    }))
                  }
                  disabled={isSaving}
                  className="w-full px-3 py-2 border border-[#dbdbdb] rounded-lg [font-family:'Manrope'] focus:outline-none focus:border-[#05587a] disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="187500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#111111] [font-family:'Manrope'] mb-2">
                  Remaining
                </label>
                <input
                  type="number"
                  value={fundraisingData.target - fundraisingData.committed}
                  readOnly
                  className="w-full px-3 py-2 border border-[#dbdbdb] rounded-lg [font-family:'Manrope'] bg-gray-50 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#111111] [font-family:'Manrope'] mb-2">
                  Percentage
                </label>
                <div
                  className={`px-3 py-2 rounded-lg text-center font-semibold [font-family:'Manrope'] ${
                    (fundraisingData.committed / fundraisingData.target) * 100 >
                    100
                      ? "bg-green-100 text-green-800"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {(
                    (fundraisingData.committed / fundraisingData.target) *
                    100
                  ).toFixed(1)}
                  %
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsEditModalOpen(false)}
                disabled={isSaving}
                className="px-4 py-2 border border-[#eaeaea] rounded-lg text-[#4f5059] [font-family:'Manrope'] font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="px-4 py-2 bg-[#09215e] text-white rounded-lg [font-family:'Manrope'] font-medium hover:bg-[#0a2668] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSaving && (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                )}
                {isSaving ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
