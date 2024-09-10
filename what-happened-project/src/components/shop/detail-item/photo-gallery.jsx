"use client";
import Image from "next/image";
import React, { useState } from "react";

const thumbnailList = [
  "/products/img-06.webp",
  "/shop-page/item-thumbnail.webp",
];

function PhotoGallery() {
  const [featuredImage, setFeaturedImage] = useState(thumbnailList[0]);
  return (
    <>
      <div className="col-span-8 lg:col-span-1 space-y-2">
        {thumbnailList.map((img, index) => (
          <div key={img} className="cursor-pointer">
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              width={78}
              height={78}
              onClick={() => setFeaturedImage(img)}
              className={`object-cover transition-all hover:opacity-75 ${
                featuredImage === img ? "ring-4 ring-[#0565bb]" : ""
              }`}
            />
          </div>
        ))}
      </div>
      <div className="col-span-8 lg:col-span-3">
        <Image
          src={featuredImage}
          alt="Featured"
          width={707}
          height={707}
          className="object-cover w-[350px] lg:w-[707px]"
        />
      </div>
    </>
  );
}

export default PhotoGallery;
