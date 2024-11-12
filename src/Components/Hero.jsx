import hero_img from "../assets/images/hero.png";

const categories = [
  "Woman’s Fashion",
  "Men’s Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];
export default function Hero() {
  return (
    <div className="flex justify-between  mx-32 items-center">
      <div className="flex w-[18%] border-r border-r-gray-300">
        <ul className="flex flex-col gap-y-4 text-base mt-9">
          {categories.map((items) => (
            <li className="hover:underline">
              <a href="">{items}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 w-[78%]">
        <img src={hero_img} alt="Hero_image" />
      </div>
    </div>
  );
}
