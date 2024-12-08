import React from "react";

const Footer = () => {
  return (
    <footer className="w-[1440px] h-max  py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <p className="w-[285px] h-[72px] font-normal text-[16px] leading-[24px] mt-[100px] text-[#9F9F9F]">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2 text-[#9F9F9F]">Links</h3>
          <ul className="space-y-2 ">
            <li className="mt-[50px]">Home</li> <li>Shop</li> <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2 text-[#9F9F9F] ">Help</h3>
          <ul className="space-y-2 ">
            <li className="mt-[50px]">Payment Options</li> <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2 text-[#9F9F9F]">Newsletter</h3>
          <div className="flex flex-col space-y-2 mt-[50px]">
            <p className="text-[#9F9F9F]">Enter Your Email Address</p>
            <p className="border-2 border-black w-[200px]"></p>
            <p>SUBSCRIBE</p> <p className="border-2 border-black w-[100px]"></p>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-[#9F9F9F] pt-4 text-center text-[#9F9F9F]">
        <p>&copy; 2022 Meubel House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
