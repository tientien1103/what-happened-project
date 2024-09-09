import Container from "@/components/common/container";
import SubHeader from "@/components/introduction/sub-header";
import Image from "next/image";
import React from "react";

function IntroductionPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative w-full bg-[url(/introduction-banner.webp)] bg-cover bg-no-repeat mt-20">
        <Container>
          <div className="flex gap-8 lg:gap-14 flex-col justify-center items-center py-20 lg:py-44">
            <h3 className="text-5xl font-extrabold text-white text-center lg:text-start">
              What Happened!
            </h3>

            <p className="text-xl text-center text-white leading-9">
              How to create mobile-optimized videos in minutes. Not a designer,
              <br />
              every team makes a lot of videos Can be trimmed.
              <br /> Take the first step to your brand&#39;s success. <br />
              How to create mobile-optimized videos in minutes.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-11 bg-[#ea4913]">
        <Container>
          <SubHeader />
        </Container>
      </section>

      <section>
        <Container>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-[#0658c2] text-4xl md:text-7xl font-semibold mt-16 uppercase">
              what happnned to?
            </h3>
            <p className="text-[#111] text-xl md:text-3xl leading-[54px] text-center uppercase mt-36">
              ‘what happeneD의 이야기는 우리들의 살아가는 <br /> ’what happend
              to?’ 라는 마음으로 <br />
              ‘무엇’을 모티브로 하여 다양한작업을 하고 있습니다.
              <br />
              일상속의 작은 물건들이 ~할 수 있으며 있으며,일상속의 작은 물건들이
              ~할 수<br /> 일상속의 작은 물건들이 ~할 수 있으며 있으며,일상속의
              작은 물건들이 ~할 수 있으며 <br />
              일상속의 작은 물건들이 ~할 수 있으며 있으며,중심으로 <br />
              당신의 삶을 더 행복하게 만드는, <br />
              친절하고 다정하며 공감이 되는 디자인을 하는 것이 왓해픈의 방향성
              입니다.
            </p>

            <p className="text-[#111] text-xl md:text-3xl text-center leading-[54px] mt-16">
              “what happened to” wants to make tour everyday, “oh happy day!”
              <br /> we design daily itenms that can make you smile, <br />
              believing that small things can bring you big joy, Thank you, as
              always!
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-[#0658c2] text-4xl md:text-7xl font-semibold mt-56 uppercase">
              contact us
            </h3>
            <p className="text-[#111] text-xl md:text-3xl leading-[54px] text-center uppercase mt-20">
              서울특별시 강남구 도산대로 8길 17 2층 <br />
              2nd floor, 17, Dosan-daero 8-gil, Gangnam-gu, Seoul
              <br />
              +82 2 000 0000
              <br />
              wht30@gmail.com
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-[#0658c2] text-4xl md:text-7xl font-semibold mt-56 uppercase">
              partnership
            </h3>
            <p className="text-[#111] text-xl md:text-3xl leading-[54px] text-center uppercase mt-20">
              서울특별시 강남구 도산대로 8길 17 2층 <br />
              2nd floor, 17, Dosan-daero 8-gil, Gangnam-gu, Seoul
              <br />
              +82 2 000 0000
              <br />
              wht30@gmail.com
            </p>
          </div>
        </Container>
      </section>

      <section className="py-36">
        <Container>
          <Image
            src="/introduction-bg.webp"
            alt="introduction-bg"
            width={1640}
            height={850}
          />
        </Container>
      </section>
    </main>
  );
}

export default IntroductionPage;
