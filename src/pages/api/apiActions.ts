import prisma from "../../../lib/prisma";

export const GetAllPosts = async () => {
  try {
    const data = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        published: true,
      },
    });
    const allPosts = JSON.stringify(data);
    const posts = JSON.parse(allPosts);

    console.log(posts)
    return posts;
  } catch (error) {
    console.log(error);
  }
};

export const GetAllSnippets = async () => {
  try {
    const data = await prisma.snippet.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        published: true,
      },
    });
    const allSnippet = JSON.stringify(data);
    const snippet = JSON.parse(allSnippet);
    console.log(snippet)
    return snippet;
  } catch (error) {
    console.log(error);
  }
};
export const GetAllAnswers = async () => {
  try {
    const data = await prisma.answer.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    const allAnswers = JSON.stringify(data);
    const answers = JSON.parse(allAnswers);

    return answers;
  } catch (error) {
    console.log(error);
  }
};
export const GetAllComments = async () => {
  try {
    const data = await prisma.comment.findMany({
      where: {
        parentId: null,
      },
      include: {
        children: {
          include: {
            children: true,
          },
        },
      },
    });
    const allComments = JSON.stringify(data);
    const comments = JSON.parse(allComments);

    return comments;
  } catch (error) {
    console.log(error);
  }
};

export const GetSingleAnswer = async (id) => {
  try {
    const data = await prisma.answer.findMany({
      where: {
        postId: id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    const allAnswers = JSON.stringify(data);
    const answers = JSON.parse(allAnswers);
    return answers;
  } catch (error) {
    console.log(error);
  }
};

export const GetSingleComment = async (id) => {
  try {
    const data = await prisma.comment.findMany({
      where: {
        postId: id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    const allComments = JSON.stringify(data);
    const comments = JSON.parse(allComments);

    return comments;
  } catch (error) {
    console.log(error);
  }
};
