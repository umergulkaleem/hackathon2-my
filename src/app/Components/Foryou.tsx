import React from "react";
import Image from "next/image";

const Foryou = () => {
  return (
    <div>
      <div>
        <h1 className="w-[311px] h-[54px] ml-[564px] text-[36px] font-medium leading-[54px] mt-[55px] ">
          Top Picks For You
        </h1>
        <p className=" text-[#9F9F9F] w-[773px] h-[24px] ml-[333px] text-[16px] font-medium leading-[24px] mt-[13px] ">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
        <div className="flex mt-[60px]">
          <div className="w-[287px] h-[373px] ml-[100px] ">
            <Image
              src="Trenton modular sofa_3 1.svg"
              width={750}
              height={384.46}
              alt="For You"
            />
            <div className="w-[287px] h-[287px] ">
              <p className="mt-[50px] w-[194px] h-[24px] ml-[0px] text-[16px] font-normal leading-[24px]  ">
                Trenton modular sofa_3
              </p>
              <p className="mt-[9px] w-[158px] h-[36px] ml-[0px] text-[24px] font-medium leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
          </div>
          <div className=" w-[287px] h-[397px] ml-[30px] ">
            {" "}
            <Image
              className="h-[287px]"
              src="Granite dining table with dining chair 1.svg"
              width={255}
              height={185}
              alt="For You2"
            />
            <div className="w-[212px] h-[96px]  ">
              <p className="mt-[50px] w-[212px] h-[48px] ml-[0px] text-[16px] font-normal leading-[24px]  ">
                Granite dining table with dining chair
              </p>
              <p className="mt-[9px] w-[158px] h-[36px] ml-[0px] text-[24px] font-medium leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
          </div>
          <div className=" w-[287px] h-[397px] ml-[30px] ">
            {" "}
            <Image
              className="h-[287px]"
              src="Outdoor bar table and stool 1.svg"
              width={250}
              height={376}
              alt="For You3"
            />
            <div className="w-[212px] h-[96px]  ">
              <p className="mt-[50px] w-[212px] h-[48px] ml-[0px] text-[16px] font-normal leading-[24px]  ">
                Outdoor bar table and stool
              </p>
              <p className="mt-[9px] w-[158px] h-[36px] ml-[0px] text-[24px] font-medium leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
          </div>
          <div className=" w-[287px] h-[397px] ml-[30px] ">
            {" "}
            <Image
              className="h-[287px]"
              src="Plain console with teak mirror 1.svg"
              width={240}
              height={174}
              alt="For You4"
            />
            <div className="w-[212px] h-[96px]  ">
              <p className="mt-[50px] w-[212px] h-[48px] ml-[0px] text-[16px] font-normal leading-[24px]  ">
                Plain console with teak mirror{" "}
              </p>
              <p className="mt-[9px] w-[158px] h-[36px] ml-[0px] text-[24px] font-medium leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
          </div>
        </div>
        <p className="w-[104px] h-[30px] ml-[667px] font-medium text-[20px] leading-[30px] mt-[100px]">
          View More
        </p>
        <p className="border-[1px] border-black w-[115px] mt-[20px] ml-[662px]"></p>
      </div>
    </div>
  );
};

export default Foryou;
