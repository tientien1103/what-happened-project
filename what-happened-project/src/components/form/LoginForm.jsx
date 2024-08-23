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
      console.log(data);
      router.push("/");
    }
  };
  // console.log(errors);

  const password = watch("password");
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 md:gap-4"
    >
      <div className="flex w-full flex-col">
        <div className="border border-[#a1a1a1]">
          <input
            type="email"
            placeholder="아이디 (이메일)"
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value: emailRegex,
                message: "Invalid email",
              },
            })}
            className="bg-white w-full md:w-[454px] py-2 pl-2 text-sm text-[#a1a1a1] focus:outline-none"
          />
        </div>
        {errors.email && (
          <div className="flex pl-3 mt-2 self-start gap-2">
            <svg width="9" height="9" viewBox="0 0 12 12">
              <path
                fill="#EE6723"
                fillRule="evenodd"
                d="M6 3.898L2.317.215c-.282-.282-.759-.284-1.052.01l-1.04 1.04c-.298.298-.298.764-.01 1.052L3.898 6 .215 9.683c-.282.282-.284.759.01 1.052l1.04 1.04c.298.298.764.298 1.052.01L6 8.102l3.683 3.683c.282.282.759.284 1.052-.01l1.04-1.04c.298-.298.298-.764.01-1.052L8.102 6l3.683-3.683c.282-.282.284-.759-.01-1.052l-1.04-1.04c-.298-.298-.764-.298-1.052-.01L6 3.898z"
              ></path>
            </svg>
            <span className="text-xs w-48 md:w-44 leading-none font-light text-red-500">
              {errors.email.message}
            </span>
          </div>
        )}
      </div>

      <div className="flex relative flex-col">
        <div className="border border-[#a1a1a1]">
          <input
            type="password"
            placeholder="비밀번호"
            {...register("password", {
              required: "Password is required!",
              minLength: {
                value: 6,
                message: "Type 6 characters or more",
              },
            })}
            className="bg-white w-full md:w-[454px] py-2 pl-2 text-sm text-[#a1a1a1] focus:outline-none"
          />
        </div>

        {errors.password && (
          <span className="text-xs mt-2 self-start whitespace-nowrap pl-3 text-[#979197]">
            {errors.password.message}
          </span>
        )}
      </div>
      <input
        disabled={!isValid}
        type="submit"
        value="로그인하기"
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
