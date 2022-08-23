import React from "react"
import Navbar from "../components/Navbar/Navbar"
import Banner from "../components/Banner/Banner"
import ListTwibbons from "../components/ListTwibbons/ListTwibbons"
import Footer from "../components/Footer/Footer"

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ListTwibbons />
      <Footer />
    </>
  )
}

export default Home