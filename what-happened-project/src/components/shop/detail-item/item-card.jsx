import Image from "next/image";
import React from "react";

function ItemCard() {
  return (
    <div className="col-span-8 lg:col-span-4">
      <div className="flex flex-col lg:flex-row justify-between">
        <h2 className="text-2xl font-medium mb-4 text-[#111]">
          [Apparel] What happened beanie
        </h2>
        <div>
          <button>
            <Image
              src="/heart-icon.webp"
              alt="heart-icon"
              width={24}
              height={21}
            />
          </button>
          <p className="text-[#111111] text-xs">wish</p>
        </div>
      </div>
      <p className="text-2xl text-[#111] font-semibold mb-10">16,000 won</p>

      <div className="mb-8">
        <h3 className="text-base text-[#111] font-medium">상품 정보</h3>
        <ul className="text-xs lg:text-sm font-light">
          <li className="space-x-[42px] lg:space-x-20">
            <span className="text-[#8c8c8c] leading-9">재질</span>
            <span className="text-[#111111]">아크릴 100%</span>
          </li>
          <li className="space-x-[30px] lg:space-x-[66px]">
            <span className="text-[#8c8c8c] leading-9">사이즈</span>
            <span className="text-[#111111]">
              16.5cm x 18.5cm / 펼쳤을 때 26cm
            </span>
          </li>
          <li className="flex flex-row space-x-6 lg:space-x-[50px]">
            <span className="text-[#8c8c8c] leading-9">세척 방법</span>
            <p className="text-[#111111] flex flex-col mt-2">
              <span>
                30도 이하의 미지근한 물에서 중성세제로 단독손세탁을 권장
              </span>
              <span>그늘진 곳에 뉘어서 건조</span>
              <span>정전기 예방을 위해 섬유유연제로 헹궈주시면 더 좋음</span>
            </p>
          </li>
        </ul>
      </div>

      <button className="w-full lg:max-w-[646px] border-2 border-[#eff0f4] bg-[#f6f4f4] p-2 lg:p-5 flex flex-row lg:justify-between items-center">
        <p className="text-base text-[#111111] font-medium">
          지금 왓헤픈 회원가입시{" "}
          <span className="text-[#f96400]">3% 할인권</span> 증정
        </p>
        <Image
          src="/right-arrow.webp"
          alt="arrow"
          width={32}
          height={1}
          className="object-contain"
        />
      </button>

      <div className="mb-8">
        <h3 className="font-bold">배송 정보</h3>
        <ul className="text-xs lg:text-sm font-light">
          <li className="flex flex-row space-x-10 lg:space-x-[66px]">
            <p className="text-[#8c8c8c] leading-9">배송비</p>

            <p className="text-[#111111] flex flex-col mt-2">
              <span>
                50,000원 이상 구매시 무료배송 <br />
                (미만시 배송비 2500원 발생) 제주도
              </span>
              <span>를 포함한 도서/산간지역 추가 배송비 없음</span>
            </p>
          </li>
          <li className="space-x-8 lg:space-x-[50px] flex flex-row">
            <p className="text-[#8c8c8c] leading-9">배송예정</p>
            <p className="text-[#111111] leading-9">
              <span className="text-[#0565bb]">04/20(화)</span>
              이내 도착 예정 97%
            </p>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <label htmlFor="size" className="block font-bold mb-2">
          Color: Size
        </label>
        <select
          id="size"
          className="w-full border border-gray-300 text-[#111] text-xs font-medium uppercase p-4 outline-none"
        >
          <option>Color: size</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

      <div className="flex lg:flex-row flex-col">
        <button className="w-full lg:w-1/2 border-2 border-[#0565bb] bg-[#f8f8f8] text-[#0565bb] text-base font-medium py-6">
          add cart
        </button>
        <button className="w-full lg:w-1/2 bg-[#0565bb] text-white text-base font-medium py-6">
          buy now
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
