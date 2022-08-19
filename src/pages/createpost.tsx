import Editor from "../components/editor/Editor";

function createpost() {
  const link = "http://localhost:3000/api/post/create";
  const holder =
    "Create beautiful content with markdown. Add math if you like $y=2x^2 + log_{2}10 + e^{0.5}$";
  const data = {
    holder,
    link,
    btn_text: "Create a Post",
    page_link: "/createpost/",
    re_route: "/posts",
  };
  return (
    <div>
      <Editor data={data} />
    </div>
  );
}

export default createpost;
