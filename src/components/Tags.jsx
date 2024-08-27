import React from "react";

const Tags = (props) => {
  return (
    <span className="border-solid border-[1px] border-[#efdd3b] text-[#efdd3b] text-xs m-1 px-2 rounded-3xl">
      {props.children}
    </span>
  );
};

export default Tags;
