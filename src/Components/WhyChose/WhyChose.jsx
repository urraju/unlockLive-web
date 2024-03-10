import React from "react";
import localFont from "next/font/local";
const bakinlda = localFont({
  src: "../../font/Bakilda/bakilda-histori.ttf",
});
const sanPro = localFont({
  src: "../../font/Value Sans Pro/ValueSansPro-Regular.ttf",
});

import Image from "next/image";
import whyUsImage from "../../../assets/images/all_image/Layer 1 5.png";

export default function WhyChose() {
  return (
    <div className="my-28">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-20">
        <div>
          <div className="flex gap-3 items-center py-4">
            <div className="bg-gradient-to-r h-[3px] w-16 to-[#86371C] from-slate-50 rounded-lg"></div>
            <h1 className="text-[#86371C] text-lg font-semibold ">
              Why Choose Us
            </h1>
          </div>

          <div className={bakinlda.className}>
            <h1 className="md:text-5xl text-xl leading-loose">
              Choosing Unlocklive, A Taste of Perfection
            </h1>
          </div>
          <div className={sanPro.className}>
            <p className="text-[#270A05] leading-relaxed py-4 font-light text-[16px]">
              Unlocklive takes pride in the art of roasting, transforming raw
              coffee beans into a <br /> symphony of aromatic notes and rich
              flavors.
            </p>
          </div>

          {/* card part  */}
          <div className={bakinlda.className}>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 py-4">
              {/* card 1  */}
              <div className="text-center border rounded-xl p-5">
                <h1 className="text-5xl">20+</h1>
                <h1 className="text-[#270a05b9] py-2 text-lg">
                  Years Experience
                </h1>
              </div>
              {/* card 2  */}
              <div className="border rounded-xl ">
                <div className="text-center border -rotate-3 rounded-xl p-5">
                  <h1 className="text-5xl">100+</h1>
                  <h1 className="text-[#270a05b9] py-2 text-lg">
                    Master Chefs
                  </h1>
                </div>
              </div>
              {/* card 3  */}
              <div className="text-center border rounded-xl p-5">
                <h1 className="text-5xl">20+</h1>
                <h1 className="text-[#270a05b9] py-2 text-lg">Achievements</h1>
              </div>
            </div>
          </div>

          <div className={sanPro.className}>
            <p className="text-[#270A05] leading-relaxed py-4 font-light text-[16px]">
              Your choice to savor our coffee is an invitation to experience the
              epitome of craftsmanship, <br /> flavor, and dedication.
            </p>

            <button className="text-[#86371C] font-semibold mt-5 border-2 border-[#86371C] rounded-lg px-5 hover:bg-[#86371C] hover:text-white hover:font-medium duration-200 py-3">
              Explore Our Menus
            </button>
          </div>
        </div>

        {/* image part  */}
        <div className="border-2 p-4 rounded-t-full border-t-transparent rounded-b-xl ">
          <Image className="" src={whyUsImage} alt="" />
        </div>
      </div>
    </div>
  );
}
