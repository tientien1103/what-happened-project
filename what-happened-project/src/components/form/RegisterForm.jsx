"use client";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const emailRegex = new RegExp(
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
);

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    criteriaMode: "firstError",
  });

  const onSubmit = (data) => {
    if (isValid) {
      //   console.log(data);
      router.push("/");
    }
  };
  // console.log(errors);

  const password = watch("password");
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 md:gap-6"
    >
      <div className="flex w-full flex-col">
        <span className="text-base text-[#222222]">아이디 (이메일) *</span>
        <div className="border border-[#a1a1a1]">
          <input
            type="email"
            placeholder="example@email.com"
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value: emailRegex,
                message: "Invalid email",
              },
            })}
            className="bg-white w-full md:max-w-[454px] py-2 pl-2 text-sm text-[#999999] focus:outline-none"
          />
        </div>
        {errors.email && (
          <div className="flex mt-2 self-start pl-3 gap-2">
            <svg width="9" height="9" viewBox="0 0 12 12">
              <path
                fill="#EE6723"
                fillRule="evenodd"
                d="M6 3.898L2.317.215c-.282-.282-.759-.284-1.052.01l-1.04 1.04c-.298.298-.298.764-.01 1.052L3.898 6 .215 9.683c-.282.282-.284.759.01 1.052l1.04 1.04c.298.298.764.298 1.052.01L6 8.102l3.683 3.683c.282.282.759.284 1.052-.01l1.04-1.04c.298-.298.298-.764.01-1.052L8.102 6l3.683-3.683c.282-.282.284-.759-.01-1.052l-1.04-1.04c-.298-.298-.764-.298-1.052-.01L6 3.898z"
              ></path>
            </svg>
            <span className="text-xs md:max-w-[454px] leading-none font-light text-red-500">
              {errors.email.message}
            </span>
          </div>
        )}
      </div>

      <div className="flex relative flex-col">
        <span className="text-base text-[#222222]">비밀번호 *</span>
        <div className="border border-[#a1a1a1]">
          <input
            type="password"
            placeholder="영문, 숫자, 특수문자를 포함한 8~12자리"
            {...register("password", {
              required: "Password is required!",
              minLength: {
                value: 8,
                message: "Type 8 characters or more",
              },
              maxLength: {
                value: 12,
                message: "Type less than 12 characters",
              },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must contain at least one letter, one number, and one special character",
              },
            })}
            className="bg-white w-full md:max-w-[454px] py-2 pl-2 text-[9px] md:text-sm text-[#999999] focus:outline-none"
          />
        </div>

        {errors.password && (
          <span className="text-xs mt-2 self-start md:max-w-[454px] pl-3 text-[#979197]">
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="flex relative flex-col">
        <span className="text-base text-[#222222]">비밀번호 확인 *</span>
        <div className="border border-[#a1a1a1]">
          <input
            type="password"
            placeholder=""
            {...register("confirmPassword", {
              required: "Please confirm your password!",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className="bg-white w-full md:max-w-[454px] py-2 pl-2 text-sm text-[#999999] focus:outline-none"
          />
        </div>

        {errors.confirmPassword && (
          <span className="text-xs mt-2 self-start md:max-w-[454px] pl-3 text-[#979197]">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <div className="flex w-full flex-col">
        <span className="text-base text-[#222222]">주소</span>
        <div className="border border-[#a1a1a1]">
          <input
            type="text"
            placeholder=""
            {...register("address", {
              minLength: {
                value: 10,
                message: "Address must be at least 10 characters long",
              },
              maxLength: {
                value: 50,
                message: "Address must be less than 50 characters long",
              },
            })}
            className="bg-white w-full md:max-w-[454px] py-2 pl-2 text-sm text-[#999999] focus:outline-none"
          />
        </div>
        {errors.address && (
          <div className="flex mt-2 self-start pl-3 gap-2">
            <svg width="9" height="9" viewBox="0 0 12 12">
              <path
                fill="#EE6723"
                fillRule="evenodd"
                d="M6 3.898L2.317.215c-.282-.282-.759-.284-1.052.01l-1.04 1.04c-.298.298-.298.764-.01 1.052L3.898 6 .215 9.683c-.282.282-.284.759.01 1.052l1.04 1.04c.298.298.764.298 1.052.01L6 8.102l3.683 3.683c.282.282.759.284 1.052-.01l1.04-1.04c.298-.298.298-.764.01-1.052L8.102 6l3.683-3.683c.282-.282.284-.759-.01-1.052l-1.04-1.04c-.298-.298-.764-.298-1.052-.01L6 3.898z"
              ></path>
            </svg>
            <span className="text-xs md:max-w-[454px] leading-none font-light text-red-500">
              {errors.address.message}
            </span>
          </div>
        )}
      </div>

      <div className="flex w-full flex-col">
        <div className="border border-[#a1a1a1]">
          <input
            type="text"
            placeholder="추가 주소"
            {...register("extraAddress", {
              minLength: {
                value: 10,
                message: "Address must be at least 10 characters long",
              },
              maxLength: {
                value: 50,
                message: "Address must be less than 50 characters long",
              },
            })}
            className="bg-white w-full md:max-w-[454px] py-2 pl-2 text-sm text-[#999999] focus:outline-none"
          />
        </div>
        {errors.extraAddress && (
          <div className="flex mt-2 self-start pl-3 gap-2">
            <svg width="9" height="9" viewBox="0 0 12 12">
              <path
                fill="#EE6723"
                fillRule="evenodd"
                d="M6 3.898L2.317.215c-.282-.282-.759-.284-1.052.01l-1.04 1.04c-.298.298-.298.764-.01 1.052L3.898 6 .215 9.683c-.282.282-.284.759.01 1.052l1.04 1.04c.298.298.764.298 1.052.01L6 8.102l3.683 3.683c.282.282.759.284 1.052-.01l1.04-1.04c.298-.298.298-.764.01-1.052L8.102 6l3.683-3.683c.282-.282.284-.759-.01-1.052l-1.04-1.04c-.298-.298-.764-.298-1.052-.01L6 3.898z"
              ></path>
            </svg>
            <span className="text-xs md:max-w-[454px] leading-none font-light text-red-500">
              {errors.extraAddress.message}
            </span>
          </div>
        )}
      </div>

      <div className="flex w-full flex-col">
        <span className="text-base text-[#222222]">연락처</span>
        <div className="border border-[#a1a1a1]">
          <input
            type="text"
            placeholder=""
            {...register("phone", {
              required: "Phone number is required",
              minLength: {
                value: 9,
                message: "Phone number must be at least 10 characters long",
              },
              pattern: {
                value:
                  /^(?:\+?\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
                message: "Invalid phone number format",
              },
            })}
            className="bg-white w-full md:max-w-[454px] py-2 pl-2 text-sm text-[#999999] focus:outline-none"
          />
        </div>
        {errors.phone && (
          <div className="flex mt-2 self-start pl-3 gap-2">
            <svg width="9" height="9" viewBox="0 0 12 12">
              <path
                fill="#EE6723"
                fillRule="evenodd"
                d="M6 3.898L2.317.215c-.282-.282-.759-.284-1.052.01l-1.04 1.04c-.298.298-.298.764-.01 1.052L3.898 6 .215 9.683c-.282.282-.284.759.01 1.052l1.04 1.04c.298.298.764.298 1.052.01L6 8.102l3.683 3.683c.282.282.759.284 1.052-.01l1.04-1.04c.298-.298.298-.764.01-1.052L8.102 6l3.683-3.683c.282-.282.284-.759-.01-1.052l-1.04-1.04c-.298-.298-.764-.298-1.052-.01L6 3.898z"
              ></path>
            </svg>
            <span className="text-xs md:w-[454px] leading-none font-light text-red-500">
              {errors.phone.message}
            </span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <hr className="w-full md:w-[454px] h-4 mt-6 mb-3 border-[#222222]" />
        <div className="flex gap-3 justify-end">
          <input
            type="checkbox"
            {...register("condition", {
              required: "You need to read and accept the policy",
            })}
            className="w-3 h-3"
          />
          <p className="text-xs outline-none text-[#111111] self-center">
            <Link href="/pravacy-and-policy" className="text-[#659bf5]">
              이용약관
            </Link>{" "}
            및{" "}
            <Link href="/pravacy-and-policy" className="text-[#659bf5]">
              개인정보 처리 방침
            </Link>
            에 동의합니다. (필수)
          </p>
        </div>
        {errors.condition && (
          <div className="flex mt-2 self-end pl-3 gap-2">
            <svg width="9" height="9" viewBox="0 0 12 12">
              <path
                fill="#EE6723"
                fillRule="evenodd"
                d="M6 3.898L2.317.215c-.282-.282-.759-.284-1.052.01l-1.04 1.04c-.298.298-.298.764-.01 1.052L3.898 6 .215 9.683c-.282.282-.284.759.01 1.052l1.04 1.04c.298.298.764.298 1.052.01L6 8.102l3.683 3.683c.282.282.759.284 1.052-.01l1.04-1.04c.298-.298.298-.764.01-1.052L8.102 6l3.683-3.683c.282-.282.284-.759-.01-1.052l-1.04-1.04c-.298-.298-.764-.298-1.052-.01L6 3.898z"
              ></path>
            </svg>
            <span className="text-xs md:w-[454px] leading-none font-light text-red-500">
              {errors.condition.message}
            </span>
          </div>
        )}

        <div className="flex gap-3 justify-end">
          <input
            type="checkbox"
            {...register("sendEmail")}
            className="w-3 h-3"
          />
          <p className="text-xs outline-none text-[#111111] self-center">
            광고 및 메일 수신에 동의합니다. (선택)
          </p>
        </div>
      </div>

      <input
        disabled={!isValid}
        type="submit"
        value="가입하기"
        className={clsx(
          "mt-3 md:mt-2 flex w-full md:w-[454px] items-center justify-center bg-[#419BF9] border border-[#419BF9] py-4 text-white font-semibold",
          {
            "opacity-50": !isValid,
            "opacity-100": isValid,
          }
        )}
      />
    </form>
  );
}
