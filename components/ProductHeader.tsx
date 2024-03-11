"use client";

import Image from "next/image";

const ProductHeader = ({ title, image, sku }: { title: string; image: string; sku: string }) => {
  return (
    <article className="p-4 border rounded bg-white flex items-center gap-8">
      <div className="relative w-16 aspect-[1/1]">
        <Image src={image} alt={title} fill style={{ objectFit: "contain" }} />
      </div>
      <div>
        <p className="font-semibold mb-1">{title}</p>
        <p className="text-sm">
          <span className="font-semibold">SKU:&nbsp;</span> {sku}
        </p>
      </div>
    </article>
  );
};
export default ProductHeader;
