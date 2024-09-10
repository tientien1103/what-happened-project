import Image from "next/image";
import React from "react";

function ReviewCard({ imgUrl }) {
  return (
    <>
      <div className="flex flex-row gap-7">
        <Image
          src={`/products/${imgUrl}.webp`}
          alt={imgUrl}
          width={70.8}
          height={70.8}
        />
        <div>
          <p className="text-lg text-[#8c8c8c] font-light">
            [Size m, color blue]
          </p>
          <p className="text-lg text-[#111] font-light mt-4">
            너무 예쁘게 잘 사용했습니다! 역시 왓헤픈!! 색이 너무 좋네요.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-10">
        <p className="text-lg text-[#111] font-light">jin ji***</p>
        <p className="text-lg text-[#111] font-light">2021.04.16</p>
        <div className="flex gap-2">
          <Image
            src="/shop-page/orange-star.webp"
            alt="star"
            width={19}
            height={18}
            className="object-contain"
          />
          <Image
            src="/shop-page/orange-star.webp"
            alt="star"
            width={19}
            height={18}
            className="object-contain"
          />
          <Image
            src="/shop-page/orange-star.webp"
            alt="star"
            width={19}
            height={18}
            className="object-contain"
          />
          <Image
            src="/shop-page/orange-star.webp"
            alt="star"
            width={19}
            height={18}
            className="object-contain"
          />
          <Image
            src="/shop-page/grey-star.webp"
            alt="star"
            width={19}
            height={18}
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
