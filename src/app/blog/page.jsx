import CardList from "@/components/CardList";
import Menu from "@/components/Menu";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold p-5 text-center bg-blue-950">Style blog</h1>

      <div className="flex flex-wrap gap-5 p-5">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
