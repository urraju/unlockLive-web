import React from "react";
import Banner from "../Banner/Banner";
import Video from "../VideoPart/Video";
import WhyChose from "../WhyChose/WhyChose";
import CoffeeMenu from "../CoffeeMenu/CoffeeMenu";
import RecipeMenu from "../RecipeMenu/RecipeMenu";
import ChefsMenu from "../ChefsMenu/ChefsMenu";
import Footer from "../Footer/Footer";
import Navbar from "../MainNav/Navbar";

export default function Home() {
  return (
    <div className="md:px-2 lg:px-0 px-1 ">
      <Navbar/>
      <Banner />
      <Video />
      <WhyChose />
      <CoffeeMenu />
      <RecipeMenu />
      <ChefsMenu />
      <Footer />
    </div>
  );
}
