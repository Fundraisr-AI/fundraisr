import { Resend } from "resend";
import configEnv from "@/config";
import {
  EmailTemplateType,
  getEmailContent,
  renderEmailTemplate,
} from "@/utils/emailTemplates";

export default class resendInstance {
  resend: Resend;
  from: string = "";

  constructor() {
    this.resend = new Resend(configEnv.resend.apiKey);
    this.setFromCredentials();
  }

  setFromCredentials() {
    if (configEnv.nextEnv === "dev") {
      this.from = "Svalync <onboarding@resend.dev>";
    }

    if (configEnv.nextEnv === "prod") {
      this.from = "Uday Agarwal <uday@svalync.com>";
    }
  }

  async sendMail(
    toEmail: string,
    template: EmailTemplateType,
    firstName: string,
    customData: any = null
  ) {
    const data = {
      firstName,
      customData,
    };
    const emailHtml = renderEmailTemplate(template, data);
    const subject = getEmailContent(template, firstName, customData).subject;
    const mail = await this.resend.emails.send({
      from: this.from,
      to: toEmail,
      subject: subject,
      html: emailHtml,
    });
    return mail;
  }
}
