"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import Container from "../../../components/common/container";
import PhotoGallery from "@/components/shop/detail-item/photo-gallery";
import ItemCard from "@/components/shop/detail-item/item-card";
import clsx from "clsx";
import { PRODUCT_ARR } from "@/mockup/data";
import ReviewList from "@/components/shop/detail-item/review-list";
import BestItemList from "@/components/shop/detail-item/best-item-list";

const tabs = [
  {
    value: "상품 상세정보",
  },
  {
    value: "상품 구매 안내",
  },
  {
    value: "재입고 문의",
  },
  {
    value: "배송문의",
  },
  {
    value: "기타",
  },
];

function DetailItem() {
  const [activeTab, setTab] = useState(tabs[1].value);
  const [scrollPosition, setScrollPosition] = useState(0);

  const ref = useRef(null);
  const handleScroll = (e) => {
    setScrollPosition(e.currentTarget.scrollLeft);
  };
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-44">
        <Container>
          <div className="grid grid-cols-8 gap-20 lg:gap-36">
            <PhotoGallery />
            <ItemCard />
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="mt-48">
            <div className="flex flex-row justify-between">
              <h3 className="text-2xl text-[#111] font-medium">상품 qna</h3>
              <div className="flex">
                <div className="flex text-lg font-light text-[#8c8c8c]">
                  <ul className="flex list-none flex-col md:flex-row">
                    {tabs.map((tab, index) => (
                      <li
                        key={tab.value}
                        className={clsx(
                          "cursor-pointer whitespace-nowrap hover:text-[#111] hover:font-medium flex items-center",
                          {
                            "text-[#111111] font-medium":
                              activeTab === tab.value,
                          }
                        )}
                        onClick={() => {
                          onChangeTab(tab.value);
                        }}
                      >
                        {tab.value}
                        <div
                          className={clsx(
                            "border-r-[1px] border-[#d4d4d4] h-4 mx-7"
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="ml-8 text-[#111] underline text-lg font-medium">
                  상품 Q&A
                </p>
              </div>
            </div>
            <hr className="w-full border-[#111] mt-5" />
            <div className="pt-20 pb-52">
              <p className="text-xl text-[#111] text-center">
                상품에 관해 여러가지 질문해보세요.
              </p>
            </div>

            <div>
              <h3 className="text-2xl text-[#111] font-medium">
                상품 결제 정보
              </h3>
              <hr className="w-full border-[#111] mt-5" />
              <p className="text-base leading-8 text-[#111] font-light mt-7">
                고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도
                있습니다. <br />
                확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인
                주문이 아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수
                있습니다. <br />
                무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은
                가까운 은행에서 직접 입금하시면 됩니다. <br />
                주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야
                하며, 7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은
                자동취소 됩니다.
              </p>
            </div>

            <div className="mt-24">
              <h3 className="text-2xl text-[#111] font-medium">
                교환 및 반품 정보
              </h3>
              <hr className="w-full border-[#111] mt-5" />
              <p className="text-base leading-8 text-[#111] my-7">
                교환 및 반품이 가능한 경우
              </p>
              <p className="text-base leading-8 text-[#111] font-light">
                상품을 공급 받으신 날로부터 7일이내. <br />
                공급받으신 상품 및 용역의 내용이 표시.광고 내용과
                <br />
                다르거나 다르게 이행된 경우에는 공급받은 날로부터 7일이내.
              </p>

              <p className="text-base leading-8 text-[#111] mb-7 mt-14">
                교환 및 반품이 불가능한 경우
              </p>
              <p className="text-base leading-8 text-[#111] font-light">
                고객님의 책임 있는 사유로 상품등이 멸실 또는 훼손된 경우. 단,
                상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외
                <br />
                고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히
                감소한 경우.
                <br />
                시간의 경과에 의하여 재판매가 곤란할 정도로 상품등의 가치가
                현저히 감소한 경우
                <br />
                복제가 가능한 상품등의 포장을 훼손한 경우
                <br />
                (자세한 내용은 고객만족센터 1:1 E-MAIL상담을 이용해 주시기
                바랍니다.)
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-36">
        <Container>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col md:flex-row sm:gap-4 lg:gap-8">
              <h3 className="text-2xl text-[#111] font-medium">review (16)</h3>
              <div className="flex gap-2">
                <Image
                  src="/shop-page/orange-star.webp"
                  alt="star"
                  width={27}
                  height={26}
                  className="object-contain"
                />
                <Image
                  src="/shop-page/orange-star.webp"
                  alt="star"
                  width={27}
                  height={26}
                  className="object-contain"
                />
                <Image
                  src="/shop-page/orange-star.webp"
                  alt="star"
                  width={27}
                  height={26}
                  className="object-contain"
                />
                <Image
                  src="/shop-page/orange-star.webp"
                  alt="star"
                  width={27}
                  height={26}
                  className="object-contain"
                />
                <Image
                  src="/shop-page/grey-star.webp"
                  alt="star"
                  width={27}
                  height={26}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="ml-8 text-[#111] underline text-lg font-medium hidden md:block">
              리뷰쓰기
            </p>
          </div>
          <hr className="w-full border-[#111] mt-5" />
          <div className="overflow-x-hidden">
            <div
              ref={ref}
              onScroll={handleScroll}
              className="snap-x snap-mandatory overflow-x-scroll scroll-smooth overscroll-x-contain whitespace-nowrap scrollbar-hide"
            >
              <div className="flex gap-4">
                {PRODUCT_ARR.map((item) => (
                  <Image
                    key={item.imgUrl}
                    src={`/products/${item.imgUrl}.webp`}
                    width={213.5}
                    height={213.5}
                    className="snap-start"
                  />
                ))}
              </div>
            </div>
          </div>
          <hr className="w-full border-[#ececec] mt-10 mb-5" />

          <ReviewList />
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div>
            <h3 className="text-lg text-[#111] font-semibold">
              관련 상품 BEST
            </h3>
            <BestItemList />
          </div>
        </Container>
      </section>
    </main>
  );
}

export default DetailItem;
