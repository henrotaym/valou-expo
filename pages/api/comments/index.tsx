import { Comment, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Comment | { message: string }>
) => {
  if (req.method !== "POST")
    return res.status(404).json({ message: "Unauthorized" });
  const prisma = new PrismaClient();
  const comment = await prisma.comment.create({
    data: {
      email: req.body.email as string,
      message: req.body.message as string,
    },
  });
  return res.status(200).json(comment);
};

export default handler;
