import React from "react";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="relative w-[1440px] h-[450px]">
      <Image
        src="Rectangle 17.svg"
        height={450}
        width={1440}
        alt="background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center mt-[-150px]">
        <div className="w-[454px] h-[120px]">
          <div className="text-[60px] font-bold leading-[90px]">
            Our Instagram
          </div>
          <div className="w-[454px] h-[30px] font-normal text-[20px] leading-[30px] mt-2 mx-auto">
            Follow our store on Instagram
          </div>
        </div>
        <div className="relative mt-[15px] w-[255px] h-[64px] rounded-[50px] bg-[#F4F4F4] flex items-center justify-center shadow-lg">
          <p className="font-normal text-[20px] leading-[30px] text-black">
            Follow Us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Socials;
