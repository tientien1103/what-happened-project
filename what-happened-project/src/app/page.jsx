import Button from "@/components/common/button";
import Container from "@/components/common/container";
import BestProductCard from "@/components/home/best-product-card";
import BrandCard from "@/components/home/brand-card";
import ProductList from "@/components/home/product-list";
import { BEST_PRODUCT_ARR, BRAND_ARR } from "@/mockup/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-20">
        <Image
          className="w-[1920px] xl:w-full"
          src="/main-banner.webp"
          alt="main-banner"
          width={1920}
          height={1000}
        />
      </section>

      <section className="relative w-full bg-[url(/introduction-bg.webp)] bg-cover bg-no-repeat">
        <Container>
          <div className="flex max-w-[676px] gap-14 flex-col items-start py-20 lg:py-44">
            <p className="text-5xl font-extrabold text-white">What Happened!</p>

            <p className="text-xl text-white leading-9">
              How to create mobile-optimized videos in minutes. Not a designer,
              every team makes a lot of videos Can be trimmed. Take the first
              step to your brand&#39;s success. How to create <br />
              mobile-optimized videos in minutes.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative w-full bg-[url(/best-product-bg.webp)] bg-cover bg-no-repeat">
        <Container>
          <div className="space-y-12 py-40">
            <h3 className="text-[#f96400] text-5xl text-center leading-[60px]">
              Best Product
            </h3>
            <p className="text-[#f96400] text-xl text-center">
              How to create mobile-optimized videos in minutes. Not a designer,
              <br />
              every team makes a lot of videos Can be trimmed. Take the first
            </p>
            <div className="pt-8">
              <div className="relative flex 2xl:flex-row items-center justify-center flex-col gap-8 2xl:gap-0">
                {BEST_PRODUCT_ARR.map((product) => (
                  <BestProductCard
                    key={product.productImg}
                    productIcon={product.productIcon}
                    productImg={product.productImg}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full mx-auto">
        <Container>
          <div className="pt-36 pb-40">
            <ProductList />
          </div>
        </Container>
      </section>

      <section className="w-full bg-[#0565bb]">
        <div className="container max-w-[1920px] relative overflow-x-clip">
          <Image
            className="2xl:block hidden absolute top-48 left-48"
            src="/brand-story/object-01.webp"
            alt="brand-story"
            width={183}
            height={208}
          />
          <Image
            className="2xl:block hidden absolute top-16 right-72"
            src="/brand-story/object-02.webp"
            alt="brand-story"
            width={147}
            height={134}
          />
          <Image
            className="2xl:block hidden absolute top-24 right-52"
            src="/brand-story/object-03.webp"
            alt="brand-story"
            width={148}
            height={186}
          />
          <Image
            className="2xl:block hidden absolute right-0 top-[200px]"
            src="/brand-story/object-04.webp"
            alt="brand-story"
            width={287}
            height={457}
          />
          <Image
            className="2xl:block hidden absolute right-0 top-[550px]"
            src="/brand-story/object-05.webp"
            alt="brand-story"
            width={375}
            height={233}
          />
          <Image
            className="2xl:block hidden absolute top-[420px] -left-1"
            src="/brand-story/object-06.webp"
            alt="brand-story"
            width={192}
            height={338}
          />
          <Image
            className="2xl:block hidden absolute top-[500px] left-48"
            src="/brand-story/object-07.webp"
            alt="brand-story"
            width={180}
            height={255}
          />
        </div>
        <Container>
          <div className="space-y-5 xl:space-y-10 pt-44">
            <h3 className="text-[#fcd32a] text-5xl text-center leading-[60px]">
              Brand Story
            </h3>
            <p className="text-[#fcd32a] text-base text-center">
              모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
              아니더라도, 모든 팀에서 <br />
              다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을 내딛어보세요.
              비디오를 단 몇 분 만에 제작해보세요.
            </p>
            <div className="container max-w-screen-xl">
              <div className="relative w-full flex flex-col justify-center items-center xl:justify-end xl:items-end bg-none xl:bg-[url(/collaboration.webp)] bg-contain bg-no-repeat">
                <div>
                  <div className="flex max-w-[528px] gap-6 flex-col justify-center items-center xl:justify-start xl:items-start xl:-translate-x-14 xl:-translate-y-28 py-20 xl:py-44">
                    <p className="text-2xl font-extrabold uppercase text-[#222222]">
                      What Happened’s Brand story!
                    </p>

                    <p className="text-base leading-8 text-center xl:text-left text-[#222222]">
                      청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일
                      무엇을 풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아
                      창공에 광야에서 살았으며, 듣는다. 수 있는 긴지라 사는가
                      낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러
                      피고 인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의
                      못할 것은 목숨을 수 그들을 아름답고 고행을 끝에 설산에서
                      황금시대를 이상을 운다.
                    </p>
                    <Link href="#">
                      <Button />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#fccb05] w-full pb-36">
        <Container className="relative">
          <div className="space-y-10 py-40 flex flex-col justify-center items-center">
            <h3 className="text-[#110e03] text-5xl text-center leading-[60px]">
              Brand Story
            </h3>
            <p className="text-[#110e03] text-base text-center">
              모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
              아니더라도, 모든 팀에서 <br /> 다듬을 수 있습니다. 브랜드의 성공을
              위한 첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
            </p>
            <Link href="#">
              <Button />
            </Link>
          </div>
        </Container>
        <div className="container max-w-[1920px] relative">
          <Image
            className="absolute hidden xl:block -top-8 left-[400px]"
            src="/issues/hot.webp"
            alt="right-arrow"
            width={121}
            height={69}
          />
          <Image
            className="absolute hidden xl:block -bottom-24 left-60"
            src="/issues/coin.webp"
            alt="right-arrow"
            width={173}
            height={175}
          />
          <Image
            className="absolute hidden xl:block -bottom-14 right-[350px]"
            src="/issues/lol.webp"
            alt="right-arrow"
            width={133}
            height={100}
          />
          <div className="grid grid-cols-5 space-y-10 xl:space-y-0">
            <div className="border-[3px] border-[#111111] bg-[#ff5500] col-span-5 xl:col-span-1 space-y-16 py-16 px-14">
              <p className="text-[55px] leading-[57px] text-[#110e03] text-center font-extrabold uppercase">
                whpn issue
              </p>
              <div className="flex items-center justify-center">
                <Image
                  src="/issues/right-arrow.webp"
                  alt="right-arrow"
                  width={148}
                  height={148}
                />
              </div>
            </div>
            {BRAND_ARR.map((brand) => (
              <div key={brand.brandImgUrl} className="col-span-5 xl:col-span-1">
                <BrandCard
                  brand={brand.brand}
                  brandImgUrl={brand.brandImgUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white w-full pb-36">
        <div className="container max-w-[1920px] relative overflow-x-clip">
          <Image
            className="hidden lg:block absolute z-10 top-[1370px] left-[335px]"
            src="/video/video-object-01.webp"
            alt="video"
            width={411}
            height={204}
          />
          <Image
            className="hidden lg:block absolute top-[1350px] right-[650px]"
            src="/video/video-object-02.webp"
            alt="video"
            width={90}
            height={93}
          />
          <Image
            className="hidden lg:block absolute top-[1260px] left-52"
            src="/video/video-object-03.webp"
            alt="video"
            width={146}
            height={146}
          />
          <Image
            className="hidden lg:block absolute top-[350px] -left-80"
            src="/video/video-object-04.webp"
            alt="video"
            width={596}
            height={513}
          />
          <Image
            className="hidden lg:block absolute top-0 left-60"
            src="/video/video-object-05.webp"
            alt="video"
            width={146}
            height={114}
          />
          <Image
            className="hidden lg:block absolute z-10 top-72 right-60"
            src="/video/video-object-06.webp"
            alt="video"
            width={130}
            height={130}
          />
          <Image
            className="hidden lg:block absolute top-44 right-32"
            src="/video/video-object-07.webp"
            alt="video"
            width={158}
            height={158}
          />
          <Image
            className="hidden lg:block absolute z-10 top-[930px] -right-40"
            src="/video/video-object-08.webp"
            alt="video"
            width={596}
            height={513}
          />
          <Image
            className="hidden lg:block absolute top-[650px] -right-40"
            src="/video/video-object-09.webp"
            alt="video"
            width={343}
            height={377}
          />
        </div>
        <Container>
          <div className="space-y-12 py-40 flex flex-col justify-center items-center">
            <h3 className="text-[#110e03] text-5xl uppercase font-extrabold text-center leading-[60px]">
              what happened
            </h3>
            <p className="text-[#110e03] text-base text-center">
              How to create mobile-optimized videos in minutes. Not a designer,{" "}
              <br />
              every team makes a lot of videos Can be trimmed. Take the first
            </p>
            <Link href="#">
              <Button />
            </Link>
            <Image
              className="z-10"
              src="/video/video.webp"
              alt="video"
              width={1251}
              height={823}
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
