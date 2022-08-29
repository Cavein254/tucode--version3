import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Answer from "../../components/answer/Answer";
import AnswerDisplay from "../../components/answer/AnswerDisplay";
import Comment from "../../components/comments/Comment";
import CommentDisplay from "../../components/comments/CommentDisplay";
import ListItemBody from "../../components/list/ListItemBody";
import { GetAllPosts, GetSingleAnswer, GetSingleComment } from "../api/apiActions";

interface SpecificPost {
    post_id:String,
    title:String ,
    body:String,
    slug:String,
    levels:String,
    types:String,
    views:String,
    likes:String,
    tags:String,
    published:String,
    createdAt:String,
    updatedAt:String,
    authorId:String,
}

const PostScreen = ({ specificPost, hasError, comments,answers }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  let postId;
  let slug;
  if (specificPost) {
    postId = specificPost.post_id
    slug = specificPost.slug
  }
  else {
    postId = null
    slug = null
  }
  return (
    <div className="mt-6 p-4 flex flex-col justify-center align-middle">
      <div>
        <ListItemBody data={specificPost} />
        <button
          onClick={() => setShow(!show)}
          className="bg-purple-600 px-4 py-2 text-sm text-white hover:text-purple-600 hover:bg-white"
        >
          Answer
        </button>
      </div>
      <div className="flex flex-wrap-reverse justify-end">
        {show ? <Answer  postId={postId} slug={slug}/> : <Comment postId={postId} slug={slug}/>}
      </div>
      <div>
      <CommentDisplay comments={comments}/>
        <AnswerDisplay answers={answers}/>
      </div>
    </div>
  );
};
export default PostScreen;

export const getStaticProps: GetStaticProps = async (context) => {
  const pslug = context.params?.slug;

  const posts = await GetAllPosts();
  const findSlug = posts?.find((post) => pslug === post.slug);
  const comments = await GetSingleComment(findSlug.post_id)
  const answers = await GetSingleAnswer(findSlug.post_id)

  
  if (!findSlug) {
    return {
      props: {
        hasError: true,
      },
    };
  }
  //Todo: Add dates to the object. Problem passing Json
  const {
    post_id,
    title,
    body,
    slug,
    levels,
    types,
    views,
    likes,
    tags,
    published,
    createdAt,
    updatedAt,
    authorId,
  } = findSlug;
  const foundSlug = {
    post_id,
    title,
    body,
    slug,
    views,
    likes,
    tags,
    published,
    createdAt: JSON.stringify(createdAt),
    updatedAt: JSON.stringify(updatedAt),
    authorId,
  };

  console.log("answers")
  console.log(answers)

  return {
    props: {
      specificPost: foundSlug,
      comments,
      answers
    },
  };
};
export const getStaticPaths: GetStaticPaths = async (context) => {
  const posts = await GetAllPosts();
  const pathsWithParams = posts?.map((post) => ({
    params: { slug: post.slug },
  }));
  console.log(pathsWithParams)
  return {
    paths: pathsWithParams,
    fallback: true,
  };
};

// const PostScreen = ({ posts }) => {
//   console.log("on the slug page");
//   const router = useRouter();
//   console.log(router);
//   // const { slug } = router.query;
//   // console.log("on pages....");
//   // console.log(post);
//   // const post = home.find((a) => a.slug === slug);
//   // console.log(post);
//   // const { query } = useRouter();
//   const { slug } = router.query;
//   console.log(slug);
//   const post = posts.find((x) => x.slug === slug);
//   if (!post) {
//     return <div>OOps Dead on the Water</div>;
//   }
//   return <div>{post.title}</div>;
// };

// export default PostScreen;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { slug } = context.query;
//   console.log("-----------------------------------");
//   console.log(slug);
//   return {
//     props: {
//       posts: slug,
//     },
//   };
// };

// // export const getServerSideProps: GetServerSideProps = async (context) => {
// //   // const data = await prisma.post.findMany();
// //   // const allPosts = JSON.stringify(data);
// //   // const posts = JSON.parse(allPosts);
// //   // // const post = posts.find(slug === posts.slug)

// //   // const { slug } = context.query;
// //   // console.log("slug on the server");

// //   // try {
// //   //   const post = await prisma.post.findFirst({
// //   //     where: {
// //   //       slug: slug,
// //   //     },
// //   //     include: {
// //   //       user: true,
// //   //     },
// //   //     include: {
// //   //       comments: true,
// //   //     },
// //   //   });
// //   // } catch (error) {
// //   //   console.log(error);
// //   // }

// //   try {
// //     const data = await prisma.post.findMany();
// //     const allData = JSON.stringify(data);
// //     const posts = JSON.parse(allData);
// //   } catch (error) {
// //     console.log(error);
// //   }

// //   return {
// //     props: {
// //       posts,
// //     },
// //   };
// // };
