import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

const parentId="cl7iir6n30447jbiav6dwgens"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const { body, authorId, postId } = req.body;
    console.log(req.body)
    
    try {
      await prisma.comment.create({
        data:{
          body,
          postId,
          authorId,
          parentId
        },
        include:{
          children:{
            include:{
              children:true
            }
          }
        }
      });

      res.status(200).json({
        status: "success",
        msg: "comment created successfully",
        payload: req.body,
      });
    } catch (error) {
      res.json({
        status: "Failed to create comment",
        error,
        payload: req.body,
      });
    }
  }
  