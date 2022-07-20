import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import prisma from "../../../../lib/prisma";

const PostScreen = ({ posts }) => {
  // const router = useRouter();
  // const { slug } = router.query;
  // console.log("on pages....");
  // console.log(post);
  // const post = home.find((a) => a.slug === slug);
  // console.log(post);
  const { query } = useRouter();
  const { slug } = query;
  const post = posts.find((x) => x.slug === slug);
  if (!post) {
    return <div>OOps Dead on the Water</div>;
  }
  return <div>{post.title}</div>;
};

export default PostScreen;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const data = await prisma.post.findMany();
  // const allPosts = JSON.stringify(data);
  // const posts = JSON.parse(allPosts);
  // // const post = posts.find(slug === posts.slug)

  // const { slug } = context.query;
  // console.log("slug on the server");

  // try {
  //   const post = await prisma.post.findFirst({
  //     where: {
  //       slug: slug,
  //     },
  //     include: {
  //       user: true,
  //     },
  //     include: {
  //       comments: true,
  //     },
  //   });
  // } catch (error) {
  //   console.log(error);
  // }

  try {
    const data = await prisma.post.findMany();
    const allData = JSON.stringify(data);
    const posts = JSON.parse(allData);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      posts,
    },
  };
};
