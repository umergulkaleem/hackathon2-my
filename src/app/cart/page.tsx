import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
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
              Cart
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
              <p className="font-light text-[16px] leading-[24px]">Cart</p>
            </div>
          </div>
        </div>
      </div>
      <div>middle div</div>
      <div>
        <div className="flex justify-around w-full bg-gray-100 p-8 mt-[100px] mb-[280px] gap-[50px]">
          <div className="text-center">
            <h2 className="font-medium text-[40px]">Free Delivery</h2>
            <p className="font-light text-[#9f9f9f] w-[250px]">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-medium text-[40px]">90 Days Return</h2>
            <p className="font-light text-[#9f9f9f] w-[250px]">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-medium text-[40px]">Secure Payment</h2>
            <p className="font-light text-[#9f9f9f] w-[250px]">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
