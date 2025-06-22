import React, { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { HiMiniPlus } from "react-icons/hi2";

const TodoListInput = ({ todoList, setTodoList }) => {
  const [option, setOption] = useState("");

  const handleAddOption = () => {
    if (option.trim()) {
      setTodoList([...todoList, option.trim()]);
      setOption("");
    }
  };

  const handleDeleteOption = (index) => {
    const updatedArr = todoList.filter((_, idx) => idx !== index);
    setTodoList(updatedArr);
  };

  return (
    <div>
      {todoList.map((item, index) => (
        <div
          key={item}
          className="flex justify-between bg-gray-50 border border-gray-100 px-3 py-2 rounded-md mt-3"
        >
          <p className="text-xs text-black">
            <span className="text-xs text-gray-400 font-semibold mr-2">
              {index < 9 ? `0${index + 1}` : index + 1}
            </span>
            {item}
          </p>
          <button
            className="cursor-pointer"
            onClick={() => {
              handleDeleteOption(index);
            }}
          >
            <HiOutlineTrash className="text-lg text-red-500" />
          </button>
        </div>
      ))}
      <div className="flex items-center gap-5 mt-4">
        <input
          type="text"
          className="w-full text-[15px] text-black outline-none bg-white border border-gray-200 px-4 py-3 rounded-md"
          placeholder="Enter Task"
          value={option}
          onChange={({ target }) => setOption(target.value)}
        />
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

export default TodoListInput;
