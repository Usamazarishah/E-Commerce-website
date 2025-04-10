import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import { TiTimes } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, addItemToCart, lessQuantityFromCart, removeItemFromCart } =
    useContext(CartContext);

  // Function to clean and convert price
  const cleanPrice = (price) => {
    if (typeof price === "string") {
      return Number(price.replace(/[^0-9.]/g, "")); // Remove any non-numeric characters
    }
    return Number(price) || 0; // Ensure it's a valid number
  };

  // Calculate total amount
  const itemsTotalAmount = cartItems.reduce((total, obj) => {
    const price = cleanPrice(obj?.discountedRate);
    return total + obj.quantity * price;
  }, 0);

  // console.log("Cart Items:", cartItems);
  // console.log("Total Amount:", itemsTotalAmount);

  return (
    <div className="mx-4 sm:mx-4 md:mx-16 xl:mx-[92px] py-5 sm:py-8 md:py-10 lg:py-14 xl:py-16 flex flex-col gap-16 xl:gap-20">
      <div>
        {/* Header Section */}
        <ul className="grid grid-cols-4 items-center h-12 sm:h-[60px] lg:h-[65px] xl:h-[72px] px-4 sm:px-7 lg:px-10 rounded border border-gray-200 shadow-md bg-gray-100 text-sm font-bold text-center">
          <li className="text-left">Product</li>
          <li>Price</li>
          <li>Quantity</li>
          <li className="text-right">Subtotal</li>
        </ul>

        {/* Cart Items */}
        {cartItems.map((data) => {
          const price = cleanPrice(data.discountedRate);
          const subtotal = (price * data.quantity).toFixed(2);

          return (
            <ul
              key={data.id}
              className="grid grid-cols-4 items-center min-h-[80px] lg:min-h-[100px] px-4 sm:px-7 lg:px-10 rounded border border-gray-200 shadow-md mt-3 lg:mt-4 text-center"
            >
              {/* Product image*/}
              <li className="flex flex-col sm:flex-row items-center sm:gap-2 lg:gap-5 ">
                <div className="relative">
                  <img
                    src={data.cardImage}
                    alt="product-image"
                    className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 object-contain rounded-lg"

                  />
                  <button onClick={() => removeItemFromCart(data.id)} className="rounded-full bg-primary w-[12px] md:w-[14px] lg:w-[16px] xl:w-[18px] h-[12px] md:h-[14px] lg:h-[16px] xl:h-[18px] absolute top-0.5 left-1 text-white flex items-center justify-center"> <TiTimes
                    className="" /></button>
                </div>

                {/* <div className="">
                  {data.cardName.split(" ").slice(0, 2).join(" ")}
                </div> */}
                <span className="text-xs sm:text-sm lg:text-base font-medium text-center sm:text-start text-gray-800">
                  {data.cardName.split(" ").slice(0, 2).join(" ")}
                </span>

              </li>

              {/* Price */}
              <li className="text-[15px] sm:text-base">${price.toFixed(2)}</li>

              {/* Quantity */}
              <li className="flex justify-center items-center">
                <div className="border border-[#00000066] h-[34px] sm:h-10 lg:h-11 w-[50px] sm:w-16 lg:w-[72px] rounded flex items-center justify-between px-1.5 sm:px-2 hover:bg-primary hover:text-white hover:duration-500">
                  <span className="text-[15px] sm:text-base text-center w-4 lg:w-6">
                    {data.quantity < 10 ? `0${data.quantity}` : data.quantity}
                  </span>
                  <div className="flex flex-col items-center">
                    <button
                      className="text-xs sm:text-sm"
                      onClick={() => addItemToCart(data)}
                    >
                      <IoChevronUpOutline />
                    </button>
                    <button
                      className="text-xs sm:text-sm"
                      disabled={data.quantity === 1}
                      onClick={() => lessQuantityFromCart(data.id)}
                    >
                      <IoChevronDownOutline />
                    </button>
                  </div>
                </div>
              </li>

              {/* Subtotal */}
              <li className="text-[15px] sm:text-base text-right">${subtotal}</li>
            </ul>
          );
        })}

        {/* return and update section */}
        <div className="flex justify-between mt-6 gap-4 sm:gap-0">
          <Link to={"/"} className="border border-[#00000080] h-14 w-56 rounded font-medium hover:bg-primary hover:text-white hover:duration-500  flex justify-center items-center">
             Return To Shop
          </Link>
          <button  className="border border-[#00000080] h-14 w-48 rounded font-medium hover:bg-primary hover:text-white hover:duration-500">
            Update Cart
          </button>
          
        </div>
      </div>

      {/* cart total section */}
      <div className="w-full flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-10 lg:gap-20 xl:gap-24">
        {/* Coupon Section */}
        <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border-2 border-gray-700 rounded h-14 w-full sm:w-[60%] pl-6 outline-none"
          />
          <button className="bg-primary hover:bg-[#ff4949] hover:duration-500 text-white rounded px-2 h-14 w-full sm:w-[40%]">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total Section */}
        <div className="w-full md:w-1/2 border-2 border-gray-700 rounded pt-3 lg:pt-7 px-5 lg:px-6 flex flex-col mt-6 md:mt-0 py-3 lg:py-4">
          <h3 className="font-medium text-xl">Cart Total</h3>
          <div className="flex justify-between border-b border-gray-400 py-3 lg:py-4 mt-2">
            <h6>Subtotal:</h6> <span>${itemsTotalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-b border-gray-400 py-3 lg:py-4">
            <h6>Shipping:</h6> <span>Free</span>
          </div>
          <div className="flex justify-between py-4">
            <h6>Total:</h6> <span>${itemsTotalAmount.toFixed(2)}</span>
          </div>
          <button className="bg-primary hover:bg-[#ff4949] hover:duration-500 text-white rounded w-full md:w-56 lg:w-64 h-12 lg:h-14 mx-auto lg:mt-1">
            Process to checkout
          </button>
        </div>
      </div>

    </div>
  );
}
