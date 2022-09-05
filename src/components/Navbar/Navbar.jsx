import React, {useState} from "react";
import { Link } from "react-router-dom";
import Popup from "../Popup/Popup";
import Create from "../Create/Create";
import Login from "../Login/Login";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navbar.css';

function Navbar() {
    const [buttonPopup, setButtonPopup] = useState(false)
    const [buttonPopup1, setButtonPopup1] = useState(false)

    const user = JSON.parse(localStorage.getItem("profile"))

    return (
    <div>
        <div className="n-wrapper">
            <div className="n-left">
                <Link to="/"><div className="n-name">Twibbon</div></Link>
            </div>

            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:"none"}}>
                        {user?<li className="button" onClick={() => setButtonPopup(true)}>Create</li>:""}
                        {user?<Link to={`/profile/${user.result.id}`}><li className="account-button"><AccountCircleIcon/></li></Link>:<li className="button" onClick={() => setButtonPopup1(true)}>Masuk</li>}
                    </ul>
                </div>
            </div>
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}> 
            <Create/>
        </Popup>
        <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}> 
            <Login/>
        </Popup>
    </div>
    )
}

export default Navbar;