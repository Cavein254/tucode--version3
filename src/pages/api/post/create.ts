import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

const {title, body, authorId, published, tags, levels, slug} = req.body;
  try {
    await prisma.post.create({
      data:{
        title,
        body,
        slug,
        levels,
        tags,
        authorId,
        published,
      }
    });
    await res.status(200).json({
      status: "success",
      msg: "Post created successfully",
      payload: req.body,
    });
  } catch (error) {
    await res.json({
      status: "Failed to create post",
      error,
      payload: req.body,
    });
  }
}
