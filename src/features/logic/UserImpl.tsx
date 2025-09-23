import { UserDetails, UserResponse } from "@/dbtype";
import stringUtils from "@/utils/stringUtils";
import { UserState } from "../slices/UserSlice";

export default class UserImpl implements UserState {
  id: string = "";
  name: string = "";
  email: string = "";
  emailVerified: boolean = false;
  password?: string;
  role?: string;
  image?: string;
  loading: boolean = false;
  details?: UserDetails;
  plan: string = "";
  createdAt: string = "";
  updatedAt: string = "";

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getEmailVerified() {
    return this.emailVerified;
  }

  getPassword() {
    return this.password;
  }

  getImage() {
    return this.image;
  }

  getRole() {
    return this.role;
  }

  initFromDataObject(data: any) {
    if (!stringUtils.isUndefinedEmptyorNull(data.id)) {
      this.id = data.id;
    }

    if (!stringUtils.isUndefinedEmptyorNull(data.name)) {
      this.name = data.name;
    }

    if (!stringUtils.isUndefinedEmptyorNull(data.email)) {
      this.email = data.email;
    }

    if (!stringUtils.isUndefinedEmptyorNull(data.emailVerified)) {
      this.emailVerified = data.emailVerified;
    }

    if (!stringUtils.isUndefinedEmptyorNull(data.password)) {
      this.password = data.password;
    }

    if (!stringUtils.isUndefinedEmptyorNull(data.role)) {
      this.role = data.role;
    }

    if (!stringUtils.isUndefinedEmptyorNull(data.image)) {
      this.image = data.image;
    }
  }

  initFromDB(data: UserResponse) {
    if (data.id) {
      this.id = data.id;
    }

    if (data.name) {
      this.name = data.name;
    }

    if (data.email) {
      this.email = data.email;
    }

    if (data.emailVerified) {
      this.emailVerified = data.emailVerified;
    }

    if (data.image) {
      this.image = data.image;
    }

    if (data.role) {
      this.role = data.role;
    }

    if (data.details) {
      this.details = data.details;
    }
  }

  toJson() {
    // haven't added password to maintian the privacy
    const json: any = {};

    if (!stringUtils.isUndefinedEmptyorNull(this.id)) {
      json["id"] = this.id;
    }

    if (!stringUtils.isUndefinedEmptyorNull(this.name)) {
      json["name"] = this.name;
    }

    if (!stringUtils.isUndefinedEmptyorNull(this.email)) {
      json["email"] = this.email;
    }

    if (!stringUtils.isUndefinedEmptyorNull(this.emailVerified)) {
      json["emailVerified"] = this.emailVerified;
    }

    if (!stringUtils.isUndefinedEmptyorNull(this.image)) {
      json["image"] = this.image;
    }

    return json;
  }
}
