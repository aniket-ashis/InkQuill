import React from "react";
import Link from "next/link";
const Pagination = () => {
  return (
    <div className="flex justify-between p-5">
      <Link href="/" className="text-xl p-5 bg-red-700 text-white rounded-sm">
        Previous
      </Link>
      <Link href="/" className="text-xl p-5 bg-red-700 text-white rounded-sm">
        Next
      </Link>
    </div>
  );
};

export default Pagination;
