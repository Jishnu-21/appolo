import React from 'react'
import Banner from '../components/Homepage/Banner'
import PerfectlyAlignedCategories from '../components/Homepage/Categories'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';


const Homepage = () => {
  return (
    <>
    <Router>
    <Header/>
    <Banner/>
    <PerfectlyAlignedCategories/>
    </Router>
    </>
  )
}

export default Homepage