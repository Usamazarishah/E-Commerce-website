import { CiSearch } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { HiMiniUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

// const links = ["Home", "Contact", "About", "Sign Up"];
const links = [
  {title: "home",  link:"/"},
  {title: "about", link:"/about"},
  {title: "contactUs", link:"/contact"},
  {title: "signUp", link:"/signup"},
];
export default function Navbar() {
  return (
    <div className="border-y border-y-gray-300">
      <div className="h-[85px] flex justify-between items-center mx-[92px] pt-5">
        <h1 className="font-bold text-2xl">Exclusive</h1>
        <ul className="flex gap-10 font-normal  ">
          {links.map((item, i) => {
            return (
              <li className="hover:underline text-base" key={i}><Link to={item.link}>{item.title}</Link></li>
            );
          })}
        </ul>
        <div className="flex items-center gap-6 ">
          <div className="flex bg-secondary color-black w-60 h-9 justify-around items-center  text-sm rounded px-4">
            <input
              type="search"
              className="nav_input bg-transparent outline-none w-full"
              placeholder="What are you looking for?"
            />
            <CiSearch className="text-2xl font-extrabold text-black" />
          </div>
          <IoHeartOutline className="text-2xl" />
          <IoCartOutline className="text-2xl" />
          <HiMiniUserCircle className="profile_icon text-3xl bg-white rounded-full text-primary" />
        </div>
      </div>
    </div>
  );
}
