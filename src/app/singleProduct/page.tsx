import React from "react";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
const page = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex ml-[100px] mt-[50px]">
        <div className=" flex w-[82px] h-[24px] ">
          <p className="w-[48px] h-[24px] text-[16px] font-normal leading-[24px] text-[#9F9F9F]">
            Home
          </p>
          <Image
            className="ml-[10px]"
            src="dashicons_arrow-up-alt2.svg"
            width={20}
            height={20}
            alt="arrow-up"
          />
        </div>
        <div className=" flex w-[82px] h-[24px]">
          <p className="w-[41px] h-[24px] text-[16px] ml-[10px] font-normal leading-[24px] text-[#9F9F9F]">
            Shop
          </p>
          <Image
            className="ml-[10px]"
            src="dashicons_arrow-up-alt2.svg"
            width={20}
            height={20}
            alt="arrow-up"
          />
        </div>
        <div className="flex items-center space-x-2">
          <div className=" ml-[10px] w-[37px] h-0 border-t-2 border-[#9F9F9F] rotate-90"></div>
          <p className="text-[16px] leading-[24px] font-normal">Asgaard sofa</p>
        </div>
      </div>
      <div className="w-[1440px] h-[820px] flex justify-center items-center">
        <div className="flex space-x-8 w-[1241px] h-[730px]">
          <div className="flex space-x-4">
            <div className="space-y-8">
              <Image
                className="mt-[15px]"
                src="Outdoor sofa set 2.svg"
                width={76}
                height={55}
                alt="Side image 1"
              />
              <Image
                src="Outdoor sofa set_2 1.svg"
                width={76}
                height={55}
                alt="Side image 2"
              />
              <Image
                src="Stuart sofa 1.svg"
                width={76}
                height={55}
                alt="Side image 3"
              />
              <Image
                src="Maya sofa three seater (1) 1.svg"
                width={76}
                height={55}
                alt="Side image 4"
              />
            </div>

            <div className="w-[481px] h-[500px]">
              <Image
                src="Asgaard sofa 3.svg"
                width={481}
                height={500}
                alt="Main sofa image"
              />
            </div>
          </div>

          <div className="w-[606px]">
            <h1 className="text-[42px] leading-[63px] font-normal">
              Asgaard sofa
            </h1>
            <p className="text-[24px] leading-[36px] text-[#9F9F9F] font-medium">
              Rs. 250,000.00
            </p>

            <div className="flex items-center space-x-2 mt-4">
              <div className="flex space-x-1">
                <Image
                  src="dashicons_star-filled.svg"
                  width={20}
                  height={20}
                  alt="Star"
                />
                <Image
                  src="dashicons_star-filled.svg"
                  width={20}
                  height={20}
                  alt="Star"
                />
                <Image
                  src="dashicons_star-filled.svg"
                  width={20}
                  height={20}
                  alt="Star"
                />
                <Image
                  src="dashicons_star-filled.svg"
                  width={20}
                  height={20}
                  alt="Star"
                />
                <Image
                  src="carbon_star-half.svg"
                  width={20}
                  height={20}
                  alt="Half Star"
                />
              </div>
              <p className="text-[13px] text-[#9F9F9F]">5 Customer Reviews</p>
            </div>

            <p className="text-[13px] leading-[19.5px] text-[#333] mt-4">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>

            <div className="mt-6">
              <p className="text-[14px] text-[#9F9F9F]">Size</p>
              <div className="flex space-x-2 mt-2">
                <button className="w-[30px] h-[30px] bg-[#FBEBB5] rounded-full">
                  L
                </button>
                <button className="w-[30px] h-[30px] border rounded-full">
                  XL
                </button>
                <button className="w-[30px] h-[30px] border rounded-full">
                  XS
                </button>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[14px] text-[#9F9F9F]">Color</p>
              <div className="flex space-x-2 mt-2">
                <div className="w-[30px] h-[30px] bg-[#816DFA] rounded-full"></div>
                <div className="w-[30px] h-[30px] bg-[#000000] rounded-full"></div>
                <div className="w-[30px] h-[30px] bg-[#CDBA7B] rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center mt-6 space-x-4">
              <div className="w-[123px] h-[64px] flex items-center justify-between border-[#9F9F9F] border-[2px] rounded-[16px] px-4">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              <button className="w-[215px] h-[64px] border-[2px] border-[#000000] rounded-[16px]">
                Add to Cart
              </button>
            </div>

            <div className="mt-[100px] flex">
              <div className="flex space-x-8">
                <div className="text-[#9F9F9F]">
                  <p className="mb-[10px]">SKU:</p>
                  <p className="mb-[10px]">Category:</p>
                  <p className="mb-[10px]">Tags:</p>
                  <p className="mb-[10px]">Share:</p>
                </div>
                <div className="text-[#9F9F9F]">
                  <p className="mb-[10px]">SS001</p>
                  <p className="mb-[10px]">Sofas</p>
                  <p className="mb-[10px]">Sofa, Chair, Home, Shop</p>
                  <div className="flex space-x-7">
                    <Image
                      src="akar-icons_facebook-fill.svg"
                      width={20}
                      height={20}
                      alt="Facebook"
                    />
                    <Image
                      src="akar-icons_linkedin-box-fill.svg"
                      width={20}
                      height={20}
                      alt="LinkedIn"
                    />
                    <Image
                      src="ant-design_twitter-circle-filled.svg"
                      width={20}
                      height={20}
                      alt="Twitter"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[100px] ml-[100px]">
                <Image src="heart.svg" width={25} height={25} alt="Favorite" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="border-[1px] border-[#D9D9D9] w-[1440px] mt-[-10px] mb-[40px]"></p>
        <div className="flex flex-col items-center">
          <div className="flex space-x-10 text-[18px] font-medium mt-6">
            <p className="text-[24px] font-normal leading-[36px]">
              Description
            </p>
            <p className="text-[24px] text-[#9F9F9F] font-normal leading-[36px]">
              Additional Information
            </p>
            <p className="text-[24px] text-[#9F9F9F] font-normal leading-[36px]">
              Reviews [5]
            </p>
          </div>
          <div className="text-[#9F9F9F] mb-[0px] mt-[60px] w-[790px] text-center leading-[24px] text-[16px] font-normal">
            <p>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="mt-4">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
          <div className="flex justify-center space-x-8 mt-[-10px]m-4">
            <Image
              src="Cloud sofa three seater + ottoman_2 1.svg"
              width={828}
              height={551}
              alt="Sofa 1"
            />

            <Image
              className="mb-[50px]"
              src="Cloud sofa three seater + ottoman_1 1.svg"
              width={700}
              height={436}
              alt="Sofa 2"
            />
          </div>
        </div>
      </div>
      <p className="border-[1px] border-[#D9D9D9] w-[1440px]  mb-[40px] mt-[50px]"></p>
      <p className="w-[309px] h-[54px] font-medium text-[36px] leading-[54px] ml-[40%] mb-[-40px] mt-[100px]">
        Related Products{" "}
      </p>
      <div>
        <Card />

        <p className="w-[104px] h-[30px] ml-[640px] font-medium text-[20px] leading-[30px] mt-[100px]">
          View More
        </p>
        <p className="border-[1px] border-black w-[105px] mt-[15px] ml-[640px]"></p>
      </div>
      <div className="mt-[300px]">
        <Footer />
      </div>
    </div>
  );
};

export default page;
