import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom"
import "./ListTwibbons.css";


function ListTwibbons() {

  return (
    <div className="twibbons">
      <div className="t-title">
        <h3>List Twibbons</h3>
        <select name="list" id="list">
          <option value="trending">Trending</option>
          <option value="popular">Popular</option>
        </select>
      </div>
      
      <div className="t-list">
        <Link to="/campaign"><Card /></Link>
        <Link to="/campaign"><Card /></Link>
        <Link to="/campaign"><Card /></Link>
        <Link to="/campaign"><Card /></Link>
        <Link to="/campaign"><Card /></Link>
        <Link to="/campaign"><Card /></Link>
        <Link to="/campaign"><Card /></Link>
      </div>
      
      <div className="l-lihat">
        <Link to="/search"><span className="button">Lihat Selengkapnya</span></Link>
      </div>
    </div>
  );
}

export default ListTwibbons;