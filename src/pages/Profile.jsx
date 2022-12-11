import {useEffect} from "react"
import Navbar from "../components/Navbar/Navbar"
import UserProfile from "../components/UserProfile/UserProfile"
import UserCampaign from "../components/UserCampaign/UserCampaign"
import {useDispatch, useSelector} from "react-redux"
import { getMyCampaign } from "../actions/campaign"
// import Footer from "../components/Footer/Footer"

const Profile = () => {

  const dispatch = useDispatch()

  const user = JSON.parse(localStorage.getItem("profile"))

  useEffect(() => {
    dispatch(getMyCampaign(user.result.id))
  }, [user, dispatch])

  const {count, total, campaigns} = useSelector(state => state.campaign)
  
  return (
    <>
      <Navbar />
      <UserProfile count={count} total={total}/>
      <UserCampaign campaigns={campaigns} />
      {/* <Footer /> */}
    </>
  );
}

export default Profile