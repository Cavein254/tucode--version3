import { GetServerSideProps } from "next";
import List from "../components/list/List";
import { GetAllPosts } from "./api/apiActions";

type SpecificData = {
  btn_title?: string,
  url?:string,
  path?:string
}

function posts({ posts }) {
  const specificData:SpecificData = {
    btn_title: "Create a Post",
    url: "/createpost/",
    path: "/post/",
  };

  return (
    <>
      <List data={posts} specificData={specificData} />
      </>
  );
}

export default posts;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await GetAllPosts();

  return {
    props: {
      posts,
    },
  };
};
