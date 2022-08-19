import MinimalEditor from "../editor/MinimalEditor";

function CommentList() {
  const data = {
    rows: 2,
    btn: false,
    placeholder: "Add a comment ...",
    commentBox: false,
    wrapper:
      "min-w-max w-full h-full border-none pb-5 focus:border-none border-none focus:ring-0",
    textArea:
      "text-sm border-none w-full min-w-max shadow-xl ring-0 focus:ring-0 focus:border-none p-2",
  };
  return (
    <div>
      <MinimalEditor data={data} />
    </div>
  );
}

export default CommentList;
