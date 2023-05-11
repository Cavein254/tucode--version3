import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";


// export default async function handler (req:NextApiRequest, res:NextApiResponse){
//     if(req.method !== 'POST') {
//         return res.status(405).json({
//             status:'failed',
//             msg:'Method Not Allowed'
//         })
//     }
//     const { title, body, author = "1", published, slug } = req.body;
//     console.log("on backend");
//     console.log(author)
//     try {
//       console.log("object")
//       console.log(req.body);
//         const savedUser = await prisma.post.create({
//             data:{
//               title,
//               body,
//               published,
//               slug,
//               author
//             }
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
const { title, body, author = 1, published, slug, tags } = req.body;
 console.log("object")
  try {
    await prisma.post.create({
      data: {
        title,
        body,
        author,
        published,
        slug,
        tags
      },
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
