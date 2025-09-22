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
}
