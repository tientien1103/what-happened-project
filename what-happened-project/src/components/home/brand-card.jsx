import clsx from "clsx";
import Image from "next/image";
import React from "react";

function BrandCard({ brandImgUrl, brand }) {
  return (
    <div className="border-[3px] border-[#111111] bg-[#110e03]">
      <div
        className={clsx("border-[3px] border-[#111111] bg-[#111111] py-3", {
          "bg-[#ff5500]": brandImgUrl === "dbrand",
        })}
      >
        <p className="text-3xl leading-[50px] text-white text-center font-extrabold uppercase">
          {brand}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Image
          className="object-cover h-[410px]"
          src={`/issues/${brandImgUrl}.webp`}
          alt={brandImgUrl}
          width={387}
          height={405}
        />
      </div>
    </div>
  );
}

export default BrandCard;
