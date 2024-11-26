import { TiHeartOutline } from "react-icons/ti";
import { FiEye } from "react-icons/fi";
import { PiStarFill } from "react-icons/pi";

export default function ProductCard(Props) {
  //   console.log(Props);
  
  return (
    <div className="w-[270px] h-[350px] my-4">
      <div className="h-[250px] bg-secondary  rounded flex items-center justify-center">
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
