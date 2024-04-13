import React from "react";
import Pagination from "./Pagination";
import Image from "next/image";

const posts = [
  {
    title: "Sunrise in the Mountains",
    image: "/development.jpg",
    description:
      "A beautiful sunrise over the rugged peaks of the Rocky Mountains.",
    date: "2024-04-10",
    catagory: "development",
  },
  {
    title: "Cityscape at Night",
    image: "/art.jpg",
    description:
      "The city lights shine brightly under a dark night sky, showcasing the urban landscape.",
    date: "2024-04-09",
    catagory: "art",
  },
  {
    title: "Forest Path",
    image: "/build.jpg",
    description:
      "A serene path winds through a lush green forest, inviting peaceful walks.",
    date: "2024-04-08",
    catagory: "build",
  },
  {
    title: "Desert Dunes",
    image: "/game.jpg",
    description:
      "Golden sand dunes under the intense desert sun create a stunning vista.",
    date: "2024-04-07",
    catagory: "game",
  },
];

const CardList = () => {
  return (
    <div className="mt-2">
      <div className="title">
        <h1 className="text-5xl font-bold text-center p-5">Recent Posts</h1>
      </div>
      {posts.map((post) => (
        <>
          <div className="posts flex gap-5 items-center h-[22%]">
            <div className="post-image flex-1  w-1/3 h-[300px] relative gap-1 m-[10px]">
              <Image
                className=" border-solid border-[5px] border-red-500 "
                src={post.image}
                alt="moon"
                fill
              />
            </div>
            <div className="post-content flex-2 w-2/3 flex flex-col gap-2 justify-items-start">
              <div className="flex items-center gap-20">
                <div className="flex items-center">
                  <h1 className="text-2xl p-5 font-bold">{post.title}</h1>
                  <span className=" text-white px-5 bg-red-500 rounded-sm border-black border-solid">
                    .{post.catagory}
                  </span>
                </div>
                <span className=" text-blue-300">{post.date}</span>
              </div>
              <p className="text-xl p-5">{post.description}</p>
              <button className="p-5 m-5 bg-red-600 w-1/2 rounded-lg border-solid border-blue-500 border-[2px]">
                Read more
              </button>
            </div>
          </div>
        </>
      ))}

      <Pagination />
    </div>
  );
};

export default CardList;
