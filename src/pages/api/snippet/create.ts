import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    
    const { title, body, author = "auto", published, slug } = req.body;
    console.log("on backend");
    console.log(author)
    try {
      await prisma.snippet.create({
        data: {
          title,
          body,
          authorId,
          published,
          slug,
        },
      })
      await res.status(200).json({
        status: "success",
        msg: "Snippet created successfully",
        payload: req.body,
      });
    } catch (error) {
      await res.json({
        status: "Failed to create Snippet",
        error,
        payload: req.body,
      });
    }
  }
