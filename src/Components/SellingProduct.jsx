import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";
import { Link } from "react-router-dom";

// import coat_img from "../assets/images/card_images/coat.png";
// import bag_img from "../assets/images/card_images/bag.png";
// import cpu_img from "../assets/images/card_images/cpu.png";
// import bookself_img from "../assets/images/card_images/bookself.png";

export default function SellingProduct() {
  const { products, isLoading, error } = useProducts("limit=4&skip=34");
  return (
    <div>
      <div className="mx-4 md:mx-16 lg:mx-[92px] pt-8 sm:pt-12">
        <div className="flex gap-3 md:gap-4 items-center">
          <span className="bg-primary py-4 md:py-5 px-[8px] md:px-[10px] rounded"></span>
          <span className="text-primary font-semibold text-sm md:text-base">
            This Month
          </span>
        </div>

        <div className="flex justify-between items-center text-center mt-3 sm:mt-5 ">
          <div className="flex items-center gap-5 ">
            <p className="flex  text-lg sm:text-3xl md:text-3xl lg:text-4xl font-semibold ">
              Best Selling Products
            </p>
          </div>

          <div className="bg-primary w-24 sm:w-40 h-10 sm:h-14 rounded text-white text-sm sm:text-base text-center pt-[10px] sm:pt-4 -mt-3 sm:-mt-5 lg:-mt-3 hover:cursor-pointer">
            <Link to={"api-product"}>View All</Link>
          </div>
        </div>
      </div>
      <div className="mx-4 md:mx-16 lg:mx-[92px]">
        {isLoading ? "Loading..." : ""}
        {error}

        <div className="flex flex-wrap gap-2  xl:gap-7 sm:my-4 md:my-6 lg:my-10">
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
    </div>
  );
}
