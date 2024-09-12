"use client";
import Container from "@/components/common/container";
import Tag from "@/components/order/tag";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const PAYMENTS = [
  "신용/체크카드",
  "현대카드",
  "실시간계좌이체",
  "무통장 입금",
  "휴대폰 결제",
  "네이버 페이",
  "카카오페이",
  "페이코",
  "삼성페이",
  "토스",
];

const FAKE_DATA = [
  {
    name: "[Apparel] what happened beanie",
    img: "img-02",
    subName: "WHP",
    price: "23,000",
    discountPercent: "10%",
    discount: "2,300",
    discountPrice: "20,700",
    shipCost: "3,000",
    value: "item1",
  },
  {
    name: "[Apparel] what happened beanie",
    img: "img-07",
    subName: "WHP",
    price: "23,000",
    discountPercent: "10%",
    discount: "2,300",
    discountPrice: "20,700",
    shipCost: "무료  업체배송",
    value: "item2",
  },
];

function Order() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    criteriaMode: "firstError",
    defaultValues: {
      selectedPayment: PAYMENTS[0],
    },
  });

  const selectedPayment = watch("selectedPayment") || [];

  const handleClickTag = (tag) => {
    const currentPayment = selectedPayment || "";
    if (currentPayment.includes(tag)) {
      setValue("selectedPayment", [], { shouldValidate: true });
    } else {
      setValue("selectedPayment", [tag], { shouldValidate: true });
    }
  };

  const onSubmit = async (data) => {
    const isPassed = await trigger("selectedPayment");
    if (isValid && isPassed) {
      console.log(data);
      router.push("/");
    }
  };
  console.log(errors);
  return (
    <main className="minLength-h-screen bg-white ">
      <section className="pt-40">
        <Container>
          <h1 className="text-4xl leading-[60px] text-[#0565bb] font-extrabold uppercase">
            ORDER
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-9 gap-32">
              <div className="col-span-5">
                <p className="text-[#9a9a9a] text-base leading-[60px] uppercase font-semibold">
                  01 Shopping Bag &gt;{" "}
                  <span className="text-[#111]">02 order</span>
                  &gt; order confirmed
                </p>
                <hr className="w-full border-[#111] h-0.5 mt-3" />
                <p className="text-2xl text-[#111111] font-semibold py-5">
                  주문자 정보
                </p>
                <hr className="w-full border-[#111] h-0.5" />

                <div className="mt-5 space-y-5">
                  <p className="text-sm text-[#111111] font-bold">
                    김형준 +82)10 - 0000-0000
                  </p>
                  <p className="text-sm text-[#0565bb] font-bold">
                    본인인증 완료
                  </p>
                </div>

                <div className="pt-24">
                  <div className="flex justify-between">
                    <h3 className="text-2xl text-[#111111] font-semibold">
                      배송정보
                    </h3>
                    <p className="text-xs text-[#111111] pt-4">
                      <span className="text-[#ea4913]">*</span> 표시는 필수입력
                      항목
                    </p>
                  </div>
                  <hr className="w-full border-[#111] h-0.5 mt-4" />
                </div>

                <div className="flex flex-col gap-7 mt-7">
                  <div className="flex gap-[73px]">
                    <p className="text-lg text-[#111111]">배송지 선택</p>
                    <input
                      type="text"
                      {...register("selectAddress")}
                      className="border-2 border-[#a1a1a1] outline-none text-[#111111] w-[460px] p-2"
                    />
                  </div>
                  <div className="flex gap-[102px]">
                    <p className="text-lg text-[#111111]">
                      수령인 <span className="text-[#ea4913]">*</span>
                    </p>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        {...register("receiver", {
                          required: "Receiver is required!",
                        })}
                        className="border-2 border-[#a1a1a1] outline-none text-[#111111] w-[460px] p-2"
                      />
                      {errors.receiver && (
                        <span className="text-xs font-light text-red-500 mt-1">
                          {errors.receiver.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-[102px]">
                    <p className="text-lg text-[#111111] max-w-[460px]">
                      배송지 <span className="text-[#ea4913]">*</span>
                    </p>
                    <div className="flex gap-7">
                      <div className="flex flex-col">
                        <input
                          type="text"
                          {...register("address", {
                            required: "Address is required!",
                          })}
                          className="border-2 border-[#a1a1a1] outline-none text-[#111111] p-2 w-[320px]"
                        />
                        {errors.address && (
                          <span className="text-xs font-light text-red-500 mt-1">
                            {errors.address.message}
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        placeholder="우편번호 검색"
                        {...register("postalCode", {})}
                        className="border-2 border-[#a1a1a1] outline-none text-[#111111] p-2 w-[130px]"
                      />
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="상세주소 입력"
                    {...register("detailAddress", {})}
                    className="border-2 border-[#a1a1a1] outline-none text-[#111111] p-2 w-[640px] ml-[167px]"
                  />

                  <div className="flex gap-[95px]">
                    <p className="text-lg text-[#111111]">
                      연락처1 <span className="text-[#ea4913]">*</span>
                    </p>
                    <div className="flex gap-2 justify-center items-center">
                      <div className="flex flex-col">
                        <input
                          type="text"
                          {...register("phone1", {
                            required: "Required!",
                          })}
                          className="border-2 border-[#a1a1a1] outline-none text-[#111111] p-2 w-[100px]"
                        />
                        {errors.phone1 && (
                          <span className="text-xs font-light text-red-500 mt-1">
                            {errors.phone1.message}
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-[#111111]">-</p>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          {...register("phone2", {
                            required: "Required!",
                          })}
                          className="border-2 border-[#a1a1a1] outline-none text-[#111111] p-2 w-[100px]"
                        />
                        {errors.phone2 && (
                          <span className="text-xs font-light text-red-500 mt-1">
                            {errors.phone2.message}
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-[#111111]">-</p>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          {...register("phone3", {
                            required: "Required!",
                          })}
                          className="border-2 border-[#a1a1a1] outline-none text-[#111111] p-2 w-[100px]"
                        />
                        {errors.phone3 && (
                          <span className="text-xs font-light text-red-500 mt-1">
                            {errors.phone3.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-[103px]">
                    <p className="text-lg outline-none text-[#111111]">
                      연락처2
                    </p>
                    <div className="flex gap-2 justify-center items-center">
                      <div className="flex flex-col">
                        <input
                          type="text"
                          {...register("phone4")}
                          className="border-2 border-[#a1a1a1] outline-none text-[#111111] placeholder-[#111111] p-2 w-[100px]"
                        />
                      </div>

                      <p className="text-lg outline-none text-[#111111]">-</p>

                      <input
                        type="text"
                        {...register("phone5")}
                        className="border-2 border-[#a1a1a1] outline-none text-[#111111] placeholder-[#111111] p-2 w-[100px]"
                      />

                      <p className="text-lg outline-none text-[#111111]">-</p>

                      <div className="flex flex-col">
                        <input
                          type="text"
                          {...register("phone6")}
                          className="border-2 border-[#a1a1a1] outline-none text-[#111111] placeholder-[#111111] p-2 w-[100px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 ml-[167px]">
                    <input
                      type="checkbox"
                      {...register("addAddress")}
                      className="w-5 h-5"
                    />
                    <p className="text-xs outline-none text-[#111111] self-center">
                      배송지를 배송지 목록에 추가합니다.
                    </p>
                  </div>

                  <input
                    type="text"
                    placeholder="배송시 요청사항을 선택해 주세요."
                    {...register("request")}
                    className="border-2 border-[#a1a1a1] outline-none text-[#111111] placeholder-[#111111] p-2 w-[640px] ml-[167px]"
                  />

                  <div className="mt-24">
                    <h3 className="text-2xl text-[#111111] font-semibold">
                      쿠폰 / 마일리지
                    </h3>

                    <hr className="w-full border-[#111] h-0.5 mt-4" />
                  </div>

                  <div className="flex gap-[110px]">
                    <p className="text-lg text-[#111111] whitespace-nowrap">
                      쿠폰
                    </p>
                    <input
                      type="text"
                      {...register("coupon")}
                      className="border-2 border-[#a1a1a1] outline-none text-[#111111] p-2 w-[690px]"
                    />
                  </div>

                  <div className="flex gap-[74px] mb-24">
                    <p className="text-lg text-[#111111] whitespace-nowrap">
                      마일리지
                    </p>
                    <input
                      type="text"
                      {...register("mileage")}
                      className="border-2 border-[#a1a1a1] outline-none text-[#111111] p-2 w-[690px]"
                    />
                  </div>
                </div>

                <div className="pt-24">
                  <h3 className="text-2xl text-[#111111] font-semibold">
                    결제방법
                  </h3>
                  <hr className="w-full border-[#111] h-0.5 mt-4" />
                </div>

                <div className="flex flex-col items-center gap-4 pt-12">
                  <div className="grid grid-cols-5 gap-2">
                    {PAYMENTS.map((tag, index) => (
                      <Tag
                        key={`Tag ${index + 1}`}
                        tag={tag}
                        selectedPayment={selectedPayment}
                        handleClick={handleClickTag}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-[#DC143C]">
                    {errors.selectedPayment?.message}
                  </p>
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="size"
                    className="block text-sm text[#111] mb-2"
                  >
                    카드사를 선택해주세요.
                  </label>
                  <select
                    id="size"
                    className="w-full border border-gray-300 text-[#111] text-xs font-medium uppercase p-4 outline-none"
                  >
                    <option>카드사를 선택해주세요.</option>
                    <option>Example 2</option>
                    <option>Example 3</option>
                    <option>Example 4</option>
                  </select>
                </div>

                <div className="border-2 border-[#111] py-5 px-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="border-2 border-[#111] text-[#111] text-xs py-1 px-2">
                      공지
                    </span>
                    <p className="text-sm text-[#111]">
                      우리페이 앱 종료에 따른 결제 안내
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="border-2 border-[#111] text-[#111] text-xs py-1 px-2">
                      공지
                    </span>
                    <p className="text-sm text-[#111]">품절 취소시 환불 안내</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="border-2 border-[#111] text-[#111] text-xs py-1 px-2">
                      혜택
                    </span>
                    <p className="text-sm text-[#111]">
                      현대카드 2% 청구할인, 20 % m포인트 사용
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="border-2 border-[#111] text-[#111] text-xs py-1 px-2">
                      혜택
                    </span>
                    <p className="text-sm text-[#111]">
                      신용카드 무이자 할부 안내
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-4 mt-4">
                <div className="flex flex-row">
                  <p className="text-2xl text-[#111111] font-semibold">
                    주문정보
                  </p>

                  <Image
                    src="/right-arrow-small.webp"
                    alt="arrow"
                    width={13}
                    height={13}
                    className="object-contain"
                  />
                </div>
                <hr className="w-full border-[#111] h-0.5 mt-6" />
                <div className="pt-12 pb-16 space-y-5">
                  {FAKE_DATA.map((data, index) => (
                    <div
                      key={`Order ${index + 1}`}
                      className="flex flex-row items-center gap-24"
                    >
                      <Image
                        src={`/products/${data.img}.webp`}
                        alt={data.img}
                        width={120}
                        height={120}
                      />
                      <div className="flex flex-row text-[#111111]">
                        <div>
                          <p className="text-lg font-semibold">
                            {data.subName}
                          </p>
                          <p className="text-lg font-semibold">{data.name}</p>
                          <p className="text-sm font-semibold">
                            {data.price} 원
                          </p>
                          <p className="text-sm text-[#ea4913] font-semibold">
                            [{data.discountPercent}] {data.discountPrice} 원
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <hr className="w-full border-[#111] h-0.5" />

                <div className="flex flex-row justify-between text-lg text-[#111111] py-7">
                  <div className="space-y-4">
                    <p>총 상품금액</p>
                    <p>쿠폰 사용</p>
                    <p>마일리지 사용</p>
                    <p>배송비</p>

                    <p className="font-semibold pt-6">총 결제금액</p>
                  </div>
                  <div className="text-end space-y-4">
                    <p>51,400원</p>
                    <p>- 0 원</p>
                    <p>- 0 원</p>
                    <p>3,000 원</p>

                    <p className="text-3xl text-[#ea4913] font-bold pt-6">
                      54,400 원
                    </p>
                  </div>
                </div>

                <hr className="w-full border-[#111] h-0.5" />

                <div className="pt-7 pb-12 space-y-7">
                  <div className="flex gap-4 justify-center">
                    <input
                      type="checkbox"
                      {...register("check-condition", { required: true })}
                      className="w-6 h-6"
                    />

                    <p className="text-base font-semibold text-[#111111]">
                      상품 및 구매 조건을 확인하였으며, 결제 대행 서비스에
                      동의합니다. (필수)
                    </p>
                  </div>

                  <div className="text-sm text-[#999999] text-center">
                    <p>개인정보 처리 방침 & 이용약관</p>
                    <p>
                      결제대행 서비스 이용약관 (주)KG이니시스, (주)토스페이먼츠
                    </p>
                  </div>
                </div>
                <input
                  type="submit"
                  value="check out"
                  className="text-white text-3xl font-bold bg-[#0658c2] w-full py-5 uppercase cursor-pointer"
                />
              </div>
            </div>
          </form>
        </Container>
      </section>
    </main>
  );
}

export default Order;
