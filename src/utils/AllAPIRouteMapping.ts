const AllAPIRouteMapping = {
  users: {
    add: {
      apiPath: "/api/auth/user",
      method: "POST",
    },
    verify: {
      apiPath: "/api/auth/verification",
      method: "POST",
    },
    resetPasswordMail: {
      apiPath: "/api/auth/reset",
      method: "POST",
    },
    updatePassword: {
      apiPath: "/api/auth/new-password",
      method: "POST",
    },
    getUser: {
      apiPath: "/api/user",
      method: "GET",
    },
  },
  campaigns: {
    getAll: {
      apiPath: "/api/campaign",
      method: "GET",
    },
    getMetrics: {
      apiPath: "/api/campaign/metrics",
      method: "GET",
    },
  },
  leads: {
    getAll: {
      apiPath: "/api/lead",
      method: "GET",
    },
    getMetrics: {
      apiPath: "/api/lead/metrics",
      method: "GET",
    },
  },
};
export const SmartLeadsAPIRouteMapping = {
  baseUrl: "https://server.smartlead.ai/api/v1",
};

export default AllAPIRouteMapping;
