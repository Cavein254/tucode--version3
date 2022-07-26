import Editor from "../components/editor/Editor";

function createsnippet() {
  const link = "http://localhost:3000/api/snippet/create";
  const holder =
    "Share your code snippet by linking them to you gist using markdown links as !(This one)[http://localhost:3000]";
  const data = {
    holder,
    link,
    re_route: "/snippets/",
  };
  return (
    <div>
      <Editor data={data} />
    </div>
  );
}

export default createsnippet;
