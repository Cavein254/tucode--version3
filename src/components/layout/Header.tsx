import Link from "next/link";
import React from "react";
import { AiFillTrophy } from "react-icons/ai";

function Header() {
  return (
    <div className="overflow-x-hidden max-w-full flex flex-row justify-between items-center bg-yellow-600 border-4 border-b-gray-800 p-0 m-0">
      {/* logo area */}
      <div className="p-2 flex flex-row text-center justify-center items-center hover:cursor-pointer">
        <div className="">
          <AiFillTrophy size={54} className="text-white" />
        </div>
        <div className="text-2xl text-white font-bold pl-1">
          <Link href="/">TuCode</Link>
        </div>
      </div>
      {/* Added links */}
      <div className="flex flex-row text-white hover:cursor-pointer  justify-between invisible md:visible text-lg font-bold">
        <div className="hover:text-gray-700 ">
          <Link href="/posts">Posts</Link>
        </div>
        <div className="hover:text-gray-700 pl-2">
          <Link href="/snippet">Snippets</Link>
        </div>
        <div className="hover:text-gray-700 pl-2">
          <Link href="/Blog">Blog</Link>
        </div>
        <div className="hover:text-gray-700 px-4">
          <Link href="/posts">Question</Link>
        </div>
      </div>
      {/* searchbar area */}
      <div>
        <div className="invisible md:visible lg:visible">
          <input
            type="text"
            placeholder="Search"
            className="max-w-full text-gray-700 text-lg mx-4 my-2 px-2 py-1 rounded-md active:ring-0 border-none font-semibold"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
