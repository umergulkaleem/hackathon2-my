import React from "react";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
const Shop = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="relative w-[1440px] h-[316px] bg-gray-100">
        <Image
          src="Rectangle 1.svg"
          layout="fill"
          objectFit="cover"
          alt="background"
          className="absolute inset-0"
        />
        <div className="relative flex flex-col items-center justify-center h-full">
          <Image
            className="mt-[-10px]"
            src="Meubel House_Logos-05.svg"
            width={77}
            height={77}
            alt="logo"
          />
          <p className="text-center font-medium text-[48px] leading-[72px] mt-[-10px]">
            Shop
          </p>
          <div className="flex items-center mt-2">
            <p className="font-medium text-[16px] leading-[24px]">Home</p>
            <Image
              className="mx-2"
              src="dashicons_arrow-down-alt2.svg"
              width={20}
              height={20}
              alt="arrow head"
            />
            <p className="font-light text-[16px] leading-[24px]">Shop</p>
          </div>
        </div>
      </div>
      <div className="relative w-[1440px] h-[100px] flex items-center justify-between px-8 bg-white border-b border-gray-200">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Image
              src="/Vector (3).svg"
              width={19.05}
              height={16.67}
              alt="Filter icon"
            />
            <p className="text-gray-700 ml-1 text-[22px]">Filter</p>
          </div>
          <Image
            src="/ci_grid-big-round.svg"
            width={28}
            height={28}
            alt="Grid icon"
          />
          <Image
            src="/bi_view-list.svg"
            width={24}
            height={24}
            alt="List icon"
          />
          <div className="flex items-center border-l-2 border-[#9F9F9F] pl-4">
            <p className="text-gray-700 text-[22px]">
              Showing 1–16 of 32 results
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <p className="text-gray-700 text-[22px] mr-10">Show</p>
            <p className="text-gray-700 font-bold text-[22px] mr-12">16</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-gray-700 text-[22px] mr-12">Sort by</p>
            <p className="text-gray-400 text-[22px] mr-[200px]">Default</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>

      <div className="flex flex-col items-center w-full h-[450px]">
        <div className="flex space-x-2 mb-4 mt-[80px]">
          <p className="bg-yellow-200 px-4 py-2 rounded">1</p>
          <p className="bg-yellow-100 px-4 py-2 rounded">2</p>
          <p className="bg-yellow-100 px-4 py-2 rounded">3</p>
          <p className="bg-yellow-100 px-4 py-2 rounded">Next</p>
        </div>

        <div className="flex justify-around w-full bg-gray-100 p-8">
          <div className="text-center">
            <h2 className="font-medium text-[40px]">Free Delivery</h2>
            <p className="font-light text-[#9f9f9f] w-[200px]">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-medium text-[40px]">90 Days Return</h2>
            <p className="font-light text-[#9f9f9f] w-[200px]">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-medium text-[40px]">Secure Payment</h2>
            <p className="font-light text-[#9f9f9f] w-[200px]">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Shop;
