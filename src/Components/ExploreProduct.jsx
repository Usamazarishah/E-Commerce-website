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
      <div className="mx-4 md:mx-16 lg:mx-[92px] mt-16">
      <div className="flex gap-3 md:gap-4 items-center">
        <span className="bg-primary py-4 md:py-5 px-[8px] md:px-[10px] rounded"></span>
        <span className="text-primary font-semibold text-sm md:text-base">Our Products</span>
      </div>

        <div className="flex justify-between items-center text-center mt-3 sm:mt-5 ">
          <div className="flex items-center gap-5 ">
            <p className="flex  text-lg sm:text-3xl md:text-3xl lg:text-4xl font-semibold ">Explore Our Products</p>
          </div>

        {/* mobile arrow */}
        <div className="flex sm:hidden gap-2 -mt-3">
          <BsArrowLeftShort className="arrow_mobile " />
          <BsArrowRightShort className="arrow_mobile" />
        </div>
        {/* desktop arrow */}
        <div className="hidden sm:flex gap-2 -mt-3 ">
          <BsArrowLeftShort className="arrow_desktop " />
          <BsArrowRightShort className="arrow_desktop" />
        </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-7 mx-[92px] pt-9">
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
      </div>
      <div className="bg-primary text-white w-60 h-14 rounded my-10 mx-auto text-center p-[18px] hover:cursor-pointer ">
        <Link to={"api-product"}>View All Products</Link>
      </div>
    </div>
  );
}
