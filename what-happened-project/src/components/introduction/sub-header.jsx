"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const tabs = [
  {
    value: "about",
    navigate: "/introduction",
  },
  {
    value: "contact us",
    navigate: "#",
  },
  {
    value: "campaign",
    navigate: "#",
  },
  {
    value: "story",
    navigate: "#",
  },
  {
    value: "toon",
    navigate: "#",
  },
];

function SubHeader() {
  const currentPath = usePathname();
  console.log(currentPath);
  return (
    <div className="flex flex-col gap-10">
      <div className="flex w-full items-center justify-center">
        <ul className="flex list-none gap-4 md:gap-0 flex-col md:flex-row">
          {tabs.map((tab) => (
            <li
              key={tab.value}
              className={clsx(
                "mr-8 px-auto py-4 w-[221px] cursor-pointer whitespace-nowrap border-2 border-black text-xl text-black text-center font-extrabold uppercase rounded-full bg-white hover:text-[#0658c2] hover:bg-[#fcd32a]",
                {
                  "text-[#0658c2] bg-[#fcd32a]": currentPath === tab.navigate,
                }
              )}
            >
              <Link href={tab.navigate}>{tab.value}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SubHeader;
