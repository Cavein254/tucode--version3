import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    
    const { body, authorId, postId } = req.body;
    try {
      await prisma.answer.create({
        data: {
          body,
          authorId,
          postId
        },
      });

      res.status(200).json({
        status: "success",
        msg: "Answer created successfully",
        payload: req.body,
      });
    } catch (error) {
      res.json({
        status: "Failed to create Answer",
        error,
        payload: req.body,
      });
    }
  }
  