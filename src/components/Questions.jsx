import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

const Questions = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="bg-[#13151d] text-white ">
      <header
        className="flex items-center justify-between p-5 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="text-base md:text-lg font-medium">{props.title}</span>
        <div className="text-2xl md:text-3xl">
          {!expanded ? <MdAdd /> : <MdAdd className="rotate-45 duration-200" />}
        </div>
      </header>
      <div
        className={`${
          expanded ? "flex flex-col" : "hidden"
        } pt-1 pb-5 px-5 text-white/50 duration-200`}
      >
        <span>{props.subtitle}</span>
        <div className="pl-10 flex flex-col gap-3 text-sm md:text-base">
          {props.children}
        </div>
      </div>
    </article>
  );
};

export default Questions;
