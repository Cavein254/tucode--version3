import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillAudio,
  AiFillCode,
  AiFillFileImage,
  AiFillGooglePlusCircle,
} from "react-icons/ai";

const ListItem = ({ data }) => {
  const [color, setColor] = useState("");
  var myColor = "bg-green-400";
  const {
    title,
    body,
    slug,
    date,
    comments,
    levels,
    types,
    views,
    likes,
    tags,
    createdAt,
    updatedAt,
  } = data;

  // set colors for levels

  if (levels !== "" && levels?.valueOf() === "Beginner") {
    myColor = "bg-green-400";
  }
  if (levels !== "" && levels?.valueOf() === "Expert") {
    myColor = "bg-red-400";
  }
  if (levels !== "" && levels?.valueOf() === "Master") {
    myColor = "bg-gray-400";
  }
  if (levels !== "" && levels?.valueOf() === "Advanced") {
    myColor = "bg-yellow-400";
  }

  const tag = tags?.split();

  //Todo figure out why color is empty
  //Todo use momentsjs to change created at and updated at
  //Todo fix links to be a list - DONE
  //Todo create categories to reference tags - DONE

  return (
    <>
      <Link href={`/post/${slug}`}>
        <div className="mb-10 hover:cursor-pointer">
          <div className="w-full rounded-sm border-2 border-gray-300 bg-gray-200 px-4 shadow-lg">
            {/* List card header */}
            <div className="flex items-center justify-between">
              <div className="-mt-9 ">
                <AiFillGooglePlusCircle size={60} className="text-red-500" />
              </div>
              <div>
                <h5>{types}</h5>
              </div>
              <div>
                <p>{date}</p>
              </div>
            </div>
            {/* List card Title  */}
            <div>
              <h1 className="text-4xl font-thin text-gray-600 sm:text-2xl ">
                {title.toLocaleUpperCase()}
              </h1>
            </div>
            {/* List card Description */}
            <div>
              <h4 className="py-1 font-semibold text-gray-600">{body}</h4>
            </div>
            {/* List footer  */}
            <div className="-mx-4 border-t-2 border-gray-300"></div>
            <div className="flex justify-between   px-4 text-gray-600">
              <div className="flex items-center justify-center ">
                <div className="z-10">
                  <AiFillAudio size={24} />
                </div>
                <div>{comments} Comments</div>
              </div>
              <div className="my-1 flex items-center justify-center">
                <div>
                  <AiFillFileImage size={24} />
                </div>
                <div>{views} Views</div>
              </div>
              <div className="flex items-center justify-center ">
                <div>
                  <AiFillCode size={24} />
                </div>
                <div>{likes} Likes</div>
              </div>
            </div>
            <div className="-mx-4 border-t-2 border-gray-300"></div>
            {/* card list tags */}
            <div className="flex justify-evenly">
              {tag?.map((item, index) => (
                <div key={index}>
                  <p className="text-xs, -mx-4 my-1 w-fit rounded-lg bg-gray-400 px-2 font-semibold text-pink-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            {}
          </div>
          <div
            className={`flex justify-between text-gray-900 font-medium text-sm ${myColor}`}
          >
            <div>Created: {createdAt}</div>
            <div>Level: {levels}</div>
            <div>Updated: {updatedAt}</div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default ListItem;
