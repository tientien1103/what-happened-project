import React from "react";
import Image from "next/image";
import clsx from "clsx";

const Pagination = ({
  totalItems,
  itemPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  const next = () => {
    if (currentPage === pages.length) return;

    setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    if (currentPage === 1) return;

    setCurrentPage(currentPage - 1);
  };
  if (totalItems)
    for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
      pages.push(i);
    }
  return (
    <div className="mt-[32px] flex flex-row justify-center">
      {pages.map((page, i) => {
        return (
          <button
            className={clsx("mr-8 text-[#111]", {
              "font-bold underline": page === currentPage,
              "font-normal": page !== currentPage,
            })}
            key={i}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
      <Image
        src="/shop-page/right-arrow.webp"
        alt=""
        width={13}
        height={22}
        className="cursor-pointer"
        onClick={next}
      />
    </div>
  );
};

export default Pagination;
