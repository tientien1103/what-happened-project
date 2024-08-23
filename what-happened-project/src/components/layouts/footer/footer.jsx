import Link from "next/link";
import Image from "next/image";
import Container from "../../common/container";
import { FOOTER_MENU } from "@/const/navigation";
import { SOCIAL_ICONS_FOOTER } from "@/mockup/data";

export default function Footer() {
  return (
    <footer className="relative bg-white">
      <Container>
        <div className="flex flex-col w-full items-start md:justify-between gap-6 md:gap-12 py-12 md:flex-row md:py-16">
          <div className="flex flex-col gap-6 md:mt-0 md:flex-1 md:gap-7 w-full md:max-w-[258px]">
            <Link href="/" className="-m-1.5 w-fit p-1.5">
              <span className="text-black font-bold text-sm">
                what happened
              </span>
            </Link>
            <div className="flex flex-col text-black text-sm leading-8 font-light ">
              <span>[공지] 개인 정보 처리 방침 변경 사전 안내</span>
              <span>[공지] 29CM 강남 스토어 영업 종료</span>
              <span>[공지] 개인 정보 처리 방침 변경 사전 안내</span>
              <span>[공지] iOS 10 이하 버전 지원 중단 안내</span>
              <span>[공지] 개인 정보 처리 방침 변경 사전 안내</span>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-6 md:gap-24">
            {FOOTER_MENU.map((menu) => (
              <div key={menu.title}>
                <h3 className="text-black text-sm leading-10 font-semibold">
                  {menu.title}
                </h3>
                <div className="flex flex-col">
                  {menu.subTitle.map((sub) => (
                    <span
                      className="text-[#333333] text-sm leading-8"
                      key={sub}
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="flex md:border-t-[1px] md:border-[#f4f4f4] py-4 md:py-6">
        <Container>
          <div className="flex justify-center md:justify-between">
            <div className="md:flex hidden md:flex-col items-start gap-2.5 text-neutral-200 md:gap-0">
              <span className="text-sm text-[#a9a9a9] tracking-wide">
                © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동
                ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what
                happened.co.kr
              </span>

              <span className="text-sm text-[#a9a9a9] tracking-wide">
                서울특별시 강남구 도산대로 8길 17 | FAX : 070-0000-0000 l 서비스
                이용약관 l 개인정보처리방침
              </span>
            </div>
            <div className="hidden gap-x-4 md:flex">
              {SOCIAL_ICONS_FOOTER.slice(0, 3).map((icon) => (
                <Link
                  key={icon.variant}
                  className="p-1.5"
                  href={icon.link}
                  target="_blank"
                >
                  <Image
                    src={`/social-icon/${icon.variant}.webp`}
                    alt={icon.alt}
                    width={20}
                    height={21}
                  />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
