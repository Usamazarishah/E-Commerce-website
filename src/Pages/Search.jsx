import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import useProducts from "../hooks/useProducts";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query");
  console.log("searchTerm =>", searchTerm);

  const { products, isLoading, error } = useProducts(`/search?q=${searchTerm}&limit=50`);

  return (
    <div className={`${darkMode ? "bg-slate-900" : ""}`}>
      <div className="flex flex-wrap gap-2 sm:gap-2 xl:gap-7 justify-center items-center text-center  mx-4 md:mx-16 lg:mx-[92px]  sm:py-4 md:py-6 lg:py-10">
        {products?.length === 0 ? "product not found..." : ""}

        {products?.map((item) => {
          return (
            <ProductCard
              id={item.id}
              cardImage={item.thumbnail}
              cardDiscount={`-${Math.round(item.discountPercentage)}%`}
              cardName={item.title}
              oldRate={`$${item.price}`}
              discountedRate={`$${(
                item.price -
                (item.price * item.discountPercentage) / 100
              ).toFixed(2)}`}
              percent={item.rating}
              rating={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
}
