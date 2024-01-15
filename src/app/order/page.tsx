"use client";

import { fetcher } from "@/apis/fetcher";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export default function Order() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const data = await fetcher.get("http://localhost:3001/items");

      setProducts(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="p-[18px_24px_18px_25px] flex flex-col gap-[18px] overflow-scroll grow">
      {!isLoading ? (
        products?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <div className="h-full text-center flex items-center justify-center">
          목록을 불러오고 있습니다.
        </div>
      )}
    </div>
  );
}
