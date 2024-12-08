import React from "react";
import Image from "next/image";

const Newarrival = () => {
  return (
    <div className="flex w-[1476px] h-[799px] items-center justify-center ">
      <div className="w-[983px] h-[799px]">
        <Image
          className="w-full h-full"
          src="Asgaard sofa 1.svg"
          width={983}
          height={799}
          alt="Sofa Asgard"
        />
      </div>
      <div className="ml-[30px]">
        <div className="w-[331px] h-[108px] flex flex-col items-center justify-center">
          <p className="font-medium text-[24px] leading-[36px]">New Arrivals</p>
          <div className="font-bold text-[48px] leading-[72px] mt-2">
            Asgaard sofa
          </div>
        </div>
        <div className=" ml-[40px] w-[255px] h-[64px] border-2 border-black mt-[20px] flex items-center justify-center bg-white">
          <p className="font-normal text-[20px] leading-[30px]">Order Now</p>
        </div>
      </div>
    </div>
  );
};

export default Newarrival;
