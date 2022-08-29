import Link from "next/link";
import Search from "../search/Search";
import ListItem from "./ListItem";

const List = ({ data, specificData }) => {
  console.log(":::::::::::::::::")
  console.log(specificData.url)
  return (
    <div className="m-auto lg:w-4/5">
      <div className="flex flex-col md:flex-row lg:flex-row w-4/5 justify-evenly">
        <div className="">
          <Search data={data}/>
        </div>
        <div className="">
        <Link href={specificData.url}>
          <button className="rounded-sm bg-blue-400 text-xl px-4 py-2 font-bold text-white hover:bg-green-300">
            {specificData.btn_title}
          </button>
        </Link>
        </div>
      </div>
      <div className="mx-4 mt-10">
        {data.map((post) => (
          <ListItem data={post} key={post.slug} itemPath={specificData.path} />
        ))}
      </div>
    </div>
  );
};

export default List;
