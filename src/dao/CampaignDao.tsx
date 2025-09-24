import prisma from "@/lib/prisma";
import { CampaignFilters, CampaignMetrics } from "@/types";
export default class CampaignDao {
  async getAllCampaignsByUserId(userId: string, filters: CampaignFilters) {
    try {
      const campaigns = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          details: {
            include: {
              campaigns: {
                where: {
                  ...(filters?.status
                    ? { status: { in: filters.status, mode: "insensitive" } }
                    : {}),
                  ...(filters?.geography
                    ? {
                        geography: {
                          in: filters.geography,
                          mode: "insensitive",
                        },
                      }
                    : {}),
                },
                orderBy: { updatedAt: "desc" },
              },
            },
          },
        },
      });

      return campaigns;
    } catch (e) {
      return e;
    }
  }

  async getAllMetrics(userId: string) {
    try {
      // Define the type of SQL result

      const data = await prisma.$queryRaw<CampaignMetrics[]>`
        SELECT 
          c.id AS campaign_id,
          c.name AS campaign_name,
          c.status AS campaign_status,
          COUNT(l.id) AS total_leads,
          COUNT(CASE WHEN l.is_replied THEN 1 END) AS replied,
          COUNT(CASE WHEN l.status IN ('INTERESTED', 'MEETING_BOOKED', 'VC_MANUAL_APPLICATION', 'MEETING_REQUESTED', 'INFORMATION_REQUEST') THEN 1 END) AS positive,
          COUNT(CASE WHEN l.status = 'MEETING_BOOKED' THEN 1 END) AS meetings_booked,
          CASE WHEN COUNT(l.id) > 0 THEN 
            ROUND(100.0 * COUNT(CASE WHEN l.is_replied THEN 1 END) / COUNT(l.id), 2)
          ELSE 0 END AS reply_rate
        FROM "Campaign" c
        LEFT JOIN "Lead" l ON l."campaignId" = c.id
        WHERE c."userDetailsId" = (
          SELECT id FROM "UserDetails" WHERE "userId" = ${userId}
        )
        GROUP BY c.id, c.name, c.status, c."createdAt"
        ORDER BY c."createdAt" DESC
      `;

      const finalResult = {
        activeCampaigns: data.filter(
          (c) => c.campaign_status?.toLowerCase() === "active"
        ).length,
        totalLeads: data.reduce((sum, c) => sum + Number(c.total_leads), 0),
        positiveReplied: data.reduce((sum, c) => sum + Number(c.positive), 0),
        meetingsBooked: data.reduce(
          (sum, c) => sum + Number(c.meetings_booked),
          0
        ),
        campaigns: data.map((c) => ({
          name: c.campaign_name,
          status: c.campaign_status ?? "",
          totalLeads: Number(c.total_leads),
          replyRate: Number(c.reply_rate),
          positive: Number(c.positive),
        })),
      };

      return finalResult;
    } catch (e) {
      console.error(e);
      throw e; // better than returning e for type safety
    }
  }

  async getInvestorTypeDistributionMetrics(userId: string) {
    try {
      const stats = await prisma.userDetails.findMany({
        select: {
          id: true,
          companyName: true,

          // number of campaigns for this investor
          _count: {
            select: { campaigns: true },
          },

          campaigns: {
            select: {
              id: true,
              status: true,
              investor: true,
              geography: true,
              // metrics across all leads of this campaign
              _count: {
                select: {
                  leads: true, // total contacts
                },
              },
              leads: {
                select: {
                  status: true,
                },
              },
            },
          },
        },
        where: {
          user: { id: userId },
        },
      });
      return stats;
    } catch (e) {
      console.error(e);
      throw e; // better than returning e for type safety
    }
  }

  async getGeographyDistributionMetrics(userId: string) {
    try {
      const campaigns = await prisma.userDetails.findMany({
        select: {
          id: true,
          companyName: true,

          // number of campaigns for this investor
          _count: {
            select: { campaigns: true },
          },

          campaigns: {
            select: {
              id: true,
              status: true,
              geography: true,
              // metrics across all leads of this campaign
              _count: {
                select: {
                  leads: true, // total contacts
                },
              },
            },
          },
        },
        where: {
          user: { id: userId },
        },
      });

      return campaigns;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async getCampaignLeadStatusBreakdown(userId: string) {
    try {
      const campaigns = await prisma.campaign.findMany({
        where: { userDetails: { userId } },
        orderBy: { updatedAt: "desc" },
        select: {
          id: true,
          name: true,
          status: true,
          geography: true,
          investor: true,
        },
      });

      const campaignIds = campaigns.map((c) => c.id);

      if (campaignIds.length === 0) return [];

      // Step 2: Group leads by campaignId and status
      const leadGroups = await prisma.lead.groupBy({
        by: ["campaignId", "status"],
        where: { campaignId: { in: campaignIds } },
        _count: { _all: true }, // count of leads for each campaignId + status
      });

      // Step 3: Map grouped leads into a structured object per campaign
      const campaignStats = campaigns.map((c) => {
        // filter all leadGroups for this campaign
        const leadsForCampaign = leadGroups.filter(
          (lg) => lg.campaignId === c.id
        );

        // map status -> count
        const statusCounts: Record<string, number> = {};
        leadsForCampaign.forEach((lg) => {
          statusCounts[lg.status] = lg._count._all;
        });

        return {
          ...c,
          totalLeads: leadsForCampaign.reduce(
            (sum, lg) => sum + lg._count._all,
            0
          ),
          leadsByStatus: statusCounts,
        };
      });
      return campaignStats;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}

// Postivie Reply
