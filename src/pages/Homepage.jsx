import React from 'react'
import Banner from '../components/Homepage/Banner'
import PerfectlyAlignedCategories from '../components/Homepage/Categories'
import { BrowserRouter as Router } from 'react-router-dom';


const Homepage = () => {
  return (
    <>
    <Banner/>
    <Router>
    <PerfectlyAlignedCategories/>
    </Router>
    </>
  )
}

export default Homepage