import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import localFont from "next/font/local";
import NavMenu from "../NavMenu/NavMenu";
const sanPro = localFont({
  src: "../../font/Value Sans Pro/ValueSansPro-Medium.ttf",
});
export default function MainNav() {
  return (
    <div className={sanPro.className}>

      <div className="px-2 md:px-5">

        <div className="flex items-center z-30  justify-between lg:py-3   max-w-screen-xl mx-auto">

          <div className="  flex justify-between font-inter z-30 items-center  mx-auto flex-row-reverse lg:flex-row">
            <div className="block lg:hidden ">
              <div className="drawer drawer-end">
                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  <label
                    htmlFor="my-drawer-4"
                    className="drawer-button text-2xl"
                  >
                    <IoMdMenu />
                  </label>
                </div>


                <div className="drawer-side mt-16">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>

                  <ul className="menu p-4 z-30  flex-col gap-2 min-h-full  backdrop-blur bg-black/30  text-white text-sm">
                    menu
                  </ul>
                </div>
              </div>
            </div>

            menu

          </div>

          <div className="hidden lg:flex ">
            <ul className="">
              
logo
              
            </ul>
          </div>

          <div className="hidden lg:flex ">
            <ul className="w-full flex uppercase gap-4 font-semibold font-inter items-center justify-end text-[15px]">
              
logo
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
