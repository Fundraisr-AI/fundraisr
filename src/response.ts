export type GetAllCampaignStatusByUserResponse = {
  id: string;
  name: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  smartLeadsId: string;
  userDetailsId: string;
  geography: string;
  leadList: string;
  investor: string;
  copy: string;
};

export type GetCampaignInvestorTypeDistributionMetricsResponse = {
  totalActiveCampaigns: number;
  totalLeads: number;
  positiveReplied: number;
  meetingsBooked: number;
  replyRate: number;
  positive: number;
};
