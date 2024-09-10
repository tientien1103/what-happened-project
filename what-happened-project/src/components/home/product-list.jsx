import { PRODUCT_ARR } from "@/mockup/data";
import React from "react";
import Button from "../common/button";
import Link from "next/link";
import ProductCard from "../common/product-card";

function ProductList() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-15 gap-4">
        {PRODUCT_ARR.map((product) => (
          <div
            key={product.imgUrl}
            className="col-span-15 lg:col-span-5 xl:col-span-3 mb-16"
          >
            <ProductCard imgUrl={product.imgUrl} slug={product.slug} />
          </div>
        ))}
      </div>
      <Link href="/shop" className="mt-14">
        <Button />
      </Link>
    </div>
  );
}

export default ProductList;
