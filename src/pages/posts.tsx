import { GetServerSideProps } from "next";
import List from "../components/list/List";
import { GetAllPosts } from "./api/apiActions";

function posts({ posts }) {
  const specificData = {
    btn_title: "Create a Post",
    url: "/createpost/",
    path: "/post/",
  };

  return (
    <div>
      <List data={posts} specificData={specificData} />
    </div>
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
