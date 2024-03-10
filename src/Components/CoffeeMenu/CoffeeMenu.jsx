import React from "react";
import localFont from "next/font/local";
const bakinlda = localFont({
  src: "../../font/Bakilda/bakilda-histori.ttf",
});
const sanPro = localFont({
  src: "../../font/Value Sans Pro/ValueSansPro-Regular.ttf",
});

import Image from "next/image";
import menu1 from "../../../assets/images/menu_img/Image (5).png";
import menu2 from "../../../assets/images/menu_img/Image (6).png";
import menu3 from "../../../assets/images/menu_img/Image (7).png";
import menu4 from "../../../assets/images/menu_img/Image (8).png";
export default function CoffeeMenu() {
  return (
    <div className="my-10">
      <div className="max-w-screen-xl mx-auto">
        {/* title part  */}
        <div className={bakinlda.className}>
          <div className="flex gap-3 justify-center items-center py-4 w-full">
            <div className="bg-gradient-to-r h-[3px] w-16 to-[#86371C] from-slate-50 rounded-lg"></div>
            <h1 className="text-[#86371C] text-lg font-semibold ">
              Coffee Menu
            </h1>

            <div className="bg-gradient-to-r h-[3px] w-16 from-[#86371C] to-slate-50 rounded-lg"></div>
          </div>
          <h1 className="text-4xl text-center">Unlocklive Coffee Menu</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
          {/* card ONE   */}

          <div className={bakinlda.className}>
            <div className="flex flex-col md:flex-row gap-4 items-center border p-3 rounded-xl justify-between">
              <div className="flex gap-4 items-center">
                <div className="border border-dashed p-1 border-[#86371C] rounded-full w-16">
                  <Image src={menu1} alt="" />
                </div>
                <div className="">
                  <h1 className="text-xl">Double Espresso x2</h1>
                  <div className={sanPro.className}>
                    <p className="text-gray-600">
                      There are many variations of passages Lorem Ipsum form
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-24 border-b-2 bg-gray-100   border-dashed  "></div>
              {/* doller part  */}
              <div className="rounded-full   border-2 border-dashed border-[#86371C] ">
                <h1 className="text-xl w-12 h-12 hover:bg-[#86371C] hover:text-white duration-200 bg-gray-100 rounded-full  flex justify-center  items-center cursor-pointer">
                  $10
                </h1>
              </div>
            </div>
          </div>

          {/* Card TWO  */}

          <div className={bakinlda.className}>
            <div className="flex flex-col md:flex-row gap-4 items-center border p-3 rounded-xl justify-between">
              <div className="flex gap-4 items-center">
                <div className="border border-dashed p-1 border-[#86371C] rounded-full w-16">
                  <Image src={menu2} alt="" />
                </div>
                <div className="">
                  <h1 className="text-xl">Hazelnut Heaven Latte</h1>
                  <div className={sanPro.className}>
                    <p className="text-gray-600">
                      There are many variations of passages Lorem Ipsum form
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-24 border-b-2 bg-gray-100   border-dashed "></div>
              {/* doller part  */}
              <div className="rounded-full   border-2 border-dashed border-[#86371C] ">
                <h1 className="text-xl w-12 h-12 hover:bg-[#86371C] hover:text-white duration-200 bg-gray-100 rounded-full  flex justify-center  items-center cursor-pointer">
                  $10
                </h1>
              </div>
            </div>
          </div>

          {/* Card Three  */}

          <div className={bakinlda.className}>
            <div className="flex flex-col md:flex-row gap-4 items-center border p-3 rounded-xl justify-between">
              <div className="flex gap-4 items-center">
                <div className="border border-dashed p-1 border-[#86371C] rounded-full w-16">
                  <Image src={menu3} alt="" />
                </div>
                <div className="">
                  <h1 className="text-xl">Salted Caramel Cold Brew</h1>
                  <div className={sanPro.className}>
                    <p className="text-gray-600">
                      There are many variations of passages Lorem Ipsum form
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-24 border-b-2 bg-gray-100   border-dashed  "></div>
              {/* doller part  */}
              <div className="rounded-full   border-2 border-dashed border-[#86371C] ">
                <h1 className="text-xl w-12 h-12 hover:bg-[#86371C] hover:text-white duration-200 bg-gray-100 rounded-full  flex justify-center  items-center cursor-pointer">
                  $10
                </h1>
              </div>
            </div>
          </div>

          {/* Card Four  */}

          <div className={bakinlda.className}>
            <div className="flex flex-col md:flex-row gap-4 items-center border p-3 rounded-xl justify-between">
              <div className="flex gap-4 items-center">
                <div className="border border-dashed p-1 border-[#86371C] rounded-full w-16">
                  <Image src={menu4} alt="" />
                </div>
                <div className="">
                  <h1 className="text-lg md:text-xl">
                    Coconut Cream Delight (Summer)
                  </h1>
                  <div className={sanPro.className}>
                    <p className="text-gray-600">
                      There are many variations of passages Lorem Ipsum form
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-24 border-b-2 bg-gray-100   border-dashed  "></div>
              {/* doller part  */}
              <div className="rounded-full   border-2 border-dashed border-[#86371C] ">
                <h1 className="text-xl w-12 h-12 hover:bg-[#86371C] hover:text-white duration-200 bg-gray-100 rounded-full  flex justify-center  items-center cursor-pointer">
                  $10
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* button part  */}

        <div className="flex justify-center">
          <div className={sanPro.className}>
            <button className="text-[#86371C] font-semibold  border border-[#86371C] rounded-lg px-8 py-2 hover:bg-[#86371C] hover:text-white hover:font-medium duration-200  ">
              View All Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
