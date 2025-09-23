import { UserDetails } from "@/dbtype";
import { UserDetailsState } from "../slices/UserDetailsSlice";

export default class UserDetailsImpl implements UserDetailsState {
  id: string = "";
  companyName?: string | undefined;
  smartLeadsId?: string | undefined;
  createdAt: string = "";
  updatedAt: string = "";
  loading: boolean = false;
  fundraisingTarget: number = 0;
  capitalCommitted: number = 0;

  initFromDB(data: UserDetails) {
    if (data.id) {
      this.id = data.id;
    }

    if (data.companyName) {
      this.companyName = data.companyName;
    }

    if (data.smartLeadsId) {
      this.smartLeadsId = data.smartLeadsId;
    }

    if (data.fundraisingTarget) {
      this.fundraisingTarget = data.fundraisingTarget;
    }

    if (data.capitalCommitted) {
      this.capitalCommitted = data.capitalCommitted;
    }
  }
}
