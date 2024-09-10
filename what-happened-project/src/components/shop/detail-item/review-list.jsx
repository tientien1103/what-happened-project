"use client";
import React, { useState } from "react";
import ReviewCard from "./review-card";
import { PRODUCT_ARR } from "@/mockup/data";
import Pagination from "../pagination";

const ITEMS_PER_PAGE = 4;

function ReviewList() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = PRODUCT_ARR.length;
  const lastItemIndex = currentPage * ITEMS_PER_PAGE;
  const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
  return (
    <div>
      {PRODUCT_ARR.slice(firstItemIndex, lastItemIndex).map((item, index) => (
        <div key={`review ${index + 1}`}>
          <div className="flex flex-row justify-between">
            <ReviewCard imgUrl={item.imgUrl} />
          </div>
          <hr className="w-full border-[#ececec] my-6" />
        </div>
      ))}

      <Pagination
        setCurrentPage={setCurrentPage}
        totalItems={totalItems}
        itemPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
      />
    </div>
  );
}

export default ReviewList;
