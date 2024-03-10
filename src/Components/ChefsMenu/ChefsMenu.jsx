"use client";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// local css
import "./cheps.css";
// font
import localFont from "next/font/local";
const bakinlda = localFont({
  src: "../../font/Bakilda/bakilda-histori.ttf",
});
const sanPro = localFont({
  src: "../../font/Value Sans Pro/ValueSansPro-Regular.ttf",
});
// import chefs image
import Image from "next/image";
import chefs1 from "../../../assets/images/all_image/chefs1.png";
import chefs2 from "../../../assets/images/all_image/chefs2.png";
import chefs3 from "../../../assets/images/all_image/chefs3.png";
import chefs4 from "../../../assets/images/all_image/chefs4.png";
import chefs5 from "../../../assets/images/all_image/chefs5.png";

export default function ChefsMenu() {
  return (
    <div className="my-10">
      <div className="max-w-screen-xl mx-auto">
        {/* title part  */}
        <div>
          <div className="flex gap-3 flex-col items-center py-4 justify-center">
            <div className={bakinlda.className}>
              <h1 className="text-[#86371C] text-lg  font-semibold ">
                Showcase
              </h1>
            </div>
            <div className="bg-gradient-to-r via-[#86371C] to-slate-50 from-slate-50 h-[3px] w-20     rounded-lg"></div>
            <div className={bakinlda.className}>
              <h1 className=" text-4xl text-center">Our Chefs New Creations</h1>
            </div>
            <div className={sanPro.className}>
              <p className="text-[#53565C] text-sm py-3 leading-relaxed">
                Behold the extraordinary creations born from the synergy of our
                users' ingenuity <br /> and the transformative power of AI, a
                testament to boundless innovation.
              </p>
            </div>
          </div>
        </div>
        {/* tab part  */}
        <div className="flex justify-center items-center">
          <Tabs className={sanPro.className}>
            <TabList >
              <Tab>All</Tab>
              <Tab>Burger</Tab>
              <Tab>Drinks</Tab>
              <Tab>Pizza</Tab>
              <Tab>Dinner</Tab>
              <Tab>Lunch</Tab>
              <Tab>Cookies</Tab>
              <Tab>Bekary</Tab>
            </TabList>
            {/* tab content  */}

            <TabPanel className='my-10'>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <Image src={chefs1} alt="" />
                <Image src={chefs2} alt="" />
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center mt-6">
              <Image src={chefs3} alt="" />
              <Image src={chefs4} alt="" />
              <Image src={chefs5} alt="" />
              </div>
            </TabPanel>

            <TabPanel className='my-10'>
              
              <div className="flex flex-col md:flex-row gap-6 items-center mt-6">
              <Image src={chefs3} alt="" />
              <Image src={chefs4} alt="" />
              <Image src={chefs5} alt="" />
              </div>
            </TabPanel>

            <TabPanel className='my-10'>
              
            <div className="flex flex-col md:flex-row gap-6 items-center">
                <Image src={chefs1} alt="" />
                <Image src={chefs2} alt="" />
              </div>
            </TabPanel>

            <TabPanel className='my-10'>
             
            <div className="flex flex-col md:flex-row gap-6 items-center mt-6">
              <Image src={chefs3} alt="" />
              <Image src={chefs4} alt="" />
              <Image src={chefs5} alt="" />
              </div>
            </TabPanel>

            <TabPanel className='my-10'>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <Image src={chefs1} alt="" />
                <Image src={chefs2} alt="" />
              </div>
              
            </TabPanel>

            
            <TabPanel className='my-10'>
              
              <div className="flex flex-col md:flex-row gap-6 items-center mt-6">
              <Image src={chefs3} alt="" />
              <Image src={chefs4} alt="" />
              <Image src={chefs5} alt="" />
              </div>
            </TabPanel>

            
            <TabPanel className='my-10'>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <Image src={chefs1} alt="" />
                <Image src={chefs2} alt="" />
              </div>
             
            </TabPanel>

            
            <TabPanel className='my-10'>
               
              <div className="flex flex-col md:flex-row gap-6 items-center mt-6">
              <Image src={chefs3} alt="" />
              <Image src={chefs4} alt="" />
              <Image src={chefs5} alt="" />
              </div>
            </TabPanel>

            
          </Tabs>
        </div>
      </div>
    </div>
  );
}
