"use client";
import React, { useState } from "react";
import SHOPLIST_ARR from "../../mockup/shop-data";
import ProductCard from "../common/product-card";
import clsx from "clsx";
import SearchInput from "./search-input";
import Pagination from "./pagination";

const ITEMS_PER_PAGE = 16;

const tabs = [
  {
    value: "all",
  },
  {
    value: "wall-deco",
    title: "wall deco",
  },
  {
    value: "fashion",
  },
  {
    value: "digital-acc",
    title: "digital acc",
  },
  {
    value: "living",
  },
  {
    value: "habit",
  },
];

function ShopTab() {
  const [activeTab, setTab] = useState(tabs[0].value);
  const [productList, setProductList] = useState(SHOPLIST_ARR);
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = productList.length;
  const lastItemIndex = currentPage * ITEMS_PER_PAGE;
  const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;

  const onChangeTab = (type) => {
    setTab(type);

    switch (type) {
      case "wall-deco":
        setProductList(
          SHOPLIST_ARR.filter((item) => item.type === "wall-deco")
        );
        break;
      case "fashion":
        setProductList(SHOPLIST_ARR.filter((item) => item.type === "fashion"));
        break;
      case "digital-acc":
        setProductList(
          SHOPLIST_ARR.filter((item) => item.type === "digital-acc")
        );
        break;
      case "living":
        setProductList(SHOPLIST_ARR.filter((item) => item.type === "living"));
        break;
      case "habit":
        setProductList(SHOPLIST_ARR.filter((item) => item.type === "habit"));
        break;
      default:
        setProductList(SHOPLIST_ARR);
        break;
    }
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="flex w-full items-center justify-center text:sm md:text-lg font-medium md:font-extrabold uppercase text-[#111111]">
        <ul className="flex list-none flex-col md:flex-row">
          {tabs.map((tab) => (
            <li
              key={tab.value}
              className={clsx("mr-6 cursor-pointer whitespace-nowrap", {
                "text-[#245fc5]": activeTab === tab.value,
              })}
              onClick={() => {
                onChangeTab(tab.value);
              }}
            >
              {tab.title ? tab.title : tab.value}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full">
        <hr className="w-full h-0.5 border-[#111] mb-5" />
        <span className="text-[#ea4913] text-base font-medium ml-24">
          전체보기
        </span>
        <hr className="w-full h-0.5 border-[#a1a1a1] mt-5" />
      </div>

      <div className="flex flex-col items-center justify-center md:items-start md:flex-row md:justify-between">
        <span className="text-lg text-[#111] font-medium">전체 상품 207</span>
        <div className="flex gap-5">
          <div className="hidden md:flex mt-1 gap-2">
            <div className="grid grid-cols-2 gap-0.5 h-3">
              <div className="border-2 border-[#ea4913] bg-[#ea4913] p-1" />
              <div className="border-2 border-[#ea4913] bg-[#ea4913] p-1" />
              <div className="border-2 border-[#ea4913] bg-[#ea4913] p-1" />
              <div className="border-2 border-[#ea4913] bg-[#ea4913] p-1" />
            </div>

            <div className="grid grid-cols-3 gap-0.5 h-3">
              <div className="border-2 border-[#a1a1a1] bg-[#a1a1a1] p-0.5" />
              <div className="border-2 border-[#a1a1a1] bg-[#a1a1a1] p-0.5" />
              <div className="border-2 border-[#a1a1a1] bg-[#a1a1a1] p-0.5" />
              <div className="border-2 border-[#a1a1a1] bg-[#a1a1a1] p-0.5" />
              <div className="border-2 border-[#a1a1a1] bg-[#a1a1a1] p-0.5" />
              <div className="border-2 border-[#a1a1a1] bg-[#a1a1a1] p-0.5" />
              <div className="border-2 border-[#a1a1a1] bg-[#a1a1a1] p-0.5" />
              <div className="border-2 border-[#a1a1a1] bg-[#a1a1a1] p-0.5" />
              <div className="border-2 border-[#a1a1a1] bg-[#a1a1a1] p-0.5" />
            </div>
          </div>
          <SearchInput />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-5">
        {productList.slice(firstItemIndex, lastItemIndex).map((product) => (
          <ProductCard key={product.slug} {...product} />
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

export default ShopTab;
