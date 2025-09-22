export type CampaignMetrics = {
  campaign_id: string;
  campaign_name: string;
  campaign_status: string | null;
  total_leads: string; // PostgreSQL returns numeric counts as string
  replied: string;
  positive: string;
  meetings_booked: string;
  reply_rate: string;
};
