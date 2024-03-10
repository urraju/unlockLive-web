"use client";
// import swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "./banner.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
// import iamges
import Image from "next/image";
import coffe1 from "../../../assets/images/menu_img/Image (5).png";
import coffe2 from "../../../assets/images/menu_img/Image (6).png";
import coffe3 from "../../../assets/images/menu_img/Image (7).png";
import bannerImage from "../../../assets/images/all_image/banner_img.png";

// import font
import localFont from "next/font/local";
const bakinlda = localFont({
  src: "../../font/Bakilda/bakilda-histori.ttf",
});
const sanPro = localFont({
  src: "../../font/Value Sans Pro/ValueSansPro-Regular.ttf",
});
const abril = localFont({
  src: "../../font/Abril/Abril_Text_Regular.otf",
});
export default function Banner() {
  return (
    <div className=" h-full md:h-[600px]">
      <div className="max-w-screen-xl mx-auto  mt-10  ">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="">
            <div className="flex justify-between flex-col-reverse md:flex-row items-center  md:gap-20">
              <div className="flex-1">
                <p className="text-lg font-semibold uppercase text-[#270A05] py-3">
                  Welcome to our
                </p>

                <div className={bakinlda.className}>
                  <h1 className="text-2xl md:text-[70px] py-5 text-[#270A05]">
                    UnlockLive
                  </h1>
                  <p className="text-4xl py-2 text-[#270A05]">
                    Elevanting Your Coffee Experience
                  </p>
                </div>

                <div className={sanPro.className}>
                  <p className="py-3 text-[16px] text-[#270A05] font-light">
                    Unlocklive embodies our commitment to transforming the
                    simple act of sipping coffee into a refined and memorable
                    journey. At Epicurean, we take pride in curating an
                    exceptional coffee experience that transcends the ordinary.
                  </p>
                </div>

                <div className="flex gap-10 pyu-2 md:py-5 md:items-center flex-col md:flex-row">
                  <div className={sanPro.className}>
                    <button className="bg-[#86371C] uppercase px-4 py-3 text-white rounded-lg">
                      Explore our menu
                    </button>
                  </div>
                  <div className="flex gap-32 items-center py-2 md:py-0">
                    <div className="flex relative items-center">
                      <Image
                        src={coffe1}
                        className="border-2 rounded-full w-14"
                      />
                      <Image
                        src={coffe2}
                        className="absolute left-12 border-2 rounded-full w-14 z-20"
                      />
                      <Image
                        src={coffe3}
                        className="absolute left-24 border-2 rounded-full w-14 z-30"
                      />
                    </div>

                    <div className={abril.className}>
                      <div className="text-[#270A05]">
                        <p className="text-2xl">1200+</p>
                        <p className="text-gray-600 text-sm font-light">
                          Tasty Variant Coffee
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* banner image  */}

              <div className="flex-1">
                <Image src={bannerImage} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="flex justify-between flex-col-reverse md:flex-row items-center  md:gap-20">
              <div className="flex-1">
                <p className="text-lg font-semibold uppercase text-[#270A05] py-3">
                  Welcome to our
                </p>

                <div className={bakinlda.className}>
                  <h1 className="text-2xl md:text-[70px] py-5 text-[#270A05]">
                    UnlockLive
                  </h1>
                  <p className="text-4xl py-2 text-[#270A05]">
                    Elevanting Your Coffee Experience
                  </p>
                </div>

                <div className={sanPro.className}>
                  <p className="py-3 text-[16px] text-[#270A05] font-light">
                    Unlocklive embodies our commitment to transforming the
                    simple act of sipping coffee into a refined and memorable
                    journey. At Epicurean, we take pride in curating an
                    exceptional coffee experience that transcends the ordinary.
                  </p>
                </div>

                <div className="flex gap-10 pyu-2 md:py-5 md:items-center flex-col md:flex-row">
                  <div className={sanPro.className}>
                    <button className="bg-[#86371C] uppercase px-4 py-3 text-white rounded-lg">
                      Explore our menu
                    </button>
                  </div>
                  <div className="flex gap-32 items-center py-2 md:py-0">
                    <div className="flex relative items-center">
                      <Image
                        src={coffe1}
                        className="border-2 rounded-full w-14"
                      />
                      <Image
                        src={coffe2}
                        className="absolute left-12 border-2 rounded-full w-14 z-20"
                      />
                      <Image
                        src={coffe3}
                        className="absolute left-24 border-2 rounded-full w-14 z-30"
                      />
                    </div>

                    <div className={abril.className}>
                      <div className="text-[#270A05]">
                        <p className="text-2xl">1200+</p>
                        <p className="text-gray-600 text-sm font-light">
                          Tasty Variant Coffee
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* banner image  */}

              <div className="flex-1">
                <Image src={bannerImage} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="flex justify-between flex-col-reverse md:flex-row items-center  md:gap-20">
              <div className="flex-1">
                <p className="text-lg font-semibold uppercase text-[#270A05] py-3">
                  Welcome to our
                </p>

                <div className={bakinlda.className}>
                  <h1 className="text-2xl md:text-[70px] py-5 text-[#270A05]">
                    UnlockLive
                  </h1>
                  <p className="text-4xl py-2 text-[#270A05]">
                    Elevanting Your Coffee Experience
                  </p>
                </div>

                <div className={sanPro.className}>
                  <p className="py-3 text-[16px] text-[#270A05] font-light">
                    Unlocklive embodies our commitment to transforming the
                    simple act of sipping coffee into a refined and memorable
                    journey. At Epicurean, we take pride in curating an
                    exceptional coffee experience that transcends the ordinary.
                  </p>
                </div>

                <div className="flex gap-10 pyu-2 md:py-5 md:items-center flex-col md:flex-row">
                  <div className={sanPro.className}>
                    <button className="bg-[#86371C] uppercase px-4 py-3 text-white rounded-lg">
                      Explore our menu
                    </button>
                  </div>
                  <div className="flex gap-32 items-center py-2 md:py-0">
                    <div className="flex relative items-center">
                      <Image
                        src={coffe1}
                        className="border-2 rounded-full w-14"
                      />
                      <Image
                        src={coffe2}
                        className="absolute left-12 border-2 rounded-full w-14 z-20"
                      />
                      <Image
                        src={coffe3}
                        className="absolute left-24 border-2 rounded-full w-14 z-30"
                      />
                    </div>

                    <div className={abril.className}>
                      <div className="text-[#270A05]">
                        <p className="text-2xl">1200+</p>
                        <p className="text-gray-600 text-sm font-light">
                          Tasty Variant Coffee
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* banner image  */}

              <div className="flex-1">
                <Image src={bannerImage} />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="flex justify-between flex-col-reverse md:flex-row items-center  md:gap-20">
              <div className="flex-1">
                <p className="text-lg font-semibold uppercase text-[#270A05] py-3">
                  Welcome to our
                </p>

                <div className={bakinlda.className}>
                  <h1 className="text-2xl md:text-[70px] py-5 text-[#270A05]">
                    UnlockLive
                  </h1>
                  <p className="text-4xl py-2 text-[#270A05]">
                    Elevanting Your Coffee Experience
                  </p>
                </div>

                <div className={sanPro.className}>
                  <p className="py-3 text-[16px] text-[#270A05] font-light">
                    Unlocklive embodies our commitment to transforming the
                    simple act of sipping coffee into a refined and memorable
                    journey. At Epicurean, we take pride in curating an
                    exceptional coffee experience that transcends the ordinary.
                  </p>
                </div>

                <div className="flex gap-10 pyu-2 md:py-5 md:items-center flex-col md:flex-row">
                  <div className={sanPro.className}>
                    <button className="bg-[#86371C] uppercase px-4 py-3 text-white rounded-lg">
                      Explore our menu
                    </button>
                  </div>
                  <div className="flex gap-32 items-center py-2 md:py-0">
                    <div className="flex relative items-center">
                      <Image
                        src={coffe1}
                        alt=""
                        className="border-2 rounded-full w-14"
                      />
                      <Image
                        src={coffe2}
                        alt=""
                        className="absolute left-12 border-2 rounded-full w-14 z-20"
                      />
                      <Image
                        src={coffe3}
                        alt=""
                        className="absolute left-24 border-2 rounded-full w-14 z-30"
                      />
                    </div>

                    <div className={abril.className}>
                      <div className="text-[#270A05]">
                        <p className="text-2xl">1200+</p>
                        <p className="text-gray-600 text-sm font-light">
                          Tasty Variant Coffee
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* banner image  */}

              <div className="flex-1">
                <Image src={bannerImage} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
