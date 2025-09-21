export default class CampaignDao {
  async getAllCampaignsByUserId(userId: string) {
    try {
      const campaigns = await prisma.campaign.findMany({
        where: {
          userDetails: {
            user: {
              id: userId,
            },
          },
        },
        orderBy: {
          updatedAt: "desc", // most recently updated first
        },
      });

      return campaigns;
    } catch (e) {
      return e;
    }
  }
}
