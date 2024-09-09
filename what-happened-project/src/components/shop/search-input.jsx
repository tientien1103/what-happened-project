"use client";
import Image from "next/image";
import React, { useState } from "react";
// const options = [
//   { value: "인기순", label: "인기순" },
// ];

function SearchInput() {
  const [searchInput, setSearchInput] = useState("");
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleSelect = (option) => {
  //   console.log("Selected option:", option);
  // };
  // const handleOptionClick = (option) => {
  //   setSelectedOption(option);
  //   handleSelect(option);
  //   setIsOpen(false);
  // };
  const handleSearchInput = () => {
    console.log("searchInput: ", searchInput);
  };
  return (
    <div className="flex md:flex-row flex-col-reverse gap-3">
      <div className="border-2 border-[#111] flex w-[125px] h-[37px]">
        <div className="relative inline-block text-left">
          <div>
            <button
              // onClick={handleToggle}
              type="button"
              className="p-2 text-sm font-semibold text-[#111]"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              인기순
            </button>
          </div>

          {/* <div
            className="absolute right-0 z-10 mt-2 w-32 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            {isOpen && (
              <ul className="py-1" role="none">
                {options.map((option) => (
                  <li
                    onClick={() => handleOptionClick(option)}
                    key={option.value}
                    className="block px-4 py-2 text-sm text-[#111] cursor-pointer hover:bg-primary hover:text-lightBlack"
                    role="menuitem"
                    id="menu-item-0"
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div> */}
        </div>
      </div>
      <div className="border-2 border-[#111] flex p-2 w-[281px] h-[37px]">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full outline-none placeholder-customPlaceholder"
          placeHolder="결과 내 검색"
        />
        <button onClick={handleSearchInput}>
          <Image
            src="/shop-page/search-icon.webp"
            alt=""
            width={21}
            height={21}
          />
        </button>
      </div>
    </div>
  );
}

export default SearchInput;
