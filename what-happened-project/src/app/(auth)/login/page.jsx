import { SOCIAL_ICONS_LOGIN } from "@/mockup/data";
import LoginForm from "../../../components/form/LoginForm";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export default function Login() {
  return (
    <div className="mx-6 md:mx-0">
      <div className="space-y-3 text-center">
        <h1 className="text-2xl md:text-5xl text-[#0565bb] font-extrabold">
          Welcome!
        </h1>
      </div>

      <hr className="w-full md:w-[454px] h-4 my-6 border-[#222222]" />

      <LoginForm />

      <div className="flex flex-col w-full">
        <span className="text-base mt-14 mb-8 text-[#404142] text-center">
          SNS 계정으로 로그인
        </span>
        <div className="grid grid-cols-4 space-y-3 md:space-x-7">
          {SOCIAL_ICONS_LOGIN.map((icon) => (
            <Link key={icon.variant} href={icon.link}>
              <Image
                className={clsx("col-span-1 object-contain", {
                  "mt-3": icon.variant === "naver-icon",
                })}
                src={`/social-icon/${icon.variant}.webp`}
                alt={icon.alt}
                width={70}
                height={70}
              />
            </Link>
          ))}
        </div>
        <Link href="/register">
          <button className="mt-10 w-full md:w-[454px] border border-[#020001] text-black py-4 font-medium">
            계정이 없으신가요? 간편가입하기
          </button>
        </Link>
        <div className="flex justify-evenly mt-8">
          <Link href="#" className="text-sm text-[#1a58f2]">
            아이디(이메일)찾기
          </Link>
          <Link href="#" className="text-sm text-[#1a58f2]">
            비밀번호 찾기
          </Link>
        </div>
      </div>
    </div>
  );
}
