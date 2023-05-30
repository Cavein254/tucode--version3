// import "katex/dist/katex.min.css";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
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
const Editor = ({ data }) => {
  const link = {data};
  const Router = useRouter();
  const [job, setJob] = useState(data.holder);
  const [tags, setTags] = useState("");
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("");

  console.log(level)
  const saveData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const postData = {
      title,
      tags,
      level,
      body: job,
      published: false,
      authorId: "auto",
      slug: slugGenerator(title),
    };

    fetcher(link, postData);
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
      tags,
      level,
      published: true,
      authorId: "auto",
      slug: slugGenerator(title),
    };
    fetcher(data.link, postData);
    Router.push(data.re_route);
  };



    return (
    <div className="min-h-screen overflow-hidden border-none  sm:mx-1">
      <div className="m-auto mt-5 max-h-screen min-h-fit border-none  sm:mt-10 sm:w-full sm:px-1 md:w-4/5 md:px-0 lg:w-4/5 lg:px-3.5">
        <div className="w-full border-none ">
          {/* Title texbox */}
          <div className="mb-0 border-none  pb-0">
            <textarea
              rows={1}
              placeholder={"Enter the title here ...."}
              className="focus sm:text-md w-full border-none text-left text-xl font-light text-gray-900 focus:border-none focus:ring-0 dark:text-white"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          {/* context textbox */}
          <textarea
            onChange={(e) => setJob(e.target.value)}
            placeholder={data.holder}
            rows={10}
            className="sm:text-md  block h-full w-full border-none text-lg text-gray-600 focus:border-none focus:ring-0 dark:text-white"
            value={job}
          />

          <div>
            <input
              type="text"
              placeholder="Enter tags here separated by comma as: Javascript, nodejs, reactjs"
              className="flex flex-grow px-4 py-2 text-xl text-bold text-gray-800 rounded-md min-w-full my-6 dark:text-white"
              onChange={(e) => setTags(e.target.value)}
              value={tags}
            />
          </div>
          <div>
            <div>
            <label className="font-2xl font-bold mr-2">Select Level</label>
                <select className="w-1/5 rounded-md mt-4 flex justify-center items-center" value={level}  onChange={e => setLevel(e.target.value)}>
                  <option value="Beginner">Beginner </option>
                  <option value="Advanced">Advanced </option>
                  <option value="Expert">Expert </option>
                  <option value="Master">Master </option>
                </select>
            </div>
          </div>
          <p className="ml-2 border-none text-sm text-gray-500">
            Make it as long as you &apos;d like...
          </p>
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
      </div>
    </div>
  );
};

export default Editor;
