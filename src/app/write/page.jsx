"use client";

import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css"; // ES6
const Write = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value); // Updates the state on each keystroke
  };

  const handleSubmit = () => {
    console.log("Submitted Value:", value); // For demonstration, logs the value
    // Here you might want to send the value to a server or another component
    setValue(""); // Optionally reset the value after submission
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        className="text-6xl bg-transparent font-bold p-5"
      />
      <div className="flex gap-20 p-6">
        <button onClick={() => setOpen(!open)}>
          <img src="/plus.png" alt="" width={40} height={40} />
        </button>
        {open && (
          <div className="flex item-center gap-10">
            <button>
              <img src="/image.png" alt="" width={40} height={40} />
            </button>
            <button>
              <img src="/external.png" alt="" width={40} height={40} />
            </button>
            <button>
              <img src="/video.png" alt="" width={40} height={40} />
            </button>
          </div>
        )}
      </div>

      <div className="">
        <textarea
          placeholder="Write your comments here"
          value={value} // Controlled component
          onChange={handleChange} // Updates the state on each keystroke
          className="text-3xl text-white bg-slate-800"
        />
      </div>
      <button
        className="bg-green-500 text-xl font-bold rounded-full m-20 top-30px p-5 text-white"
        onClick={handleSubmit}
      >
        Publish
      </button>
    </div>
  );
};

export default Write;
