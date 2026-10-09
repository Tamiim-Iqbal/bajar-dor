import Image from "next/image";
import Hero from "./Components/Home/Hero";
import PriceUp from "./Components/Home/PriceUp";
import PriceDown from "./Components/Home/PriceDown";
import AllProducts from "./Components/Home/AllProducts";

export default function Home() {
  return (
    <div className="bg-[#f0f5f0]">
      <div className="w-10/12 mx-auto pt-6 pb-16">
        <Hero />
        <PriceUp />
        <PriceDown />
        <AllProducts />
        
      </div>
    </div>
  );
}
