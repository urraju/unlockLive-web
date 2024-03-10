"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/images/all_image/black_logo.png";
import localFont from "next/font/local";
import { CiSearch, CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import NavMenu from "../NavMenu/NavMenu";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
const sanPro = localFont({
  src: "../../font/Value Sans Pro/ValueSansPro-Medium.ttf",
});

export default function Navbar() {
  return (
    <div>
      <div className={sanPro.className}>
        <div>
          <div className="flex items-center z-50  justify-between  py-4 max-w-screen-xl mx-auto">
            <div className=" ">
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
                      className="drawer-button text-3xl"
                    >
                      <IoMdMenu />
                    </label>
                  </div>

                  {/* Mobile nav  */}
                  <div className="drawer-side mt-16">
                    <label
                      htmlFor="my-drawer-4"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    {/* Mobile nav  */}
                    <ul className="menu p-4 z-50 w-[100%]   flex-col gap-6 min-h-full  backdrop-blur bg-black/70  text-white text-sm">
                      <div className={sanPro.className}>
                        <ul className="w-full flex capitalize gap-6 z-30  items-center justify-end text-[16px]">
                          <Link href="/home">Home</Link>
                          <Link href="/">
                            <NavMenu />
                          </Link>
                          <Link href="/" className="flex items-center gap-2">
                            Menu <IoIosArrowDown/>
                          </Link>

                          <Link href="/">Contact Us</Link>
                        </ul>
                        {/* button part  right site */}
                        <div className="flex gap-20 items-center px-6 py-5">
                          <div className=" flex gap-6 items-center ">
                            <CiSearch className="text-white text-4xl font-bold" />

                            <div className="relative">
                              <CiHeart className="text-white text-4xl font-bold" />
                              <p className="w-5 h-5 flex items-center justify-center  rounded-full bg-black text-white absolute text-sm left-6 -top-1">
                                5
                              </p>
                            </div>
                            <div className="relative">
                              <FiShoppingCart className="text-white text-4xl font-bold" />
                              <p className="w-5 h-5 flex items-center justify-center  rounded-full bg-black text-white absolute text-sm left-6 -top-1">
                                4
                              </p>
                            </div>
                          </div>
                         
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex ">
                {/* desktop nav  */}
                <div className={sanPro.className}>
                  <ul className="w-full flex capitalize gap-6   items-center justify-end text-[16px]">
                    <Link href="/home">Home</Link>
                    <Link href="/">
                      <NavMenu />
                    </Link>
                    <Link href="/" className="flex items-center gap-2">
                      Menu <IoIosArrowDown />
                    </Link>

                    <Link href="/">Contact Us</Link>
                  </ul>
                </div>
              </div>
            </div>{" "}
            {/* center logo  */}
            <Link href="">
              <Image className="w-36 md:w-48" src={logo} alt="" />
            </Link>
            {/* button part  right site */}
            <div className="flex gap-20 items-center">
              <div className=" gap-6 items-center hidden lg:flex">
                <CiSearch className="text-black text-4xl font-bold" />

                <div className="relative">
                  <CiHeart className="text-black text-4xl font-bold" />
                  <p className="w-5 h-5 flex items-center justify-center  rounded-full bg-black text-white absolute text-sm left-6 -top-1">
                    5
                  </p>
                </div>
                <div className="relative">
                  <FiShoppingCart className="text-black text-4xl font-bold" />
                  <p className="w-5 h-5 flex items-center justify-center  rounded-full bg-black text-white absolute text-sm left-6 -top-1">
                    4
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <LuUser2 className="w-10 h-10 bg-black rounded-full p-2 text-white" />
                <button className="outline-none text-lg font-semibold">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
