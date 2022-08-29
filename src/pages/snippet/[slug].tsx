import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import ListItemBody from "../../components/list/ListItemBody";
import { GetAllSnippets } from "../api/apiActions";

const SnippetScreen = ({ specificPost, hasError }) => {
  const router = useRouter();
  return (
    <div className="mt-6 p-4 flex flex-col justify-center align-middle">
      <ListItemBody data={specificPost} />
    </div>
  );
};
export default SnippetScreen;

export const getStaticProps: GetStaticProps = async (context) => {
  const pslug = context.params?.slug;

  const snippets = await GetAllSnippets();
  const findSlug = snippets?.find((snippet) => pslug === snippet.slug);

  if (!findSlug) {
    return {
      props: {
        hasError: true,
      },
    };
  }
  //Todo: Add dates to the object. Problem passing Json
  const {
    snippet_id,
    title,
    body,
    slug,
    published,
    createdAt,
    updatedAt,
    authorId,
  } = findSlug;
  const foundSlug = {
    snippet_id,
    title,
    body,
    slug,
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
  const snippets = await GetAllSnippets();
  const pathsWithParams = snippets?.map((snippet) => ({
    params: { slug: snippet.slug },
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
