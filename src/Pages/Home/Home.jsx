import React from 'react'
import Header from '../../components/HeaderMain/Header'
import { Footer } from '../../components/Footer/Footer'
import { About } from '../About/About'
import { Work } from '../Work/Work'

export const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Work />
      <Footer />
    </div>
  )
}
