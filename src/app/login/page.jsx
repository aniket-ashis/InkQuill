import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center m-10">
      <div className="rounded-md px-20 py-10 bg-gradient-to-r from-blue-800 to-slate-600 flex-col gap-10">
        <div className="text-center p-8 bg-gradient-to-r from-red-500 to-red-700 flex-col my-20 mx-10 rounded-md ">
          GOOGLE
        </div>
        <div className="text-center p-6  bg-gradient-to-r from-green-500 to-green-800 my-20 mx-10 rounded-md">
          GitHub
        </div>
        <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-blue-800 my-20 mx-10 rounded-md">
          Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
