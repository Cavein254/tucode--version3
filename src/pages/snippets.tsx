import { GetServerSideProps } from "next";
import List from "../components/list/List";
import { GetAllSnippets } from "./api/apiActions";

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
  const data = await GetAllSnippets();
  const allSnippets = JSON.stringify(data);
  const snippets = JSON.parse(allSnippets);

  return {
    props: {
      snippets,
    },
  };
};
