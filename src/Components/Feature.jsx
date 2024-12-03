import feature1_img from "../assets/images/feature1.png"
import feature2_img from "../assets/images/feature2.png"

export default function Feature() {
  return (
    <div className="mx-4 md:mx-16 lg:mx-[92px]">
      <div className=" mt-16">
      <div className="flex gap-3 md:gap-4 items-center">
        <span className="bg-primary py-4 md:py-5 px-[8px] md:px-[10px] rounded"></span>
        <span className="text-primary font-semibold text-sm md:text-base">Categories</span>
      </div>
        <p className="flex  text-lg sm:text-3xl md:text-3xl lg:text-4xl font-semibold mt-3 sm:mt-5">New Arrival</p>
      </div>

      <div className="flex gap-7 my-14">
        <div>
          <img src={feature1_img} alt="" />
        </div>
        <div>
          <img src={feature2_img} alt="" />
        </div>
      </div>

    </div>
  )
}

