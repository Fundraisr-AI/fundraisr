const envVariables = {
  nextEnv: process.env.NEXT_PUBLIC_ENV || "",
  nextAuth: {
    secret: process.env.NEXTAUTH_SECRET || "",
    url: process.env.NEXTAUTH_URL || "",
  },
  app: {
    url: process.env.NEXT_PUBLIC_API_URL || "",
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID || "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  },
};

export default envVariables;
