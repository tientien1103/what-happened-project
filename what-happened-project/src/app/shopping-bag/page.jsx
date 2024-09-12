"use client";
import Container from "@/components/common/container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FAKE_DATA = [
  {
    name: "[Apparel] what happened beanie",
    price: "23,000",
    discountPercent: "10%",
    discount: "2,300",
    discountPrice: "20,700",
    shipCost: "3,000",
    value: "item1",
  },
  {
    name: "[Apparel] what happened beanie",
    price: "23,000",
    discountPercent: "10%",
    discount: "2,300",
    discountPrice: "20,700",
    shipCost: "무료  업체배송",
    value: "item2",
  },
];

function ShoppingBag() {
  const [count, setCount] = useState(1);

  const router = useRouter();

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    router.push("/order");
  };

  return (
    <main className="min-h-screen flex-col items-center bg-white ">
      <section className="pt-40">
        <Container>
          <h1 className="text-4xl leading-[60px] text-center text-[#0565bb] font-extrabold uppercase">
            Shopping Bag
          </h1>
          <p className="text-[#111] text-base text-center leading-[60px] uppercase font-semibold">
            01 Shopping Bag &gt;{" "}
            <span className="text-[#9a9a9a]">
              02 order &gt; order confirmed
            </span>
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <hr className="w-full border-[#222222] h-0.5" />
            <div className="flex flex-row gap-[400px] items-center py-5">
              <input
                type="checkbox"
                placeholder="all"
                {...register("all", { required: true })}
                className="w-6 h-6"
              />
              <div className="flex flex-row gap-[480px]">
                <p className="text-lg text-[#111111] font-semibold">
                  상품 정보
                </p>
                <div className="flex gap-32">
                  <p className="text-lg text-[#111111] font-semibold">수량</p>
                  <p className="text-lg text-[#111111] font-semibold">
                    주문금액
                  </p>
                  <p className="text-lg text-[#111111] font-semibold">배송비</p>
                </div>
              </div>
            </div>
            <hr className="w-full border-[#222222] h-0.5 " />
            {FAKE_DATA.map((data, index) => (
              <div key={`shopping bag ${index + 1}`}>
                <div className="grid grid-cols-2">
                  <div className="flex flex-row items-center gap-20 py-7">
                    <input
                      type="checkbox"
                      placeholder={data.value}
                      {...register(data.value, { required: true })}
                      className="w-6 h-6"
                    />
                    <div className="flex flex-row items-center gap-6">
                      <Image
                        src="/products/img-06.webp"
                        alt="img-6"
                        width={120}
                        height={120}
                      />
                      <div className="flex flex-row gap-40">
                        <div>
                          <p className="text-lg text-[#111111] font-semibold">
                            {data.name}
                          </p>
                          <p className="text-sm text-[#111111] font-semibold">
                            {data.price} 원
                          </p>
                          <p className="text-sm text-[#ea4913] font-semibold">
                            [{data.discountPercent}] {data.discountPrice} 원
                          </p>
                        </div>
                        <div className="flex gap-10">
                          <Image
                            src="/delete-icon.webp"
                            alt="img-6"
                            width={19}
                            height={19}
                            className="object-contain cursor-pointer"
                          />

                          <div className="border-r-2 border-[#111111]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ml-28 flex flex-row gap-28 items-center">
                    <div className="flex flex-row gap-5 items-center">
                      <button>
                        <Image
                          onClick={handleDecrement}
                          src="/minus-icon.webp"
                          alt="minus-icon"
                          width={35}
                          height={35}
                          className="object-contain"
                        />
                      </button>
                      <p className="text-sm text-[#111111] font-semibold">
                        {count}
                      </p>
                      <button>
                        <Image
                          onClick={handleIncrement}
                          src="/plus-icon.webp"
                          alt="plus-icon"
                          width={35}
                          height={35}
                          className="object-contain"
                        />
                      </button>
                    </div>

                    <div className="space-y-5">
                      <p className="text-2xl text-[#111111] font-semibold">
                        {data.discountPrice} won
                      </p>
                      <button className="bg-[#ea4913] py-3 px-9">
                        BUY NOW
                      </button>
                    </div>

                    <p className="text-lg text-[#111111]">{data.shipCost}</p>
                  </div>
                </div>
                <hr className="w-full border-[#222222] h-0.5 " />
              </div>
            ))}
            <button className="border-2 border-[#a1a1a1] py-3 px-8 text-[#111] text-sm mt-6 mb-28">
              선택상품 삭제
            </button>
            <hr className="w-full border-[#9a9a9a] h-0.5" />
            <div className="flex flex-row justify-evenly py-16">
              <p className="text-3xl text-[#111111] font-bold">51,400 won</p>
              <p className="text-3xl text-[#a1a1a1] font-bold">+</p>
              <p className="text-3xl text-[#111111] font-bold">3,000 won</p>
              <p className="text-3xl text-[#a1a1a1] font-bold">=</p>
              <p className="text-3xl text-[#111111] font-bold">51,400 won</p>
            </div>
            <hr className="w-full border-[#9a9a9a] h-0.5" />
            <div className="flex flex-row justify-center items-center">
              <input
                type="submit"
                value="check out"
                className="text-white bg-[#0565bb] py-4 px-28 mt-28 mb-20 cursor-pointer"
              />
            </div>
          </form>
        </Container>
      </section>
    </main>
  );
}

export default ShoppingBag;
