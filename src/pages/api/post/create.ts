import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

// export default async(req:NextApiRequest, res:NextApiResponse) {
//     if(req.method !== 'POST') {
//         return res.status(405).json({
//             status:'failed',
//             msg:'Method Not Allowed'
//         })
//     }
//     try {
//         const {user} = req.body;
//         const savedUser = await prisma.user.create({
//             data:user
//         })
//         res.status(200).json(savedUser)
//     } catch (e) {
//         res.status(400).json({
//             status:'failed',
//             msg:'Failed to save user'
//         })
//     }
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(
    "|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||"
  );
  console.log(req);
  const { title, body, authorId, published, slug } = req.body;

  try {
    await prisma.post.create({
      data: {
        title,
        body,
        authorId,
        published,
        slug,
      },
    });
    res.status(200).json({
      status: "success",
      msg: "Post created successfully",
      payload: req.body,
    });
  } catch (error) {
    res.json({
      status: "Failed to create post",
      error,
      payload: req.body,
    });
  }
}
