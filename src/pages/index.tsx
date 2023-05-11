import { GetServerSideProps, NextPage } from "next";
import * as React from "react";
import prisma from "../../lib/prisma";
// import Editor from "../components/editor/Editor";

// import List from '@/components/list/List';

interface Users {
  username: string;
}

interface FormData {
  username: string;
}
const Home: NextPage = ({ posts }) => {
  const [form, setForm] = React.useState<FormData>({ username: "" });

  async function create(data: FormData) {
    try {
      fetch(`http://localhost:3000/api/post/create`, {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then(() => {
        setForm({ username: "auto" });
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (data: FormData) => {
    try {
      create(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="dark:bg-black">
      <h1 className="text-center font-bold text-2xl mt-4">Notes</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(form);
        }}
        className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
      >
        <input
          type="text"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          placeholder="Title"
          className="border-2 rounded border-gray-600 p-1"
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-1">
          Add +
        </button>
        <div className="w-auto min-w-[25%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
          <ul>{/* {users.map} */}</ul>
        </div>
      </form>
    </main>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await prisma.post.findMany();
  const posts = JSON.stringify(data);

  return {
    props: {
      posts,
    },
  };
};
