export default function Banner() {
  return (
    <div className="bg-slate-950 text-gray-50 h-12 flex justify-between items-center">
      <div className="bg-slate-950 text-gray-50 h-12 flex justify-center items-center text-sm gap-2 ml-[400px]">
        <p className="">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <span className="font-semibold underline hover:cursor-pointer ">
          ShopNow
        </span>
      </div>
      <div className="mr-32">
        <select className="bg-slate-950 text-sm hover:cursor-pointer">
          <option>English</option>
          <option>French</option>
        </select>
      </div>
    </div>
  );
}
