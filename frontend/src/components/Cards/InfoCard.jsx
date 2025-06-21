import React from "react";

const InfoCard = ({ label, value, color }) => {
  return (
    <div className="flex items-center gap-2">
      {/* Small colored circle */}
      <div className={`w-2 md:w-2 h-2 md:h-2 ${color} rounded-full`} />

      {/* Text next to it, on the same line */}
      <p className="text-xs md:text-[14px] text-gray-500">
        <span className="text-sm md:text-[15px] text-black font-semibold">
          {value}{" "}
        </span>
        {label}
      </p>
    </div>
  );
};

export default InfoCard;
