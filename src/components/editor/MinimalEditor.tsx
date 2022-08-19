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
  const [job, setJob] = useState("cos_3 * sin 30");
  const [tags, setTags] = useState("");
  const [title, setTitle] = useState("");
  const saveData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(data.re_route);
    const postData = {
      title,
      tags,
      body: job,
      published: false,
      authorId: "auto",
      slug: slugGenerator(title),
    };
    fetcher(data.link, postData);
    // Router.push("/");
  };
  const clearData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setJob("");
    setTitle("");
  };
  const publishData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("published btn");
    const postData = {
      title,
      body: job,
      published: true,
      authorId: "auto",
      slug: slugGenerator(title),
    };
    fetcher(data.link, postData);
    Router.push(data.re_route);
  };

  return (
    <div className="w-full border-none pb-5">
      {/* context textbox */}
      <textarea
        onChange={(e) => setJob(e.target.value)}
        placeholder="Besties"
        rows={10}
        className="sm:text-md  block h-full w-full border-none text-lg text-gray-600 focus:border-none focus:ring-0"
        value={job}
      />

      <div className="flex justify-between">
        <div className="m-2 cursor-pointer justify-center rounded-lg bg-red-500 px-2 py-1 align-middle text-white hover:bg-red-900">
          <a href="#" onClick={clearData}>
            Clear
          </a>
        </div>
        <div className="flex">
          <div className="m-2 cursor-pointer justify-center rounded-lg bg-gray-500 px-2 py-1 align-middle text-white hover:bg-black">
            <a href="#" onClick={saveData}>
              Save
            </a>
          </div>
          <div className="m-2 cursor-pointer justify-center rounded-lg bg-green-500 px-2 py-1 align-middle text-white hover:bg-green-900">
            <a href="#" onClick={publishData}>
              Publish
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <ReactMarkdown
            children={job}
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
                    >
                      {children}
                    </p>
                  </code>
                );
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MinimalEditor;
