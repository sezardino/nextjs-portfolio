/* eslint-disable max-len */
import { Email, connect } from "node-mailjet";

interface MailBody {
  name: string;
  email: string;
  message: string;
}

class MailClient {
  private client: Email.Client | null;

  constructor() {
    this.client = null;
    this.connect();
  }

  private connect() {
    if (process.env.MJ_API_KEY_PUBLIC && process.env.MJ_API_KEY_PRIVATE) {
      this.client = connect(
        process.env.MJ_API_KEY_PUBLIC,
        process.env.MJ_API_KEY_PRIVATE
      );
    }
  }

  public async send(body: MailBody) {
    if (!this.client) {
      throw new Error("MailClient are not connected");
    }

    const { email, message, name } = body;

    const Message = {
      From: {
        Email: "e.a.frontend@gmail.com",
        Name: "Edward",
      },
      To: [
        {
          Email: "e.a.frontend@gmail.com",
          Name: "Edward",
        },
      ],
      Subject: "Someone wants to contact you",
      TextPart: `${name}, who is ${email}, says: ${message}`,
      HTMLPart: `<h2>${name} (${email})</h2>
              <h3>send you email with message:</h3>
              <p>${message}</p>`,
      CustomID: "AppGettingStartedTest",
    };

    try {
      const action = this.client.post("send", { version: "v3.1" });
      return await action.request({ Messages: [Message] });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new MailClient();
