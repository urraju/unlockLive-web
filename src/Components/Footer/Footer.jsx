import React from "react";
import Image from "next/image";
import logo from "../../../assets/images/all_image/white_logo.png";
import localFont from "next/font/local";

const sanPro = localFont({
  src: "../../font/Value Sans Pro/ValueSansPro-Regular.ttf",
});
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 py-5">
        <div>
          <Image src={logo} alt="" />
        </div>

        <div className={sanPro.className}>
          <div className="flex gap-6 items-center text-white">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <FaLinkedin className="w-8 h-8 text-white border rounded-full p-1" />
          <FaFacebook className="w-8 h-8 text-white border rounded-full p-1" />
          <FaTwitter className="w-8 h-8 text-white border rounded-full p-1" />
        </div>
      </div>
    </div>
  );
}
