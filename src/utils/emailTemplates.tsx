import configEnv from "@/config";
// Consolidated enum for all email templates
enum EmailTemplateType {
  Welcome = "WELCOME",
  VerificationToken = "VERIFICATION_TOKEN",
  ResetPassowrd = "RESET_PASSWORD",
  Custom = "CUSTOM",
}

// Interface for email content
interface EmailContent {
  subject: string;
  header: string;
  body: string;
  footer: string;
}

interface renderEmailTemplateProp {
  firstName: string;
  customData: any;
}

// Template map to avoid switch statements
const emailTemplates: Map<
  EmailTemplateType,
  (firstName: string, customData?: any) => EmailContent
> = new Map([
  [
    EmailTemplateType.Welcome,
    (firstName: string) => ({
      subject:
        "Welcome to Svalync &ndash; Your Account is Successfully Created!",
      header: `Hey ${firstName} ✨`,
      body: `
      Welcome to Svalync! 🎉

      We are excited to have you on board. Your account has been successfully created, and you're now ready to automate your processes. Click here to go to user workflow templates and click here to request one.

      Thank you for choosing Svalync. We're thrilled to help you achieve more with less effort!
      `,
      footer: "",
    }),
  ],
  [
    EmailTemplateType.VerificationToken,
    (firstName: string, customData?: { redirectLink: string }) => ({
      subject: "Verify Your Account on Svalync",
      header: `Hey ${firstName} ✨`,
      body: `
      Thank you for creating an account with Svalync! To get started, please verify your email address by clicking the link below:
      
      <a href="${customData?.redirectLink}">Verify Your Email</a>
      `,
      footer: "",
    }),
  ],
  [
    EmailTemplateType.ResetPassowrd,
    (firstName: string, customData?: any) => ({
      subject: "Reset Your Password 📣",
      header: `Hey ${firstName} ✨`,
      body: `
        Reset you password by clicking on this link: ${configEnv.app.url}/auth/new-password?token=${customData.token}
        
      `,
      footer: "",
    }),
  ],
  [
    EmailTemplateType.Custom,
    (firstName: string, customData?: any) => ({
      subject: `${customData.subject}`,
      header: `Hey ${firstName} ✨`,
      body: `
        ${customData.body}
      `,
      footer: "",
    }),
  ],
]);

// Function to get email content based on the template type
function getEmailContent(
  template: EmailTemplateType,
  firstName: string,
  customData?: any
): EmailContent {
  const templateFunction = emailTemplates.get(template);

  if (!templateFunction) {
    throw new Error("Invalid email template");
  }

  return templateFunction(firstName, customData);
}

// Function to generate email HTML content on the server
function renderEmailTemplate(
  template: EmailTemplateType,
  props: renderEmailTemplateProp
): string {
  const emailContent = getEmailContent(
    template,
    props.firstName,
    props.customData
  );

  // Enhanced HTML template with better styling
  return `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
        }
        .body {
          white-space: pre-line;
          margin-bottom: 30px;
        }
        .footer {
          border-top: 1px solid #eee;
          padding-top: 20px;
          font-size: 12px;
          color: #666;
          white-space: pre-line;
        }
        .salutation {
          white-space: pre-line;
        }
        .company-info {
          margin-top: 20px;
          font-size: 12px;
          color: #888;
        }
      </style>
    </head>
    <body>
      <div>
        <p>${emailContent.header}</p>
      </div>
      <div>
        <p>
          ${emailContent.body}
        </p>
      </div>
      <div class="salutation">
        Regards,
        Uday Agarwal
        Svalync Founder
      </div>
    </body>
  </html>
  `;
}

export { EmailTemplateType, getEmailContent, renderEmailTemplate };

// Call the example usage to test
