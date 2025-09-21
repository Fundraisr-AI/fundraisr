import stringUtils from "@/utils/stringUtils";
import { v4 as uuidv4 } from "uuid";

import VerficationTokenDao from "@/dao/VerficationTokenDao";

export default class VerificationTokenImpl {
  id: string = "";
  email: string = "";
  token: string = "";
  expires: string = "";

  initFromDataObject(data: any) {
    if (!stringUtils.isUndefinedEmptyorNull(data.id)) {
      this.id = data.id;
    }

    if (!stringUtils.isUndefinedEmptyorNull(data.email)) {
      this.email = data.email;
    }

    if (!stringUtils.isUndefinedEmptyorNull(data.token)) {
      this.token = data.token;
    }

    if (!stringUtils.isUndefinedEmptyorNull(data.expires)) {
      this.expires = data.expires;
    }
  }

  async generateVerificationToken(email: string) {
    // GENERATING TOKEN AND INSERTING INTO DATABASE

    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 3600 * 1000);

    const verficationTokenDao = new VerficationTokenDao();
    const existingToken: any =
      await verficationTokenDao.getVerificationTokenByEmail(email);

    if (existingToken) {
      this.initFromDataObject(existingToken);
      await verficationTokenDao.deleteVerificationTokenById(this.id);
    }

    const verficationToken = await verficationTokenDao.create(
      email,
      token,
      expires
    );
    this.initFromDataObject(verficationToken);
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  getEmail() {
    return this.email;
  }

  getId() {
    return this.id;
  }

  isTokenExpired() {
    return new Date(this.expires) < new Date();
  }
}
