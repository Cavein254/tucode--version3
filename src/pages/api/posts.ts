import prisma from "../../../lib/prisma";

// fetch(`${process.env.NEXTAUTH_URL}/api/post/create`, {
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method: "POST",

export const GetAllPosts = async () => {
  const posts = await prisma.post.findMany();
  //   const posts = JSON.stringify(data);

  return posts;
};
