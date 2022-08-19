import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import ListItemBody from "../../components/list/ListItemBody";
import { GetAllPosts } from "../api/posts";

const PostScreen = ({ specificPost, hasError }) => {
  console.log(specificPost);
  const router = useRouter();
  return (
    <div>
      <ListItemBody data={specificPost} />
    </div>
  );
};
export default PostScreen;

export const getStaticProps: GetStaticProps = async (context) => {
  const pslug = context.params?.slug;

  const posts = await GetAllPosts();
  const findSlug = posts?.find((post) => pslug === post.slug);

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
    likes,
    tags,
    published,
    createdAt: JSON.stringify(createdAt),
    updatedAt: JSON.stringify(updatedAt),
    authorId,
  };

  return {
    props: {
      specificPost: foundSlug,
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
