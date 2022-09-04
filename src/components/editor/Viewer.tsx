import "katex/dist/katex.min.css";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeKatex from "rehype-katex";
// import emoji from "react-emoji";
import remarkMath from "remark-math";

interface FormData {
  title: string;
  body: string;
}
// import Logo from '../../imgs/head.jpg';
function Viewer({ data }) {
  return (
    <div className="">
      <ReactMarkdown
        children={data}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                // style={''}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className="border-none">
                <p
                  className="overflow-y-scroll text-base font-thin text-red-500"
                  {...props}
                ></p>
              </code>
            );
          },
        }}
      />
    </div>
  );
}

export default Viewer;
