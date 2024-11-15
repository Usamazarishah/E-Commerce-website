import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

export default function Timer() {
  return (
    <div className="mx-[92px] mt-32">
      <div className="flex gap-4 items-center">
        <span className="bg-primary py-5 px-[10px] rounded"></span>
        <span className="text-primary font-semibold text-base">Today’s</span>
      </div>

      <div className="flex justify-between items-center text-center mt-5 ">
        <div className="flex items-center gap-5">
          <p className="text-4xl font-semibold ">Flash Sales</p>
          <div className="flex flex-col items-start ml-16">
            <p className="text-xs font-medium -mt-3">Days</p>
            <p className="text-[32px] font-bold">03</p>
          </div>
          <span className="text-primary text-lg font-bold">:</span>

          <div className="flex flex-col items-start">
            <p className="text-xs font-medium -mt-3">Hours</p>
            <p className="text-[32px] font-bold">23</p>
          </div>
          <span className="text-primary text-lg font-bold">:</span>

          <div className="flex flex-col items-start">
            <p className="text-xs font-medium -mt-3">Minutes</p>
            <p className="text-[32px] font-bold">19</p>
          </div>
          <span className="text-primary text-lg font-bold">:</span>

          <div className="flex flex-col items-start">
            <p className="text-xs font-medium -mt-3">Seconds</p>
            <p className="text-[32px] font-bold">56</p>
          </div>
        </div>

        <div className=" flex  gap-2 text-4xl -mt-3">
          <BsArrowLeftShort className="arrow" />
          <BsArrowRightShort className="arrow" />
        </div>
      </div>
    </div>
  );
}
