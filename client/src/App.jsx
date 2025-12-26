import { useState } from 'react'
import './App.css'
import Hero from './pages/Hero'
import BlackSearch from './components/BlackSearch'
import Navbar from './components/Navbar'
import FindProperties from './pages/FindProperties'
import WhyYouWork from './pages/WhyYouWork'
import SignIntoStreamline from './pages/SignIntoStreamline'
import FeauteredProperties from './pages/FeauteredProperties'
import Discover from './pages/Discover'
import WeUseRealEstate from './pages/WeUseRealEstate'
import WhatOurCustomers from './pages/WhatOurCustomers'
import RecentArticles from './pages/RecentArticles'
import DownloadTheApp from './pages/DownloadTheApp'
import StayUpToDate from './pages/StayUpToDate'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <BlackSearch/>
      <FindProperties/>
      <WhyYouWork/>
      <SignIntoStreamline/>
      <FeauteredProperties/>
      <Discover/>
      <WeUseRealEstate/>
      <WhatOurCustomers/>
      <RecentArticles/>
      <DownloadTheApp/>
      <StayUpToDate/>
      <Footer/>
    </div>
  )
}

export default App
