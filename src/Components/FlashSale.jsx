import ProductCard from "./ProductCard";
import controller1_img from "../assets/images/card_images/controller1.png";
import keyboard_img from "../assets/images/card_images/keyboard.png";
import screen_img from "../assets/images/card_images/screen.png";
import chair_img from "../assets/images/card_images/chair.png";

export default function FlashSale() {
    return (
      <>
        <div className="flex container-x gap-7 ">
          <ProductCard
            cardImage={controller1_img}
            cardDiscount="40%"
            cardName="HAVIT HV-G92 Gamepad"
            discountedRate="$120"
            oldRate="$160"
            percent="88"
          />
          <ProductCard
            cardImage={keyboard_img}
            cardDiscount="35%"
            cardName="AK-900 Wired Keyboard"
            discountedRate="$960"
            oldRate="$1160"
            percent="75"
          />
  
          <ProductCard
            cardImage={screen_img}
            cardDiscount="30%"
            cardName="IPS LCD Gaming Monitor"
            discountedRate="$370"
            oldRate="$400"
            percent="99"
          />
          <ProductCard
            cardImage={chair_img}
            cardDiscount="25%"
            cardName="S-Series Comfort Chair "
            discountedRate="$375"
            oldRate="$400"
            percent="99"
          />
        </div>
        <div className="bg-primary text-white w-60 h-14 rounded my-8 mx-auto text-center p-[18px] hover:cursor-pointer ">
          <button className="">View All Products</button>
        </div>
        <div className="border-b border-y-gray-300 -mb-12 container-x pt-5"></div>
      </>
    );
  }