import { CiSearch } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { HiMiniUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";

import profileImg from "../assets/images/profile_img.jpg";
import { useState } from "react";

const links = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Contact Us", link: "/contact" },
];
export default function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const isLoggedIn = true;
  return (
    <div className="border-y border-y-gray-300">
      <div className="h-[85px] flex justify-between items-center text-center container-x pt-5 relative">
        <h1 className="font-bold text-2xl">Exclusive</h1>
        <ul className="hidden lg:flex gap-10 font-normal ">
          {links.map((item, i) => {
            return (
              <li className="link_hover" key={i}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            );
          })}
          {!isLoggedIn ? (
            <li className="link_hover">
              <Link to="/signup">Sign Up</Link>
            </li>
          ) : null}
        </ul>
         <button
          onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          className="text-3xl lg:hidden order-3"
        >
          {isHamburgerOpen ? <LiaTimesSolid /> : <IoMenu />}
        </button>
        {isHamburgerOpen && 
                 <div className="bg-white fixed h-[100%] w-80 z-10 top-0 right-0 pt-[135px]">
                 <ul className=" flex flex-col gap-4 text-start ">
                   {links.map((item, i) => {
                     return (
                       <li className="border-b border-b-gray-300 pb-3 " key={i}>
                         <Link className="pl-6 hover:text-primary" to={item.link}>{item.title}</Link>
                       </li>
                     );
                   })}
                   {!isLoggedIn ? (
                     <li className="border-b border-b-gray-300 pb-3">
                       <Link className="pl-6 hover:text-primary" to="/signup">Sign Up</Link>
                     </li>
                   ) : null}
                 </ul>
               </div>
        }

        <div className="flex items-center gap-6 text-center">
          <div className="flex bg-secondary color-black w-60 h-9 justify-around items-center  text-sm rounded px-4">
            <input
              type="search"
              className="nav_input bg-transparent outline-none w-full"
              placeholder="What are you looking for?"
            />
            <CiSearch className="text-2xl font-extrabold text-black" />
          </div>

          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <IoHeartOutline className="text-2xl" />
                <IoCartOutline className="text-2xl" />
              </>
            ) : null}
            <div className="h-8 w-8 text-4xl bg-white rounded-full  overflow-hidden text-primary flex">
              {isLoggedIn ? (
                <img src={profileImg} alt="" />
              ) : (
                <HiMiniUserCircle />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
