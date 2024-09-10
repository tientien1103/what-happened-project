import Image from "next/image";
import React from "react";
import Container from "../../../components/common/container";

function DetailItem() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-44">
        <Container>
          <div className="grid grid-cols-8 gap-36">
            <div className="col-span-1 space-y-2">
              <Image
                src="/products/img-06.webp"
                alt="Beanie 1"
                width={78}
                height={78}
                className="object-cover"
              />
              <Image
                src="/shop-page/item-thumbnail.webp"
                alt="Beanie 2"
                width={78}
                height={78}
                className="object-cover"
              />
            </div>
            <div className="col-span-3">
              <Image
                src="/products/img-06.webp"
                alt="Main Beanie"
                width={707}
                height={707}
                className="object-cover"
              />
            </div>

            <div className="col-span-4">
              <h2 className="text-2xl font-medium mb-4 text-[#111]">
                [Apparel] What happened beanie
              </h2>
              <p className="text-xl text-gray-800 mb-4">16,000 won</p>

              <div className="mb-8">
                <h3 className="font-bold">Product Information</h3>
                <ul className="text-gray-600">
                  <li>Material: 100% Acrylic</li>
                  <li>Size: 16.5cm x 18.5cm</li>
                  <li>Washing Method: Hand Wash</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="font-bold">Shipping Information</h3>
                <ul className="text-gray-600">
                  <li>Shipping Fee: 50,000 won or more free shipping</li>
                  <li>Estimated Delivery: 04/20 (Mon)</li>
                </ul>
              </div>

              {/* Size Selector */}
              <div className="mb-4">
                <label htmlFor="size" className="block font-bold mb-2">
                  Color: Size
                </label>
                <select id="size" className="w-full border border-gray-300 p-2">
                  <option>Select size</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>

              <div className="flex space-x-4">
                <button className="w-1/2 bg-gray-200 text-black py-2">
                  Add to Cart
                </button>
                <button className="w-1/2 bg-blue-500 text-white py-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default DetailItem;
