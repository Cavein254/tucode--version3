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
    fallback: false,
  };
};

