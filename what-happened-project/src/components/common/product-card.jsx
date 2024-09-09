import Image from "next/image";
import React from "react";

function ProductCard({ imgUrl, imgShopUrl }) {
  return (
    <div>
      {imgUrl ? (
        <Image
          src={`/products/${imgUrl}.webp`}
          alt={imgUrl}
          width={300}
          height={300}
        />
      ) : (
        <Image
          src={`/shop-page/${imgShopUrl}.webp`}
          alt={imgShopUrl}
          width={415.3}
          height={415.3}
        />
      )}

      <span className="text-lg text-[#222222] font-semibold">
        [what happen] How to create
      </span>
      <div className="flex justify-between">
        <span className="text-base text-[#222222]">2,500 won</span>
        <div className="flex">
          <Image
            src="/heart-icon.webp"
            alt="heart - icon"
            width={19}
            height={16}
          />
          <span className="text-base text-[#666666]">236</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
