"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./recipe.css";

// ... rest of your code

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination  } from "swiper/modules";

// font image import
import localFont from "next/font/local";
const bakinlda = localFont({
  src: "../../font/Bakilda/bakilda-histori.ttf",
});
const sanPro = localFont({
  src: "../../font/Value Sans Pro/ValueSansPro-Regular.ttf",
});

import Image from "next/image";
import recipe1 from "../../../assets/images/all_image/recipe-1.png";
import recipe2 from "../../../assets/images/all_image/recipe-2.png";

export default function RecipeMenu() {
  return (
    <div className="my-20  bg-[#FFFAF2] h-full md:h-[500px">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:gap-16 gap-5 items-center">
       
        <div className="w-full md:w-[400px] ">
          <div className="flex gap-3 items-center py-4">
            <div className="bg-gradient-to-r h-[3px] w-16 to-[#86371C] from-slate-50 rounded-lg"></div>
            <div className={bakinlda.className}>
              <h1 className="text-[#86371C] text-lg font-semibold ">
                New Recipe
              </h1>
            </div>
          </div>
          <div className={bakinlda.className}>
            <h1 className=" text-4xl">Taste Our New Recipe</h1>
          </div>
          <div className={sanPro.className}>
            <p className="text-[#53565C] text-sm py-3 leading-relaxed">
              Malesuada cursus a tincidunt volutpat posuere lacinia. Congue
              malesuada lacus pharetra ut vel amet. Amet turpis suspendisse
              porttitor scelerisque amet dolor et. Nisi ac vitae tortor
              lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis
              nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing
              eu sit ornare imperdiet viverra sit vel.{" "}
            </p>

            <p className="text-[#53565C] text-sm leading-relaxed">
              There are many variations of passages of Lorem Ipsum form any
              injected humour, or randomised words which don't look slightly
              believable.
            </p>
          </div>
        </div>

        {/* swper silder part  */}
       
          
           
              <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={50}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}

                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                
                modules={[Pagination]}
                className="mySwiper  mt-16 flex-1 w-full"
              >
              

                  <SwiperSlide className=" mr-6">
                    <div className={sanPro.className}>
                      <div className="box ">
                        <Image className="w-full"  src={recipe1} alt="" />
                        <div className="content  ">
                          <div className=" flex flex-col font-light text-sm   justify-center h-full list-disc">
                            <li>Pita bread or wraps</li>
                            <li>Toppings: tomatoes, tahini sauce, etc.</li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                   
                  <SwiperSlide className=" mr-6">
                    <div className={sanPro.className}>
                      <div className="box ">
                        <Image className="w-full "  src={recipe2} alt="" />
                        <div className="content  ">
                          <div className=" flex flex-col font-light text-sm   justify-center h-full list-disc">
                            <li>Pita bread or wraps</li>
                            <li>Toppings: tomatoes, tahini sauce, etc.</li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                   
                  <SwiperSlide className=" mr-6">
                    <div className={sanPro.className}>
                      <div className="box ">
                        <Image className=" w-full"  src={recipe1} alt="" />
                        <div className="content  ">
                          <div className=" flex flex-col font-light text-sm   justify-center h-full list-disc">
                            <li>Pita bread or wraps</li>
                            <li>Toppings: tomatoes, tahini sauce, etc.</li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                   
                  <SwiperSlide className=" mr-6">
                    <div className={sanPro.className}>
                      <div className="box ">
                        <Image className=" w-full"  src={recipe2} alt="" />
                        <div className="content  ">
                          <div className=" flex flex-col font-light text-sm   justify-center h-full list-disc">
                            <li>Pita bread or wraps</li>
                            <li>Toppings: tomatoes, tahini sauce, etc.</li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                   
                  <SwiperSlide className=" mr-6">
                    <div className={sanPro.className}>
                      <div className="box ">
                        <Image className=" w-full"  src={recipe1} alt="" />
                        <div className="content  ">
                          <div className=" flex flex-col font-light text-sm   justify-center h-full list-disc">
                            <li>Pita bread or wraps</li>
                            <li>Toppings: tomatoes, tahini sauce, etc.</li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                   
                  <SwiperSlide className=" mr-6">
                    <div className={sanPro.className}>
                      <div className="box ">
                        <Image className="w-full "  src={recipe2} alt="" />
                        <div className="content  ">
                          <div className=" flex flex-col font-light text-sm   justify-center h-full list-disc">
                            <li>Pita bread or wraps</li>
                            <li>Toppings: tomatoes, tahini sauce, etc.</li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                   
                  <SwiperSlide className=" mr-6">
                    <div className={sanPro.className}>
                      <div className="box ">
                        <Image className="w-full "  src={recipe1} alt="" />
                        <div className="content  ">
                          <div className=" flex flex-col font-light text-sm   justify-center h-full list-disc">
                            <li>Pita bread or wraps</li>
                            <li>Toppings: tomatoes, tahini sauce, etc.</li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                   

                 
              </Swiper>
        </div>
      </div>
     
  );
}
