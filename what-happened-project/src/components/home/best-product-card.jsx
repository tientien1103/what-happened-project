import clsx from "clsx";
import Image from "next/image";
import React from "react";

function BestProductCard({ productImg, productIcon }) {
  return (
    <>
      <Image
        className={clsx("2xl:block hidden absolute z-10 -top-12 -left-10", {
          "left-[490px]": productImg === "best-image-02",
          "left-[1010px]": productImg === "best-image-03",
        })}
        src={`/best-products/${productIcon}.webp`}
        alt="best-product-img"
        width={98}
        height={98}
      />
      <Image
        src={`/best-products/${productImg}.webp`}
        alt="best-product-img"
        width={523}
        height={514}
      />
      <div
        className={clsx(
          "hidden 2xl:flex -bottom-10 left-12 flex-row gap-10 justify-between py-3 px-6 absolute z-10 border-[3px] border-[#020001] bg-white",
          {
            "left-[575px]": productImg === "best-image-02",
            "left-[1100px]": productImg === "best-image-03",
          }
        )}
      >
        <p className="text-[#222222] text-xl font-extrabold max-w-[208px]">
          How to create mobile-optimized
        </p>
        <Image
          src="/best-products/go-icon.webp"
          alt="go-icon"
          width={55}
          height={55}
        />
      </div>
    </>
  );
}

export default BestProductCard;
