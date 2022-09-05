import React, {useEffect} from "react"
import Navbar from "../components/Navbar/Navbar"
import Banner from "../components/Banner/Banner"
import ListTwibbons from "../components/ListTwibbons/ListTwibbons"
import Footer from "../components/Footer/Footer"
import {getCampaigns} from "../actions/campaign"
import { useDispatch, useSelector } from "react-redux"

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCampaigns())
  }, [dispatch])

  const {campaigns}  = useSelector((state)=>state.campaign)

  return (
    <>
      <Navbar />
      <Banner />
      <ListTwibbons data={campaigns} />
      <Footer />
    </>
  )
}

export default Home