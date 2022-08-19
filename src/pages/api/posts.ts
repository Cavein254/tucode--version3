import prisma from "../../../lib/prisma";

export const GetAllPosts = async () => {
  try {
    const data = await prisma.post.findMany();
    return data;
  } catch (error) {
    console.log(error);
  }
};
