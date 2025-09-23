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
  resend: {
    apiKey: process.env.RESEND_API_KEY || "",
  },
  smartLead: {
    apiKey: process.env.SMARTLEAD_API_KEY || "",
  },
  cloudflareR2: {
    accountId: process.env.R2_ACCOUNT_ID || "",
    accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
    token: process.env.R2_TOKEN || "",
    bucketName: process.env.R2_BUCKET_NAME || "",
    publicDomain: process.env.NEXT_PUBLIC_R2_PUBLIC_DOMAIN || "",
  },
};

export default envVariables;
