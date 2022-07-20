import { GetServerSideProps } from "next";
import prisma from "../../lib/prisma";
import List from "../components/list/List";

function snippet({ snippets }) {
  const specificData = {
    btn_title: "Create a Snippet",
    url: "/createsnippet/",
  };
  return (
    <div>
      <List data={snippets} specificData={specificData} />
    </div>
  );
}

export default snippet;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await prisma.snippet.findMany();
  const allSnippets = JSON.stringify(data);
  const snippets = JSON.parse(allSnippets);

  return {
    props: {
      snippets,
    },
  };
};
