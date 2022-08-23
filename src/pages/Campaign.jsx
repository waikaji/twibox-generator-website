import React from "react";
import Navbar from "../components/Navbar/Navbar"
import TwibbonProfile from "../components/TwibbonProfile/TwibbonProfile"
import Twibbon from "../components/Twibbon/Twibbon"
import Footer from "../components/Footer/Footer"

const Campaign = () => {
  return (
    <>
      <Navbar />
      <TwibbonProfile />
      <Twibbon />
      <Footer />
    </>
  );
}

export default Campaign;