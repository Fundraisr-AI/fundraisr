import errorHandler from "@/helpers/errorHandler";
import jsonUtilsImpl from "@/utils/jsonUtils";

export default class UserDao {
  async create(name: string, password: string, email: string) {
    try {
      const userJson: any = {
        name: name,
        password: password,
        email: email,
      };

      const result = await prisma.user.create({
        data: userJson,
      });

      return result;
    } catch (e) {
      return e;
    }
  }

  async getUserByEmail(email: string) {
    try {
      const whereJson = {
        email: email,
      };

      const finalQuery = {
        where: whereJson,
      };
      const result = await prisma.user.findUnique(finalQuery);
      return result;
    } catch (e: any) {
      const error = new errorHandler();
      error.internalServerError("Email does not found");
      return error.generateError();
    }
  }

  async isEmailexists(email: string) {
    const result = await this.getUserByEmail(email);
    return !jsonUtilsImpl.isEmpty(result) === true;
  }
}
