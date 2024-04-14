import Image from "next/image";
import Link from "next/link";
import React from "react";

const comments_data = [
  {
    name: "John Doe",
    date: "2024-04-14",
    comment: "This is a great example.",
  },
  {
    name: "Jane Smith",
    date: "2024-04-13",
    comment: "Very helpful, thank you!",
  },
  {
    name: "Alice Johnson",
    date: "2024-04-12",
    comment: "I need more information.",
  },
  {
    name: "Bob Lee",
    date: "2024-04-11",
    comment: "I'm not sure this is correct.",
  },
];

const Comment = () => {
  const statues = "authenticated";
  return (
    <div className="m-5">
      {/* commet  */}
      {statues === "authenticated" ? (
        <>
          <div>
            <h1 className="text-4xl font-bold text-center">Comment</h1>
          </div>
          <div>
            <textarea
              placeholder="Write your comments here "
              className="w-full h-40"
            ></textarea>
            <button className="bg-red-500 p-5 m-5">Submit</button>
          </div>
        </>
      ) : (
        <>
          <Link href="/login">Login</Link>
        </>
      )}

      {/* comments list */}
      {comments_data.map((comment) => (
        <>
          <div className="bg-slate-800 p-5 rounded-lg">
            <Image
              src="/game.jpg"
              width={60}
              height={60}
              className="rounded-full"
            ></Image>
            <h1 className="text-2xl font-bold">Name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              corrupti aperiam necessitatibus minus ut perferendis natus
              voluptatem assumenda, saepe a, quas aspernatur voluptas numquam
              sit quibusdam incidunt est consequuntur nihil.
            </p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Comment;
