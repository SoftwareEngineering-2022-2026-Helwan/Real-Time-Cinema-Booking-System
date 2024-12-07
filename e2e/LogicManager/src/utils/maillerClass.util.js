import nodemailer from "nodemailer";
import fs from 'fs';
export default class Email {
  #Sender;
  #Reciever;
  constructor(sender, reciever) {
    this.#Sender = sender;
    this.#Reciever = reciever;
  }
  #createTransport() {
    return nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 587,
      auth: {
        user: "fc0685c4bd0437",
        pass: "24f66168af2f5b",
      },
    });
  }
  createOptionMailer(html, subject) {
    return {
      from: this.#Sender,
      to: this.#Reciever,
      subject: subject,
      html: html,
    };
  }
  async sendEmail(html, subject) {
    try {
        const transporter = this.#createTransport();
        const options = this.createOptionMailer(html, subject);
        const info = await transporter.sendMail(options);
        console.log("Email sent successfully:", info.response);
      } catch (error) {
        console.error("Error sending email:", error);
      }
  }

  static getHTML(path)
  {
    const html = fs.readFileSync(path, 'utf-8');
    return html;
  }
}
