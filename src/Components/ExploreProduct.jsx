import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";
import { Link } from "react-router-dom";

// import breedDog_img from "../assets/images/card_images/breedDog.png";
// import camera_img from "../assets/images/card_images/camera.png";
// import laptop_img from "../assets/images/card_images/laptop.png";
// import productSet_img from "../assets/images/card_images/productSet.png";
// import car_img from "../assets/images/card_images/car.png";
// import shoes_img from "../assets/images/card_images/shoes.png";
// import controller2_img from "../assets/images/card_images/controller2.png";
// import jacket_img from "../assets/images/card_images/jacket.png";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

export default function ExploreProduct() {
  const { products, isLoading, error } = useProducts("limit=8&skip=38");

  return (
    <div>
      <div className="mx-4 md:mx-16 lg:mx-[92px] mt-12 md:mt-16 lg:mt-20">
      <div className="flex gap-3 md:gap-4 items-center">
        <span className="bg-primary py-4 md:py-5 px-[8px] md:px-[10px] rounded"></span>
        <span className="text-primary font-semibold text-sm md:text-base">Our Products</span>
      </div>

        <div className="flex justify-between items-center text-center mt-3 sm:mt-5 ">
          <div className="flex items-center gap-5 ">
            <p className="flex  text-lg sm:text-3xl md:text-3xl lg:text-4xl font-semibold ">Explore Our Products</p>
          </div>

        {/* arrow */}
        <div className="flex gap-2  sm:-mt-2 lg:-mt-1">
          <BsArrowLeftShort className="arrow_mobile sm:arrow_desktop " />
          <BsArrowRightShort className="arrow_mobile sm:arrow_desktop" />
        </div>

        </div>
      </div>

      <div className="mx-4 md:mx-16 lg:mx-[92px] sm:my-4 md:my-6 lg:my-10">
        {isLoading ? "Loading..." : ""}
        {error}

        <div className="flex flex-wrap gap-2  xl:gap-7">
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

      <div className="bg-primary text-white w-40 h-12 text-sm sm:text-base sm:w-60 sm:h-14 rounded mt-10 sm:my-12 mx-auto text-center p-[15px] sm:p-[18px] hover:cursor-pointer ">
        <Link to="api-product" className="">
          View All Products
        </Link>
      </div>
    </div>
  );
}
