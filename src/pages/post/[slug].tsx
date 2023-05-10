import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Answer from "../../components/answer/Answer";
import AnswerDisplay from "../../components/answer/AnswerDisplay";
import Comment from "../../components/comments/Comment";
import CommentDisplay from "../../components/comments/CommentDisplay";
import ListItemBody from "../../components/list/ListItemBody";
import {
  GetAllPosts,
  GetSingleAnswer,
  GetSingleComment,
} from "../api/apiActions";

interface Post {
  post_id?: String;
  title?: String;
  body?: String;
  slug?: String;
  levels?: String;
  types?: String;
  views?: String;
  likes?: String;
  tags?: String;
  published?: String;
  createdAt?: String;
  updatedAt?: String;
  authorId?: String;
}

const PostScreen = ({ specificPost, hasError, comments, answers }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  let postId;
  let slug;
  if (specificPost) {
    postId = specificPost.post_id;
    slug = specificPost.slug;
  } else {
    postId = null;
    slug = null;
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
        {show ? (
          <Answer postId={postId} slug={slug} />
        ) : (
          <Comment postId={postId} slug={slug} />
        )}
      </div>
      <div>
        <CommentDisplay comments={comments} />
        <AnswerDisplay answers={answers} />
      </div>
    </div>
  );
};
export default PostScreen;

export const getStaticProps: GetStaticProps = async (context) => {
  const pslug = context.params?.slug;

  const posts = await GetAllPosts();
  const findSlug = posts?.find((post) => pslug === post.slug);
  const comments = await GetSingleComment(findSlug.post_id);
  const answers = await GetSingleAnswer(findSlug.post_id);

  if (!findSlug) {
    return {
      props: {
        hasError: true,
      },
    };
  }
  //Todo: Add dates to the object. Problem Json
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
    levels,
    types,
    views,
    likes,
    tags,
    published,
    createdAt: JSON.stringify(createdAt),
    updatedAt: JSON.stringify(updatedAt),
    authorId,
  };

  console.log(comments);

  return {
    props: {
      specificPost: foundSlug,
      comments,
      answers,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async (context) => {
  const posts = await GetAllPosts();
  const pathsWithParams = posts?.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths: pathsWithParams,
    fallback: false,
  };
};
