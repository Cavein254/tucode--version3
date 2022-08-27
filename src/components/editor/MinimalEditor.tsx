import "katex/dist/katex.min.css";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { SyntaxHighlighter } from "react-syntax-highlighter";
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeKatex from "rehype-katex";
// import emoji from "react-emoji";
import remarkMath from "remark-math";
import { fetcher, slugGenerator } from "../../../utils/fetcher";

interface FormData {
  title: string;
  body: string;
}
// import Logo from '../../imgs/head.jpg';
function MinimalEditor({ data }) {
  const Router = useRouter();
  const [job, setJob] = useState("");
  const [tags, setTags] = useState("");
  const [title, setTitle] = useState("");
  const saveData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const postData = {
      title,
      tags,
      body: job,
      published: false,
      authorId: "auto",
      postId:data.postId,
      slug: slugGenerator(title),
    };
    fetcher(data.link, postData);
    Router.push("/");
  };
  const clearData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setJob("");
    setTitle("");
  };
  const publishData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const postData = {
      title,
      body: job,
      published: true,
      authorId: "auto",
      postId:data.postId,
      slug: slugGenerator(title),
    };
    console.log('on minimal editor')
    console.log(postData)
    fetcher(data.link, postData);
    Router.back()
  };

  return (
    <div className={data.wrapper}>
      {/* context textbox */}
      <textarea
        onChange={(e) => setJob(e.target.value)}
        placeholder={data.placeholder}
        rows={data.rows}
        className={data.textArea}
        value={job}
      />

      {data.commentBox ? (
        <div className="flex justify-between">
          <div className="m-2 cursor-pointer  rounded-lg bg-red-500 px-2 py-1 align-middle text-white hover:bg-red-900">
            <a href="#" onClick={clearData}>
              Clear
            </a>
          </div>
          <div className="flex">
            <div className="m-2 cursor-pointer rounded-lg bg-gray-500 px-2 py-1 align-middle text-white hover:bg-black">
              <a href="#" onClick={saveData}>
                Save
              </a>
            </div>
            <div className="m-2 cursor-pointer  rounded-lg bg-green-500 px-2 py-1 align-middle text-white hover:bg-green-900">
              <a href="#" onClick={publishData}>
                Publish
              </a>
            </div>
          </div>
        </div>
      ) : null}
      <div>
        <div className="">
          <ReactMarkdown
            children={data.btn ? job : null}
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
                      className="overflow-y-scroll text-base font-thin"
                      {...props}
                    >
                      {children}
                    </p>
                  </code>
                );
              },
            }}
          />
          {!data.commentBox ? (<button className="bg-gray-300 px-4 py-2 rounded-sm hover:bg-green-200" onClick={publishData}>submit</button> ):null}
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default MinimalEditor;
