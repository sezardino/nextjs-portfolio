import mail from "@/common/clients/mail";
import { STATUS_CODES } from "http";
import type { NextApiRequest, NextApiResponse } from "next";

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const body = JSON.parse(req.body) as ContactBody;

  if (!body.email || !body.message || !body.name) {
    res.status(400).end();
    return;
  }

  const response = await mail.send(body);

  if (!response) {
    res.status(500).end();
    return;
  }

  res.status(200).end();
};

export default handler;
