import { GetServerSideProps } from "next";
import prisma from "../../lib/prisma";
import List from "../components/list/List";

function snippets({ snippets }) {
  const specificData = {
    btn_title: "Create a Snippet",
    url: "/createsnippet/",
    path: "/snippet/",
  };
  return (
    <div>
      <List
        data={snippets}
        specificData={specificData}
        itemPath={specificData.path}
      />
    </div>
  );
}

export default snippets;

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
