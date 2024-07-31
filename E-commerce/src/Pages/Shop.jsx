import React from 'react'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Offer from '../components/Offer'
import NewCollection from '../components/NewCollection'
import NewsLetter from '../components/NewsLetter'

function Shop() {
  return (
    <div>
      <Hero/>
      <NewsLetter/>
      <Popular/>
      <NewCollection/>
      <Offer/>
    </div>
  )
}

export default Shop
