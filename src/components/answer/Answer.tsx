import MinimalEditor from "../editor/MinimalEditor";

function Answer() {
  const data = {
    rows: 10,
    btn: true,
    placeholder: "Write your Answer",
    commentBox: true,
    wrapper: "min-w-max w-full h-full border-none pb-5",
    textArea:
      "sm:text-md  block h-full w-full border-none text-lg text-gray-600 focus:border-none focus:ring-0",
  };
  return <MinimalEditor data={data} />;
}

export default Answer;
