export interface UserResponse {
  id: string;
  name: string;
  email: string;
  emailVerified?: boolean; // ISO date string or null
  password?: string;
  image?: string;
  role?: string;
  plan?: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  details?: UserDetails;
}

export interface UserDetails {
  id: string;
  companyName: string;
  smartLeadsId: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  fundraisingTarget: number;
  capitalCommitted: number;
  campaigns: Campaign[];
}

export interface Campaign {
  id: string;
  name: string;
  status: string | null;
  createdAt: string;
  updatedAt: string;
  smartLeadsId: string;
  userDetailsId: string;
  copy: string | null;
  geography: string | null;
  leadList: string | null;
  investor: string | null;
}
