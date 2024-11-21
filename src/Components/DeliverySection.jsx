import delivery_img from "../assets/images/deliverySec_images/delivery.png";
import customer_img from "../assets/images/deliverySec_images/customer.png";
import moneyBag_img from "../assets/images/deliverySec_images/moneyBag.png";
import { BsArrowUpShort } from "react-icons/bs";

function Delivery(props) {
  return (
    <div className="flex flex-col items-center text-center gap-2 pt-16 mb-10">
      <img src={props.deliveryImage} alt="" />
      <p className="text-xl font-semibold mt-4">{props.deliveryName}</p>
      <p className="text-sm">{props.deliveryTitle}</p>
    </div>
  );
}
export default function DeliverySection() {
  return (
    <>
      <div className="flex justify-center gap-24">
        <Delivery
          deliveryImage={delivery_img}
          deliveryName="FREE AND FAST DELIVERY"
          deliveryTitle="Free delivery for all orders over $140"
        />
        <Delivery
          deliveryImage={customer_img}
          deliveryName="24/7 CUSTOMER SERVICE"
          deliveryTitle="Friendly 24/7 customer support"
        />
        <Delivery
          deliveryImage={moneyBag_img}
          deliveryName="MONEY BACK GUARANTEE"
          deliveryTitle="We reurn money within 30 days"
        />
      </div>
      <a href="#" className="flex justify-end mr-[92px] mt-2 ">
        <BsArrowUpShort className="arrow" />
      </a>
    </>
  );
}
