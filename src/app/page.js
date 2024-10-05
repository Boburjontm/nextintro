import React from "react";
import Image from "next/image";
import Armchair from "../img/armchair.svg";
import HomeHeroone from "@/components/HomeHeroone";
import ProductPage from "@/components/ProductPage";
import Carousel from "@/components/Carusel";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={Armchair}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center md:justify-end md:pr-16 h-full">
        <div className="bg-[#fae8d8] p-8 md:p-10 rounded-xl max-w-md lg:max-w-lg text-start shadow-lg w-full mx-4 sm:mx-8 md:mx-0">
          <h5 className="text-sm md:text-base font-bold text-gray-600">
            New Arrival
          </h5>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#c89e44] mt-4 mb-4">
            Discover Our New Collection
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#c89e44] text-white px-6 py-3 text-base rounded-md hover:bg-[#a27d36] transition duration-300">
            BUY NOW
          </button>
        </div>
      </div>
      <HomeHeroone/>
      <ProductPage/>
      <Carousel/>
      <Footer/>
    </div>
  );
};

export default Home;
