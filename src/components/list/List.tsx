import Link from "next/link";
import ListItem from "./ListItem";

const List = ({ data, specificData }) => {
  return (
    <div className="m-auto lg:w-4/5">
      <div className="flex justify-end">
        <Link href={specificData.url}>
          <button className="rounded-sm bg-blue-400 text-xl px-4 py-2 font-bold text-white hover:bg-green-300">
            {specificData.btn_title}
          </button>
        </Link>
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
