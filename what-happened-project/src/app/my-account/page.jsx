import Container from "@/components/common/container";
import Image from "next/image";
import React from "react";

const ORDERLIST_ARR = [
  {
    name: "입금전",
    quantity: 0,
  },
  {
    name: "입금준비중",
    quantity: 0,
  },
  {
    name: "입금전",
    quantity: 0,
  },
  {
    name: "배송완료",
    quantity: 0,
  },
];

const ICONLIST_ARR = [
  {
    img: "order-icon",
    eName: "ORDER",
    kName: "주문내역",
    width: 26,
    height: 19,
  },
  {
    img: "profile-icon",
    eName: "Profile",
    kName: "회원정보",
    width: 28,
    height: 26,
  },
  {
    img: "heart-icon",
    eName: "wishlist",
    kName: "관심상품",
    width: 28,
    height: 25,
  },
  {
    img: "coupon-icon",
    eName: "coupon",
    kName: "쿠폰",
    width: 28,
    height: 24,
  },
  {
    img: "board-icon",
    eName: "board",
    kName: "게시물 관리",
    width: 28,
    height: 17,
  },
  {
    img: "truck-icon",
    eName: "address",
    kName: "배송 관리",
    width: 28,
    height: 19,
  },
];

function MyAccount() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-40">
        <Container>
          <div>
            <h1 className="text-4xl leading-[60px] text-[#0565bb] font-extrabold text-center">
              MY ACCOUNT
            </h1>
            <p className="text-[#9a9a9a] text-base leading-[60px] text-center uppercase">
              01 home &gt;{" "}
              <span className="text-[#111] font-semibold">02 my account</span>
            </p>
            <div className="flex justify-between">
              <h3 className="text-[#111111] text-2xl font-semibold">
                최근 주문
              </h3>
              <div className="flex flex-row justify-center items-center gap-2">
                <p className="text-lg text-[#111111] font-semibold">더보기 </p>

                <Image
                  src="/right-arrow-small.webp"
                  alt="arrow"
                  width={13}
                  height={13}
                  className="object-contain"
                />
              </div>
            </div>

            <hr className="w-full border-[#222222] h-0.5 mt-4" />
            <div className="flex flex-row justify-around my-6">
              <p className="text-lg text-[#111111] font-semibold">주문일</p>
              <p className="text-lg text-[#111111] font-semibold">주문내역</p>
              <div className="flex flex-row gap-44">
                <p className="text-lg text-[#111111] font-semibold">주문번호</p>
                <p className="text-lg text-[#111111] font-semibold">결제금액</p>
              </div>
            </div>
            <hr className="w-full border-[#222222] h-0.5 " />

            <p className="text-xl text-[#111111] text-center font-semibold py-20">
              최근 주문내역이 없습니다.
            </p>

            <hr className="w-full border-[#222222] h-0.5 " />
            <div className="grid grid-cols-2 mt-6 mb-9">
              <div className="flex flex-row justify-around">
                <div>
                  <p className="text-[#111] text-sm font-light">
                    - 사용가능적립금
                  </p>
                  <p className="text-[#111] text-sm font-light">
                    - 사용가능적립금
                  </p>
                  <p className="text-[#111] text-sm font-light">- 쿠폰</p>
                </div>

                <div className="text-end">
                  <p className="text-[#111] text-sm font-light">1,000원</p>
                  <p className="text-[#111] text-sm font-light">0원</p>
                  <p className="text-[#111] text-sm font-light">0개</p>
                </div>
              </div>

              <div className="flex flex-row justify-around border-l-[1px] border-[#111]">
                <div>
                  <p className="text-[#111] text-sm font-light">
                    - 총구매적립금
                  </p>
                  <p className="text-[#111] text-sm font-light">- 총주문</p>
                </div>

                <div className="text-end">
                  <p className="text-[#111] text-sm font-light">1,000원</p>
                  <p className="text-[#111] text-sm font-light">0원</p>
                </div>
              </div>
            </div>

            <hr className="w-full border-[#222222] h-0.5 " />
          </div>
        </Container>
      </section>

      <section className="pt-16 pb-10">
        <Container>
          <div>
            <h3 className="text-[#111111] text-2xl font-semibold leading-[60px]">
              나의 주문처리 현황
            </h3>
            <hr className="w-full border-[#222222] h-0.5 " />
            <div className="flex flex-row my-4">
              {ORDERLIST_ARR.map((order) => (
                <div key={order.name} className="flex flex-row">
                  <div className="flex flex-col justify-center items-center mx-32">
                    <p className="text-[#111] text-sm font-light">
                      {order.name}
                    </p>
                    <p className="text-[#111] text-sm font-light">
                      {order.quantity}
                    </p>
                  </div>
                  <div className="border-r-[1px] border-[#111]" />
                </div>
              ))}

              <div className="flex flex-col ml-12">
                <p className="text-[#111] text-sm font-light">- 취소 : 0</p>
                <p className="text-[#111] text-sm font-light">- 교환 : 0</p>
                <p className="text-[#111] text-sm font-light">- 반품 : 0</p>
              </div>
            </div>
            <hr className="w-full border-[#222222] h-0.5 " />

            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-6 gap-8 mt-12">
              {ICONLIST_ARR.map((icon) => (
                <div
                  key={icon.eName}
                  className="bg-[#f8f9ff] py-8 px-24 flex flex-col justify-center items-center whitespace-nowrap"
                >
                  <Image
                    src={`/my-account/${icon.img}.webp`}
                    alt={icon.img}
                    width={icon.width}
                    height={icon.height}
                    className="object-contain mb-3"
                  />
                  <p className="text-sm text-black font-semibold text-center uppercase">
                    {icon.eName}
                  </p>
                  <p className="text-sm text-black font-semibold text-center">
                    {icon.kName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default MyAccount;
