import MinimalEditor from "../editor/MinimalEditor";

function Answer({postId,slug}) {
  const data = {
    postId,
    link:"http://localhost:3000/api/answer/create",
    re_route:'answers',
    rows: 10,
    btn: true,
    placeholder: "Write your Answer",
    commentBox: true,
    wrapper: "min-w-max w-full h-full border-none pb-5",
    textArea:
      "sm:text-md  block h-full w-full border-none text-sm text-gray-600 focus:border-none focus:ring-0 shadow-xl",
  };
  return <MinimalEditor data={data} />;
}

export default Answer;
