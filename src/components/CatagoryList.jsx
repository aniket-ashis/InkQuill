import Image from "next/image";
import React from "react";
import Link from "next/link";

const data = [
  {
    catagory: "Build",
    image: "/build.jpg",
  },
  {
    catagory: "Art",
    image: "/art.jpg",
  },
  {
    catagory: "Games",
    image: "/game.jpg",
  },
  {
    catagory: "Development",
    image: "/development.jpg",
  },
];

const CatagoryList = () => {
  return (
    <div className="flex flex-col text-center p-5 w-full gap-5">
      <h1 className="text-5xl font-bold p-5">Popular catagories</h1>
      <div className="catagory-list flex justify-around">
        {data.map((data) => (
          <>
            <div className="catagory-item flex gap-2 p-5 bg-blue-700 rounded-full h-[50px] items-center">
              <Image src={data.image} alt="" width={30} height={30} className="rounded-full"/>
              <Link href="/" className="text-xl font-mono font-bold">{data.catagory}</Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CatagoryList;
