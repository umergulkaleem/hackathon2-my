import React from "react";
import Image from "next/image";
import Link from "next/link";

const Herosection = () => {
  return (
    <div>
      <div className=" flex bg-[#FBEBB5] w-[1440px] h-[900px]">
        <div className="w-[440px] h-[276px] mt-[328px] ml-[220px] text-[64px] font-medium leading-[96px] ">
          <div className="flex gap-4">
            <div> Rocket </div> <div>single </div>
          </div>
          <div> seater </div>
          <Link href="/shop">
            <div className="w-[121px] h-[36px] font-medium text-[24px] leading-[36px] ">
              Shop Now
              <div className="border-[1px] border-black "></div>
            </div>
          </Link>
        </div>
        <div className="flex-shrink-0 ">
          <Image
            src="/Rocket single seater 1.svg"
            width={853}
            height={1000}
            alt="sofa image"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
