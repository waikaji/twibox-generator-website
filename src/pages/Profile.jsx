import React from "react"
import Navbar from "../components/Navbar/Navbar"
import UserProfile from "../components/UserProfile/UserProfile"
import UserCampaign from "../components/UserCampaign/UserCampaign"
import Footer from "../components/Footer/Footer"

const Profile = () => {
  return (
    <>
      <Navbar />
      <UserProfile />
      <UserCampaign />
      <Footer />
    </>
  );
}

export default Profile