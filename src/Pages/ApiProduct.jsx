import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { CiSearch } from "react-icons/ci";

export default function ApiProduct() {
  // const discountPrice =
  // (item.price - item.discountPercentage * (item.price/100)).toFixed(2);
  // console.log("discountPrice", discountPrice);

  const API_KEY = "https://dummyjson.com/products";

  const [products, setProducts] = useState(null);

  const getProductData = async () => {
    const response = await axios(API_KEY);

    // console.log("response=>", response.data.products);
    setProducts(response?.data?.products);
  };

  useEffect(() => {
    getProductData();
  }, []);

  // console.log("products=>", products);
  const [searchTerm, setSearchTerm] = useState("");
  console.log("searchTerm", searchTerm);

  const searchProducts = () => {
    const result = products?.filter((item) => {
      return item.price > 50 ;
    });
    console.log("result", result);

    return result || [];
  };
  const searchResult = searchProducts()

  return (
    <>
      <div className="flex items-center border border-gray-300 rounded-md h-10 container-x mt-10 mb-5 bg-secondary pl-1 pr-5">
        <input
          type="search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          className="w-full outline-none bg-transparent"
        />
        <CiSearch className="text-xl sm:text-2xl font-extrabold text-black" />
      </div>
      <div className="flex flex-wrap gap-8 justify-center items-center text-center">
        {searchResult?.map((item) => {
          return (
            <ProductCard
              key={item.id}
              cardImage={item.thumbnail}
              cardName={item.title}
              oldRate={item.price}
              // discountedRate={discountPrice}
              percent={item.rating}
            />
          );
        })}
      </div>
    </>
  );
}
