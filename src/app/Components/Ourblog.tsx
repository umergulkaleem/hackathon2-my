import React from "react";
import Image from "next/image";

const Ourblog = () => {
  return (
    <div>
      <div className="w-[1440px] h-[944px] ">
        <div className="w-[479px] h-[91px] ml-[140px]  ">
          <p className="w-[174px] h-[54px]  ml-[480px] font-medium text-[36px] leading-[54px] mt-[55px] ">
            Our Blogs
          </p>
          <p className="w-[479px] h-[24px] ml-[325px] font-medium text-[16px] leading-[24px] mt-[13px] text-[#9F9F9F] ">
            Find a bright ideal to suit your taste with our great selection
          </p>
        </div>
        <div className=" flex gap-4 w-[1240px] h-[679px] ml-[100px] mt-[70px]">
          <div>
            <Image
              src="Rectangle 13.svg"
              width={393}
              height={393}
              alt="blog1"
            />
            <div className="">
              <p className=" ml-[25px] w-[339px] h-[30px] font-normal text-[20px] leading-[30px]">
                Going all-in with millennial design
              </p>
              <p className=" ml-[140px] w-[130px] h-[36px] text-[24px] font-medium leading-[36px] ">
                Read More
              </p>
              <p className=" ml-[140px] w-[130px] border-[2px] border-black mt-[15px]"></p>
              <p className="flex ml-[100px] mt-[20px]">
                <Image src="/clock.svg" width={18} height={17.83} alt="clock" />{" "}
                &nbsp;
                <p className="w-[45px] h-[24px] font-light text-[16px] leading-[24px] ">
                  5 min
                </p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Image
                  src="/calendar.svg"
                  width={18.33}
                  height={18.33}
                  alt="clock"
                />
                &nbsp;&nbsp;
                <p className="w-[120px] h-[24px] font-light text-[16px] leading-[24px] ">
                  12th Oct 2022
                </p>
              </p>
            </div>
          </div>
          <div>
            {" "}
            <Image
              src="Rectangle 14.svg"
              width={393}
              height={393}
              alt="blog2"
            />
            <div className="">
              <p className=" ml-[25px] w-[339px] h-[30px] font-normal text-[20px] leading-[30px]">
                Going all-in with millennial design
              </p>
              <p className=" ml-[140px] w-[130px] h-[36px] text-[24px] font-medium leading-[36px] ">
                Read More
              </p>
              <p className=" ml-[140px] w-[130px] border-[2px] border-black mt-[15px]"></p>
              <p className="flex ml-[100px] mt-[20px]">
                <Image src="/clock.svg" width={18} height={17.83} alt="clock" />{" "}
                &nbsp;
                <p className="w-[45px] h-[24px] font-light text-[16px] leading-[24px] ">
                  5 min
                </p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Image
                  src="/calendar.svg"
                  width={18.33}
                  height={18.33}
                  alt="clock"
                />
                &nbsp;&nbsp;
                <p className="w-[120px] h-[24px]  font-light text-[16px] leading-[24px] ">
                  12th Oct 2022
                </p>
              </p>
            </div>
          </div>
          <div>
            {" "}
            <Image
              src="Rectangle 15.svg"
              width={393}
              height={393}
              alt="blog3"
            />
            <div className="">
              <p className=" ml-[25px] w-[339px] h-[30px] font-normal text-[20px] leading-[30px]">
                Going all-in with millennial design
              </p>
              <p className=" ml-[140px] w-[130px] h-[36px] text-[24px] font-medium leading-[36px] ">
                Read More
              </p>
              <p className=" ml-[140px] w-[130px] border-[2px] border-black mt-[15px]"></p>
              <p className="flex ml-[100px] mt-[20px]">
                <Image src="/clock.svg" width={18} height={17.83} alt="clock" />{" "}
                &nbsp;
                <p className="w-[45px] h-[24px] font-light text-[16px] leading-[24px] ">
                  5 min
                </p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Image
                  src="/calendar.svg"
                  width={18.33}
                  height={18.33}
                  alt="clock"
                />
                &nbsp;&nbsp;
                <p className="w-[120px] h-[24px] font-light text-[16px] leading-[24px] ">
                  12th Oct 2022
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[126px] height-[49px] ml-[46%] mt-[-80px]">
          <div className="w-[126px] h-[30px] text-[20px] font-medium leading-[30px]">
            View All Post{" "}
          </div>
          <div className="w-[115px] border-[1px] border-black mt-[20px] ml-[5px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Ourblog;
