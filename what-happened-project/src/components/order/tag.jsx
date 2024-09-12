import clsx from "clsx";
import React from "react";

const Tag = ({ tag, selectedPayment, handleClick }) => {
  return (
    <div className="group">
      <div
        className={clsx(
          "border-box cursor-pointer rounded border border-[#111] px-4 py-3 lg:group-hover:border-[#ea4913] lg:group-hover:bg-[#ea4913]",
          {
            "border-[#ea4913] bg-[#ea4913]":
              selectedPayment?.includes(tag) || false,
          }
        )}
        onClick={() => handleClick(tag)}
      >
        <p
          className={clsx(
            "font-semibold text-[#111] lg:group-hover:text-white",
            {
              "text-white": selectedPayment?.includes(tag) || false,
            }
          )}
        >
          {tag}
        </p>
      </div>
    </div>
  );
};

export default Tag;
