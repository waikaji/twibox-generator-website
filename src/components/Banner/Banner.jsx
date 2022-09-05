import React, {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom"
import './Banner.css';

function Banner() {
  const [formData, setFormData] = useState({search:""})
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?keyword=${formData.search}`)
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <div className="banner">
      <div className="banner-campaign">
        <div className="banner-info">
          <h1>Temukan twibbon kamu</h1>
          <div className="banner-search">
            <div className="banner-search-icon">
              <SearchIcon />
            </div>
            <form onSubmit={handleSubmit}>
              <input className="banner-search-input" onChange={handleChange} type="search" placeholder="Cari twibbon..." id="search" name="search" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;