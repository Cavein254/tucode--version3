import { GetServerSideProps } from "next";
import List from "../components/list/List";
import { GetAllPosts } from "./api/posts";

function posts({ posts }) {
  const specificData = {
    btn_title: "Create a Post",
    url: "/createpost/",
  };
  return (
    <div>
      <List data={posts} specificData={specificData} />
    </div>
  );
}

export default posts;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await GetAllPosts();
  console.log(data);
  const posts = JSON.parse(data);
  console.log(posts);

  return {
    props: {
      posts,
    },
  };
};
