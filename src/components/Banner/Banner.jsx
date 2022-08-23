import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import './Banner.css';

function Banner() {
  return (
    <div className="banner">
      <div className="banner-campaign">
        <div className="banner-info">
          <h1>Temukan twibbon kamu</h1>
          <div className="banner-search">
            <div className="banner-search-icon">
              <SearchIcon />
            </div>
            <input className="banner-search-input" type="search" placeholder="Cari twibbon..." id="search" name="search" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;