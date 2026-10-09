import Image from "next/image";
import Hero from "./Components/Home/Hero";

export default function Home() {
  return (
    <div className="bg-base-200">
      <div className="w-10/12 mx-auto py-6">
        <Hero />
      </div>
    </div>
  );
}
