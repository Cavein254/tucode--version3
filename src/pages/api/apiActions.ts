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
export const GetAllAnswers = async () => {
  try {
    const data = await prisma.answer.findMany();
    const allAnswers = JSON.stringify(data);
    const answers = JSON.parse(allAnswers);

    return answers;
  } catch (error) {
    console.log(error);
  }
};
export const GetAllComments = async () => {
  try {
    const data = await prisma.comment.findMany();
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
      where:{
        postId:id
      }
    })
    const allAnswers = JSON.stringify(data);
    const answers = JSON.parse(allAnswers);
    return answers
  } catch (error) {
    console.log(error)
  }
}

export const GetSingleComment = async (id) => {
  try {
    const data = await prisma.comment.findMany({
      where:{
        postId:id
      }
    })
    const allComments = JSON.stringify(data);
    const comments = JSON.parse(allComments);

    return comments
  } catch (error) {
    console.log(error)
  }
}