import React, {useEffect} from "react";
import Navbar from "../components/Navbar/Navbar"
import TwibbonProfile from "../components/TwibbonProfile/TwibbonProfile"
import Twibbon from "../components/Twibbon/Twibbon"
import Footer from "../components/Footer/Footer"
import { useParams } from "react-router-dom";
import {getCampaign} from "../actions/campaign"
import {useDispatch, useSelector} from "react-redux"

const Campaign = () => {
  const dispatch = useDispatch()

	const {campaign} = useSelector((state)=>state.campaign)
	const {id} = useParams()

  useEffect(() => {
		dispatch(getCampaign(id))
	}, [dispatch, id])

  return (
    <>
      <Navbar />
      <TwibbonProfile data={campaign}/>
      <Twibbon data={campaign}/>
      <Footer />
    </>
  );
}

export default Campaign;