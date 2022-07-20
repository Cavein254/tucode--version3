import { GetServerSideProps } from "next";
import prisma from "../../lib/prisma";
import List from "../components/list/List";

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
  const data = await prisma.post.findMany();
  const allPosts = JSON.stringify(data);
  const posts = JSON.parse(allPosts);

  return {
    props: {
      posts,
    },
  };
};
