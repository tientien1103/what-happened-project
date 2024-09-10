"use client";
import React, { useState } from "react";

import { PRODUCT_ARR } from "@/mockup/data";
import Pagination from "../pagination";
import ProductCard from "@/components/common/product-card";

const ITEMS_PER_PAGE = 5;

function BestItemList() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = PRODUCT_ARR.length;
  const lastItemIndex = currentPage * ITEMS_PER_PAGE;
  const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
  return (
    <div>
      <div className="grid grid-cols-15 gap-4">
        {PRODUCT_ARR.slice(firstItemIndex, lastItemIndex).map((product) => (
          <div
            key={product.imgUrl}
            className="col-span-15 lg:col-span-5 xl:col-span-3 mb-16"
          >
            <ProductCard imgUrl={product.imgUrl} slug={product.slug} />
          </div>
        ))}
      </div>

      <Pagination
        setCurrentPage={setCurrentPage}
        totalItems={totalItems}
        itemPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
      />
    </div>
  );
}

export default BestItemList;
