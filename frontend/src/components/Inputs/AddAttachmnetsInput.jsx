import React, { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { HiMiniPlus } from "react-icons/hi2";
import { LuPaperclip } from "react-icons/lu";

const AddAttachmnetsInput = ({ attachments, setAttachments }) => {
  const [option, setOption] = useState("");

  const handleAddOption = () => {
    if (option.trim()) {
      setAttachments([...attachments, option.trim()]);
      setOption("");
    }
  };
  const handleDeleteOption = (index) => {
    const updatedArr = attachments.filter((_, idx) => idx !== index);
    setAttachments(updatedArr);
  };
  return (
    <div>
      {attachments.map((item, index) => (
        <div
          key={item}
          className="flex justify-between border bg-gray-50 border-gray-100  px-3 py-2 rounded-md mb-3 mt-2 "
        >
          <div className="flex-1 flex items-center gap-3 border border-gray-100 ">
            <LuPaperclip className="text-gray-400" />
            <p className="text-xs  text-black">{item}</p>
          </div>
          <button
            className="cursor-pointer"
            onClick={() => {
              handleDeleteOption(index);
            }}
          >
            <HiOutlineTrash className="text-lg text-red-500 " />
          </button>
        </div>
      ))}
      <div className="flex items-center gap-5 mt-4  ">
        <div className="flex-1 flex items-center gap-3 border border-gray-100 rounded-md px-3 ">
          <LuPaperclip className="text-gray-400 " />
          <input
            type="text"
            placeholder="Enter File Link"
            value={option}
            onChange={({ target }) => setOption(target.value)}
            className="w-full text-[15px] text-black outline-none bg-white py-3"
          />
        </div>
        <button
          className="flex items-center gap-1 bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition text-sm"
          onClick={handleAddOption}
        >
          <HiMiniPlus className="text-lg" /> Add
        </button>
      </div>
    </div>
  );
};

export default AddAttachmnetsInput;
