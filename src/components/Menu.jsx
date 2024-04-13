import React from "react";
import Image from "next/image";

const hotPosts = [
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
const Menu = () => {
  return (
    <div>
      <h2 className="text-sm font-mono">What is hot</h2>
      <h1 className="text-xl font-bold">Hot and popular</h1>
      {/* cards */}
      <div className="small-card flex flex-col w-full">
        {hotPosts.map((post) => (
          <>
            <div className="posts flex gap-5 items-center h-[30%]">
              <div className="post-image flex-1 w-1/3 h-[100px] relative gap-1 m-[10px]">
                <Image
                  className=" border-solid border-[5px] border-red-500 "
                  src={post.image}
                  alt="moon"
                  fill
                />
              </div>
              <div className="content flex-2 w-2/3">
                <div className="title">
                  <h1 className="font-bold text-xl">{post.title}</h1>
                </div>
                <div className="description">
                 {post.description}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      {/* catagory
      <h2 className="text-sm mt-3 font-mono">What is hot</h2>
      <h1 className="text-xl font-bold">Hot and popular</h1> */}

    </div>
  );
};

export default Menu;
