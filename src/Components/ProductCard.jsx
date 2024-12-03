import { TiHeartOutline } from "react-icons/ti";
import { FiEye } from "react-icons/fi";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";

export default function ProductCard(Props) {
  //   console.log(Props);

  return (
    <Link to={`/product/${Props.id}`} className="w-[calc(25%-28px)] h-auto my-10 mx-auto">
      <div className="w-full bg-secondary  rounded flex items-center justify-center ">
        <div className="relative h-full w-full p-3">
          <div className="absolute top-3">
            {Props.cardDiscount ? (
              <p className="bg-primary rounded text-white text-xs   py-[5px] px-3 ">
                {Props.cardDiscount}
              </p>
            ) : Props.newItem ? (
              <p className="bg-[#00FF66] rounded text-white text-xs   py-[5px] px-3">
                {Props.newItem}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-2 absolute right-3">
            <TiHeartOutline className="card_icon" />
            <FiEye className="card_icon" />
          </div>
          <div className="flex items-center justify-center h-full">
            <img src={Props.cardImage} className="" alt="controller" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="pt-4 font-medium text-base text-start">
          {Props.cardName}
        </p>
        <p className="flex gap-3 pt-2">
          <span className="text-primary font-medium">
            {Props.discountedRate}
          </span>
          <span className="font-medium text-gray-500 line-through">
            {Props.oldRate}
          </span>
        </p>
        <div className="flex text-center items-center text-[#FFAD33] gap-2 ">
          <ReactStars
            count={5}
            value={Props.rating}
            edit={false}
            size={20}
            color2={"#FFAD33"}
          />
          <span className=" text-gray-500 font-semibold text-sm">
            ({Props.percent})
          </span>
        </div>
      </div>
    </Link>
  );
}
