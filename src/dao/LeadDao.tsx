import prisma from "@/lib/prisma";
export default class LeadDao {
  async getAllLeadsByUserId(userId: string) {
    try {
      const leads = await prisma.lead.findMany({
        where: {
          campaign: {
            userDetails: {
              userId: userId,
            },
          },
        },
        orderBy: {
          updatedAt: "desc", // most recently updated first
        },
      });

      return leads;
    } catch (e) {
      return e;
    }
  }

  async getDealMetricsByUserId(userId: string) {
    try {
      const statusCounts = await prisma.lead.groupBy({
        by: ["status"],
        _count: { _all: true },
        where: {
          status: { in: ["INTERESTED", "MEETING_BOOKED"] },
          campaign: {
            userDetails: {
              userId: userId, // filter leads belonging to this user
            },
          },
        },
      });
      const metrics = statusCounts.reduce<
        Record<"INTERESTED" | "MEETING_BOOKED", number>
      >(
        (acc, row) => {
          acc[row.status as "INTERESTED" | "MEETING_BOOKED"] = row._count._all;
          return acc;
        },
        { INTERESTED: 0, MEETING_BOOKED: 0 }
      );
      return metrics;
    } catch (e) {
      return e;
    }
  }
}
