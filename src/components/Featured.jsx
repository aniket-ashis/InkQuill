import React from "react";
import Image from "next/image";
const Featured = () => {
  return (
    <div className="flex flex-col p-4 gap-8">
      <h1 className="text-6xl font-bold">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </h1>

      <div className="post flex mt-[60px] gap-5 items-center h-[50%]">
        <div className="post-image flex-1 h-[500px] relative gap-1 m-[10px]">
          <Image
            className=" border-solid border-[5px] border-red-500 rounded-[50px]"
            src="/photo1.jpg"
            alt="moon"
            fill
          />
        </div>
        <div className="post-content flex-1 flex flex-col gap-2 justify-items-start">
          <h1 className="text-3xl p-5 font-bold">Lorem ipsum dolor sit amet</h1>
          <p className="text-xl p-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            non maiores sit. Eos nisi eaque totam voluptates perferendis dolores
            neque ea accusantium, officia odio, natus quaerat iste id.
            Molestiae, obcaecati.
          </p>
          <button className="p-5 m-5 bg-red-600 w-1/2 rounded-lg border-solid border-blue-500 border-[2px]">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
