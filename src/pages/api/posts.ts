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

export const GetAllSnippets = async () => {
  try {
    const data = await prisma.snippet.findMany();
    const allSnippet = JSON.stringify(data);
    const snippet = JSON.parse(allSnippet);

    return snippet;
  } catch (error) {
    console.log(error);
  }
};
