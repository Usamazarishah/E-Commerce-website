import ProductCard from "./ProductCard";
import breedDog_img from "../assets/images/card_images/breedDog.png";
import camera_img from "../assets/images/card_images/camera.png";
import laptop_img from "../assets/images/card_images/laptop.png";
import productSet_img from "../assets/images/card_images/productSet.png";
import car_img from "../assets/images/card_images/car.png";
import shoes_img from "../assets/images/card_images/shoes.png";
import controller2_img from "../assets/images/card_images/controller2.png";
import jacket_img from "../assets/images/card_images/jacket.png";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

export default function ExploreProduct() {
  return (
    <div>
      <div className=" mx-[92px] mt-16">
        <div className="flex gap-4 items-center">
          <span className="bg-primary py-5 px-[10px] rounded"></span>
          <span className="text-primary font-semibold text-base">
            Our Products
          </span>
        </div>

        <div className="flex justify-between items-center text-center mt-5 ">
          <div className="flex items-center gap-5 ">
            <p className="text-4xl font-semibold ">Explore Our Products</p>
          </div>

          <div className=" flex  gap-2 text-4xl -mt-3">
            <BsArrowLeftShort className="arrow" />
            <BsArrowRightShort className="arrow" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-7 mx-[92px] pt-9">
        <ProductCard
          cardImage={breedDog_img}
          cardName="Breed Dry Dog Food"
          discountedRate="$120"
          percent="35"
        />
        <ProductCard
          cardImage={camera_img}
          cardName="CANON EOS DSLR Camera"
          discountedRate="$360"
          percent="95"
        />
        <ProductCard
          cardImage={laptop_img}
          cardName="ASUS FHD Gaming Laptop"
          discountedRate="$700"
          percent="325"
        />
        <ProductCard
          cardImage={productSet_img}
          cardName="Curology Product Set "
          discountedRate="$500"
          percent="145"
        />
        <ProductCard
          cardImage={car_img}
          cardName="Kids Electric Car "
          discountedRate="$960"
          percent="65"
          newItem="NEW"
        />
        <ProductCard
          cardImage={shoes_img}
          cardName="Jr. Zoom Soccer Cleats"
          discountedRate="$1160"
          percent="35"
        />
        <ProductCard
          cardImage={controller2_img}
          cardName="GP11 Shooter USB Gamepad "
          discountedRate="$660"
          percent="55"
          newItem="NEW"
        />
        <ProductCard
          cardImage={jacket_img}
          cardName="Quilted Satin Jacket"
          discountedRate="$660"
          percent="55"
        />
      </div>
      <div className="bg-primary text-white w-60 h-14 rounded my-10 mx-auto text-center p-[18px] hover:cursor-pointer ">
        <button className="">View All Products</button>
      </div>
    </div>
  );
}
