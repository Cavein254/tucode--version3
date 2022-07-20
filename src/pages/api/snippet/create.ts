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
  const { title, body, slug } = req.body;
  console.log(req.body);

  try {
    await prisma.snippet.create({
      data: {
        title,
        body,
        authorId: "cl5hbp3hy00275wdurm8c8s1g",
        slug,
      },
    });
    res.status(200).json({ message: "post created" });
  } catch (error) {
    res.status(401).json({
      status: "Failed to create post",
      error,
      payload: req.body,
    });
  }
}
