import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex w-[1440px] h-[100px]">
      <div className=" flex  w-[430px] h-[24px] mt-[38px] ml-[430px]">
        <Link href="/">
          <h1 className=" w-12 h-6 ">Home</h1>
        </Link>
        <Link href="/shop">
          {" "}
          <h1 className=" w-[42px] h-6 ml-[81px]">Shop</h1>
        </Link>
        <h1 className=" w-[49px] h-6 ml-[68px]">About</h1>
        <Link href="/form">
          {" "}
          <h1 className=" w-[66px] h-6 ml-[58px]">Contact</h1>
        </Link>
      </div>

      <div className=" flex w-[247px] h-[28px] mt-9 ml-[134px] ">
        <h1 className=" flex-shrink-0 ml-[45px] ">
          <Image
            src="/mdi_account-alert-outline@2x.svg"
            width={28}
            height={28}
            alt="icon1"
          />
        </h1>
        <h1 className=" flex-shrink-0 ml-[45px]">
          <Image
            src="/akar-icons_search.svg"
            width={28}
            height={28}
            alt="icon2"
          />
        </h1>
        <h1 className="flex-shrink-0 ml-[45px]">
          <Image
            src="/akar-icons_heart.svg"
            width={28}
            height={28}
            alt="icon3"
          />
        </h1>
        <h1 className=" flex-shrink-0 ml-[45px]">
          <Image
            src="/ant-design_shopping-cart-outlined.svg"
            width={28}
            height={28}
            alt="icon4"
          />
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
