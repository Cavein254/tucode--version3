import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    
    const { body, authorId, postId } = req.body;
    console.log("on create api")
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
        msg: "Post created successfully",
        payload: req.body,
      });
    } catch (error) {
      console.log(res)
      res.json({
        status: "Failed to create post",
        error,
        payload: req.body,
      });
    }
  }
  