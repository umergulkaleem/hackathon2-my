import React from "react";
import Image from "next/image";
const Sidetable = () => {
  return (
    <div className=" flex w-[1440px] h-[672px]">
      <div className="w-[605px] h-[562px] ">
        <Image
          className="mt-[71px] ml-[100px] w-[1440px]"
          src="/Granite square side table 1.svg"
          width={1092}
          height={1641}
          alt="Side table 1"
        />
        <div className="w-[182px] h-[54px] ml-[205px] mt-[-190px] font-medium leading-[54px] text-[36px]">
          Side table
        </div>
        <div className="w-[125px] h-[36px] ml-[205px] leading-[36px] text-[24px] mt-[24px] font-medium  ">
          View More
          <h1 className="border-[1px] mt-3 border-[rgba(0,0,0,1)]"></h1>
        </div>
      </div>
      <div>
        <div className="w-[605px] h-[562px] ">
          <Image
            className="mt-[67px] ml-[100px] w-[1440px]"
            src="/Cloud sofa three seater + ottoman_3 1.png"
            width={1585}
            height={1055}
            alt="Side table 1"
          />
          <div className="w-[182px] h-[54px] ml-[250px] mt-[-155px] font-medium leading-[54px] text-[36px]">
            Side table
          </div>
          <div className="w-[125px] h-[36px] ml-[250px] leading-[36px] text-[24px] mt-[24px] font-medium  ">
            View More
            <h1 className="  border-[1px] mt-3 border-[rgba(0,0,0,1)]"></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidetable;
