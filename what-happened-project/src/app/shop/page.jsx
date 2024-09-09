import Container from "@/components/common/container";
import ShopTab from "@/components/shop/shop-tab";
import Image from "next/image";

export default function Shop() {
  return (
    <main className="min-h-screen w-full bg-white">
      <section className="pt-20">
        <Image
          className="w-[1920px] xl:w-full"
          src="/shop-page/shop-banner.webp"
          alt="shop-banner"
          width={1920}
          height={638}
        />
      </section>

      <section>
        <Container>
          <div className="pt-16 pb-12">
            <ShopTab />
          </div>
        </Container>
      </section>
    </main>
  );
}
