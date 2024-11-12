import { TiHeartOutline } from "react-icons/ti";
import { FiEye } from "react-icons/fi";
import { PiStarFill } from "react-icons/pi";

export default function ProductCard(Props) {
  //   console.log(Props);

  return (
    <div className="w-[270px] h-[350px] my-7">
      <div className="h-[250px] bg-secondary relative p-3 rounded">
        <div className="flex justify-between">
          <div>
            {Props.cardDiscount ? (
              <button className="bg-primary rounded text-white text-xs absolute top-3 py-[5px] px-3">
                {Props.cardDiscount}
              </button>
            ) : null}
          </div>
          <div className="flex flex-col gap-2 ">
            <TiHeartOutline className="card_icon" />
            <FiEye className="card_icon" />
          </div>
        </div>

        <img
          src={Props.cardImage}
          className="mx-auto -mt-8 "
          alt="controller"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="pt-3 font-medium text-base">{Props.cardName}</p>
        <p className="flex gap-3">
          <span className="text-primary font-medium">
            {Props.discountedRate}
          </span>
          <span className="font-medium text-gray-500 line-through">
            {Props.oldRate}
          </span>
        </p>
        <p className="flex text-[#FFAD33] gap-1">
          <PiStarFill />
          <PiStarFill />
          <PiStarFill />
          <PiStarFill />
          <PiStarFill />
          <span className="-my-[3px] pl-1 text-gray-500 font-semibold text-sm">
            ({Props.percent})
          </span>
        </p>
      </div>
    </div>
  );
}
