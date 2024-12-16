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
              Checkout
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
              <p className="font-light text-[16px] leading-[24px]">Checkout</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row gap-8 p-8">
          <div className="w-full ml-[130px] mt-[70px]">
            <h2 className="text-[36px] font-semibold leading-[54px] mb-7">
              Billing details
            </h2>
            <div className="space-y-[40px]">
              <div className="flex">
                <div className="form-group">
                  <p className="block  font-medium leading-[24px] text-[16px] mb-[20px]">
                    First Name
                  </p>
                  <div className="mt-1 w-[211px] h-[75px] border-[#9F9F9F] border-[1px] rounded-[10px]"></div>
                </div>
                <div className="form-group">
                  <p className="block ml-[25px]  font-medium leading-[24px] text-[16px] mb-[20px]">
                    Last Name
                  </p>
                  <div className="mt-1 ml-[25px] w-[211px] h-[75px] border-[#9F9F9F] border-[1px] rounded-[10px]"></div>
                </div>
              </div>
              <div className="form-group">
                <p className="block  font-medium leading-[24px] text-[16px] mb-[20px]">
                  Company Name (Optional)
                </p>
                <div className="mt-1 block w-[453px] h-[75px]  border-[1px] border-[#9F9F9F] rounded-[10px]"></div>
              </div>
              <div className="form-group">
                <p className="block  font-medium leading-[24px] text-[16px] mb-[20px]">
                  Country / Region
                </p>
                <div className="mt-1 block w-[453px] h-[75px]  border-[1px] border-[#9F9F9F] rounded-[10px] text-[#9F9F9F] ">
                  <div className="flex">
                    <p className="mt-[25px] ml-[30px]">Pakistan</p>
                    <p className="mt-[25px] ml-[310px]">
                      <Image
                        className="rotate-90"
                        src="dashicons_arrow-down-alt2.svg"
                        width={25}
                        height={20}
                        alt="arrow"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <p className="block  font-medium leading-[24px] text-[16px] mb-[20px]">
                  Street address
                </p>
                <div className="mt-1 block w-[453px] h-[75px]  border-[1px] border-[#9F9F9F] rounded-[10px]"></div>
              </div>
              <div className="form-group">
                <p className="block  font-medium leading-[24px] text-[16px] mb-[20px]">
                  Town / City
                </p>
                <div className="mt-1 block w-[453px] h-[75px]  border-[1px] border-[#9F9F9F] rounded-[10px]"></div>
              </div>
              <div className="form-group">
                <p className="block  font-medium leading-[24px] text-[16px] mb-[20px]">
                  Province
                </p>
                <div className="mt-1 block w-[453px] h-[75px]  border-[1px] border-[#9F9F9F] rounded-[10px] text-[#9F9F9F] ">
                  <div className="flex">
                    <p className="mt-[25px] min-w-max ml-[30px]">
                      Western Province
                    </p>
                    <p className="mt-[25px] ml-[230px]">
                      <Image
                        className="rotate-90"
                        src="dashicons_arrow-down-alt2.svg"
                        width={25}
                        height={20}
                        alt="arrow"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <p className="block  font-medium leading-[24px] text-[16px] mb-[20px]">
                  ZIP code
                </p>
                <div className="mt-1 block w-[453px] h-[75px]  border-[1px] border-[#9F9F9F] rounded-[10px]"></div>
              </div>
              <div className="form-group">
                <p className="block  font-medium leading-[24px] text-[16px] mb-[20px]">
                  Phone
                </p>
                <div className="mt-1 block w-[453px] h-[75px]  border-[1px] border-[#9F9F9F] rounded-[10px]"></div>
              </div>
              <div className="form-group">
                <p className="block  font-medium leading-[24px] text-[16px] mb-[20px]">
                  Email address
                </p>
                <div className="mt-1 block w-[453px] h-[75px]  border-[1px] border-[#9F9F9F] rounded-[10px]"></div>
              </div>
              <div className="form-group">
                <p className="block  font-medium leading-[24px] text-[16px] mb-[20px]"></p>
                <div className="mt-1 block w-[453px] h-[75px]  border-[1px] border-[#9F9F9F] rounded-[10px]">
                  <p className="text-[#9F9F9F] ml-[25px] mt-[25px]">
                    Additional Information
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-[70px]">
            <div className="border p-8">
              <div className="mb-4">
                <p className="flex justify-between">
                  <span className="text-[24px] font-medium leading-[36px]">
                    Product
                  </span>
                  <span className="text-[24px] font-medium leading-[36px]">
                    Subtotal
                  </span>
                </p>
                <p className="flex justify-between mt-[25px]">
                  <span className="text-[16px] font-normal leading-[24px]">
                    <span className="text-[#9F9F9F]"> Asgaard sofa</span> × 1
                  </span>
                  <span className="font-light text-[16px] leading-[24px]">
                    Rs. 250,000.00
                  </span>
                </p>
              </div>
              <div className="mb-4">
                <p className="flex justify-between font-bold">
                  <span className="font-normal text-[16px] leading-[24px]">
                    Subtotal
                  </span>
                  <span className="font-light text-[16px] leading-[24px]">
                    Rs. 250,000.00
                  </span>
                </p>
                <p className="flex justify-between mt-[20px] ">
                  <span className="font-normal text-[16px] leading-[24px]">
                    Total
                  </span>
                  <span className="font-bold text-[24px] leading-[36px] text-[#B88E2F]">
                    Rs. 250,000.00
                  </span>
                </p>
              </div>
              <div className="mb-4 mt-[60px]">
                <div className="flex">
                  <span className="w-[14px] h-[14px] mt-[4px] mr-[20px] rounded-[50px] bg-black"></span>
                  <span className="block mb-2 text-gray-700">
                    Direct Bank Transfer
                  </span>
                </div>
                <p className="text-[16px] text-[#9F9F9F] font-light leading-[24px]">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>

                <div className="flex mt-[15px]">
                  <span className="w-[14px] h-[14px] mt-[4px] border-[1px] border-[#9F9F9F] mr-[20px] rounded-[50px]"></span>
                  <span className="block mb-2 text-gray-700">
                    Direct Bank Transfer
                  </span>
                </div>
                <div className="flex mt-[10px]">
                  <span className="w-[14px] border-[1px] border-[#9F9F9F] h-[14px] mt-[4px] mr-[20px] rounded-[50px]"></span>
                  <span className="block mb-4 text-gray-700">
                    Cash On Delivery
                  </span>
                </div>
                <p className="block font-light leading-[24px] text-[16px] mb-[20px]">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our <b>privacy policy.</b>
                </p>
              </div>
              <div className="w-[318px] ml-[150px] h-[64px] border-[1px] border-black  rounded-[15px] text-center cursor-pointer">
                <p className="mt-[20px]"> Place order </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-around w-full p-8 mt-[100px] mb-[280px] gap-[50px]">
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
