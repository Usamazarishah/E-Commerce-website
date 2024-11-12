import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Timer from "./Components/Timer";
import FlashSale from "./Components/FlashSale";
import SellingProduct from "./Components/SellingProduct";
import BrowserCategories from "./Components/BrowserCategories";
import Categories from "./Components/Categories";

export default function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero/>
      <Timer/>
      <FlashSale/>
      <BrowserCategories/>
      <SellingProduct/>
      <Categories/>
    </>
  );
}
