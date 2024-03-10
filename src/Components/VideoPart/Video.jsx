"use client";
import React from "react";
import { IoMdPlay } from "react-icons/io";
import "./video.css";
import localFont from "next/font/local";
const abril = localFont({
  src: "../../font/Abril/Abril_Text_Regular.otf",
});
const sanPro = localFont({
  src: "../../font/Value Sans Pro/ValueSansPro-Regular.ttf",
});

export default function Video() {
  return (
    <div className="bg-[#FFFAF2] h-full md:h-[245px] my-5 ">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 items-center gap-5 md:gap-20">
        {/* card 1  */}
        <div className="bg-[#86371c] h-[300px] rounded-b-lg flex items-end  ">
          <div className="flex gap-6 items-center ml-10 mb-10 ">
            <IoMdPlay className="w-12 h-12 text-white border-2 rounded-full p-2 text-sm" />
            <div className={abril.className}>
              <p className="text-white text-lg font-light">Play Intro Video</p>
            </div>
          </div>
        </div>

        {/* card 2  */}
        <div className="md:border-r mb-8 md:text-left text-center">
          <div className={abril.className}>
            <h1 className="text-xl py-2">Our Opening Hours</h1>
            <div className={sanPro.className}>
              <p className="text-sm py-1"> Mon - Sat: 07:00 - 18:00</p>
              <p className="text-sm py-1">Only Sun: 09:00 - 14:00</p>
            </div>
          </div>
        </div>

        {/* card 3  */}

        <div className="border-r mb-8 text-center">
          <div className={abril.className}>
            <h1 className="text-xl py-2">Our Live Location</h1>
            <div className={sanPro.className}>
              <p className="text-sm py-1">
                848 A 28TH ST, <br /> Brooklyn New York, UK
              </p>
            </div>
          </div>
        </div>

        {/* card 4  */}

        <div className=" mb-8 md:text-right text-center">
          <div className={abril.className}>
            <h1 className="text-xl py-2">Book A Table Now</h1>
            <div className={sanPro.className}>
              <p className="text-sm py-1"> +1 318-254-6849</p>
              <p className="text-sm py-1">+1 452-754-6579</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
