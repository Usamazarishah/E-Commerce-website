import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
// import controller1_img from "../assets/images/card_images/controller1.png";
// import keyboard_img from "../assets/images/card_images/keyboard.png";
// import screen_img from "../assets/images/card_images/screen.png";
// import chair_img from "../assets/images/card_images/chair.png";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

export default function FlashSale() {
  const { products, isLoading, error } = useProducts("limit=4");
  return (
    <div className="container-x">
      {isLoading ? "Loading..." : ""}
      {error}

      <div className="flex  gap-7 flex-wrap">
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
      <div className="bg-primary text-white w-60 h-14 rounded my-8 mx-auto text-center p-[18px] hover:cursor-pointer ">
        <Link to="api-product" className="">
          View All Products
        </Link>
      </div>
      <div className="border-b border-y-gray-300 -mb-12 container-x pt-5"></div>
    </div>
  );
}
