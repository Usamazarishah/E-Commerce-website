export default function Banner() {
  return (
    <>
      <div
        id="top"
        className="bg-slate-950 text-gray-50 h-12 hidden sm:flex justify-around md:justify-center lg:justify-end  items-center sticky top-0 z-10 "
      >
        <div className=" flex mx-2 md:mx-0 lg:mx-[92px] gap-2 sm:gap-4 md:gap-10 xl:gap-0">
          <div className=" text-gray-50  flex  items-center text-xs md:text-sm gap-2 xl:mr-52">
            <p className="hidden sm:flex">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>

            <span className="font-semibold underline hover:cursor-pointer hidden sm:flex">
              ShopNow
            </span>
          </div>
          <div className=" hidden sm:flex">
            <select className="bg-slate-950 text-sm hover:cursor-pointer">
              <option>English</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 h-13 flex flex-col sm:hidden text-xs text-white sticky top-0 z-10">
        <div className="w-full pt-2">
          <marquee behavior="" direction="left">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </marquee>
        </div>
        <div className=" flex text-center items-center justify-evenly pb-2">
          <p className="font-semibold hover:underline hover:cursor-pointer flex sm:hidden text-white text-xs">
            ShopNow
          </p>
          <div className=" flex sm:hidden text-xs">
            <select className="bg-slate-950 text-sm hover:cursor-pointer">
              <option>English</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
