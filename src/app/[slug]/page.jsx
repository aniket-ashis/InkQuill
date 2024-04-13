import React from "react";
import Image from "next/image";
import Menu from "@/components/Menu";
import Comment from "@/components/Comment";
const SinglePage = () => {
  return (
    <div>
      <div>
        {/* title and image */}
        <div className="container-title flex  justify-between p-5">
          <h1 className="text-6xl">Title</h1>
          <div className="post-image  w-1/3 h-[500px] relative gap-1 m-[10px]">
            <Image
              className="object-cover border-solid border-[5px] border-red-500 "
              src="/game.jpg"
              alt="moon"
              fill
            />
          </div>
        </div>
        {/* Author and date */}
        <div className="user text-3xl m-5">
          <span className=" bg-red-500 rounded-lg p-5">Aniket Ashis</span>
          <span className="p-5 text-xl">10/01/2023</span>
        </div>
      </div>

      <div className="flex p-5 m-5">
        <div className="text-2xl p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          minima atque ratione modi sequi? Vero corporis labore excepturi
          doloribus! Consequatur nemo accusamus quod facilis corrupti reiciendis
          et aliquid minus voluptates?
        </div>
        <div>
          <Menu />
        </div>
      </div>
      <Comment />
    </div>
  );
};

export default SinglePage;
