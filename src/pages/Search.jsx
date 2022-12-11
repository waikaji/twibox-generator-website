import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar"
import ListTwibbons from "../components/ListTwibbons/ListTwibbons"
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banner/Banner"
import {useQuery} from "../helper/helper"
import {useDispatch, useSelector} from "react-redux"
import {searchCampaigns} from "../actions/campaign"

const Search = () => {
  const dispatch = useDispatch()
  const query = useQuery()
  useEffect(() => {
    dispatch(searchCampaigns(query.get("keyword")))
  }, [query, dispatch])
  const {campaigns} = useSelector(state => state.campaign)

  return (
    <>
      <Navbar />
      <Banner />
      <ListTwibbons title={`Searching for '${query.get("keyword")}'`} data={campaigns} />
      <Footer />
    </>
  );
}

export default Search;