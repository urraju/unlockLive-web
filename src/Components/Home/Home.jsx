

import React from 'react'
import MainNav from '../MainNav/MainNav'
import Banner from '../Banner/Banner'
import Video from '../VideoPart/Video'
import WhyChose from '../WhyChose/WhyChose'
import CoffeeMenu from '../CoffeeMenu/CoffeeMenu'
import RecipeMenu from '../RecipeMenu/RecipeMenu'
import ChefsMenu from '../ChefsMenu/ChefsMenu'

export default function Home() {
  return (
    <div className='md:px-2 lg:px-0 px-1 '>
      <MainNav/>
      <Banner/>
      <Video/>
      <WhyChose/>
      <CoffeeMenu/>
      <RecipeMenu/>
      <ChefsMenu/>
    </div>
  )
}
