import prisma from "../../../lib/prisma";

export const GetAllPosts = async () => {
  try {
    const data = await prisma.post.findMany();
    const allPosts = JSON.stringify(data);
    const posts = JSON.parse(allPosts);

    return posts;
  } catch (error) {
    console.log(error);
  }
};
